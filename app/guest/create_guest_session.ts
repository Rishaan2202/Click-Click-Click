'use server'

import { cookies } from "next/headers"
import { getDatabase } from "@/lib/mongodb"

export async function createGuestSession(name: string) {

  const cookieStore = await cookies()
  const db = await getDatabase();

  await db.collection("user_data").insertOne({
    name: name,
    type: "guest",
    createdAt: new Date(),
  });

  cookieStore.set("name", name, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60,
    path: '/',
  })
}