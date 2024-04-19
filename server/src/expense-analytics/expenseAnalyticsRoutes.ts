import { Hono } from "hono";
import {
  expenseInsightsController,
  expenseSummaryController,
  expenseTrendsController,
} from "./expenseAnalyticsController";

const expenseAnalytics = new Hono();

expenseAnalytics.get("/expense-summary", (c) => expenseSummaryController(c));
expenseAnalytics.get("/expense-trends", (c) => expenseTrendsController(c));
expenseAnalytics.get("/expense-insights", (c) => expenseInsightsController(c));

export default expenseAnalytics;
