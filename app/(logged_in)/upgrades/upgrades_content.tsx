'use client'

import { useState, useEffect } from "react"
import { SyncUpgrades } from "./sync_upgrades"
import handleBuyUpgrade from "./handle_purchase"
import { useRouter } from "next/navigation"

const UpgradeContent = () => {

    const router = useRouter();

    const [upgrades, setUpgrades] = useState<any>(null);

    const fetchUpgrades = async () => {

        const data = await SyncUpgrades();

        console.log("Fetched upgrades:", data);

        setUpgrades(data);

        let auto_clicker = data?.find((u: { name: string; level: number }) => u.name === "Auto-Clicker") ?? 0;
        setAuto_clicker_level(auto_clicker?.level);
    }

    useEffect(() => {
        fetchUpgrades();
    }, [])

    
    
    const [auto_clicker_level, setAuto_clicker_level] = useState(0)
    const [auto_clicker_price, setAuto_clicker_price] = useState(auto_clicker_level === 0 ? 20 : (auto_clicker_level * 100) + 20)
    const [multiplier_level, setMultipler_level] = useState(1)
    const [multiplier_price, setMultipler_price] = useState(100)
    const [placeholder_1_level, setPlaceholder_1_level] = useState(1)
    const [placeholder_2_level, setPlaceholder_2_level] = useState(1)
    const [placeholder_3_level, setPlaceholder_3_level] = useState(1)
    const [placeholder_4_level, setPlaceholder_4_level] = useState(1)
    
    const [pending, setPending] = useState(false)
    
    useEffect(() => {

        setAuto_clicker_price(auto_clicker_level === 0 ? 20 : (auto_clicker_level * 100) + 20);
      
    }, [auto_clicker_level])

    const handlePurchase = (upgradeName: string, upgradeLevel: number, upgradeCost: number) => {

        setPending(true);

        if (upgradeName === "Auto-Clicker") {
            setAuto_clicker_level(upgradeLevel + 1);
            setAuto_clicker_price((auto_clicker_level * 100) + 20);
        } else if (upgradeName === "Multiplier") {
            setMultipler_level(upgradeLevel + 1);
            setMultipler_price((multiplier_level * 15) + 30);
        } else if (upgradeName === "Placeholder 1") {
            setPlaceholder_1_level(upgradeLevel + 1);
        } else if (upgradeName === "Placeholder 2") {
            setPlaceholder_2_level(upgradeLevel + 1);
        } else if (upgradeName === "Placeholder 3") {
            setPlaceholder_3_level(upgradeLevel + 1);
        } else if (upgradeName === "Placeholder 4") {
            setPlaceholder_4_level(upgradeLevel + 1);
        }

        handleBuyUpgrade(upgradeName, upgradeLevel, upgradeCost).then(() => {
            router.refresh();
            setPending(false);
        });
    }

    return (
        <div>

            <button onClick={() => router.push('/home')} className='transition-transform duration-200 ease-in-out bg-[var(--twilight-indigo)] hover:scale-[1.1] w-fit text-[var(--eggshell)] fixed right-2 top-2 hover:cursor-pointer font-bold py-2 px-4 rounded m-2'>Back to Home</button>

            <div className='flex flex-wrap gap-4 m-2 items-center justify-center'>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Auto-Clicker</h2>
                    <p className='text-[var(--eggshell)] m-2'>Let your CPU click for You!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>${auto_clicker_price}</h1>
                        <button className='transition-transform duration-200 ease-in-out hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' disabled={pending} onClick={() => handlePurchase("Auto-Clicker", auto_clicker_level, 20)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Multiplier</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>${multiplier_price}</h1>
                        <button className='transition-transform duration-200 ease-in-out hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' disabled={pending} onClick={() => handlePurchase("Multiplier", multiplier_level, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Placeholder 1</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='transition-transform duration-200 ease-in-out hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' disabled={pending} onClick={() => handlePurchase("Placeholder 1", placeholder_1_level, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Placeholder 2</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='transition-transform duration-200 ease-in-out hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' disabled={pending} onClick={() => handlePurchase("Placeholder 2", placeholder_2_level, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Placeholder 3</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='transition-transform duration-200 ease-in-out hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' disabled={pending} onClick={() => handlePurchase("Placeholder 3", placeholder_3_level, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Placeholder 4</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='transition-transform duration-200 ease-in-out hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' disabled={pending} onClick={() => handlePurchase("Placeholder 4", placeholder_4_level, 100)}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpgradeContent
