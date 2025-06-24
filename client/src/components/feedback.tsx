import { testimonial } from '@/lib/constant/testimonals'
import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

function Feedback() {
    return (
        <div className='bg-muted/50 py-24 p-2'>
            <h2 className='text-3xl font-bold tracking-tighter text-center mb-2'>What Our User Say</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl mt-7 md:mt-12 lg:mt-16'>
                {
                    testimonial.map((item, index) => {
                        return (
                            <Card key={index} className='border-2 hover:border-primary duration-300 bg-black lg:mt-12' >
                                <CardContent >
                                    <div className='flex flex-row items-center gap-4 justif'>
                                        <div>
                                            <Image src={item.image} width={40} height={40} className="rounded-full" alt="profile" />
                                        </div>
                                        <div>
                                            <p className='font-semibold'>{item.author}</p>
                                            <p className='text-muted-foreground text-sm'>{item.role}</p>
                                            <p className='text-primary text-sm'>{item.company}</p>
                                        </div>
                                    </div>
                                    <div className='mt-7'>
                                        <blockquote>
                                            <p className="text-muted-foreground italic relative">
                                                <span className="text-3xl text-primary absolute -top-4 -left-2">
                                                    &quot;
                                                </span>
                                                {item.quote}
                                                <span className="text-3xl text-primary absolute -bottom-4">
                                                    &quot;
                                                </span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feedback
