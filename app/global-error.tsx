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
      <body>
        <h1>
          A critical error occurred. Please try again later. If the problem still persists, contact @Rishaan on slack!
        </h1>
        <button onClick={() => reset()}>Retry</button>
      </body>
    </html>
  )
}
