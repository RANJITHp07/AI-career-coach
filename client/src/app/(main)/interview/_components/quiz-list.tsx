import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function QuizList() {
    return (
        <div className='my-2'>
            <Card className='bg-transparent'>
                <CardHeader>
                    <CardTitle>Reccent Quizzes</CardTitle>
                    <CardDescription>
                        <div className='flex justify-between items-center'>
                            <p>Review your past quiz performance</p>
                            <Link href="/interview/mock">
                                <Button>Start New Quiz</Button>
                            </Link>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='bg-transparent text-center'>
                    <p className='text-muted-foreground text-xs'>No quizzes attended yet</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuizList
