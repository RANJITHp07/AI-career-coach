import * as argon2 from "argon2";
import prisma from "../../prisma/seed";
import { CreateUserSchema, TCreateUserInput } from "@core/validators"
import { generate } from "src/config/geminiAI";
import { generateResumeImprovementPrompt, industryInsightPrompt } from "@core/utils";


export class IndustryService {

    async industryInsight(industry: string) {
        const industryInsight = await generate(industryInsightPrompt(industry))
        return industryInsight
    }

    async fetchIndustryInsight(clerkUserId: string) {

        const industryInsight = await prisma.industryInsight.findFirst({
            where: {
                users: {
                    some: {
                        clerkUserId: clerkUserId,
                    },
                },
            },
        });


        return industryInsight
    }

    async resumeImprovementPrompts(userId: string, type: "experience" | "project" | "education", description: string) {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId
            }
        })

        return await generate(generateResumeImprovementPrompt({ type, current: description, industry: user?.industry! }))
    }

}
