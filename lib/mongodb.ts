import { Db, MongoClient } from "mongodb";

const uri: string | undefined = process.env.MONGODB_URI

if (!uri) {
    throw new Error("Unable to find MongoDB URI in the environment variables.");
}

interface Options {
  maxPoolSize: number;
  serverSelectionTimeoutMS: number;
  socketTimeoutMS: number;
}

const options: Options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {

    if (!(globalThis as any)._mongoClientPromise) {
        client = new MongoClient(uri, options);
        (globalThis as any)._mongoClientPromise = client.connect();
    }
    
    clientPromise = (globalThis as any)._mongoClientPromise;

} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export async function getDatabase(): Promise<Db> {
    try {
        const client: MongoClient = await clientPromise;

        if (!client) {
            throw new Error("Failed to connect to the Database");
        }

        return client.db("click-click-click");
    }
    catch (error) {
        throw new Error(`Error connecting to the Database: ${error}`);
    }
}