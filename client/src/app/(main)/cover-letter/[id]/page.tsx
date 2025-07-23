import { apis } from '@/lib/constant/api';
import { serverFetch } from '@/lib/fetcher';
import { ArrowLeft } from 'lucide-react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React from 'react'
import Markdown from './_components/markdown';



type PageProps = {
    params: {
        id: string;
    };
};

async function page({ params }: PageProps) {
    const { id } = params;

    const { data = {} } = await serverFetch(
        apis['get-cover-letter'](id),
        {
            cache: 'no-cache',
        }
    );

    return (
        <div className='py-24 my-2'>
            <div className='flex flex-row gap-1 items-center mb-4 cursor-pointer'>
                <ArrowLeft className='h-3 w-3' />
                <Link href="/cover-letter" className='text-xs'>Back to cover letter</Link>
            </div>
            <h2 className='text-6xl font-bold gradient-title'>{data.jobTitle}</h2>
            <Markdown content={data.content} />
        </div>
    )
}

export default page
