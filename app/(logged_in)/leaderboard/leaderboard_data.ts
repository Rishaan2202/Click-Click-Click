import { getDbData } from "@/actions/get_db_data";

type LeaderboardData = {
    values: Array<{ name: string; score: number, pfp: string }>;
}

const leaderboard_data = async () => {

    const db_info = await getDbData();

    if (db_info === null || !db_info) {
        return [{ name: "", score: 0, pfp: "" }];
    }

    const values: LeaderboardData['values'] = db_info.map((entry) => {
        if (entry === null || !entry || typeof entry.name !== 'string' || typeof entry.data.money !== 'number') {
            return { name: "", score: 0, pfp: "" };
        }
        console.log("Entry:", entry);
        return { name: entry.name || entry.user_info.identity.first_name, score: entry.data.money, pfp: entry.slack_info.user.profile.image_original };
    });

    if (!values || values == null) {
        return [{ name: "", score: 0, pfp: "" }];
    }

    const sortedValues = values.sort((a, b) => b.score - a.score);

    return sortedValues;
}

export { leaderboard_data };