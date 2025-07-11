import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import {
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Blocks, BookX, ChevronDown, FileText, Sparkles, SquarePen } from 'lucide-react'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

function Header() {
    return (
        <nav className=' p-2 mb-36 fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
            <div className='flex flex-row items-center justify-between container'>
                <Link href={'/'} className='cursor-pointer'>
                    <Image src="/logo.png" width={200} height={60} alt='logo' className="object-contain" />
                </Link>

                <SignedOut>
                    <SignUpButton>
                        <Button variant={'outline'} className='hidden md:block'>Sign Up</Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <div className='flex gap-3 items-center'>
                        <Link href={'/dashboard'}>
                            <Button variant={'outline'} className='hidden md:flex items-center'>  <Blocks /> Industry Insight</Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className='hidden bg-white text-background md:flex'> <Sparkles />Growth Tool <ChevronDown /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40 mt-1" align='start'>
                                <Link href={'/'}>
                                    <DropdownMenuItem className='flex flex-row gap-1 text-sm items-center cursor-pointer'>
                                        <FileText className='w-4 h-4' />Build Resume
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem className='flex flex-row gap-1 my-2 text-sm items-center cursor-pointer'>
                                    <SquarePen className='w-4 h-4' />Cover Letter
                                </DropdownMenuItem>
                                <Link href={'/interview'}>
                                    <DropdownMenuItem className='flex flex-row gap-1 text-sm items-center cursor-pointer'>
                                        <BookX className='w-4 h-4' />Interview Prep
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <UserButton userProfileUrl='/profile' userProfileMode='navigation' appearance={{
                            elements: {
                                avatarBox: 'profile-icon'
                            }
                        }} />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Header
