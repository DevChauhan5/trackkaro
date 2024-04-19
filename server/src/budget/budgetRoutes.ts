import { Hono } from "hono";
import {
  createBudgetController,
  deleteBudgetController,
  updateBudgetController,
} from "./budgetController";

const budget = new Hono();

budget.post("/create-budget", (c) => createBudgetController(c));
budget.patch("/update-budget/:id", (c) => updateBudgetController(c));
budget.delete("/delete-budget/:id", (c) => deleteBudgetController(c));

export default budget;
