import { NextFunction, Request, Response } from "express";
import { successResponse } from "@core/utils"
import { QuizService } from "src/service/quiz.service";
import prisma from "prisma/seed";

export class QuizController {
    private readonly quizService: QuizService;

    constructor(quizService: QuizService) {
        this.quizService = quizService;
    }

    async createQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.query.userId as string
            const quiz = await this.quizService.create(userId)
            res.status(200).json(successResponse("Quiz fetched successfully", quiz))
        } catch (error) {
            console.log(error)
            next()
        }
    }

    async submitQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, questions, submittedAnswers } = req.body
            const quiz = await this.quizService.submitQuiz(userId, submittedAnswers, questions)
            res.status(200).json(successResponse("Quiz submitted successfully", quiz))
        } catch (error) {
            console.log(error)
            next()
        }
    }

    async getQuizStats(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.query.userId as string
            const quiz = await this.quizService.getQuizStats(userId)
            res.status(200).json(successResponse("Quiz stats fetched successfully", quiz))
        } catch (error) {
            console.log(error)
            next()
        }
    }

    async getQuizHistory(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, page } = req.query
            const quiz = await this.quizService.geQuizHistory(userId as string, parseInt(page as string))
            res.status(200).json(successResponse("Quiz history fetched successfully", quiz))
        } catch (error) {
            console.log(error)
            next()
        }
    }

    async getAnalysis(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.query
            const quiz = await this.quizService.getAnalysis(userId as string)
            res.status(200).json(successResponse("Quiz anaylsis fetched successfully", quiz))
        } catch (error) {
            console.log(error)
            next()
        }
    }

}