import { skillQuizPrompt } from "@core/utils";
import { generate } from "src/config/geminiAI";

export class QuizService {

    async create(userId: string) {
        let industry = "software engineering"
        let skills = ["react", "javascript", "docker"]
        const quiz = await generate(skillQuizPrompt(industry, skills))
        return quiz

    }


}