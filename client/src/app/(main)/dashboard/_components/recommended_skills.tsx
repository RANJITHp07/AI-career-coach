import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TIndustryInsight } from '@/types/industryInsight'

type Props = {
    recommendedSkills: TIndustryInsight["recommendedSkills"]
}

function RecommendedSkills({ recommendedSkills }: Props) {
    return (
        <Card className='bg-transparent'>
            <CardHeader>
                <CardTitle>Recommended Skills</CardTitle>
                <CardDescription>
                    Skills to consider developing
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-wrap gap-2'>
                    {
                        recommendedSkills.map((skill) => {
                            return <Badge key={skill} variant={'outline'}>{skill}</Badge>
                        })
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default RecommendedSkills
