'use client'

import React, { useState } from 'react'
import {
    Card, CardHeader, CardTitle, CardContent
} from '@/components/ui/card'
import {
    FormItem, FormLabel, FormControl
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { CalendarIcon, CirclePlus } from 'lucide-react'
import { cn } from '@/lib/helper'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { useResumeStore } from '@/store/resumeStore'
import { projectSchema, ProjectFormValues } from '@core/validators'

function AddProject() {
    const { setAddProject, addProjectEntry } = useResumeStore()

    const [projectData, setProjectData] = useState<ProjectFormValues>({
        name: '',
        technologies: '',
        link: '',
        startDate: undefined as unknown as Date,
        endDate: undefined as unknown as Date,
        description: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const validateFields = () => {
        try {
            projectSchema.parse(projectData)
            setErrors({})
            return true
        } catch (error: any) {
            const fieldErrors: Record<string, string> = {}
            error.errors.forEach((err: any) => {
                const fieldName = err.path[0]
                fieldErrors[fieldName] = err.message
            })
            setErrors(fieldErrors)
            return false
        }
    }

    const handleAddEntry = () => {
        if (validateFields()) {
            addProjectEntry(projectData)
            setProjectData({
                name: '',
                technologies: '',
                link: '',
                startDate: undefined as unknown as Date,
                endDate: undefined as unknown as Date,
                description: ''
            })
        }
    }

    return (
        <Card className="bg-transparent my-5">
            <CardHeader>
                <CardTitle>Add Project</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-2">
                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Project Name"
                                value={projectData.name}
                                className='py-5 dark:bg-transparent'
                                onChange={(e) => setProjectData(prev => ({ ...prev, name: e.target.value }))}
                            />
                        </FormControl>
                        {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
                    </FormItem>

                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Technologies (comma separated)"
                                value={projectData.technologies}
                                className='py-5 dark:bg-transparent'
                                onChange={(e) => setProjectData(prev => ({ ...prev, technologies: e.target.value }))}
                            />
                        </FormControl>
                        {errors.technologies && <p className="text-sm text-red-400">{errors.technologies}</p>}
                    </FormItem>
                </div>

                <FormItem>
                    <FormControl>
                        <Input
                            placeholder="Project URL / GitHub Link"
                            value={projectData.link}
                            className='py-5 dark:bg-transparent'
                            onChange={(e) => setProjectData(prev => ({ ...prev, link: e.target.value }))}
                        />
                    </FormControl>
                    {errors.link && <p className="text-sm text-red-400">{errors.link}</p>}
                </FormItem>

                <div className="grid grid-cols-2 gap-2">
                    {/* Start Date */}
                    <FormItem className="flex flex-col">
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        className={cn("w-full pl-3 py-5 text-left font-normal dark:bg-transparent", !projectData.startDate && "text-muted-foreground")}
                                    >
                                        {projectData.startDate ? format(projectData.startDate, "PPP") : <span>Start Date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={projectData.startDate}
                                    onSelect={(date) => setProjectData(prev => ({ ...prev, startDate: date as Date }))}
                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                        {errors.startDate && <p className="text-sm text-red-400">{errors.startDate}</p>}
                    </FormItem>

                    {/* End Date */}
                    <FormItem className="flex flex-col">
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        className={cn("w-full pl-3 py-5 text-left font-normal dark:bg-transparent", !projectData.endDate && "text-muted-foreground")}
                                    >
                                        {projectData.endDate ? format(projectData.endDate, "PPP") : <span>End Date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={projectData.endDate}
                                    onSelect={(date) => setProjectData(prev => ({ ...prev, endDate: date as Date }))}
                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                        {errors.endDate && <p className="text-sm text-red-400">{errors.endDate}</p>}
                    </FormItem>
                </div>

                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder="What was the project about? Your role?"
                            value={projectData.description}
                            onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                            className="min-h-24 dark:bg-transparent"
                        />
                    </FormControl>
                    {errors.description && <p className="text-sm text-red-400">{errors.description}</p>}
                </FormItem>

                <div className="flex justify-end gap-3">
                    <Button variant="destructive" onClick={() => setAddProject(false)}>Cancel</Button>
                    <Button type="button" onClick={handleAddEntry}><CirclePlus className="mr-2" />Add Entry</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AddProject
