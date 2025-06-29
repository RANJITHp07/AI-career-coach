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

const data = [
    { name: 'Page A', min: 60, median: 100, max: 150 },
    { name: 'Page B', min: 45, median: 90, max: 120 },
    { name: 'Page C', min: 30, median: 80, max: 160 },
    { name: 'Page D', min: 50, median: 85, max: 140 },
    { name: 'Page E', min: 40, median: 95, max: 170 },
    { name: 'Page F', min: 35, median: 88, max: 130 },
    { name: 'Page G', min: 55, median: 110, max: 180 },
];


type Props = {
    salaryRanges: TIndustryInsight["salaryRanges"];
}

function Chart({ salaryRanges }: Props) {
    const data = salaryRanges.map((range) => ({
        ...range,
        min: Math.floor(range.min / 1000),
        max: Math.floor(range.max / 1000),
        median: Math.floor(range.median / 1000),
    }));

    console.log(data)
    return (
        <Card className='bg-transparent my-12'>
            <CardHeader>
                <CardTitle>Salary Ranges by Role</CardTitle>
                <CardDescription>
                    Displaying minimum, median, and maximum salaries (in thousands)
                </CardDescription>
            </CardHeader>
            <CardContent>

                <div className='min-w-[700px] h-[400px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="role"
                                interval={0}
                                angle={0}
                                textAnchor="middle"
                                height={80}
                                tick={{ width: 100 }} />
                            <YAxis domain={[0, 180]} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                            <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                            <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

    );
}

export default Chart;
