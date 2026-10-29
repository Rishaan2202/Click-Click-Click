'use client';

import { useRouter } from "next/navigation"

const NotFound = (): React.JSX.Element => {

    const router = useRouter();
    
    return (
        <div className="flex items-center h-screen justify-center flex-col gap-6">
            <h1 className="text-6xl">What the hell are you doin' here?</h1>
            <button className="bg-[var(--burnt-peach)] text-[var(--eggshell)] px-4 py-2 scale-[1.3] rounded mt-4 hover:scale-[1.5] hover: cursor-pointer" onClick={() => router.push('/home')}>Go Back Home</button>
        </div>
    )
}

export default NotFound
