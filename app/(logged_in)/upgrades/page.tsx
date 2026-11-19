import GetBalance from "./get_balance"
import UpgradeContent from "./upgrades_content"
import { Suspense } from 'react'

const Upgrades = () => {

    return (
        <>
            <div className="animate-slide-down">
                <Suspense fallback={<div className="flex items-center justify-center text-3xl">Loading Balance</div>}>
                    <GetBalance />
                </Suspense>

                <UpgradeContent />
            </div>
        </>
    )
}

export default Upgrades
