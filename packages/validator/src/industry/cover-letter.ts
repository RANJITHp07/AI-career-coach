import { z } from "zod";

export const coverLetterSchema = z.object({
    companyName: z
        .string()
        .min(1, "Company name is required")
        .max(100, "Company name must be under 100 characters"),

    jobTitle: z
        .string()
        .min(1, "Job title is required")
        .max(100, "Job title must be under 100 characters"),

    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .max(1000, "Description must be under 1000 characters"),
});
