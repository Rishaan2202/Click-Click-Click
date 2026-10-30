import { getDbData } from "@/actions/get_db_data";

type LeaderboardData = {
    values: Array<{ name: string; score: number }>;
}

const leaderboard_data = async () => {
    const db_info = await getDbData();

    if (db_info === null || !db_info) {
        return [{ name: "", score: 0 }];
    }

    const values: LeaderboardData['values'] = db_info.map((entry) => {
        if (entry === null || !entry || typeof entry.name !== 'string' || typeof entry.data.money !== 'number') {
            return { name: "", score: 0 };
        }
        return { name: entry.name, score: entry.data.money };
    });

    if (!values || values == null) {
        return [{ name: "", score: 0 }];
    }

    return values;
}

export { leaderboard_data };