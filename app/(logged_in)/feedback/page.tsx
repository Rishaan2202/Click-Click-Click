'use client'

import { useState, useEffect, useRef } from 'react'
import { submitFeedback } from './submit'
import { fetchFeedbacks } from './fetch_feedbacks'
import Image from 'next/image'
import Link from 'next/link'

type feedback = {
  feedback: string
  name: string
  pfp: string
  timestamp: Date
}

const Feedback = () => {

  const [feedback, setFeedback] = useState("")
  const [feedbacks, setFeedbacks] = useState([] as feedback[])

  const feedbackInputRef = useRef<HTMLInputElement>(null)

  const fetchAllFeedbacks = async () => {

    try {
      const feedbacks = await fetchFeedbacks();
      setFeedbacks(feedbacks as any);
    } catch (error) {
      throw new Error('Failed to fetch feedbacks');
    }

  }

  useEffect(() => {
    fetchAllFeedbacks();
  }, [])


  const handleSubmit = async () => {

    try {

      await submitFeedback(feedback);
      setFeedback("");

      if (feedbackInputRef.current) {
        feedbackInputRef.current.value = "";
      }

      fetchAllFeedbacks();

    } catch (error) {

      throw new Error('Failed to submit feedback');

    }

  }

  return (
    <>
      <div className='animate-slide-down'>

        <Link href={`/home`} className='absolute right-0 top-0 transition-transform duration-200 ease-in-out bg-[var(--twilight-indigo)] hover:scale-[1.1] hover:cursor-pointer text-white font-bold py-2 px-4 rounded m-4'>
          Back to home
        </Link>

        <h1 className='m-2 text-5xl'>Feedback</h1>
        <input ref={feedbackInputRef} type='text' onChange={(e) => setFeedback(e.target.value)} placeholder='Enter your feedback here...' className='m-2 ml-4 p-2 rounded-xl bg-[var(--muted-teal)] w-[85vw] max-sm:w-[80vw]' />
        <button onClick={handleSubmit} className='w-[10vw] m-2 p-2 rounded-xl bg-[var(--muted-teal)] hover:scale-[1.1] hover:cursor-pointer transition-transform duration-300 ease-in-out'>Submit</button>

        <div>
          {feedbacks.map((feedback, index) => {
            return (<div key={index}>
              <div className='flex flex-col gap-2 m-4 p-2 bg-[var(--burnt-peach)] rounded-xl'>
                <div className='flex items-center gap-2'>
                  <Image src={feedback.pfp || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png"} alt="Profile Picture" width={30} height={30} className="rounded-xl left-3 top-3" />
                  <p className='text-[var(--apricot-cream)]'>{feedback.name}</p>
                </div>
                <p>{feedback.feedback}</p>
              </div>
            </div>)
          })}
        </div>

      </div>
    </>
  )
}

export default Feedback
