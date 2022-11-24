import { MongoClient } from "mongodb";

async function connectCollection(
  client: MongoClient,
  dbName: string,
  collectionName: string
) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
}

export default async function MongoClientPromise(
  dbName: string,
  collectionName: string
) {
  const url = `${process.env.MONGO_URI}`;
  // init MongoClient and connect to Mongo Server
  const client = new MongoClient(url);
  await client.connect();

  try {
    // fetch collection Promise
    const collection = await connectCollection(client, dbName, collectionName);
    return { collection, client };
  } catch (e) {
    throw e;
  }
}
