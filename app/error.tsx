'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string};
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps): React.JSX.Element {

    useEffect(() => {
        console.error('Unexpected error:', error);
    }, [error]);

    return (
        <div className='flex items-center justify-center flex-col h-screen gap-6'>
            <h1 className='text-6xl'>Something went wrong!</h1>
            <button className='bg-[var(--burnt-peach)] text-[var(--eggshell)] px-4 py-2 scale-[1.3] rounded mt-4 hover:scale-[1.5] hover: cursor-pointer' onClick={() => reset()}>Try again</button>
        </div>
    )
}
