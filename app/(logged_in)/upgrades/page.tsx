import GetBalance from "./get_balance"
import UpgradeContent from "./upgrades_content"
import { Suspense } from 'react'

const Upgrades = () => {

    return (
        <>
            <div>
                <h1 className='text-5xl m-4'>Upgrades</h1>
            </div>

            <Suspense fallback={<div className="flex items-center justify-center text-3xl">Loading Balance</div>}>
                <GetBalance />
            </Suspense>

            <UpgradeContent />
        </>
    )
}

export default Upgrades
