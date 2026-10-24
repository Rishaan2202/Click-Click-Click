import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Click!</div>
      <div>Click!</div>
      <div>Click!</div>
      <div className="flex">
      <button className="border border-gray-300 rounded px-2 py-1 w-[16vw]">
        <Link href={`/guest`}>
          Enter as a Guest
        </Link>
      </button>
      <button className="bg-[var(--twilight-indigo)] w-[16vw] text-white font-bold py-2 px-4 rounded">
        <Link href={`https://auth.hackclub.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_HACKCLUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code&scope=email%20openid%20profile%20name%20slack_id`}>
          Sign in with Hack Club
        </Link>
      </button>
      </div>
    </>
  );
}
