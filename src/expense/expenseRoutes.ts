import { Hono } from "hono";
import {
  createExpenseController,
  deleteExpenseController,
  getExpenseController,
  getTotalExpenseController,
  updateExpenseController,
} from "./expenseController";

const expense = new Hono();

expense.post("/create-expense", (c) => createExpenseController(c));
expense.patch("/update-expense/:id", (c) => updateExpenseController(c));
expense.delete("/delete-expense/:id", (c) => deleteExpenseController(c));
expense.get("/list-expenses", (c) => getExpenseController(c));
expense.get('/total-expenses', (c) => getTotalExpenseController(c));

export default expense;
