import { z } from 'zod'

export const experienceSchema = z.object({
    companyTitle: z.string().min(1, "Company title is required"),
    companyName: z.string().min(1, "Company name is required"),

    startDate: z.date({
        required_error: "Start date is required",
        invalid_type_error: "Start date must be a valid date"
    }),

    endDate: z.date({
        required_error: "End date is required",
        invalid_type_error: "End date must be a valid date"
    }).optional(),

    description: z.string().min(1, "Description is required"),
})

export type ExperienceFormValues = z.infer<typeof experienceSchema>
