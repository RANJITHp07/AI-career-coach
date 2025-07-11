import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Progress } from '@/components/ui/progress'
import { Brain, Luggage, TrendingDown, TrendingUp, TrendingUpDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { TIndustryInsight } from '@/types/industryInsight'
import { twMerge } from 'tailwind-merge'

type Props = {
    industryInsight: TIndustryInsight
}

function Insights({ industryInsight }: Props) {
    const marketOutlookIcon = () => {
        switch (industryInsight?.marketOutlook) {
            case "Positive":
                return <TrendingUp className='h-4 w-4 text-green-500' />;
            case "Negative":
                return <TrendingDown className='h-4 w-4 text-red-500' />;
            default:
                return <TrendingUpDown className='h-4 w-4 text-muted-foreground' />;
        }
    };

    const getDemandLevelColor = () => {
        switch (industryInsight?.demandLevel?.toLowerCase()) {
            case "high":
                return "bg-green-500";
            case "medium":
                return "bg-yellow-500";
            case "low":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            <Card className='bg-transparent'>
                <CardContent className='bg-transparent'>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Market Outlook</p>
                        {marketOutlookIcon()}
                    </div>

                    <h3 className='font-bold text-2xl'>{industryInsight?.marketOutlook}</h3>
                    <p className='text-muted-foreground text-xs'>Next update in 4 days</p>
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Industry Growth</p>
                        <TrendingUp className='h-4 w-4 text-green-500' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>{industryInsight?.growthRate}%</h3>
                    <Progress value={industryInsight?.growthRate} />
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Demand Level</p>
                        <Luggage className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>{industryInsight?.demandLevel}</h3>
                    <Progress
                        value={100}
                        className={twMerge(
                            "bg-muted", // background
                            `[&>div]:${getDemandLevelColor()}`// progress fill
                        )}
                    />
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Top skills</p>
                        <Brain className='h-4 w-4 text-muted-foreground' />
                    </div>

                    <div className="gap-2 flex flex-wrap">
                        {
                            industryInsight?.topSkills?.map((skill) => {
                                return <Badge key={skill} variant="secondary">{skill}</Badge>
                            })
                        }
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Insights
