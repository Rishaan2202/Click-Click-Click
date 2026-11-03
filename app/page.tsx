import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-h-screen">

        <div className="max-sm:text-6xl text-9xl absolute top-1/8 left-1/30 rotate-[-12deg] hover:scale-[1.2] hover:rotate-[4deg]">Click!</div>
        <div className="max-sm:text-5xl max-sm:top-1/2 max-sm:left-9/16 text-8xl absolute top-11/24 left-1/4 rotate-[8deg] hover:scale-[1.2] hover:rotate-[-4deg]">Click!</div>
        <div className="max-sm:text-6xl text-9xl max-sm:top-3/8 absolute top-3/4 left-1/20 rotate-[-4deg] hover:scale-[1.2] hover:rotate-[4deg]">Click!</div>
        <div className="max-sm:text-5xl max-sm:top-1/16 max-sm:left-5/8 text-7xl absolute top-1/8 left-7/16 rotate-[4deg] hover:scale-[1.2] hover:rotate-[-4deg]">Click!</div>
        <div className="max-sm:text-6xl max-sm:left-1/2 max-sm:top-1/4 text-9xl absolute top-5/16 left-15/24 rotate-[-4deg] hover:scale-[1.2] hover:rotate-[4deg]">Click!</div>

        <div className="max-sm:flex max-sm:left-0 max-sm:justify-center max-sm:flex-col max-sm:items-center max-sm:w-screen max-sm:top-2/3 absolute top-2/3 left-5/9">

          <button className="max-sm:w-[85vw] max-sm:h-[60px] max-sm:text-2xl bg-[var(--twilight-indigo)] hover:scale-[1.2] w-[32vw] m-2 text-3xl text-[var(--eggshell)] font-bold py-2 px-4 rounded">
            <Link href={`https://auth.hackclub.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_HACKCLUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code&scope=email%20openid%20profile%20name%20slack_id`}>
              Sign in with Hack Club
            </Link>
          </button>
          <button className="max-sm:w-[85vw] max-sm:h-[60px] max-sm:text-2xl bg-[var(--burnt-peach)] hover:scale-[1.2] w-[32vw] m-2 font-bold text-3xl py-2 px-4 rounded">
            <Link href={`/guest`}>
              Continue as Guest
            </Link>
          </button>

        </div>
      </div>
    </>
  );
}
