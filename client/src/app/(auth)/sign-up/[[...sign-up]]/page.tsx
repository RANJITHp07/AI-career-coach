import SignupSkeleton from '@/components/skeleton/signup'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

function Signup() {
    return (
        <SignUp fallback={<SignupSkeleton />} />
    )
}

export default Signup
