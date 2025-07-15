'use client'

import React, { useState } from 'react'
import {
    Card, CardHeader, CardTitle, CardContent
} from '@/components/ui/card'
import {
    FormField, FormItem, FormControl, FormMessage, FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { CalendarIcon, CirclePlus, Sparkles } from 'lucide-react'
import { cn } from '@/lib/helper'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { useResumeStore } from '@/store/resumeStore'
import { educationSchema, EducationFormValues } from '@core/validators'
import { useUser } from '@clerk/nextjs'
import { serverFetch } from '@/lib/fetcher'
import { apis } from '@/lib/constant/api'

function AddEducation() {
    const { user } = useUser()
    const { setAddEducation, addEducationEntry } = useResumeStore()

    const [educationData, setEducationData] = useState<EducationFormValues>({
        degree: '',
        fieldOfStudy: '',
        institution: '',
        location: '',
        startDate: undefined as unknown as Date,
        endDate: undefined as unknown as Date,
        grade: '',
        description: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)


    const validateFields = () => {
        try {
            educationSchema.parse(educationData)
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
            addEducationEntry(educationData)
            setEducationData({
                degree: '',
                fieldOfStudy: '',
                institution: '',
                location: '',
                startDate: undefined as unknown as Date,
                endDate: undefined as unknown as Date,
                grade: '',
                description: ''
            })
        }
    }

    const improveDescription = async () => {
        try {
            setLoading(true)
            const res = await serverFetch(apis.rephaseDescription, {
                queryParams: {
                    userId: user?.id!,
                    description: educationData.description!,
                    type: 'education'
                },
                cache: 'no-cache'
            });

            if (res.success) {
                setEducationData(prev => ({
                    ...prev,
                    description: res.data.rephrased
                }))
            }
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)

        }


    }

    return (
        <Card className="bg-transparent my-5">
            <CardHeader>
                <CardTitle>Add Education</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-2">
                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Degree (e.g., B.Tech)"
                                value={educationData.degree}
                                className='py-5 dark:bg-transparent'
                                onChange={(e) => setEducationData(prev => ({ ...prev, degree: e.target.value }))}
                            />
                        </FormControl>
                        {errors.degree && <p className="text-sm text-red-400">{errors.degree}</p>}
                    </FormItem>

                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Field of Study"
                                value={educationData.fieldOfStudy}
                                className='py-5 dark:bg-transparent'
                                onChange={(e) => setEducationData(prev => ({ ...prev, fieldOfStudy: e.target.value }))}
                            />
                        </FormControl>
                        {errors.fieldOfStudy && <p className="text-sm text-red-400">{errors.fieldOfStudy}</p>}
                    </FormItem>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Institution"
                                value={educationData.institution}
                                className='py-5 dark:bg-transparent'
                                onChange={(e) => setEducationData(prev => ({ ...prev, institution: e.target.value }))}
                            />
                        </FormControl>
                        {errors.institution && <p className="text-sm text-red-400">{errors.institution}</p>}
                    </FormItem>

                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Location"
                                value={educationData.location}
                                className='py-5 dark:bg-transparent'
                                onChange={(e) => setEducationData(prev => ({ ...prev, location: e.target.value }))}
                            />
                        </FormControl>
                        {errors.location && <p className="text-sm text-red-400">{errors.location}</p>}
                    </FormItem>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {/* Start Date */}
                    <FormItem className="flex flex-col">
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        className={cn("w-full pl-3 py-5 text-left font-normal dark:bg-transparent", !educationData.startDate && "text-muted-foreground")}
                                    >
                                        {educationData.startDate ? format(educationData.startDate, "PPP") : <span>Start Date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="p-0">
                                <Calendar
                                    mode="single"
                                    selected={educationData.startDate}
                                    onSelect={(date) => setEducationData(prev => ({ ...prev, startDate: date as Date }))}
                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
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
                                        className={cn("w-full pl-3 py-5 text-left font-normal dark:bg-transparent", !educationData.endDate && "text-muted-foreground")}
                                    >
                                        {educationData.endDate ? format(educationData.endDate, "PPP") : <span>End Date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="p-0">
                                <Calendar
                                    mode="single"
                                    selected={educationData.endDate}
                                    onSelect={(date) => setEducationData(prev => ({ ...prev, endDate: date as Date }))}
                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                />
                            </PopoverContent>
                        </Popover>
                        {errors.endDate && <p className="text-sm text-red-400">{errors.endDate}</p>}
                    </FormItem>
                </div>

                <FormItem>
                    <FormControl>
                        <Input
                            placeholder="Grade / CGPA"
                            value={educationData.grade}
                            className='my-5 dark:bg-transparent'
                            onChange={(e) => setEducationData(prev => ({ ...prev, grade: e.target.value }))}
                        />
                    </FormControl>
                </FormItem>

                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <>
                            <Textarea
                                placeholder="Highlights or honors"
                                value={educationData.description}
                                onChange={(e) => setEducationData(prev => ({ ...prev, description: e.target.value }))}
                                className="min-h-24 dark:bg-transparent"
                            />
                            <div className='text-muted-foreground text-xs cursor-pointer flex gap-1 items-center' onClick={improveDescription}><Sparkles className='h-4 w-4' />{loading ? "Improving..." : "Improve with AI"}</div>
                        </>
                    </FormControl>
                </FormItem>

                <div className='flex justify-end gap-3'>
                    <Button variant="destructive" onClick={() => setAddEducation(false)}>Cancel</Button>
                    <Button type="button" onClick={handleAddEntry}><CirclePlus className="mr-2" />Add Entry</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AddEducation
