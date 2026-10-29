import { getDbInfo } from "../../../actions/get_db_info"

const GetUpgradesDbInfo = async () => {

    const user_info = await getDbInfo()

    if (user_info === null) {
        return (
            <div>
                <h1>Failed to load Balance</h1>
            </div>
        )
    }

  return (
    <div>
      <h1>Balance: {user_info.data.money}</h1>
      <h1>Upgrades: {JSON.stringify(user_info.data.upgrades)}</h1>
    </div>
  )
}

export default GetUpgradesDbInfo
