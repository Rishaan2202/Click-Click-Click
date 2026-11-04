import { getDatabase } from '@/lib/mongodb';

const getDbData = async () => {
    const db = await getDatabase();
    const data = await db.collection("user_data").find({}).toArray();
    return data;
}

export { getDbData };