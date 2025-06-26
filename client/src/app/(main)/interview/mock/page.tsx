import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ReadyToTest from './_components/ready_to_test'

function MockInterview() {
    return (
        <div className='py-24 p-2'>
            <div className='flex flex-row gap-1 items-center mb-4 cursor-pointer'>
                <ArrowLeft className='h-3 w-3' />
                <Link href="/interview" className='text-xs'>Back to Interview preparation</Link>
            </div>
            <h2 className='text-6xl font-bold gradient-title'>Mock Interview</h2>
            <p className='text-sm text-muted-foreground'>Test you knownledge with industry-specific knownledge</p>

            <ReadyToTest />

        </div>
    )
}

export default MockInterview
