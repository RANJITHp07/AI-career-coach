import React from 'react'
import { Badge } from '@/components/ui/badge'
import Insights from './_components/insights'
import Chart from './_components/chart'
import Trends from './_components/trends'
import RecommendedSkills from './_components/recommended_skills'
import { serverFetch } from '@/lib/fetcher'
import { auth } from '@clerk/nextjs/server'
import { formatDateToDDMMYYYY } from '@core/utils'
import { redirect } from 'next/navigation'
import { apis } from '@/lib/constant/api'

async function Dashboard() {
    const { userId } = await auth();
    const data = await serverFetch(apis.insight, { queryParams: { clerkUserId: userId! }, cache: 'no-cache' });
    let industryInsight = {
        salaryRanges: [
            {
                role: "",
                min: 0,
                max: 0,
                median: 0,
                location: ""
            }
        ],
        growthRate: 0,
        demandLevel: "",
        topSkills: [],
        marketOutlook: "",
        keyTrends: [],
        recommendedSkills: [],
        lastUpdated: ""
    }

    if (data.success && data.data) {
        industryInsight = data.data
    } else {
        redirect("/onboarding")
    }

    return (
        <div className='py-24 p-2'>
            <h2 className='text-6xl font-bold gradient-title'>Industry Insights</h2>
            <Badge variant={'outline'} className='p-2'>Last updated: {formatDateToDDMMYYYY(industryInsight?.lastUpdated)}</Badge>
            <Insights industryInsight={industryInsight} />
            <Chart salaryRanges={industryInsight?.salaryRanges} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Trends trends={industryInsight?.keyTrends} />
                <RecommendedSkills recommendedSkills={industryInsight?.recommendedSkills} />
            </div>
        </div>
    )
}

export default Dashboard
