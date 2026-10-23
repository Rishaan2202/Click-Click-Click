import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {

    const db = await getDatabase();
    const cookieStore = await cookies();

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

        if (!tockenResponse.ok) {

            return NextResponse.json({ error: "Failed to exchange code for access token" }, { status: 500 });
        
        } else {

            const accessToken: string = (response as any).access_token;

            const userInfo = await fetch("https://auth.hackclub.com/api/v1/me", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            const userData = await userInfo.json();

            if (!userInfo.ok) {

                return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
            
            } else {

                const slackInfo = fetch(`https://slack.com/api/users.info?user=${userData.identity.slack_id}`, {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${process.env.SLACK_ACCESS_TOKEN}`
                    }
                });

                const slackData = await (await slackInfo).json();

                if (!slackData.ok) {

                    return NextResponse.json({ error: "Failed to fetch slack user data" }, { status: 500 });
                
                } else {

                    console.error("Failed to fetch slack user data:", slackData);
                    cookieStore.set("name", userData.identity.name, { maxAge: 60 * 60 * 24, path: "/" });
                    cookieStore.set("pfp", slackData.profile.image_original, { maxAge: 60 * 60 * 24, path: "/" });
                    cookieStore.set("status_text", slackData.profile.status_text, { maxAge: 60 * 60 * 24, path: "/" });
                    
                    return NextResponse.json({ message: "Successfully fetched slack data", data: slackData }, { status: 200 });
                }
            }
        }

    } catch (error) {

        return NextResponse.json({ error: "Failed to exchange code for access token" }, { status: 500 });
    
    }
}