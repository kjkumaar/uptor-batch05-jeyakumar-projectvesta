const { connectDB } = require('./db');

async function getItems(collectionName) {
    const db = await connectDB();
    return await db.collection(collectionName).find({}).toArray();
}

async function getItemMen() {
    return getItems("MenGarments");
}

async function getItemAccessories() {
    return getItems("Accessories");
}

async function getItemKids() {
    return getItems("Kids");
}

async function getItemSilks() {
    return getItems("Silks");
}

async function getItemWedding() {
    return getItems("Weddingwear");
}

async function getItemWomen() {
    return getItems("Women");
}

module.exports = {
    getItemMen,
    getItemAccessories,
    getItemKids,
    getItemSilks,
    getItemWedding,
    getItemWomen
};