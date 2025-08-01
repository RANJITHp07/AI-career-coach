import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import CoverLetterForm from './_components/cover-letter-form'

function CreateCoverLetter() {


    return (
        <div className='py-24 p-2'>
            <div className='flex flex-row gap-1 items-center mb-4 cursor-pointer'>
                <ArrowLeft className='h-3 w-3' />
                <Link href="/cover-letter" className='text-xs'>Back to cover letter</Link>
            </div>
            <h2 className='text-6xl font-bold gradient-title'>Create Cover Letter</h2>
            <p className='text-sm text-muted-foreground mb-5'>Generate a tailored cover letter for you application</p>
            <CoverLetterForm />
        </div>
    )
}

export default CreateCoverLetter
