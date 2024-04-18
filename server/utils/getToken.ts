import { sign } from "hono/jwt";

const secretKey = process.env.JWT_SECRET as string;

export default async function getToken(user_id: string) {
  const payload = {
    token: user_id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  };
  const token = await sign(payload, secretKey);
  return token;
}
