'use client'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { useForm } from 'react-hook-form'
import { profileSchema } from '@core/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CirclePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AddExperience from './add-experience'
import { useResumeStore } from '@/store/resumeStore'
import AddEducation from './add-education'
import AddProject from './add-projects'
import Experience from './experience'
import Project from './project'
import Education from './education'

function ResumeForm() {
    const { experience, addExperience, addEducation, addProject, projects, setAddExperience, setAddEducation, setAddProject, education } = useResumeStore()
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
    })

    const onSubmit = () => {
        console.log("jiiii")
    }


    return (
        <div className='m-2 w-full '>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-ful flex flex-col gap-5">
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Contact Information</h3>
                        <Card className='w-full bg-transparent'>
                            <CardContent>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="email">Email</FormLabel>
                                                <Input
                                                    id="email"
                                                    placeholder="your@gmail.com"
                                                    className='py-5 dark:bg-transparent'
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                                                <Input
                                                    id="phone"
                                                    placeholder="+91 7896796438"
                                                    className='py-5 dark:bg-transparent'
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 '>
                                    <FormField
                                        control={form.control}
                                        name="linkedIn"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="linkedIn">LinkedIn</FormLabel>
                                                <Input
                                                    id="linkedIn"
                                                    placeholder="https://www.linkedin.com/in/example/"
                                                    className='py-5 dark:bg-transparent'
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="twitter"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="twitter">Twitter</FormLabel>
                                                <Input
                                                    id="twitter"
                                                    placeholder="https://twitter.com/example"
                                                    className='py-5 dark:bg-transparent'
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Professional Summary</h3>

                        <FormField
                            control={form.control}
                            name="professionalSummary"
                            render={({ field }) => (
                                <FormItem>
                                    <Textarea
                                        id="professionalSummary"
                                        placeholder="Write a compelling professional summary..."
                                        className='py-5 min-h-44 dark:bg-transparent'
                                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Skills</h3>

                        <FormField
                            control={form.control}
                            name="skills"
                            render={({ field }) => (
                                <FormItem>
                                    <Textarea
                                        id="skills"
                                        placeholder="List your skills separated by commas (e.g., Python, JavaScript, SQL, HTML)"
                                        className='py-5 min-h-44 dark:bg-transparent'
                                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Work Experience</h3>
                        {experience.map((_experience, index) => <Experience key={index} experience={_experience} index={index} />)}
                        {
                            addExperience ? (
                                <AddExperience />
                            ) : (
                                <div
                                    className="flex justify-center cursor-pointer gap-2 items-center border-input border rounded-md text-sm p-2"
                                    onClick={() => setAddExperience(true)}
                                >
                                    <CirclePlus className="h-4 w-4" />
                                    Add Experience
                                </div>
                            )
                        }

                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Education</h3>
                        {education.map((_education, index) => <Education key={index} education={_education} index={index} />)}

                        {
                            addEducation ?
                                <AddEducation />
                                :
                                <div className='flex justify-center cursor-pointer gap-2 items-center border-input border rounded-md text-sm  p-2' onClick={() => setAddEducation(true)}>
                                    <CirclePlus className='h-4 w-4' />
                                    Add Education
                                </div>
                        }

                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Projects</h3>
                        {projects.map((_project, index) => <Project key={index} project={_project} index={index} />)}

                        {
                            addProject ? <AddProject />
                                :
                                <div className='flex justify-center cursor-pointer gap-2 items-center border-input border rounded-md text-sm  p-2' onClick={() => setAddProject(true)}>
                                    <CirclePlus className='h-4 w-4' />
                                    Add Projects
                                </div>
                        }

                    </div>
                    <Button type='submit' className='my-5'>Generate Resume</Button>
                </form>
            </Form>
        </div>
    )
}

export default ResumeForm
