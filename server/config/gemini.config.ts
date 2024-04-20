import { GoogleGenerativeAI } from "@google/generative-ai";

const genAIKey = process.env.GEMINI_API_KEY as string;

const genAI = new GoogleGenerativeAI(genAIKey);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default model;
