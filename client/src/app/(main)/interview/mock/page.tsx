'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ReadyToTest from './_components/ready_to_test'
import Question from './_components/question'
import { useQuizStore } from '@/store/quizStore'

function MockInterview() {
    const { quizVisible, loading, quizData } = useQuizStore()

    console.log(quizData)
    return (
        <div className='py-24 p-2'>
            <div className='flex flex-row gap-1 items-center mb-4 cursor-pointer'>
                <ArrowLeft className='h-3 w-3' />
                <Link href="/interview" className='text-xs'>Back to Interview preparation</Link>
            </div>
            <h2 className='text-6xl font-bold gradient-title'>Mock Interview</h2>
            <p className='text-sm text-muted-foreground'>Test you knownledge with industry-specific knownledge</p>

            {
                loading ?
                    <div className="text-center my-12 text-muted-foreground animate-pulse">
                        <p className="font-semibold mt-2">This may take up to one minute.</p>
                        <p className="text-xs mt-1 italic">Please do not refresh or close the tab during this process.</p>
                    </div>
                    :
                    (
                        !quizVisible ? <ReadyToTest /> :
                            <>
                                {
                                    quizData?.questions?.map((question, index) => {
                                        return <Question question={question} index={index + 1} />
                                    })
                                }
                            </>
                    )
            }

        </div>
    )
}

export default MockInterview
