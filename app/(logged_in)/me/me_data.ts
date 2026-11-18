'use server'

import { getDatabase } from "@/lib/mongodb";
import { cookies } from "next/headers";

type MeDataType = {
    name: string;
    money: number;
    time: string;
    pfp: string;
}

const MeData = async () => {

    const cookieStore = await cookies();
    const userId = cookieStore.get("id")?.value;

    const db = await getDatabase();
    const user = await db.collection("user_data").findOne({ 'user_info.identity.id': userId });
    
    if (!user || user === undefined) {
        return;
    }

    const meFinalData: MeDataType = {
        name: user?.user_info.identity.first_name || "",
        money: user?.data.money || 0,
        time: user?.login_time.toLocaleDateString() || "",
        pfp: user?.slack_info.user.profile.image_original.url || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png"
    }

    return meFinalData;
}

export { MeData };

