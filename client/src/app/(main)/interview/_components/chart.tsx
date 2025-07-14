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

function Chart({ quizAnalysis }: { quizAnalysis: Record<string, string>[] }) {

    return (
        <Card className="w-full bg-transparent my-9">
            <CardHeader>
                <CardTitle>Performance Trend</CardTitle>
                <CardDescription>
                    Your quiz score over time
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] p-0 flex items-center justify-center">
                {quizAnalysis.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No quizzes attended yet</p>
                ) : (
                    <div className="w-full overflow-x-auto">
                        <div className="min-w-[700px] h-[300px] " style={{ width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={quizAnalysis} margin={{ top: 5, right: 50, bottom: 5, left: 0 }}>
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="date" />
                                    <YAxis
                                        domain={[0, 100]}
                                        ticks={[0, 25, 50, 75, 100]}
                                        label={{ position: 'insideLeft', angle: -90 }}
                                    />
                                    <Line
                                        type="monotone"
                                        stroke="white"
                                        dataKey="score"
                                        strokeWidth={2}
                                    />
                                    <Legend align="right" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default Chart
