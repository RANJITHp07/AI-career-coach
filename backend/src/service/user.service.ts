import * as argon2 from "argon2";
import prisma from "../../prisma/seed";
import { CreateUserSchema, TCreateUserInput } from "@core/validators"
import { TUserProfile } from "src/lib/@types/user";
import { IndustryService } from "./industry.service";

export class UserService {

    private readonly industryService;
    constructor() {
        this.industryService = new IndustryService()
    }

    async createUser(data: TCreateUserInput) {
        const validatedData = CreateUserSchema.parse(data);
        let hashedPassword;
        if (validatedData.password) {
            hashedPassword = await argon2.hash(validatedData.password);
        }

        return await prisma.user.create({
            data: {
                ...validatedData,
                ...(hashedPassword && { password: hashedPassword })
            },
            select: {
                email: true,
                id: true
            }
        });
    }

    async completeProfile(clerkUserId: string, data: TUserProfile) {
        const { bio, industry, experience, skills, specialization } = data
        const industryInsight = await this.industryService.industryInsight(industry)
        return await prisma.user.update({
            where: {
                clerkUserId,
            },
            data: {
                bio: bio,
                experience: parseInt(experience),
                skills: skills.split(','),
                specialization,
                industryInsight: {
                    upsert: {
                        where: {
                            industry: `${industry}-${specialization}`,
                        },
                        create: {
                            ...industryInsight,
                            industry: `${industry}-${specialization}`,
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        },
                        update: {
                            ...industryInsight,
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        },
                    },
                },
            }

        })
    }

}
