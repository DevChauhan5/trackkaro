import { Hono } from "hono";
import {
  createExpenseController,
  deleteExpenseController,
  getExpenseController,
  updateExpenseController,
} from "./expenseController";

const expense = new Hono();

expense.post("/create-expense", (c) => createExpenseController(c));
expense.patch("/update-expense/:id", (c) => updateExpenseController(c));
expense.delete("/delete-expense/:id", (c) => deleteExpenseController(c));
expense.get("/list-expenses", (c) => getExpenseController(c));

export default expense;
