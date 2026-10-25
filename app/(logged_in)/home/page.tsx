import { getInfo } from "./server_actions/get_info"
import Image from "next/image"
import { Suspense } from 'react'
import { connection } from "next/server";

const HomeContent = async () => {

  await connection();

  const info = await getInfo();

  return (
    <>
      <div className="text-xl">Welcome {info.name}!</div>
      <Image src={info.pfp || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png "} alt="Profile Picture" width={50} height={50} className="rounded-xl absolute right-3 top-3" />
      <div>{info.status_text}</div>
    </>
  )
}

export default function page() {
  return (
    <Suspense fallback={<div>Loading Home...</div>}>
      <HomeContent/>
    </Suspense>
  )
}
