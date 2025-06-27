import { NextFunction, Request, Response } from "express";
import { industryInsightPrompt, successResponse } from "@core/utils"
import { generate } from "src/config/geminiAI";
import { IndustryService } from "src/service/industry.service";
import { QuizService } from "src/service/quiz.service";

export class QuizController {
    private readonly quizService: QuizService;

    constructor(quizService: QuizService) {
        this.quizService = quizService;
    }

    async createQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("hiiii")
            const userId = req.query.userId as string
            const quiz = await this.quizService.create(userId)
            res.status(200).json(successResponse("Quiz fetched successfully", quiz))
        } catch (error) {
            console.log(error)
            next()
        }
    }


}