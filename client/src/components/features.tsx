import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { features } from '@/lib/constant/features'

function Features() {
    return (
        <div className='text-center p-2 container'>

            <h2 className='text-3xl font-bold tracking-tighter text-center  md:mb-12'>Powerful features for your career growth</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl mt-7 md:mt-16'>
                {
                    features.map((item) => {
                        return (
                            <Card className='text-center border-2 hover:border-primary duration-300 bg-black' key={item.title}>
                                <CardContent className='pt-6 flex flex-col gap-3'>
                                    <div className='flex justify-center'>{item.icon}</div>
                                    <p className='text-xl font-bold mb-2'>{item.title}</p>
                                    <p className='text-muted-foreground'>{item.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Features
