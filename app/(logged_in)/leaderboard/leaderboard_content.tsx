import { leaderboard_data } from "./leaderboard_data";
import { connection } from "next/server";

type LeaderboardContentProps = {
    values: Array<{ name: string; score: number }>;
}

const LeaderboardContent = async () => {

    await connection();

    const values = await leaderboard_data()
    console.log("Leaderboard values:", values);

    if (!values || values == undefined || values === null) {
        return (
            <div>
                <p>Failed to load leaderboard data.</p>
            </div>
        )
    }

    return (
        <div>
            <h1 className='text-5xl m-4'>
                Leaderboard
            </h1>
            <div>
                {values.map((value, index) => (
                    <div key={index} className="flex justify-between m-2 p-2 bg-[var(--muted-teal)] rounded-xl">
                        <span className='flex w-[20vw] justify-center items-center'>{value.name}</span>
                        <span className='flex w-[10vw] justify-center items-center'>{value.score}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeaderboardContent