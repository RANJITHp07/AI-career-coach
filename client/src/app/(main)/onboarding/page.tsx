import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import OnboardingForm from './_components/onboarding_form'

function OnBoarding() {
    return (
        <div className='py-24  bg-background'>
            <Card className='max-w-lg mx-auto mt-10'>
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
