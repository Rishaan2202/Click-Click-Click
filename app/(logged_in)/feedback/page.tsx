import React from 'react'

const Feedback = () => {
  return (
    <>
    <div className='animate-slide-down'>
      <h1 className='m-2 text-5xl'>Feedback</h1>
      <p className='m-2 text-3xl bg-[var(--muted-teal)] w-fit p-2 rounded-xl'>Under Construction</p>
      <input type='text' placeholder='Enter your feedback here' className='m-2 p-2 rounded-xl bg-[var(--muted-teal)] w-[50vw] max-sm:w-[80vw]' />
      <button disabled className='m-2 p-2 rounded-xl bg-[var(--muted-teal)] hover:scale-[1.1] hover:cursor-pointer transition-transform duration-300 ease-in-out'>Disabled for now</button>
    </div>
    </>
  )
}

export default Feedback
