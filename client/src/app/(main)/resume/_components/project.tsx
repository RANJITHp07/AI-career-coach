import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { X } from 'lucide-react'
import { ProjectFormValues } from '@core/validators'
import { formatDateToDDMMYYYY } from '@core/utils'
import { useResumeStore } from '@/store/resumeStore'

type Props = {
    project: ProjectFormValues,
    index: number
}


function Project({ project, index }: Props) {

    const { removeEducationEntry } = useResumeStore()
    return (
        <Card className='my-5 bg-transparent'>
            <CardHeader>
                <CardTitle>
                    {project.name}
                </CardTitle>
                <CardDescription>
                    <div className='relative'>
                        <p>{formatDateToDDMMYYYY(project.startDate.toDateString())} - {formatDateToDDMMYYYY(project.endDate.toDateString())}</p>
                        <div className=' md:absolute right-0 -top-5'>
                            <X className='h-4 w-4 cursor-pointer' onClick={() => removeEducationEntry(index)} />
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className='text-sm text-muted-foreground'>
                <div>
                    <div className='my-2'>
                        <p className='font-semibold text-white'>Description:</p>
                        <p>{project.description}</p>
                    </div>
                    <div className='my-5'>
                        <p className='font-semibold text-white'>Technologies:</p>
                        <p>{project.technologies}</p>
                    </div>
                    <p className="text-white">
                        Link:{" "}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                        >
                            {project.link}
                        </a>
                    </p>

                </div>
            </CardContent>
        </Card>
    )
}

export default Project
