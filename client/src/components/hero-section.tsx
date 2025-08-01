'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link';

function HeroSection() {
    const imageRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.8 }
        );

        if (imageRef.current) observer.observe(imageRef.current);
        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, []);

    return (
        <section className='text-center pt-32 md:pt-44 p-2 container'>
            <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title '>
                Your AI Career Coach for <br /> Professional Success
            </h1>
            <p className='text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto'>Advance your career with personalized guidance,interview prep and AI-powered tools for job success</p>
            <div className='flex flex-row gap-2 justify-center my-4'>
                <Link href="/sign-up">
                    <Button size={'lg'}>Get Started</Button>
                </Link>
                {/* <Button variant="outline" size={'lg'}>Watch Demo</Button> */}
            </div>
            <div ref={imageRef} className='flex flex-row justify-center perspective-1000 md:my-12'>
                <Image
                    src="/banner.jpeg"
                    alt="header_image"
                    width={1000}
                    height={720}
                    className={`${inView ? 'rotate-x-0' : 'rotate-x-15'} transition-transform duration-700 ease-out`}
                />
            </div>
        </section>
    )
}

export default HeroSection
