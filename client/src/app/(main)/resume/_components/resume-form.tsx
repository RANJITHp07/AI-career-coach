'use client'
import React from 'react'
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

function ResumeForm() {
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
    })

    const onSubmit = () => {

    }

    return (
        <div className='my-2 w-full'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-ful flex flex-col gap-5">
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Contact Information</h3>
                        <Card className='w-full'>
                            <CardContent>
                                <div className='grid grid-cols-2 gap-2 '>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="email">Email</FormLabel>
                                                <Input
                                                    id="email"
                                                    placeholder="your@gmail.com"
                                                    className='py-5'
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
                                                <FormLabel htmlFor="ohone">Phone Number</FormLabel>
                                                <Input
                                                    id="phone"
                                                    placeholder="+91 7896796438"
                                                    className='py-5'
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-2 mt-5 '>
                                    <FormField
                                        control={form.control}
                                        name="linkedIn"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="linkedIn">LinkedIn</FormLabel>
                                                <Input
                                                    id="linkedIn"
                                                    placeholder="https://www.linkedin.com/in/example/"
                                                    className='py-5'
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
                                                    className='py-5'
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
                        <h3 className='text-xl font-semibold mb-2'>Professional Summary</h3>

                        <FormField
                            control={form.control}
                            name="professionalSummary"
                            render={({ field }) => (
                                <FormItem>
                                    <Textarea
                                        id="professionalSummary"
                                        placeholder="Write a compelling professional summary..."
                                        className='py-5 min-h-44'
                                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Skills</h3>

                        <FormField
                            control={form.control}
                            name="skills"
                            render={({ field }) => (
                                <FormItem>
                                    <Textarea
                                        id="skills"
                                        placeholder="List your skills separated by commas (e.g., Python, JavaScript, SQL, HTML)"
                                        className='py-5 min-h-44'
                                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ResumeForm
