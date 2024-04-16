import { Context } from "hono";
import db from "../../config/drizzle";
import { users } from "../db/schema";
import { eq, exists } from "drizzle-orm";

export const registerController = async (c: Context) => {
  const { username, email, password } = await c.req.json();
  if (!username || !email || !password)
    return c.json({ error: "Please fill all fields" });
  try {
    // const query = db.select().from(users).where(eq(users.username, username))
    // const userExist = await db.select().from(users).where(exists(query));
    // console.log(userExist);

    // if (userExist) return c.json({ error: "User already exists" });
    await db.insert(users).values({ username, email, password });
    return c.json({ message: "User registered successfully" });
  } catch (e) {
    console.log(e);
    return c.json({ message: "Something went wrong!" });
  }
};

export const loginController = async (c: Context) => {
  console.log("login controller");

  return c.html("<h1>Helllo llo</h1>");
};
