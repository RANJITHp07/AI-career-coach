'use client'

import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { industries } from '@/lib/constant/industries'
import { OnBoardingSchema } from "@core/validators"
import { useUser } from '@clerk/nextjs'
import { serverFetch } from '@/lib/fetcher'
import { apis } from '@/lib/constant/api'
import { useRouter } from 'next/navigation'


function OnboardingForm() {
    const { user } = useUser();
    const router = useRouter()
    const form = useForm<z.infer<typeof OnBoardingSchema>>({
        resolver: zodResolver(OnBoardingSchema),
    })

    const [loading, setLoading] = useState(false)

    const selectedIndustry = form.watch("industry");

    async function onSubmit(data: z.infer<typeof OnBoardingSchema>) {
        try {
            setLoading(true)
            const res = await serverFetch(apis.profile, {
                body: {
                    clerkUserId: user?.id,
                    ...data
                },
                method: 'PUT',
            });

            if (res.success) {
                router.push('/dashboard')
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // Reset specialization when industry changes
        form.setValue("specialization", "")
    }, [selectedIndustry])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Industry</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className='w-full py-5'>
                                        <SelectValue placeholder="Select an industry" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        industries.map((item) => {
                                            return <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {
                    selectedIndustry &&
                    <FormField
                        control={form.control}
                        name="specialization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Specialization</FormLabel>
                                <Select onValueChange={field.onChange} value={form.watch("specialization") ?? undefined} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-5'>
                                            <SelectValue placeholder="Select your specialization" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            (industries.find((item) => item.name === selectedIndustry)?.subIndustries ?? []).map((item) => {
                                                return <SelectItem key={item} value={item}>{item}</SelectItem>
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                }

                <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="experience">Years of Experience</FormLabel>
                            <Input
                                id="experience"
                                type="number"
                                min="0"
                                max="50"
                                placeholder="Enter years of experience"
                                className='py-5'
                                onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skills</FormLabel>
                            <Input
                                id="skills"
                                placeholder="e.g., Python, JavaScript, Project Management"
                                className='py-5'
                                onChange={field.onChange}
                            />
                            <FormDescription>
                                Separate multiple skills with commas
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="bio">Professional Bio</FormLabel>
                            <Textarea
                                id="bio"
                                placeholder="Tell us about your professional background..."
                                className="h-32"
                                onChange={field.onChange}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='w-full p-5' type="submit" disabled={loading}>{loading ? "Processing..." : "Complete Profile"}</Button>
            </form>
        </Form>
    )
}

export default OnboardingForm
