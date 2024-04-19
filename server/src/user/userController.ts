import { Context } from "hono";
import db from "../../config/drizzle";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import getToken from "../../utils/getToken";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import verifyToken from "../../utils/verifyToken";

// Register Controller
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

// Login Controller
export const loginController = async (c: Context) => {
  const { username, password } = await c.req.json();
  if (!username || !password)
    return c.json({ error: "Please fill all fields" }, 400);
  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    if (!user[0]) return c.json({ message: "User not found!" }, 404);

    const passMatch = await Bun.password.verify(password, user[0].password);
    if (!passMatch) return c.json({ message: "Invalid password!" }, 400);

    const token = await getToken(user[0].username);
    setCookie(c, "token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    return c.json(
      {
        message: "Login successful!",
        id: user[0].id,
        username: user[0].username,
        email: user[0].email,
        createdAt: user[0].createdAt,
      },
      201
    );
  } catch (e) {
    console.log(e);
    return c.json({ message: "Something went wrong!" }, 500);
  }
};

// User Profile Controller
export const userProfileController = async (c: Context) => {
  try {
    const token = getCookie(c, "token");
    const decodedToken = await verifyToken(token as string);
    const username = decodedToken.token;
    const userExists = await db
      .select({
        id: users.id,
        username: users.username,
        email: users.email,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.username, username));
    if (!userExists[0])
      return c.json({ message: "Something went wrong!" }, 400);
    return c.json(userExists[0], 200);
  } catch (error) {
    return c.json({ message: "Something went wrong!" }, 500);
  }
};

// Logout Controller
export const logoutController = async (c: Context) => {
  try {
    deleteCookie(c, "token");
    return c.json({ message: "Logout successful!" }, 200);
  } catch (error) {
    return c.json({ message: "Something went wrong!" }, 500);
  }
};

// Delete User Controller
export const deleteUserController = async (c: Context) => {
  try {
    const username = c.get("username");
    const userExists = await db
      .select({
        id: users.id,
      })
      .from(users)
      .where(eq(users.username, username));
    if (!userExists[0])
      return c.json({ message: "Something went wrong!" }, 400);
    await db.delete(users).where(eq(users.username, username));
    deleteCookie(c, "token");
    return c.json({ message: "User deleted successfully!" }, 200);
  } catch (error) {
    return c.json({ message: "Something went wrong!" }, 500);
  }
};
