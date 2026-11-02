'use server';

import { syncMoney } from '@/actions/sync_money';
import { getUserInfo } from '@/actions/get_user_info';
import { redirect } from 'next/navigation';
import { getDatabase } from '@/lib/mongodb';

const GetBalance = async () => {

    const user_info = await getUserInfo();

    if (user_info === null) {
        return null;
    }

    return user_info.data.money;

}

const handleBuyUpgrade = async (upgradeName: string, upgradeLevel: number, upgradeCost: number) => {

    const balance = await GetBalance();

    if (balance === null) {
        console.error("Failed to get balance");
        return;
    }
    if (balance < upgradeCost) {
        console.log("Not enough money to buy upgrade");
        redirect('/upgrades/broke');
    }

    const result = await syncMoney(balance - upgradeCost);

    if (result === null) {
        console.error("Failed to sync money");
        return;
    }

    const db = await getDatabase();

    const upgrades = (await getUserInfo())?.data.upgrades || [];

    if (upgrades.some((upgrade: { name: string; level: number }) => upgrade.name === upgradeName && upgrade.level >= upgradeLevel)) {
        db.collection('user_data').updateOne(
            { "user_info.identity.id": (await getUserInfo())?.user_info.identity.id, "data.upgrades": { $elemMatch: { name: upgradeName, level: upgradeLevel } } },
            { $inc: {'data.upgrades.$.level': 1} }
        );
        console.log(`Upgrade ${upgradeName} level ${upgradeLevel} already purchased`);
        return;
    }

    db.collection('user_data').updateOne(
        { "user_info.identity.id": (await getUserInfo())?.user_info.identity.id },
        { $set: { [`data.upgrades`]: [...(await getUserInfo())?.data.upgrades, { name: upgradeName, level: upgradeLevel }] } }
    );
    console.log(`Purchased upgrade: ${upgradeName} for $${upgradeCost}`);
}

export default handleBuyUpgrade;