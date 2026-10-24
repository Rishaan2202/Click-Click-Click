'use server'

import { cookies } from "next/headers"

export async function createGuestSession(name: string) {
  const cookieStore = await cookies()
  cookieStore.set("name", name, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
    path: '/',
  })
}