import { z } from 'zod'

export const profileSchema = z.object({
    professionalSummary: z
        .string({
            required_error: 'Professional summary is required',
        })
        .min(50, { message: 'Summary should be at least 50 characters' })
        .max(1000, { message: 'Summary should not exceed 1000 characters' }),

    skills: z
        .string({
            required_error: 'Skills are required',
        }),

    email: z
        .string({
            required_error: 'Email is required',
        })
        .email({ message: 'Invalid email address' }),

    phone: z
        .string({
            required_error: 'Phone number is required',
        })
        .regex(/^\+?[0-9]{10,15}$/, { message: 'Invalid phone number format' }),

    linkedIn: z
        .string({
            required_error: 'LinkedIn profile is required',
        })
        .url({ message: 'LinkedIn must be a valid URL' })
        .refine((url) => url.includes('linkedin.com'), {
            message: 'Must be a valid LinkedIn URL',
        }),

    twitter: z
        .string({
            required_error: 'Twitter profile is required',
        })
        .url({ message: 'Twitter must be a valid URL' })
        .refine((url) => url.includes('twitter.com'), {
            message: 'Must be a valid Twitter URL',
        })
        .optional(),
})
