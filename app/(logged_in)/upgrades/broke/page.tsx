'use client'

import { useRouter } from "next/navigation"

const NotEnoughMoney = () => {

  const router = useRouter();

  return (
    <>
    <div className='bg-[var(--burnt-peach)] flex flex-col justify-center items-center h-screen'>
      <div className="flex flex-col items-center justify-center h-fit bg-[var(--eggshell)] p-4 rounded-xl">
      <h1 className='text-7xl m-4'>Not Enough Money</h1>
      <p className="text-3xl">Looks like you're broke :P</p>
      </div>
      <button onClick={() => {router.push("/home")}} className="bg-[var(--muted-teal)] mt-4 hover:cursor-pointer hover:scale-[1.1] py-2 px-4 rounded">
        Earn Some Money
      </button>
    </div>
    </>
  )
}

export default NotEnoughMoney
