import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TQuizQuestion } from '@/types/quiz'


type Props = {
    question: TQuizQuestion,
    index: number
}
function Question({ question, index }: Props) {
    return (
        <Card className='my-5 bg-transparent'>
            <CardHeader>
                <CardTitle>Question {index} of 10</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm'>{question.question}</p>
                <RadioGroup className='my-3'>
                    {
                        question.options.map((option) => {
                            return (
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option}>{option}</Label>
                                </div>
                            )
                        })
                    }
                </RadioGroup>
            </CardContent>
        </Card>
    )
}

export default Question
