'use server'

import { getDatabase } from '@/lib/mongodb';
import { cookies } from 'next/headers';
import { connection } from 'next/server';

export const getUserInfo = async () => {

    await connection();

    const cookieStore = await cookies();

    const user_id: string | undefined = cookieStore.get("id")?.value

    if (!user_id) {
        return null;
    }

    const db = await getDatabase();
    const userData = await db.collection("user_data").findOne({ "user_info.identity.id": user_id }, { projection: { _id: 0 } });

    if (!userData || userData === null) {
        return null;
    }

    return userData;

}