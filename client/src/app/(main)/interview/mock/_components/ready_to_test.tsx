import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function ReadyToTest() {
    return (
        <Card className='my-5 bg-transparent'>
            <CardHeader>
                <CardTitle>Ready to test your knownledge?</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm text-muted-foreground'>This quiz contains 10 questions specific to your industry and skills. Take your time and choose the best answer for each questions</p>
                <Button className='w-full mt-4'>Start Quiz</Button>
            </CardContent>
        </Card>
    )
}

export default ReadyToTest
