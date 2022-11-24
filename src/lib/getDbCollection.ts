import MongoClientPromise from "./MongoClient";

async function getDbCollection(dbName: string, collectionName: string) {
  const { collection, client } = await MongoClientPromise(
    dbName,
    collectionName
  );
  return { collection, client };
}

export default getDbCollection;
