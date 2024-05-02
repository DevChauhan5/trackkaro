import { Context } from "hono";
import getUserByToken from "../../utils/getUserByToken";
import { expenses } from "../db/schema";
import { and, between, desc, eq, sql } from "drizzle-orm";
import db from "../../config/drizzle";
import getResponseByGemini from "../../utils/getResponseByGemini";

// Expense Summary Controller
export const expenseSummaryController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const { startDate, endDate } = c.req.query();
    if (!startDate || !endDate)
      return c.json({ error: "Please provide startDate and endDate" }, 400);
    const result = await db
      .select({
        total_expenses: sql`sum(${expenses.amount})`,
        avg_daily_expenses: sql`avg(${expenses.amount})`,
      })
      .from(expenses)
      .where(
        and(
          eq(expenses.userId, user.id),
          between(expenses.updatedAt, new Date(startDate), new Date(endDate))
        )
      );
    const total_expenses = parseFloat(result[0].total_expenses as string);
    const avg_daily_expenses = parseFloat(
      result[0].avg_daily_expenses as string
    );

    return c.json(
      {
        message: "Expense Summary",
        total_expenses: total_expenses,
        avg_daily_expenses: avg_daily_expenses,
      },
      200
    );
  } catch (error) {
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};

// Expense Trends Controller
export const expenseTrendsController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const { startDate, endDate } = c.req.query();
    if (!startDate || !endDate)
      return c.json({ error: "Please provide startDate and endDate" }, 400);
    const result = await db
      .select({
        month: sql`to_char(${expenses.updatedAt}, 'YYYY-MM')`,
        total_expenses: sql`sum(${expenses.amount})`,
      })
      .from(expenses)
      .where(
        and(
          eq(expenses.userId, user.id),
          between(expenses.updatedAt, new Date(startDate), new Date(endDate))
        )
      )
      .groupBy(sql`to_char(${expenses.updatedAt}, 'YYYY-MM')`);
    return c.json(
      {
        message: "Expense Trends",
        result,
      },
      200
    );
  } catch (error) {
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};

// Expense Insights Controller
export const expenseInsightsController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const tbData = await db
      .select({
        description: expenses.description,
        amount: expenses.amount,
        category: expenses.category,
      })
      .from(expenses)
      .where(eq(expenses.userId, user.id));
    const gemini = await getResponseByGemini(
      `Provide me expense insights and sugestions for the following data and make sure that the amount is in rupees: ${JSON.stringify(
        tbData
      )}`
    );
    return c.json(
      {
        message: "Expense Insights",
        insights: gemini,
      },
      200
    );
  } catch (error) {
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};
