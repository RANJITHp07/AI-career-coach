import { z } from 'zod'

export const projectSchema = z.object({
    name: z.string().min(1, 'Project name is required'),
    technologies: z.string().min(1, 'Technologies used is required'),
    link: z.string().url('Enter a valid project or GitHub link'),
    startDate: z.date({ required_error: 'Start date is required' }),
    endDate: z.date({ required_error: 'End date is required' }),
    description: z.string().min(1, 'Description is required'),
})

export type ProjectFormValues = z.infer<typeof projectSchema>