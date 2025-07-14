import { generateImprovementPrompt, skillQuizPrompt, WrongAnswer } from "@core/utils";
import prisma from "prisma/seed";
import { generate } from "src/config/geminiAI";
import { TQuizQuestion } from "src/lib/@types/quiz";

export class QuizService {

    async create(userId: string) {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId
            },
            include: {
                industryInsight: true
            }
        })

        const industry = `${user?.industry}-${user?.specialization}`
        const skills = user?.skills
        const quiz = await generate(skillQuizPrompt(industry, skills!))
        return quiz
    }

    async submitQuiz(userId: string, submittedAnswers: string[], questions: TQuizQuestion[]) {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            include: {
                industryInsight: true,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        const correctAnswers = questions.map((q) => q.correctAnswer);
        let marks = 0;
        const wrongAnswers: WrongAnswer[] = []

        submittedAnswers.forEach((answer, index) => {
            console.log(`Answer: "${answer}" | Correct: "${correctAnswers[index]}"`);
            if (answer !== "" && answer === correctAnswers[index]) {
                marks++
            } else {
                wrongAnswers.push({
                    question: questions[index].question,
                    answer: questions[index].correctAnswer,
                    userAnswer: answer || "No answer",
                })
            };
        });

        let improvementTip = null;
        if (wrongAnswers.length > 0) {
            console.log(`${user?.industry}-${user?.specialization}`)
            improvementTip = await generate(generateImprovementPrompt(wrongAnswers, `${user?.industry}-${user?.specialization}`))
        }

        return await prisma.assessment.create({
            data: {
                quizScore: marks,
                questions,
                user: {
                    connect: {
                        id: user.id,
                    },
                },
                category: "Technical",
                improvementTip: improvementTip?.improveTip
            },
        });
    }

    async getQuizStats(userId: string) {
        const [averageData, latestAssessment] = await Promise.all([
            prisma.assessment.aggregate({
                where: {
                    user: {
                        clerkUserId: userId
                    },
                    category: 'Technical',
                },
                _avg: {
                    quizScore: true,
                },
                _count: {
                    quizScore: true,
                },
            }),
            prisma.assessment.findFirst({
                where: {
                    user: {
                        clerkUserId: userId
                    },
                    category: 'Technical',
                },
                orderBy: {
                    createdAt: 'desc',
                }
            }),
        ]);
        return {
            averageScore: averageData._avg.quizScore || 0,
            latestScore: latestAssessment?.quizScore || 0,
            questionCount: (averageData?._count.quizScore || 0) * 10,
        };
    };

    async geQuizHistory(userId: string, page: number) {
        return await prisma.assessment.findMany({
            where: {
                user: {
                    clerkUserId: userId
                }
            },
            select: {
                improvementTip: true,
                createdAt: true,
                quizScore: true
            },
            skip: (page - 1) * 20,
            take: 20
        })
    }

    async getAnalysis(userId: string) {
        const results = await prisma.assessment.findMany({
            where: {
                user: {
                    clerkUserId: userId
                }
            },
            select: {
                createdAt: true,
                quizScore: true
            },
            take: 20
        });

        const formatted = results.map(item => {
            const date = item.createdAt;
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();

            return {
                date: `${day}-${month}-${year}`,
                score: item.quizScore * 10
            };
        });

        return formatted

    }
}