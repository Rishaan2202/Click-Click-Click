import { getInfo } from "./server_actions/get_info"
import Image from "next/image"
import { connection } from "next/server";

const page = async () => {

  await connection();

  const info = await getInfo();

  return (
    <>
      <div>Welcome {info.name}!</div>
      <Image src={info.pfp || "/default-profile.png"} alt="Profile Picture" width={50} height={50} className="rounded-xl absolute right-3 top-3" />
      <div>{info.status_text}</div>
    </>
  )
}

export default page
