import * as argon2 from "argon2";
import prisma from "../../prisma/seed";
import { CreateUserSchema, TCreateUserInput } from "@core/validators"
import { generate } from "src/config/geminiAI";
import { industryInsightPrompt } from "@core/utils";


export class IndustryService {

    async industryInsight(industry: string) {
        const industryInsight = await generate(industryInsightPrompt(industry))

        return industryInsight
    }

}
