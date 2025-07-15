import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useResumeStore } from '@/store/resumeStore'
import { formatDateToDDMMYYYY } from '@core/utils'
import { EducationFormValues, ExperienceFormValues } from '@core/validators'
import { X } from 'lucide-react'
import React from 'react'

type Props = {
    education: EducationFormValues,
    index: number
}

function Education({ education, index }: Props) {
    const { removeExperienceEntry } = useResumeStore()
    return (
        <Card className='my-5 bg-transparent'>
            <CardHeader>
                <CardTitle>
                    {education.degree} - {education.fieldOfStudy}
                </CardTitle>
                <CardDescription>
                    <div className='relative'>
                        <p>{education.institution} - {education.location}</p>
                        <p>{formatDateToDDMMYYYY(education.startDate.toDateString())} - {formatDateToDDMMYYYY(education.endDate.toDateString())}</p>
                        <div className=' md:absolute right-0 -top-5'>
                            <X className='h-4 w-4 cursor-pointer' onClick={() => removeExperienceEntry(index)} />
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className='text-sm text-muted-foreground'>
                <div>
                    {education.grade && <p>CGPA: {education.grade}</p>}
                    {education.description && <p>Description: {education.description}</p>}
                </div>
            </CardContent>
        </Card>
    )
}

export default Education
