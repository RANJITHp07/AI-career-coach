import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function Trends() {
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
                    <li>First key point goes here</li>
                    <li>Second important detail</li>
                    <li>Another point worth mentioning</li>
                    <li>Final note or summary</li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default Trends
