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
        <div>
            <h1>Something went wrong!</h1>
            <p>An unexpected error occurred: {error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}
