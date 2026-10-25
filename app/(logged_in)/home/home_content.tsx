'use client'

import { useState } from 'react'

const Home_Content = () => {

    let [score, setScore] = useState(0)

    return (
        <div>
            <div className="flex flex-col gap-1">

                

                <div className=" relative right-[14vw] hover:translate-x-[11vw] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-4 bg-[var(--muted-teal)] w-[16vw] h-[53vh] rounded-r-xl">
                    <div className="bg-[var(--muted-teal)] w-[3vw] h-[13vh] rounded-r-xl relative left-[9vw] flex flex-col items-center justify-center gap-4">
                        <h1 className="text-xl">➜</h1>
                    </div>
                </div>

                <div className=" relative right-[14vw] mt-1 hover:translate-x-[11vw] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-4 bg-[var(--muted-teal)] w-[16vw] h-[28vh] rounded-r-xl">
                    <div className="bg-[var(--muted-teal)] w-[3vw] h-[13vh] rounded-r-xl relative left-[9vw] flex flex-col items-center justify-center gap-4">
                        <h1 className="text-xl">➜</h1>
                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/5 z-1 top-0 flex flex-col items-center justify-center bg-[var(--twilight-indigo)] w-[20vw] h-[12vh] rounded-b-xl">
                <div className="text-[var(--eggshell)] flex flex-col items-center justify-center gap-4">
                    <h1 className="text-xl">Score: {score}</h1>
                </div>
            </div>

            <button onClick={() => {setScore(score + 1)}} className="absolute border-4 border-dashed border-[var(--burnt-peach)] w-[80vw] right-0 h-[90vh] top-[5vh] right-[3vw] rounded-xl flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Click Here</h1>
            </button>
        </div>
    )
}

export default Home_Content
