import { cookies } from "next/headers";

export async function getInfo(): Promise<{ name: string | undefined; pfp: string | undefined; status_text: string | undefined }> {
    
    const cookieStore = await cookies();
    
    return {
        name: cookieStore.get("name")?.value,
        pfp: cookieStore.get("pfp")?.value,
        status_text: cookieStore.get("status_text")?.value
    };
}