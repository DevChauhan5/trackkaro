import { verify } from "hono/jwt";

const secretKey = process.env.JWT_SECRET as string;

export default async function verifyToken(token: string) {
  const decodedPayload = await verify(token, secretKey);
  return decodedPayload;
}
