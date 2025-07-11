import SignupSkeleton from '@/components/skeleton/signup'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

function Signin() {
    return (
        <SignIn fallback={<SignupSkeleton />} />
    )
}

export default Signin
