import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Brain, Medal, Trophy } from 'lucide-react'
import { auth } from '@clerk/nextjs/server';
import { serverFetch } from '@/lib/fetcher';

async function InterviewInsights() {
    const { userId } = await auth();
    const { data } = await serverFetch('/quiz/stats', { queryParams: { clerkUserId: userId! } });

    console.log(data)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-9">
            <Card className='bg-transparent'>
                <CardContent className='bg-transparent'>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Average Score</p>
                        <Trophy className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>{data.averageScore}</h3>
                    <p className='text-muted-foreground text-xs'>Consistently observed in all assessments</p>
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Questions Practiced</p>
                        <Brain className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>{data.questionCount}</h3>
                    <p className='text-muted-foreground text-xs'>Total Questions</p>
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Latest Score</p>
                        <Medal className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>{data.latestScore}</h3>
                    <p className='text-muted-foreground text-xs'>Most recent quiz</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default InterviewInsights
