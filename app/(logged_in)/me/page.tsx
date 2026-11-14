import { getInfo } from "../../../actions/get_cookie_info"
import { getUserInfo } from "@/actions/get_user_info";
import Image from 'next/image'
import { connection } from 'next/server'
import { Suspense } from "react";

const MeContent = async () => {

    await connection();

    const userInfo = await getInfo();
    const userData = await getUserInfo();

    if (!userInfo || !userData) {
        return (
            <>
                <div className="flex items-center justify-center h-screen text-6xl overflow-y-hidden">
                    Error: User information not found.
                </div>
            </>
        )
    }

    return (
        <>
            <div className='flex items-center justify-start m-2'>
                <Image src={userInfo.pfp || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png"} alt="Profile Picture" width={200} height={200} className="rounded-xl left-3 top-3" />
                <div>
                    <h1 className="text-4xl m-2">{userInfo.name}</h1>
                    <h1 className="text-2xl m-2">Money: ${userData.data.money}</h1>
                    {/* <h1 className="text-2xl m-2">Upgrades: {userData.data.upgrades}</h1> */}
                    <h1 className="text-2xl m-2">Joined on {userData.login_time.toLocaleDateString()}</h1>
                </div>
            </div>
        </>
    )
}

const Me = () => {
    return (
        <>
            <Suspense fallback={<div className="flex items-center justify-center h-screen text-6xl overflow-y-hidden">Loading Profile...</div>}>
                <MeContent />
            </Suspense>
        </>
    )
}

export default Me