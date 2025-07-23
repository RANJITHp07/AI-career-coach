import prisma from "../../prisma/seed";
import { generate } from "src/config/geminiAI";
import { generateCoverLetterPrompt, generateResumeImprovementPrompt, industryInsightPrompt } from "@core/utils";


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

    async generateCoverLetter(userId: string, data: {
        jobTitle: string,
        companyName: string,
        jobDescription: string
    }) {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId
            }
        })

        const { coverLetter } = await generate(generateCoverLetterPrompt(data, user))

        await prisma.coverLetter.create({
            data: {
                jobTitle: data.jobTitle,
                jobDescription: data.jobDescription,
                companyName: data.companyName,
                userId: user?.id!,
                content: coverLetter
            }
        });

        return coverLetter
    }

    async fetchCoverLetter(clerkUserId: string) {
        return await prisma.coverLetter.findMany({
            where: {
                user: {
                    clerkUserId
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                jobDescription: true,
                jobTitle: true,
                content: true,
                companyName: true,
                createdAt: true
            }
        })
    }

    async fetchOneCoverLetter(id: string) {
        return await prisma.coverLetter.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                jobDescription: true,
                jobTitle: true,
                content: true,
                companyName: true,
                createdAt: true
            }
        })
    }

    async deleteCoverLetter(id: string) {
        return await prisma.coverLetter.delete({
            where: {
                id,
            }
        })
    }

}
