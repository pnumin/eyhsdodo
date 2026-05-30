import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/generate-reflection", async (req, res) => {
  try {
    const { keywords } = req.body;
    
    if (!keywords) {
      return res.status(400).json({ error: "키워드를 입력해주세요." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Gemini API 키가 설정되지 않았습니다." });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `당신은 독도 교육을 받은 중고등학생입니다. 다음의 키워드를 바탕으로 독도에 대한 소감문을 300자 내외로 작성해주세요. 감정적이고 선동적인 내용보다는 객관적인 사실과 평화적인 관점을 담아주세요.\n\n키워드: ${keywords}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    res.json({ reflection: response.text });
  } catch (error) {
    console.error("Error generating reflection:", error);
    res.status(500).json({ error: "소감문 생성 중 오류가 발생했습니다." });
  }
});

export default app;
