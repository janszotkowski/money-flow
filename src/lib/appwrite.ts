import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export const APPWRITE_DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
export { client, databases };
