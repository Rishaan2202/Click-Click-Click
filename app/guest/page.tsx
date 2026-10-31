'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Server Action to create a guest session
import { createGuestSession } from './create_guest_session'


export default function Guest() {

    const [name, setName] = useState("")

    const router = useRouter()

    const handleLogin = async () => {
        await createGuestSession(name.trim())
        router.push('/home')
    }

    return (
        <div className='bg-[var(--burnt-peach)] min-h-screen flex flex-col items-center justify-center'>
            <div className='w-fit h-fit bg-[var(--eggshell)] rounded-lg p-8'>
            <div className=' flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-bold mb-4'>Welcome! What's your good name?</h2>
                <div className='flex gap-2'>
                    <input type="text" placeholder="Enter your name" onChange={(e) => {setName(e.target.value)}} className=" w-[32vw] border border-gray-300 rounded px-2 py-1" />
                        <button onClick={handleLogin} className="bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-white font-bold py-2 px-4 rounded" >
                            Next
                        </button>
                </div>
            </div>
            </div>
        </div>
    )
}