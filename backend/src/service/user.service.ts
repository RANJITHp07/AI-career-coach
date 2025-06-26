import * as argon2 from "argon2";
import prisma from "../../prisma/seed";
import { CreateUserSchema, TCreateUserInput } from "@core/validators"


export class UserService {

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

}
