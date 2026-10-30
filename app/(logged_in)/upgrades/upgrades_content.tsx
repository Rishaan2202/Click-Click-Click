'use client'

import handleBuyUpgrade from "./handle_purchase"

const UpgradeContent = () => {

    const handlePurchase = (upgradeName: string, upgradeLevel: number, upgradeCost: number) => {
        handleBuyUpgrade(upgradeName, upgradeLevel, upgradeCost).then(() => {
            window.location.reload();
        });
    }

    return (
        <div>
            <div className='flex flex-wrap gap-4 m-2 items-center justify-center'>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Auto-Clicker Lvl 1</h2>
                    <p className='text-[var(--eggshell)] m-2'>Let your CPU click for You!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>$20</h1>
                        <button className='hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' onClick={() => handlePurchase("Auto-Clicker Lvl 1", 1, 20)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Multiplier Lvl 1</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>$100</h1>
                        <button className='hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' onClick={() => handlePurchase("Multiplier Lvl 1", 1, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Multiplier Lvl 1</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' onClick={() => handlePurchase("Multiplier Lvl 1", 1, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Multiplier</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' onClick={() => handlePurchase("Multiplier Lvl 1", 1, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Multiplier</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' onClick={() => handlePurchase("Multiplier Lvl 1", 1, 100)}>Buy</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-[var(--burnt-peach)] w-fit h-fit rounded-lg p-4 m-2'>
                    <h2 className='text-2xl m-2'>Multiplier</h2>
                    <p className='text-[var(--eggshell)] m-2'>Multiplies the money you get per click!</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <h1 className='bg-[var(--eggshell)] p-2 rounded-xl'>Lvl 1</h1>
                        <button className='hover:scale-[1.1] hover:cursor-pointer bg-[var(--twilight-indigo)] hover:scale-[1.1] w-[10vw] text-[var(--eggshell)] font-bold py-2 px-4 rounded m-2' onClick={() => handlePurchase("Multiplier Lvl 1", 1, 100)}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpgradeContent
