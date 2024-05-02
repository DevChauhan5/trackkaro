import { Context } from "hono";
import { getCookie } from "hono/cookie";
import verifyToken from "./verifyToken";
import db from "../config/drizzle";
import { users } from "../src/db/schema";
import { eq } from "drizzle-orm";

const getUserByToken = async (c: Context) => {
  const username = c.get("username");
  const user = await db
    .select({
      id: users.id,
      username: users.username,
      email: users.email,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.username, username));
  return user[0];
};

export default getUserByToken;
