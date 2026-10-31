import { getUserInfo } from "../../../actions/get_user_info"

const GetBalance = async () => {

  const user_info = await getUserInfo()

  if (user_info === null) {
    return (
      <div>
        <h1>Failed to load Balance</h1>
      </div>
    )
  }

  return (
    <div className="flex items-centre">
      <div>
        <h1 className='text-5xl m-4'>Upgrades</h1>
      </div>
      <div className="w-[50vw] flex items-center justify-centre gap-4 bg-[var(--muted-teal)] rounded-xl p-4 m-2 relative">
        <h1 className="bg-[var(--eggshell)] p-2 rounded-xl">Balance: ${user_info.data.money}</h1>
        <h1 className="bg-[var(--eggshell)] p-2 rounded-xl">Upgrades: {(user_info.data.upgrades).toString()}</h1>
      </div>
    </div>
  )
}

export default GetBalance
