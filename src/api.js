import {mongoDB} from "./connect";

export async function createCollection() {
    const {client, db} = await mongoDB();
    await db.createCollection('test-collection');
    client && client.close()
}

export async function test(users) {
    const {client, db} = await mongoDB();
    await db.collection('another').insertMany(users);
    client && client.close();
}

export async function updateCollection(collection, data) {
    const {client, db} = await mongoDB();
    await db.collection(collection).insertOne(data)
    client && client.close()
}