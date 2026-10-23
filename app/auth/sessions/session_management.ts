import { JWTPayload, SignJWT, jwtVerify } from "jose";

const JWT_KEY = process.env.JWT_KEY;

if (!JWT_KEY) {
    throw new Error("JWT_KEY is not defined in the environment variables.");
}

const encoded_key = new TextEncoder().encode(JWT_KEY);

export interface sessionPayload {
    email: string;
    name: string;
    pfp: string;
    status_text: string;
}

export async function signToken(payload: JWTPayload): Promise<string> {
    const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(encoded_key);

    return jwt;
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, encoded_key);
        return payload;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}