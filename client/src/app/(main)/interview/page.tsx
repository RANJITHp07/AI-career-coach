import React from 'react'
import InterviewInsights from './_components/interview-insight'
import Chart from './_components/chart'
import QuizList from './_components/quiz-list'
import { auth } from '@clerk/nextjs/server';
import { serverFetch } from '@/lib/fetcher';
import { apis } from '@/lib/constant/api';

async function InterviewPreparation() {
    const { userId } = await auth();

    const [quizStatsRes, quizListRes, quizAnalysisRes] = await Promise.all([
        serverFetch(apis.stats, {
            queryParams: { clerkUserId: userId! },
            cache: 'no-cache'
        }),
        serverFetch(apis.history, {
            queryParams: { userId: userId!, page: 1 },
            cache: 'no-cache'
        }),
        serverFetch(apis.analysis, {
            queryParams: { userId: userId! },
            cache: 'no-cache'
        }),
    ]);

    const quizStats = quizStatsRes.data;
    const quizListHistory = quizListRes.data;
    const quizAnalysis = quizAnalysisRes?.data


    return (
        <div className='py-24 p-2'>
            <h2 className='text-5xl md:text-6xl font-bold gradient-title'>Interview Preparation</h2>
            <InterviewInsights stats={quizStats} />
            <Chart quizAnalysis={quizAnalysis} />
            <QuizList quizListHistory={quizListHistory} />
        </div>
    )
}

export default InterviewPreparation
