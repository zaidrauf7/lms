import { Account, Client ,Databases, ID,Storage } from 'appwrite';

const client = new Client();
export const PROJECT_ID = "668e310c002b228c8df2"
export const DATABASE_ID = "668e3750000454fe192e"
export const COLLECTION_ID_STUDENTDATA = "668e37900010470157b2"
export const COLLECTION_ID_STUDENTATTENDENCE = "669a38ad0008d5d62107"


client

.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('668e310c002b228c8df2');

export const storage = new Storage(client);
export const databases = new Databases(client);
export const account = new Account(client);
export { ID } from "appwrite";




export default client;