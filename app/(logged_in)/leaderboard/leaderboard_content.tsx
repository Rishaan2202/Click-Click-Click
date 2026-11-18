import { leaderboard_data } from "./leaderboard_data";
import { connection } from "next/server";

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
                <div className="flex w-[60vw] justify-between m-2 p-2 bg-[var(--burnt-peach)] rounded-xl">
                    <div className='flex w-[20vw] justify-between items-center'>
                        <span className='mx-2'>#</span>
                        <div className='flex w-[15vw] items-center justify-center'>
                            <span>Name</span>
                        </div>
                    </div>
                    <span className='flex w-[10vw] justify-center items-center'>Money</span>
                </div>

                {values.map((value, index) => (
                    <div className="flex items-center justify-left" key={index}>
                        <div key={index} className="flex w-[60vw] justify-between m-2 p-2 bg-[var(--muted-teal)] rounded-xl">
                            <div className='flex w-[20vw] justify-between items-center'>
                                <span className='mx-2'>{index + 1}</span>
                                <div className='flex w-[15vw] items-center justify-center'>
                                    <span>{value.name}</span>
                                </div>
                            </div>
                            <span className='flex w-[10vw] justify-center items-center'>{value.score}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeaderboardContent