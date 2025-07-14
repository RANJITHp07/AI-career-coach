'use client'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { coverLetterSchema } from '@core/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'


function CoverLetterForm() {
    const form = useForm<z.infer<typeof coverLetterSchema>>({
        resolver: zodResolver(coverLetterSchema),
    })

    const onSubmit = () => {

    }

    return (
        <div>
            <Card className='bg-transparent p-6'>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>
                    Provide information about the position you're applying for
                </CardDescription>
                <CardContent className='bg-transparent'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                            <div className='flex flex-row gap-4 w-full'>
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="experience">Company Name</FormLabel>
                                            <Input
                                                id="companyName"
                                                placeholder="Enter years of experience"
                                                className='py-5 w-full'
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="jobTitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="jobTitle">Company Name</FormLabel>
                                            <Input
                                                id="jobTitle"
                                                placeholder="Enter years of experience"
                                                className='py-5 w-full'
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="description">Job Description</FormLabel>
                                        <Textarea
                                            id="description"
                                            placeholder="Enter years of experience"
                                            className='py-5 w-full'
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type='submit'>Generate Cover letter</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CoverLetterForm
