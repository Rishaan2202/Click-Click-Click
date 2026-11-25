'use server'

import { getUserInfo } from "@/actions/get_user_info"

export const SyncUpgrades = async function() {
    
    const dbData = await getUserInfo();

    if (!dbData) {
        throw new Error("User data not found");
    }

    const upgrades = dbData.data.upgrades;
    return upgrades;
}