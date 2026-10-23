import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const db = await getDatabase();
    const { searchParams } = new URL(request.url);
    const code: string | null = searchParams.get("code");
    const error: string | null = searchParams.get("error");

    if (!code || error) {
        return NextResponse.json({ error: "Missing code parameter" }, { status: 400 });
    }

    try {

        const tockenResponse = await fetch("https://auth.hackclub.com/oauth/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "client_id": process.env.NEXT_PUBLIC_HACKCLUB_CLIENT_ID,
                "client_secret": process.env.HACKCLUB_CLIENT_SECRET,
                "redirect_uri": process.env.NEXT_PUBLIC_REDIRECT_URI, // Needs change while production
                "code": code,
                "grant_type": "authorization_code"
            })
        });

        const response: Object = await tockenResponse.json();

        return NextResponse.json({ message: "Successfully exchanged code for access token", data: response }, { status: 200 });
        // if (!tockenResponse.ok) {
        //     return NextResponse.json({ error: "Failed to exchange code for access token" }, { status: 500 });
        // } else {
        //     const accessToken: string = (response as any).access_token;
        //     const userInfo = await fetch("https://auth.hackclub.com/api/v1/me", {
        //         method: "GET",
        //         headers: {
        //             'Authorization': `Bearer ${accessToken}`
        //         }
        //     });
        // }

    } catch (error) {
        return NextResponse.json({ error: "Failed to exchange code for access token" }, { status: 500 });
    }
}