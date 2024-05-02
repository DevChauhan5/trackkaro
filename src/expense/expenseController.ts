import { Context } from "hono";
import getUserByToken from "../../utils/getUserByToken";
import db from "../../config/drizzle";
import { expenses } from "../db/schema";
import { eq } from "drizzle-orm";

// Create Expense Controller
export const createExpenseController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const { description, amount, category } = await c.req.json();
    if (!description || !amount || !category)
      return c.json({ message: "Please fill in all fields" }, 400);
    const expense = await db
      .insert(expenses)
      .values({ userId: user.id, description, amount, category })
      .returning();

    return c.json(
      {
        message: "Expense Created Successfully!",
        id: expense[0].id,
        userId: expense[0].userId,
        description: expense[0].description,
        amount: expense[0].amount,
        category: expense[0].category,
        createdAt: expense[0].createdAt,
      },
      201
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
};

// Update Expense Controller
export const updateExpenseController = async (c: Context) => {
  try {
    const { id } = c.req.param();
    if (!id) return c.json({ message: "Please provide an id" }, 400);
    const expenseExists = await db
      .select()
      .from(expenses)
      .where(eq(expenses.id, id));
    if (!expenseExists[0])
      return c.json({ message: "Expense does not exist" }, 404);
    const { description, amount, category } = await c.req.json();
    if (!description || !amount || !category)
      return c.json({ message: "Please fill in all fields" }, 400);
    const updatedExpense = await db
      .update(expenses)
      .set({ description, amount, category })
      .where(eq(expenses.id, id))
      .returning();
    return c.json(
      {
        message: "Expense Updated Successfully!",
        updatedExpense: updatedExpense[0],
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
};

// Delete Expense Controller
export const deleteExpenseController = async (c: Context) => {
  try {
    const { id } = c.req.param();
    if (!id) return c.json({ message: "Please provide an id" }, 400);
    await db.delete(expenses).where(eq(expenses.id, id));
    return c.json({ message: "Expense Deleted Successfully!" }, 200);
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
};

// Get Expense Controller
export const getExpenseController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const allExpenses = await db
      .select()
      .from(expenses)
      .where(eq(expenses.userId, user.id));
    return c.json(allExpenses, 200);
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
};

// Get Total Expense Controller
export const getTotalExpenseController = async (c: Context) => {
  try {
    const user = await getUserByToken(c);
    const allExpenses = await db
      .select()
      .from(expenses)
      .where(eq(expenses.userId, user.id));
    const amount = allExpenses.map((item) => parseInt(item.amount));
    const totalExpense = amount.reduce((a, b) => a + b, 0);
    return c.json(totalExpense, 200);
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
};