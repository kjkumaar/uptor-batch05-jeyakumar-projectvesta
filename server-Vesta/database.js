const { MongoClient } = require('mongodb');

const connectionString = "mongodb://host.docker.internal:27017/ecommerce-Vesta";
const client = new MongoClient(connectionString);

let db;

async function connectDB() {
    if (!db) {
        await client.connect();
        console.log("✅ MongoDB Connected");
        db = client.db("ecommerce-Vesta");
    }
    return db;
}

module.exports = { connectDB };