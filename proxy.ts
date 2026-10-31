import { NextResponse, NextRequest } from "next/server";
import { getUserInfo } from "./actions/get_user_info";

export async function proxy(request: NextRequest) {

    const user_info = await getUserInfo();

    if (request.nextUrl.pathname.startsWith('/home') || request.nextUrl.pathname.startsWith('/upgrades') || request.nextUrl.pathname.startsWith('/leaderboard') || request.nextUrl.pathname.startsWith('/shop') || request.nextUrl.pathname.startsWith('/stats') || request.nextUrl.pathname.startsWith('/settings')) {
        if (!user_info || user_info === null) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

}

export const config =  {
    matcher: [
        '/:path*'
    ]
}