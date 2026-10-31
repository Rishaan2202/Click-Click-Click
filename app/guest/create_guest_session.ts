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
      },
    },
    name: name,
    type: "guest",
    createdAt: new Date(),
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
  cookieStore.set("id", id, { 
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
    path: "/" });
}