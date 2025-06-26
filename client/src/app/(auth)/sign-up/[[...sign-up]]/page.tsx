import { SignUp } from '@clerk/nextjs'
import React from 'react'

function Signup() {
    return (
        <SignUp afterSignInUrl={"/onboarding"} fallback={<p>Loading ....</p>} />
    )
}

export default Signup
