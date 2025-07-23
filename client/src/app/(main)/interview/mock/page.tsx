'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ReadyToTest from './_components/ready_to_test'
import Question from './_components/question'
import { useQuizStore } from '@/store/quizStore'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/alert'
import { useUser } from '@clerk/nextjs'
import { serverFetch } from '@/lib/fetcher'
import { useRouter } from 'next/navigation'
import QuizReview from './_components/quiz-review'
import { apis } from '@/lib/constant/api'

function MockInterview() {
    const { user } = useUser();
    const { quizVisible, loading, quizData, userSelectedAnswers, setisSubmitted, isSubmitted, setResult, result } = useQuizStore()

    const handleQuizSubmit = async () => {
        setisSubmitted(true)
        const data = await serverFetch(apis.createQuiz, {
            method: 'POST', body: {
                userId: user?.id,
                submittedAnswers: userSelectedAnswers,
                questions: quizData.questions
            },
            cache: 'no-cache'
        });
        setisSubmitted(false)

        if (data.success) {
            const result = data?.data
            setResult({
                marks: result?.quizScore || 0,
                improvementTip: result?.improvementTip,
                isCompleted: true
            })
        }

    }


    return (
        <div className='py-24 p-2'>
            <div className='flex flex-row gap-1 items-center mb-4 cursor-pointer'>
                <ArrowLeft className='h-3 w-3' />
                <Link href="/interview" className='text-xs hover:underline'>Back to Interview preparation</Link>
            </div>
            <h2 className='text-6xl font-bold gradient-title'>Mock Interview</h2>
            <p className='text-sm text-muted-foreground'>Test you knownledge with industry-specific knownledge</p>

            {
                result?.isCompleted ? <QuizReview /> : (
                    loading ? (
                        <div className="text-center my-12 text-muted-foreground animate-pulse">
                            <p className="font-semibold mt-2">This may take up to one minute.</p>
                            <p className="text-xs mt-1 italic">Please do not refresh or close the tab during this process.</p>
                        </div>
                    ) : (
                        !quizVisible ? <ReadyToTest /> :
                            <>
                                {
                                    quizData?.questions?.map((question, index) => (
                                        <Question key={index} question={question} index={index + 1} />
                                    ))
                                }
                                <Alert
                                    message={'Are you sure you want to submit the quiz?'}
                                    subMessage="Please recheck all your answers before submitting. This action cannot be undone."
                                    onContinueClick={handleQuizSubmit}
                                >
                                    <Button className='w-full' disabled={isSubmitted}>
                                        {!isSubmitted ? "Submit Your Quiz" : "Processing..."}
                                    </Button>
                                </Alert>
                            </>
                    )
                )
            }

        </div>
    )
}

export default MockInterview
