import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

function CreateCoverLetter() {


    return (
        <div className='py-24 p-2'>
            <div className='flex flex-row gap-1 items-center mb-4 cursor-pointer'>
                <ArrowLeft className='h-3 w-3' />
                <Link href="/interview" className='text-xs'>Back to Interview preparation</Link>
            </div>
            <h2 className='text-6xl font-bold gradient-title'>Create Cover Letter</h2>
            <p className='text-sm text-muted-foreground'>Generate a tailored cover letter for you application</p>
        </div>
    )
}

export default CreateCoverLetter
