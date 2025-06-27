import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TIndustryInsight } from '@/types/industryInsight'
import React from 'react'

type Props = {
    trends: TIndustryInsight['keyTrends']
}

function Trends({ trends }: Props) {
    return (
        <Card className='bg-transparent'>
            <CardHeader>
                <CardTitle>Key Industry Trends</CardTitle>
                <CardDescription>
                    Current trend shaping the industry
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm ">
                    {
                        trends.map((trend) => {
                            return <li key={trend}>{trend}</li>
                        })
                    }
                </ul>
            </CardContent>
        </Card>
    )
}

export default Trends
