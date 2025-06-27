import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { serverFetch } from '@/lib/fetcher'
import { useQuizStore } from '@/store/quizStore'
import React from 'react'

function ReadyToTest() {
    const { setLoading, setQuizData } = useQuizStore()

    const handleStartQuiz = async () => {
        setLoading(true)
        const data = await serverFetch('/api/quiz', { cache: 'no-store' });

        if (data.success) {
            setQuizData(data.data)
        }
        setLoading(false)
    }

    return (
        <Card className='my-5 bg-transparent'>
            <CardHeader>
                <CardTitle>Ready to test your knownledge?</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm text-muted-foreground'>This quiz contains 10 questions specific to your industry and skills. Take your time and choose the best answer for each questions</p>
                <Button className='w-full mt-4' onClick={handleStartQuiz}>Start Quiz</Button>
            </CardContent>
        </Card>
    )
}

export default ReadyToTest
