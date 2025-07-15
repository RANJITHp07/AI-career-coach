'use client'

import React, { useState } from 'react'
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { experienceSchema } from '@core/validators'
import { CalendarIcon, CirclePlus, Sparkle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/helper'
import { format } from 'date-fns'
import { useResumeStore } from '@/store/resumeStore'
import { serverFetch } from '@/lib/fetcher'
import { apis } from '@/lib/constant/api'
import { useUser } from '@clerk/nextjs'

function AddExperience() {
    const { user } = useUser()
    const { setAddExperience, addExperienceEntry } = useResumeStore()
    // Local state for experience fields
    const [experienceData, setExperienceData] = useState({
        companyTitle: '',
        companyName: '',
        startDate: undefined,
        endDate: undefined,
        description: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)


    // Validation function using Zod schema
    const validateExperienceFields = () => {
        try {
            experienceSchema.parse(experienceData)
            setErrors({})
            return true
        } catch (error: any) {
            const fieldErrors: Record<string, string> = {}
            error.errors.forEach((err: any) => {
                const fieldName = err.path[0] as any
                fieldErrors[fieldName] = err.message
            })
            setErrors(fieldErrors)
            return false
        }
    }

    const handleAddEntry = () => {

        const isValid = validateExperienceFields()

        if (isValid) {
            addExperienceEntry(experienceData as any)
            setExperienceData({
                companyTitle: '',
                companyName: '',
                startDate: undefined,
                endDate: undefined,
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
                    description: experienceData.description!,
                    type: 'experience'
                },
                cache: 'no-cache'
            });

            if (res.success) {
                setExperienceData(prev => ({
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
        <div>
            <Card className="bg-transparent my-5">
                <CardHeader>
                    <CardTitle>Add Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full flex flex-col gap-5">
                        <div className='grid grid-cols-2 gap-2'>
                            <FormField
                                name="companyTitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Title/Position" className='py-5 dark:bg-transparent' value={experienceData.companyTitle}
                                                onChange={(e) => setExperienceData(prev => ({
                                                    ...prev,
                                                    companyTitle: e.target.value
                                                }))}
                                            />
                                        </FormControl>
                                        {errors?.companyTitle && (
                                            <p className="text-sm text-red-400">{errors.companyTitle}</p>
                                        )}
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Organization/Company" className='py-5 dark:bg-transparent' value={experienceData.companyName}
                                                onChange={(e) => setExperienceData(prev => ({
                                                    ...prev,
                                                    companyName: e.target.value
                                                }))} />
                                        </FormControl>
                                        {errors?.companyName && (
                                            <p className="text-sm text-red-400">{errors.companyName}</p>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </div>


                        <div className='grid grid-cols-2 gap-2'>
                            <FormField
                                name="startDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 py-5 dark:bg-transparent text-left font-normal",
                                                            !experienceData.startDate && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {experienceData.startDate ? (
                                                            format(experienceData.startDate, "PPP")
                                                        ) : (
                                                            <span>Start Date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={experienceData.startDate}
                                                    onSelect={(date) => setExperienceData(prev => ({
                                                        ...prev,
                                                        startDate: date as any
                                                    }))}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    captionLayout="dropdown"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        {errors.startDate && (
                                            <p className="text-sm text-red-400">{errors.startDate}</p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="endDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            " w-full pl-3  py-5 dark:bg-transparent text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {experienceData.endDate ? (
                                                            format(experienceData.endDate!, "PPP")
                                                        ) : (
                                                            <span>End Date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={experienceData.endDate}
                                                    onSelect={(date) => setExperienceData(prev => ({
                                                        ...prev,
                                                        endDate: date as any
                                                    }))}
                                                    captionLayout="dropdown"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                        </div>



                        <FormField
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <>
                                            <Textarea
                                                placeholder="Brief summary of your role or responsibilities"
                                                className="min-h-32 dark:bg-transparent"
                                                value={experienceData.description}
                                                onChange={(e) => setExperienceData(prev => ({
                                                    ...prev,
                                                    description: e.target.value
                                                }))}
                                            />
                                            <div className='text-muted-foreground text-xs cursor-pointer flex gap-1 items-center' onClick={improveDescription}><Sparkles className='h-4 w-4' />{loading ? "Improving..." : "Improve with AI"}</div>
                                        </>
                                    </FormControl>
                                    {errors.description && (
                                        <p className="text-sm text-red-400">{errors.description}</p>
                                    )}
                                </FormItem>
                            )}
                        />

                        <div className='flex flex-row gap-3 justify-end'>
                            <Button variant={'destructive'} onClick={() => setAddExperience(false)}>Cancel</Button>

                            <Button type='button' onClick={handleAddEntry}><CirclePlus /> Add Entry</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddExperience
