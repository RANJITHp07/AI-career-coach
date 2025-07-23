import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import OnboardingForm from './_components/onboarding_form'
import { auth } from '@clerk/nextjs/server';
import { serverFetch } from '@/lib/fetcher';
import { redirect } from 'next/navigation';
import { apis } from '@/lib/constant/api';

async function OnBoarding() {
    const { userId } = await auth();
    const data = await serverFetch(apis.insight, { queryParams: { clerkUserId: userId! }, cache: 'no-cache' });

    if (data.success && data?.data) {
        redirect("/dashboard")
    }
    return (
        <div className='py-16 md:py-24  bg-background p-2'>
            <Card className='max-w-lg mx-auto mt-10 '>
                <CardContent>
                    <h2 className='text-4xl font-bold gradient-title mt-4'>Complete Your Profile</h2>
                    <p className='text-muted-foreground'>Select your industry to get personalized career insights and recommendations</p>
                    <div className='mt-7'>
                        <OnboardingForm />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default OnBoarding
