'use client'
import React from 'react'
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data: { date: string; score: number }[] = [
    // { date: '2025-07-01', score: 80 },
    // { date: '2025-07-05', score: 90 },
    // { date: '2025-07-10', score: 70 },
]

function Chart() {
    return (
        <Card className="w-full bg-transparent">
            <CardHeader>
                <CardTitle>Performance Trend</CardTitle>
                <CardDescription>
                    Your quiz score over time
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] p-0 flex items-center justify-center">
                {data.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No quizzes attended yet</p>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="date" />
                            <YAxis
                                domain={[0, 100]}
                                ticks={[0, 25, 50, 75, 100]}
                                label={{ position: 'insideLeft', angle: -90 }}
                            />
                            <Line
                                type="monotone"
                                stroke="purple"
                                strokeWidth={2}
                            />
                            <Legend align="right" />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </CardContent>
        </Card>
    )
}

export default Chart
