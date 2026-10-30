import LeaderboardContent from "./leaderboard_content"
import { leaderboard_data } from "./leaderboard_data"

const Leaderboard = async () => {

  const data = await leaderboard_data()

  return (
    <div>
      <div><LeaderboardContent values={data} /></div>
    </div>
  )
}

export default Leaderboard
