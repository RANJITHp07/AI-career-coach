import { z } from "zod";

const SignInMethodEnum = z.enum(["GOOGLE", "GITHUB", "EMAIL"]);

export const CreateUserSchema = z.object({
    clerkUserId: z.string(),
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(6).optional(),
    imageUrl: z.string().url().optional(),
    signInMethod: SignInMethodEnum,
    lastLogin: z.date(),
});

export type TCreateUserInput = z.infer<typeof CreateUserSchema>;
