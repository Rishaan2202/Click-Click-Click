'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import mascot from '@/assets/mascot.png'
import Image from 'next/image'

// Server Action to create a guest session
import { createGuestSession } from './create_guest_session'


export default function Guest() {

    const [name, setName] = useState("")
    const [error, setError] = useState([] as { state: boolean, message: string, id: number, start_fade: boolean }[])

    useEffect(() => {

        const fade_timer = setTimeout(() => {
            setError(prevErrors => prevErrors.map(e => ({ ...e, start_fade: true })));
        }, 1000);

        const timer = setTimeout(() => {
            setError([...error.slice(1)])
        }, 2000);

        timer;

        return () => {clearTimeout(fade_timer); clearTimeout(timer);}

    }, [error])


    const router = useRouter()

    const handleLogin = async () => {
        const id = crypto.getRandomValues(new Uint32Array(1))[0]

        if (name.trim() === "") {
            setError([...error, { state: true, message: "Please enter a valid name.", id, start_fade: false }])
            return
        } else if (name.trim().length > 20) {
            setError([...error, { state: true, message: "Name cannot exceed 20 characters.", id, start_fade: false }])
            return
        } else if (name.trim().length < 3) {
            setError([...error, { state: true, message: "Name must be at least 3 characters long.", id, start_fade: false }])
            return
        }

        await createGuestSession(name.trim())
        router.push('/home')
    }

    return (
        <>
            <div className='bg-[var(--burnt-peach)] overflow-y-hidden'>
                <div className='animate-slide-up'>
                    <div className='flex flex-col fixed top-0 right-0 items-end justify-end'>
                    {error.map((e, index) => (
                            <div key={e.id} className={`${e.start_fade ? "opacity-100" : "opacity-0"} transition-opacity duration-300 m-2 border border-3 border-dashed border-[var(--eggshell)] hover:scale-[1.1] w-fit min-w-[20vw] min-h-[15vh] h-fit text-white font-bold py-2 px-4 rounded`}>
                                <h1 className='flex justify-center'>Error</h1>
                                <h2>{e.state ? e.message : ""}</h2>
                            </div>
                    ))}
                    </div>
                    <div>
                        <Image src={mascot} alt="Hackalympics Mascot" width={90} height={90} className="absolute top-1/4 left-[69vw] m-4" />
                    </div>
                    <div className='min-h-screen flex flex-col items-center justify-center'>
                        <div className='w-fit h-fit bg-[var(--eggshell)] rounded-lg p-8'>
                            <div className=' flex flex-col items-center justify-center'>
                                <h2 className='text-2xl font-bold mb-4'>Welcome! What's your good name?</h2>
                                <div className='flex gap-2'>

                                    <input type="text" placeholder="Enter your name" onChange={(e) => {
                                        setName(e.target.value);
                                    }}

                                        className=" w-[32vw] border border-gray-300 rounded px-2 py-1" />

                                    <button onClick={handleLogin} className="transition-transform duration-200 ease-in-out bg-[var(--twilight-indigo)] hover:scale-[1.1] hover:cursor-pointer w-[10vw] text-white font-bold py-2 px-4 rounded" >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}