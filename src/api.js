import {mongoDB} from "./connect";

export async function createCollection(collection) {
    const {client, db} = await mongoDB();
    await db.createCollection(collection);
    client && client.close()
}

export async function test(users) {
    const {client, db} = await mongoDB();
    await db.collection('another').insertMany(users);
    client && client.close();
}