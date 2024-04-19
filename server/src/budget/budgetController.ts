import { Context } from "hono";
import getUserByToken from "../../utils/getUserByToken";
import db from "../../config/drizzle";
import { budgets } from "../db/schema";
import { eq } from "drizzle-orm";

export const createBudgetController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const { description, amount, period } = await c.req.json();
    if (!description || !amount || !period)
      return c.json({ message: "Please fill in all fields" }, 400);
    const budget = await db
      .insert(budgets)
      .values({ userId: user.id, description, amount, period })
      .returning();
    return c.json(
      {
        message: "Budget Created Successfully!",
        id: budget[0].id,
        userId: budget[0].userId,
        description: budget[0].description,
        amount: budget[0].amount,
        period: budget[0].period,
        createdAt: budget[0].createdAt,
        updatedAt: budget[0].updatedAt,
      },
      201
    );
  } catch (error) {
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};

export const updateBudgetController = async (c: Context) => {
  try {
    const { id } = c.req.param();
    if (!id) return c.json({ message: "Please provide a budget id" }, 400);
    const budgetExists = await db
      .select()
      .from(budgets)
      .where(eq(budgets.id, id));
    if (!budgetExists[0]) return c.json({ message: "Budget not found" }, 404);
    const { description, amount, period } = await c.req.json();
    if (!description || !amount || !period)
      return c.json({ message: "Please fill in all fields" }, 400);
    const budget = await db
      .update(budgets)
      .set({ description, amount, period })
      .where(eq(budgets.id, id))
      .returning();
    return c.json(
      {
        message: "Budget Updated Successfully!",
        id: budget[0].id,
        userId: budget[0].userId,
        description: budget[0].description,
        amount: budget[0].amount,
        period: budget[0].period,
        createdAt: budget[0].createdAt,
        updatedAt: budget[0].updatedAt,
      },
      200
    );
  } catch (error) {
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};

export const deleteBudgetController = async (c: Context) => {
  try {
    const { id } = c.req.param();
    if (!id) return c.json({ message: "Please provide a budget id" }, 400);
    await db.delete(budgets).where(eq(budgets.id, id));
    return c.json({ message: "Budget Deleted Successfully!" }, 200);
  } catch (error) {
    return c.json({ error: "Internal Server Error!" }, 500);
  }
};
