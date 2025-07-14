'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TIndustryInsight } from '@/types/industryInsight';
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

type Props = {
    salaryRanges: TIndustryInsight["salaryRanges"];
}

function Chart({ salaryRanges }: Props) {
    const data = salaryRanges?.map((range) => ({
        ...range,
        min: Math.floor(range.min / 1000),
        max: Math.floor(range.max / 1000),
        median: Math.floor(range.median / 1000),
    }));

    return (
        <Card className='bg-transparent my-12'>
            <CardHeader>
                <CardTitle>Salary Ranges by Role</CardTitle>
                <CardDescription>
                    Displaying minimum, median, and maximum salaries (in thousands)
                </CardDescription>
            </CardHeader>
            <CardContent>

                <div className="w-full overflow-x-auto">
                    <div className="min-w-[700px] h-[400px]" style={{ width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{ top: 5, right: 30, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="role"
                                    interval={0}
                                    angle={0}
                                    textAnchor="middle"
                                    height={80}
                                    tick={{ width: 100 }}
                                />
                                <YAxis domain={[0, 180]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>


            </CardContent>
        </Card>

    );
}

export default Chart;
