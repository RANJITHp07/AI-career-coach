import React from 'react'
import { Badge } from '@/components/ui/badge'
import Insights from './_components/insights'
import Chart from './_components/chart'
import Trends from './_components/trends'
import RecommendedSkills from './_components/recommended_skills'

function Dashboard() {
    return (
        <div className='py-24 p-2'>
            <h2 className='text-6xl font-bold gradient-title'>Industry Insights</h2>
            <Badge variant={'outline'} className='p-2'>Last updated: 20/10/2025</Badge>
            <Insights />
            <Chart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Trends />
                <RecommendedSkills />
            </div>

        </div>
    )
}

export default Dashboard
