'use client' // Error boundaries must be Client Components

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className='my-5'>
                <h2 className='text-3xl md:text-4xl font-bold gradient-title'>Something went wrong!</h2>
            </div>
            <Button onClick={() => window.location.reload()}>
                Try again
            </Button>
        </div>
    )
}