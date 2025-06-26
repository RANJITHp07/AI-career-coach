import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


function RecommendedSkills() {
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
                    <Badge variant={'outline'}>Python</Badge>
                    <Badge variant={'outline'}>Javascript</Badge>
                    <Badge variant={'outline'}>C++</Badge>
                </div>
            </CardContent>
        </Card>
    )
}

export default RecommendedSkills
