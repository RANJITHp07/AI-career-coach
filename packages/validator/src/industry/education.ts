import { z } from 'zod'

export const educationSchema = z.object({
    degree: z.string().min(1, 'Degree is required'),
    fieldOfStudy: z.string().min(1, 'Field of study is required'),
    institution: z.string().min(1, 'Institution is required'),
    location: z.string().min(1, 'Location is required'),
    startDate: z.date({ required_error: 'Start date is required' }),
    endDate: z.date({ required_error: 'End date is required' }),
    grade: z.string().optional(),
    description: z.string().optional(),
})

export type EducationFormValues = z.infer<typeof educationSchema>
