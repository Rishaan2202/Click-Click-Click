import { Suspense } from "react"
import LeaderboardContent from "./leaderboard_content"
import { leaderboard_data } from "./leaderboard_data"

const Leaderboard = async () => {

  const data = await leaderboard_data()

  return (
    <div>
      <Suspense fallback={<div>Loading Leaderboard...</div>}>
        <LeaderboardContent values={data} />
      </Suspense>
    </div>
  )
}

export default Leaderboard
