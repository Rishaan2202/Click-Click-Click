import { getInfo } from "./server_actions/get_info"
import Image from "next/image"
import { Suspense } from 'react'
import { connection } from "next/server";

const HomeContent = async () => {

  await connection();

  const info = await getInfo();

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex m-2">
          <Image src={info.pfp || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png "} alt="Profile Picture" width={50} height={50} className="rounded-xl left-3 top-3" />
          <h1 className="text-3xl m-2">{info.name}</h1>
        </div>
        <div className=" relative right-[11vw] hover:translate-x-[11vw] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-4 bg-[var(--muted-teal)] w-[16vw] h-[83vh] rounded-r-xl">
        </div>
      </div>
      <div className="absolute border-4 border-dashed border-[var(--burnt-peach)] w-[80vw] right-0 h-[90vh] top-[5vh] right-[3vw] rounded-xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Click Here</h1>
      </div>
    </>
  )
}

export default function page() {
  return (
    <Suspense fallback={<div>Loading Home...</div>}>
      <HomeContent />
    </Suspense>
  )
}
