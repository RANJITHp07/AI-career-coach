import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Progress } from '@/components/ui/progress'
import { Brain, Luggage, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'


function Insights() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            <Card className='bg-transparent'>
                <CardContent className='bg-transparent'>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Market Outlook</p>
                        <TrendingUp className='h-4 w-4 text-green-500' />
                    </div>

                    <h3 className='font-bold text-2xl'>Positive</h3>
                    <p className='text-muted-foreground text-xs'>Next update in 4 days</p>
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Industry Growth</p>
                        <TrendingUp className='h-4 w-4 text-green-500' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>7.5%</h3>
                    <Progress value={33} />
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Demand Level</p>
                        <Luggage className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <h3 className='font-bold text-2xl mb-1'>High</h3>
                    <Progress value={100} className='bg-green-500' />
                </CardContent>
            </Card>
            <Card className='bg-transparent'>
                <CardContent>
                    <div className='mb-3 flex flex-row justify-between items-center'>
                        <p className='text-sm'>Top skills</p>
                        <Brain className='h-4 w-4 text-muted-foreground' />
                    </div>

                    <div className="gap-2 flex flex-wrap">
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Javascript</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Insights
