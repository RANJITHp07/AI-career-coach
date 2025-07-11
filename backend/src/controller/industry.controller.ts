import { NextFunction, Request, Response } from "express";
import { industryInsightPrompt, successResponse } from "@core/utils"
import { generate } from "src/config/geminiAI";
import { IndustryService } from "src/service/industry.service";

export class IndustryController {
    private readonly industryService: IndustryService;

    constructor(industryService: IndustryService) {
        this.industryService = industryService;
    }

    async industryInsight(req: Request, res: Response, next: NextFunction) {
        try {
            const clerkUserId = req.query.clerkUserId as string
            console.log(clerkUserId)
            const industryInsight = await this.industryService.fetchIndustryInsight(clerkUserId)
            res.status(200).json(successResponse("Industry insight data fetched successfully", industryInsight))
        } catch (error) {
            console.log(error)
            next()
        }
    }


}