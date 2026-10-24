'use client'

import { useState } from 'react'
import Link from 'next/link'

// Server Action to create a guest session
import { createGuestSession } from './create_guest_session'
import { create } from 'domain'


export default function Guest() {

    const [name, setName] = useState("")

    const handleLogin = (name: string) => {
        setName(name)
        createGuestSession(name)
    }

    return (
        <div className='bg-[var(--burnt-peach)] min-h-screen flex flex-col items-center justify-center'>
            <div className='w-fit h-fit bg-[var(--eggshell)] rounded-lg p-8'>
            <div className=' flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-bold mb-4'>Welcome! What's your good name?</h2>
                <div className='flex gap-2'>
                    <input type="text" placeholder="Enter your name" onChange={(e) => {handleLogin(e.target.value)}} className=" w-[32vw] border border-gray-300 rounded px-2 py-1" />
                    <button className="bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-white font-bold py-2 px-4 rounded">
                        <Link href="/home">
                            Next
                        </Link>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}