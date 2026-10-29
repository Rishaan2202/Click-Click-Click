'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { syncMoney } from '../../../actions/sync_money'
import { getDbInfo } from '@/actions/get_db_info'

const Home_Content = () => {

    let [score, setScore] = useState(0)
    const router = useRouter()

    useEffect(() => {

        const getData = async () => {

            const db_info = await getDbInfo();

            if (!db_info || db_info === null) {
                router.push('/error')
                return
            }

            setScore(db_info.data.money)
        }

        getData();

    }, [])

    const handleRouter = (path: string) => {
        syncMoney(score)
        router.push(path)
    }

    return (
        <div>
            <div className="flex flex-col gap-1">


                <div className='hover:translate-x-[11vw] transition-transform duration-300 ease-in-out'>
                    <div className="relative right-[14vw] flex flex-col items-center justify-center gap-4 bg-[var(--muted-teal)] w-[16vw] h-[53vh] rounded-r-xl">
                        <div className="bg-[var(--muted-teal)] w-[3vw] h-[13vh] rounded-r-xl relative left-[9vw] flex flex-col items-center justify-center gap-4">
                            <h1 className="text-xl">➜</h1>
                        </div>
                    </div>
                    <div className="relative bottom-[53vh] right-[14vw] flex flex-col items-center justify-center gap-4 bg-[var(--muted-teal)] w-[16vw] h-[53vh] rounded-r-xl">
                        <div className='gap-3 flex flex-col items-center justify-center'>
                            <button onClick={() => handleRouter('/upgrades')} className='hover:cursor-pointer hover:scale-[1.1] bg-[var(--twilight-indigo)] rounded-xl w-[10vw] relative left-[1vw] h-[7vh] flex flex-col align-center justify-center'>
                                <span className='text-center text-[var(--eggshell)]'>Upgrades</span>
                            </button>
                            <button onClick={() => handleRouter('/shop')} className='hover:cursor-pointer hover:scale-[1.1] bg-[var(--twilight-indigo)] rounded-xl w-[10vw] relative left-[1vw] h-[7vh] flex flex-col align-center justify-center'>
                                <span className='text-center text-[var(--eggshell)]'>Shop</span>
                            </button>
                            <button onClick={() => handleRouter('/leaderboard')} className='hover:cursor-pointer hover:scale-[1.1] bg-[var(--twilight-indigo)] rounded-xl w-[10vw] relative left-[1vw] h-[7vh] flex flex-col align-center justify-center'>
                                <span className='text-center text-[var(--eggshell)]'>Leaderboard</span>
                            </button>
                            <button onClick={() => handleRouter('/stats')} className='hover:cursor-pointer hover:scale-[1.1] bg-[var(--twilight-indigo)] rounded-xl w-[10vw] relative left-[1vw] h-[7vh] flex flex-col align-center justify-center'>
                                <span className='text-center text-[var(--eggshell)]'>Stats</span>
                            </button>
                            <button onClick={() => handleRouter('/idk')} className='hover:cursor-pointer hover:scale-[1.1] bg-[var(--twilight-indigo)] rounded-xl w-[10vw] relative left-[1vw] h-[7vh] flex flex-col align-center justify-center'>
                                <span className='text-center text-[var(--eggshell)]'>IDK</span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bottom-[53vh] relative right-[14vw] mt-1 hover:translate-x-[11vw] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-4 bg-[var(--muted-teal)] w-[16vw] h-[28vh] rounded-r-xl">
                    <div className="bg-[var(--muted-teal)] w-[3vw] h-[13vh] rounded-r-xl relative left-[9vw] flex flex-col items-center justify-center gap-4">
                        <h1 className="text-xl">➜</h1>
                    </div>
                </div>


            </div>

            <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/5 z-1 top-0 flex flex-col items-center justify-center bg-[var(--twilight-indigo)] w-[20vw] h-[12vh] rounded-b-xl">
                <div className="text-[var(--eggshell)] flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl">Money: ${score}</h1>
                </div>
            </div>

            <button onClick={() => { setScore(score + 1) }} className="absolute border-4 border-dashed border-[var(--burnt-peach)] w-[80vw] right-0 h-[90vh] top-[5vh] right-[3vw] rounded-xl flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Click Here</h1>
            </button>
        </div>
    )
}

export default Home_Content