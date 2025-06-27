import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config()

const gemini_api_key = process.env.GEMNI_API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key!);


const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});


export const generate = async (prompt: string) => {
    try {
        const result = await geminiModel.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

        return JSON.parse(cleanedText);
    } catch (error) {
        console.log("response error", error);
    }
};
