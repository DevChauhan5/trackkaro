import { password } from "bun";
import { text, pgTable, timestamp, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	username: text("username").notNull(),
	email: text("email").notNull(),
	password: text("password").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
