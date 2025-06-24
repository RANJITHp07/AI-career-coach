import { howItWorks } from '@/lib/constant/how_it_works'
import React from 'react'

function Insight() {
    return (
        <div className='text-center p-2'>
            <h2 className='text-3xl font-bold tracking-tighter text-center mb-2'>How it Works</h2>
            <p className='text-muted-foreground'>Four simple steps to accelerate your career growth</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl mt-7 md:mt-16'>
                {howItWorks.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Insight
