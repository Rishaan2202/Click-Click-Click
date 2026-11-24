'use client'

import Image from 'next/image'
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { MeData } from "./me_data";
import InputImage from "./input_image";

const MeContent = () => {

    const [data, setData] = useState({ name: "", money: 0, time: "", pfp: "" });

    useEffect(() => {

        const fetchData = async () => {

            const meData = await MeData();
            if (meData === undefined) {
                console.error("Failed to fetch user data.");
                return;
            }
            setData(meData);

        }

        fetchData();

    }, [])


    let pfp_link = data.pfp;

    return (
        <>
            <div className='animate-slide-down flex items-center h-screen overflow-y-hidden justify-center m-2'>
                <div>
                    <Image src={pfp_link || "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png"} alt="Profile Picture" width={258} height={258} className="rounded-xl left-3 top-3" />
                    <InputImage />
                </div>
                <div>
                    <h1 className="text-4xl m-2">{data.name}</h1>
                    <h1 className="text-2xl m-2">Money: ${data.money}</h1>
                    <h1 className="text-2xl m-2">Joined on {data.time}</h1>
                </div>
            </div>
        </>
    )
}

const Me = () => {
    return (
        <>
            <Suspense fallback={<div className="animate-slide-down flex items-center justify-center h-screen text-6xl overflow-y-hidden">Loading Profile...</div>}>
                <MeContent />
            </Suspense>
        </>
    )
}

export default Me