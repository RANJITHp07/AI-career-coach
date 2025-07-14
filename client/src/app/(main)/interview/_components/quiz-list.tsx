import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDateToDDMMYYYY } from '@core/utils';


async function QuizList({ quizListHistory }: { quizListHistory: Record<string, any>[] }) {
    return (
        <div className='my-2'>
            <Card className='bg-transparent'>
                <CardHeader>
                    <CardTitle>Reccent Quizzes</CardTitle>
                    <CardDescription>
                        <div className='relative'>
                            <p>Review your past quiz performance</p>
                            <Link href="/interview/mock" className=' md:absolute right-0 -top-5'>
                                <Button className='mt-4 md:mt-0'>Start New Quiz</Button>
                            </Link>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='bg-transparent'>
                    {/* <CardTitle>Reccent Quizzes</CardTitle><p className='text-muted-foreground text-xs'>No quizzes attended yet</p> */}

                    <div className='flex flex-col gap-3'>
                        {quizListHistory.length === 0 ? (
                            <p className="text-sm text-muted-foreground text-center">
                                No quizzes attempted.
                            </p>
                        ) : (
                            quizListHistory.map((history, index) => (
                                <Card key={index} className='bg-transparent'>
                                    <CardHeader>
                                        <CardTitle className='text-sm'>Quiz {index + 1}</CardTitle>
                                        <CardDescription>
                                            <div className='relative'>
                                                <p className='text-sm'>Score: {history?.quizScore}/10</p>
                                                <p className='absolute right-0 -top-5'>
                                                    {formatDateToDDMMYYYY(history?.createdAt)}
                                                </p>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className='text-sm text-muted-foreground'>
                                        <div>
                                            <p>Improvement Tips:</p>
                                            <p>{history?.improvementTip}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuizList
