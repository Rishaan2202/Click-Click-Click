'use server'

import { getDatabase } from '@/lib/mongodb'

export async function fetchFeedbacks() {

  const db = await getDatabase();

  if (!db || db === null) {
    throw new Error('Database connection failed');
  }

  const feedbacks = await db.collection('feedback').find({}, { projection: { _id: 0 } }).toArray();

  return feedbacks;
  
}