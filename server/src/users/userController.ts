import { Context } from "hono";
import db from "../../config/drizzle";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import getToken from '../../utils/getToken'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'


export const registerController = async (c: Context) => {
  const { username, email, password } = await c.req.json();
  if (!username || !email || !password)
    return c.json({ error: "Please fill all fields" }, 400);
  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    if (user[0]) return c.json({ message: "User already exists" }, 400);
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 4,
    });
    await db
      .insert(users)
      .values({ username, email, password: hashedPassword });
    return c.json({ message: "User registered successfully" }, 201);
  } catch (e) {
    console.log(e);
    return c.json({ message: "Something went wrong!" }, 500);
  }
};

export const loginController = async (c: Context) => {
  const { username, password } = await c.req.json();
  if (!username || !password)
    return c.json({ error: "Please fill all fields" }, 400);
  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    if (!user[0]) return c.json({ message: "User not found!" });

    const passMatch = await Bun.password.verify(password, user[0].password);
    if (!passMatch) return c.json({ message: "Invalid password!" });

    const token = await getToken(user[0].username);
    setCookie(c, "token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    })
    return c.json({ message: "Login successful!" }, 201);
  } catch (e) {
    console.log(e);
    return c.json({ message: "Something went wrong!" }, 500);
  }
};
