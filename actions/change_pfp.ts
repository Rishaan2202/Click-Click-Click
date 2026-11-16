'use server'

import { getDatabase } from "@/lib/mongodb";
import { cookies } from "next/headers";
import CdnUpload from "./cdn_upload";

const changePfp = async (file: File) => {
    if (!file) {
        return { success: false, message: "No file provided." };
    }

    const cookieStore = await cookies();
    const userId = cookieStore.get("id")?.value;

    if (!userId) {
        return { success: false, message: "User not found." };
    }

    const cdnUrl = await CdnUpload(file);

    const db = await getDatabase();
    const result = await db.collection("user_data").updateOne(
        { 'user_info.identity.id': userId },
        { $set: { 'slack_info.user.profile.image_original': cdnUrl } }
    );

    cookieStore.set("pfp", cdnUrl, { maxAge: 60 * 60 * 24, path: "/" });

    if (!result) {
        return { success: false, message: "Failed to update profile picture." };
    }

    return { success: true, message: "Profile picture updated successfully.", link: cdnUrl };
}

export default changePfp;