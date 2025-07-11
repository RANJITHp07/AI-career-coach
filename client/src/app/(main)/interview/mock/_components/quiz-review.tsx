import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuizStore } from '@/store/quizStore'
import { Trophy } from 'lucide-react'
import React from 'react'

function QuizReview() {
    const { quizData, userSelectedAnswers, result } = useQuizStore()
    return (
        <div className='my-12'>
            <div className='flex flex-row gap-2'>
                <Trophy />
                <h5 className='text-xl font-bold gradient-title'>Quiz Result</h5>
            </div>
            <div className='mb-9'>
                <Card className='my-5 bg-transparent'>
                    <CardHeader>
                        <CardTitle>Achieved {result.marks} marks out of a total of 10.</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p className='text-sm mb-2 font-semibold'>Improvement Tip</p>
                            <p className='text-xs text-muted-foreground'>{result.improvementTip}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <h6 className='text-lg font-bold gradient-title'>Question Review</h6>
                {
                    quizData?.questions?.map((question, index) => {
                        return (
                            <Card className=' bg-transparent my-5'>
                                <CardHeader>
                                    <CardTitle className='text-sm'>{question.question}</CardTitle>
                                    <CardDescription className='text-sm'>
                                        <p>Your Answer: {userSelectedAnswers[index]}</p>
                                        <p>Correct Answer: {question.correctAnswer}</p>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <p className='text-sm mb-2 font-semibold'>Explaination</p>
                                        <p className='text-xs text-muted-foreground'>{question.explanation}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizReview
