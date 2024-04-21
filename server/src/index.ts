import { Hono } from "hono";
import { cors } from 'hono/cors'
import user from "./user/userRoutes";
import expense from "./expense/expenseRoutes";
import authMiddleware from "../middlewares/authMiddleware";
import budget from "./budget/budgetRoutes";
import expenseAnalytics from "./expense-analytics/expenseAnalyticsRoutes";

const app = new Hono().basePath("/api/v1");

app.use('/*', cors())
app.use("/expense/*", authMiddleware);
app.use("/budget/*", authMiddleware);
app.use("/expense-analytics/*", authMiddleware);

app.get("/", (c) => {
  return c.html("<h1>Trackkaro APIs</h1>");
});
app.route("/user", user);
app.route("/expense", expense);
app.route("/budget", budget);
app.route("/expense-analytics", expenseAnalytics);

if (process.env.NODE_ENV === "development") {
  console.log(`Server is running at http://localhost:3000`);
}

export default app;
