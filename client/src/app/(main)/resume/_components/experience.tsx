import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useResumeStore } from '@/store/resumeStore'
import { formatDateToDDMMYYYY } from '@core/utils'
import { ExperienceFormValues } from '@core/validators'
import { X } from 'lucide-react'
import React from 'react'

type Props = {
    experience: ExperienceFormValues,
    index: number
}

function Experience({ experience, index }: Props) {
    const { removeExperienceEntry } = useResumeStore()
    return (
        <Card className='my-5 bg-transparent'>
            <CardHeader>
                <CardTitle>
                    {experience.companyTitle}
                </CardTitle>
                <CardDescription>
                    <div className='relative'>
                        <p>{experience.companyName}</p>
                        <p>{formatDateToDDMMYYYY(experience.startDate.toDateString())} - {experience.endDate ? formatDateToDDMMYYYY(experience.endDate.toDateString()) : "Present"}</p>
                        <div className=' md:absolute right-0 -top-5'>
                            <X className='h-4 w-4 cursor-pointer' onClick={() => removeExperienceEntry(index)} />
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className='text-sm text-muted-foreground'>
                {experience.description}
            </CardContent>
        </Card>
    )
}

export default Experience
