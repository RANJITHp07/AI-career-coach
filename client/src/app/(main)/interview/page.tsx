import React from 'react'
import InterviewInsights from './_components/interview-insight'
import Chart from './_components/chart'
import QuizList from './_components/quiz-list'

async function InterviewPreparation() {
    return (
        <div className='py-24 p-2'>
            <h2 className='text-6xl font-bold gradient-title'>Interview Preparation</h2>
            <InterviewInsights />
            <Chart />
            <QuizList />
        </div>
    )
}

export default InterviewPreparation
