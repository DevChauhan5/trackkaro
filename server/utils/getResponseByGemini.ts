import model from "../config/gemini.config";

const getResponseByGemini = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return response;
  } catch (error) {
    return "Something went wrong!";
  }
};

export default getResponseByGemini;
