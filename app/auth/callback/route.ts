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
                "redirect_uri": process.env.NEXT_PUBLIC_REDIRECT_URI,
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

                    console.error("Failed to fetch slack slack data:", slackData);
                    cookieStore.set("name", userData.identity.first_name, { maxAge: 60 * 60 * 24, path: "/" });
                    cookieStore.set("pfp", slackData.user.profile.image_original, { maxAge: 60 * 60 * 24, path: "/" });
                    cookieStore.set("status_text", slackData.user.profile.status_text, { maxAge: 60 * 60 * 24, path: "/" });
                    cookieStore.set("id", userData.identity.id, { maxAge: 60 * 60 * 24, path: "/" });

                    const signed_in_before = await db.collection("user_data").findOne({ "user_info.identity.id": userData.identity.id });

                    if (signed_in_before) {

                        db.collection("user_data").updateOne({ "user_info.identity.id": userData.identity.id }, { $set: { user_info: userData, slack_info: slackData, data: { money: signed_in_before.data.money, upgrades: signed_in_before.data.upgrades } } });

                        return NextResponse.redirect(new URL('/home', request.url));

                    } else {

                        db.collection("user_data").insertOne({
                            user_info: userData,
                            name: userData.identity.first_name,
                            slack_info: slackData,
                            login_time: new Date(),
                            data: {
                                money: 0,
                                upgrades: []
                            }
                        });

                        return NextResponse.redirect(new URL('/home', request.url));

                    }
                }
            }
        }

    } catch (error) {

        console.log("Authorisation Failed!", error);
        return NextResponse.json({ error: "Authorisation Failed!" }, { status: 500 });

    }
}