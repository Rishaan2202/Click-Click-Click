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
            <div className="flex gap-4 items-center">
                <h1 className='text-5xl m-4'>
                    Leaderboard
                </h1>
                <div>
                    <select className="bg-[var(--muted-teal)] w-[8vw] rounded-xl p-2 m-2">
                        <option className="rounded-xl" value="all">Money</option>
                        <option className="rounded-xl" value="friends">Likes</option>
                        <option className="rounded-xl" value="local">Hours</option>
                    </select>
                </div>
            </div>
            <div className="transition-transform duration-200 ease-in-out fixed hover:scale-[1.1] flex flex-col justify-center items-center gap-2 top-[3vw] right-[10vw]">
                <img src={values[0].pfp} className="w-[15vw] right-10 rounded-xl"></img>
                <h1 className="text-5xl">{values[0].name}</h1>
            </div>
            <div className="transition-transform duration-200 ease-in-out fixed hover:scale-[1.1] flex flex-col justify-center items-center gap-2 top-[25vw] right-[20vw]">
                <img src={values[1].pfp} className="w-[12vw] right-10 rounded-xl"></img>
                <h1 className="text-4xl">{values[1].name}</h1>
            </div>
            <div className="transition-transform duration-200 ease-in-out fixed hover:scale-[1.1] flex flex-col justify-center items-center gap-2 top-[27vw] right-[5vw]">
                <img src={values[2].pfp} className="w-[8vw] right-10 rounded-xl"></img>
                <h1 className="text-3xl">{values[2].name}</h1>
            </div>
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
                                <div className='flex w-[15vw] gap-2 items-center justify-center'>
                                    <span><img src={value.pfp} className="w-[2vw] rounded-sm"></img></span>
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