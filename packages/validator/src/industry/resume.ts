import { z } from 'zod';

export const profileSchema = z.object({
    professionalSummary: z
        .string()
        .min(50, { message: 'Summary should be at least 50 characters' })
        .max(1000, { message: 'Summary should not exceed 1000 characters' }),

    skills: z.string(),

    email: z
        .string()
        .email({ message: 'Invalid email address' }),

    phone: z
        .string()
        .regex(/^\+?[0-9]{10,15}$/, { message: 'Invalid phone number format' }),

    linkedIn: z
        .string()
        .url({ message: 'LinkedIn must be a valid URL' })
        .refine((url) => url.includes('linkedin.com'), {
            message: 'Must be a valid LinkedIn URL',
        }),

    twitter: z
        .string()
        .url({ message: 'Twitter must be a valid URL' })
        .refine((url) => url.includes('twitter.com'), {
            message: 'Must be a valid Twitter URL',
        })
        .optional(),
});
