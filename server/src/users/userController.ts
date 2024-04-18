import { Context } from "hono";
import db from "../../config/drizzle";
import { users } from "../db/schema";
import { eq, exists } from "drizzle-orm";

export const registerController = async (c: Context) => {
  const { username, email, password } = await c.req.json();
  if (!username || !email || !password)
    return c.json({ error: "Please fill all fields" });
  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    if (user[0]) return c.json({ message: "User already exists" });
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 4,
    });
    await db
      .insert(users)
      .values({ username, email, password: hashedPassword });
    return c.json({ message: "User registered successfully" });
  } catch (e) {
    console.log(e);
    return c.json({ message: "Something went wrong!" });
  }
};

export const loginController = async (c: Context) => {
  const { username, password } = await c.req.json();
  if (!username || !password)
    return c.json({ error: "Please fill all fields" });
  try{
    const user = await db.select().from(users).where(eq(users.username, username));
    if (!user[0]) return c.json({ message: "User not found!" });
    const passMatch = await Bun.password.verify(password, user[0].password);
    if (!passMatch) return c.json({ message: "Invalid password!" });
    return c.json({ message: "Login successful!" });
  } catch(e){
    console.log(e);
    return c.json({ message: "Something went wrong!" });
  }
};
