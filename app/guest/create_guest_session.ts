'use server'

import { cookies } from "next/headers"
import { getDatabase } from "@/lib/mongodb"

export async function createGuestSession(name: string) {

  const cookieStore = await cookies()
  const db = await getDatabase();
  const id = `guest_${Date.now()}`

  await db.collection("user_data").insertOne({
    user_info: {
      identity: {
        id: id,
        first_name: name,
      },
    },
    name: name,
    type: "guest",
    slack_info: {
      user: {
        profile: {
          image_original:
            "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png"
        }
      }
    },
    login_time: new Date(),
    data: {
      money: 0,
      upgrades: [],
    },
  });

  cookieStore.set("name", name, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60,
    path: '/',
  })
  cookieStore.set("pfp", "https://cdn.hackclub.com/01a17348-fd44-7557-9e09-f3e837b2f0ab/Portrait_Placeholder.png", {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60,
    path: '/',
  })
  cookieStore.set("id", id, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
    path: "/"
  });
}