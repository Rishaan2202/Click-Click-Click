'use server'

import { getDatabase } from '@/lib/mongodb'
import { cookies } from 'next/headers';

export async function submitFeedback(feedback: string) {

    const db = await getDatabase();
    const cookieStore = await cookies();

    const name = cookieStore.get('name')?.value || 'Anonymous';
    const pfp = cookieStore.get('pfp')?.value || 'https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png';

    if (!db || db === null) {
        throw new Error('Database connection failed');
    }

    const result = await db.collection('feedback').insertOne({ feedback, name, pfp, timestamp: new Date() });

    if (!result.acknowledged) {
        throw new Error('Failed to submit feedback');
    }

    return true;
} 