import React from 'react'
import Link from 'next/link'

const guest = () => {
    return (
        <div>
            <h2>Welcome! What's your good name?</h2>
            <input type="text" placeholder="Enter your name" className="border border-gray-300 rounded px-2 py-1" />
            <button className="bg-[var(--twilight-indigo)] w-[16vw] text-white font-bold py-2 px-4 rounded">
                <Link href="/home">
                    Next
                </Link>
            </button>
        </div>
    )
}

export default guest
