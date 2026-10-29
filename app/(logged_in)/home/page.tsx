import { getInfo } from "../../../actions/get_cookie_info"
import Image from "next/image"
import { Suspense } from 'react'
import { connection } from "next/server";
import Home_Content from "./home_content";

const HomeContent = async () => {

  await connection();

  const info = await getInfo();

  return (
    <>
      <div className="flex m-2">
        <Image src={info.pfp || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png"} alt="Profile Picture" width={50} height={50} className="rounded-xl left-3 top-3" />
        <h1 className="text-3xl m-2">{info.name}</h1>
      </div>
      <Home_Content/>
    </>
  )
}

export default function page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center text-7xl">Loading Home...</div>}>
      <HomeContent />
    </Suspense>
  )
}