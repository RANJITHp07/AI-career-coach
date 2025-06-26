import { z } from 'zod';

export const OnBoardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry.",
    }),

    specialization: z.string({
        required_error: "Please select a specialization.",
    }),

    experience: z
        .number({
            required_error: "Experience is required.",
            invalid_type_error: "Experience must be a number.",
        })
        .min(0, "Experience must be at least 0 years.")
        .max(50, "Experience must be 50 years or less."),

    skills: z
        .string({
            required_error: "Please enter at least one skill.",
        })
        .min(1, "Please enter at least one skill."),

    bio: z
        .string()
        .max(1000, "Bio must be under 1000 characters.")
        .optional(),
});
