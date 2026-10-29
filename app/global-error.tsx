'use client';

import React, { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps): React.JSX.Element {

  useEffect(() => {
    console.error('Critical Error:', error);
  }, [error])


  return (
    <html lang='en'>
      <body className='flex items-center justify-center flex-col h-screen gap-6'>
        <h1 className='text-6xl'>A critical error occurred. Please try again later. If the problem still persists, contact @Rishaan on slack!</h1>
        <button className='bg-[var(--burnt-peach)] text-[var(--eggshell)] px-4 py-2 scale-[1.3] rounded mt-4 hover:scale-[1.5] hover: cursor-pointer' onClick={() => reset()}>Retry</button>
      </body>
    </html>
  )
}
