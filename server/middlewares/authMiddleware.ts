import { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import verifyToken from "../utils/verifyToken";

const authMiddleware = async (c: Context, next: Next) => {
  try {
    const token = getCookie(c, "token");
    if (!token) return c.json({ message: "Unauthorized" }, 401);
    const decodedToken = await verifyToken(token);
    if (!decodedToken) return c.json({ message: "Unauthorized" }, 401);
    await next();
  } catch (error) {
    return c.json({ message: "Something went wrong!" }, 500);
  }
};

export default authMiddleware;
