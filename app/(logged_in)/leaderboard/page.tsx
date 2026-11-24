import { Suspense } from "react"
import LeaderboardContent from "./leaderboard_content"

const Leaderboard = async () => {

  return (
    <div className='animate-slide-down'>
      <Suspense fallback={<div>Loading Leaderboard...</div>}>
        <LeaderboardContent />
      </Suspense>
    </div>
  )
}

export default Leaderboard