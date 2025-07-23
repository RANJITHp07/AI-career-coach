import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { apis } from '@/lib/constant/api';
import { serverFetch } from '@/lib/fetcher';
import { deleteCoverLetter } from '@/store/serverAction';
import { auth } from '@clerk/nextjs/server';
import { formatDateToDDMMYYYY } from '@core/utils';
import { Eye, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

async function CoverLetter() {
    const { userId } = await auth();
    const { data = [] } = await serverFetch(apis['cover-letter'], {
        queryParams: { clerkUserId: userId! },
        cache: 'no-cache',
    });

    return (
        <div className='py-24 p-2'>
            <div className='flex justify-between items-center'>
                <h2 className='text-5xl md:text-6xl font-bold gradient-title'>My Cover Letter</h2>
                <Link href='/cover-letter/create'>
                    <Button><Plus className="mr-2" /> Create New</Button>
                </Link>
            </div>

            <div className='my-5'>
                {data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-20 text-muted-foreground animate-fade-in">
                        <div className="text-6xl mb-4">📄</div>
                        <p className="text-xl font-medium mb-2">No cover letters found</p>
                        <p className="text-sm mb-6">Start by creating one tailored to your dream job.</p>
                        <Link href='/cover-letter/create'>
                            <Button variant="outline">
                                <Plus className="mr-2" />
                                Create Your First Cover Letter
                            </Button>
                        </Link>
                    </div>
                ) : (
                    data.map((item: any) => (
                        <Card key={item.id} className='bg-transparent my-3'>
                            <CardHeader>
                                <CardTitle>{item.jobTitle}</CardTitle>
                                <CardDescription>
                                    <div className='relative'>
                                        <p>Created on {formatDateToDDMMYYYY(item.createdAt)}</p>
                                        <div className='md:absolute right-0 -top-5 flex gap-2'>
                                            <Link href={`/cover-letter/${item.id}`}>
                                                <Eye className='h-8 w-8 p-1 border rounded-md cursor-pointer' />
                                            </Link>
                                            <form action={async () => {
                                                'use server'
                                                await deleteCoverLetter(item.id);
                                            }}>
                                                <button type="submit">
                                                    <Trash className='h-8 w-8 p-1 border rounded-md cursor-pointer' />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

export default CoverLetter;
