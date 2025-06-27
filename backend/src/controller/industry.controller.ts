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
            const industry = req.query.industry as string
            const industryInsight = await this.industryService.industryInsight(industry)
            res.status(200).json(successResponse("User created successfully", industryInsight))
        } catch (error) {
            next()
        }
    }


}