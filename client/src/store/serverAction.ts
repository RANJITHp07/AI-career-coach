'use server'

import { auth } from '@clerk/nextjs/server';
import { serverFetch } from '@/lib/fetcher';
import { apis } from '@/lib/constant/api';
import { revalidatePath } from 'next/cache';

export async function deleteCoverLetter(id: string) {
    console.log("jiiiii")

    try {
        const { userId } = await auth();
        console.log("userId", userId)
        if (!userId) {
            throw new Error('Unauthorized');
        }
        await serverFetch(`${apis['cover-letter']}/${id}`, {
            method: 'DELETE',
        });

        revalidatePath('/cover-letter');

        return { success: true };
    } catch (error) {
        console.error('Error deleting cover letter:', error);
        throw new Error('Failed to delete cover letter');
    }
}