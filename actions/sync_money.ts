'use server'

import { getDatabase } from '@/lib/mongodb';
import { Db, UpdateResult } from 'mongodb';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';

export const syncMoney = async (money: Number) => {

    const cookieStore: ReadonlyRequestCookies = await cookies();

    const user_id: string | undefined = cookieStore.get('id')?.value

    if (!user_id) {
        return null;
    }

    const db: Db = await getDatabase();

    const result: UpdateResult<Document> = await db.collection('user_data').updateOne({'user_info.identity.id': user_id}, { $set: { 'data.money': money } });
    return result;

}