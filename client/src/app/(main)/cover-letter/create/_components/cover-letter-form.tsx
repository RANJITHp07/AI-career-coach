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
import { serverFetch } from '@/lib/fetcher'
import { apis } from '@/lib/constant/api'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'


function CoverLetterForm() {
    const { user } = useUser();
    const router = useRouter()
    const form = useForm<z.infer<typeof coverLetterSchema>>({
        resolver: zodResolver(coverLetterSchema),
    })

    const onSubmit = async (data: any) => {
        const res = await serverFetch(apis['cover-letter'], {
            body: {
                userId: user?.id,
                data
            },
            cache: 'no-cache',
            method: 'POST',
        });

        if (res.success) {
            router.push("/cover-letter")
        }
    }

    return (
        <div>
            <Card className='bg-transparent'>
                <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <CardDescription>
                        Provide information about the position you're applying for
                    </CardDescription>
                </CardHeader>
                <CardContent className='bg-transparent'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                            <div className='flex flex-row gap-4 w-full'>
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel htmlFor="experience">Company Name</FormLabel>
                                            <Input
                                                id="companyName"
                                                placeholder="Enter the company name"
                                                className='py-5 dark:bg-transparent w-full'
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
                                        <FormItem className='w-full'>
                                            <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                                            <Input
                                                id="jobTitle"
                                                placeholder="Enter years of experience"
                                                className='py-5 dark:bg-transparent w-full'
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
                                            placeholder="Paste the job description here"
                                            className='py-5 dark:bg-transparent h-44 w-full'
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type='submit' disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Generating..." : "Generate Cover Letter"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CoverLetterForm
