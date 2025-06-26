import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import {
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

function Header() {
    return (
        <nav className=' p-2 mb-36 fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
            <div className='flex flex-row items-center justify-between container'>
                <Image src="/logo.png" width={200} height={60} alt='logo' className="object-contain" />

                <SignedOut>
                    <SignUpButton>
                        <Button variant={'outline'} className='hidden md:block'>Sign In</Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Header
