import { Context } from "hono";
import getUserByToken from "../../utils/getUserByToken";
import { expenses } from "../db/schema";
import { between, sql } from "drizzle-orm";
import db from "../../config/drizzle";

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
        between(expenses.createdAt, new Date(startDate), new Date(endDate))
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
    console.log(error);
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};

// Expense Trends Controller
export const expenseTrendsController = async (c: Context) => {};

// Expense Insights Controller
export const expenseInsightsController = async (c: Context) => {};
