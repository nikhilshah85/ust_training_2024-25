import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://nikhilshah:Password1234@shopping-cluster.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

const client = new MongoClient(uri);

async function run() {
  try {

    // Get the database and collection on which to run the operation
    const database = client.db("shoppingDB");
    const products = database.collection("products");

    // Create an array of documents to insert
    const docs = [
      { pId: 103, pName: "Deo" },
      { pId: 110, pName: "Razor" },
      { pId: 111, pName: "Fanta" }
    ];

    // Prevent additional documents from being inserted if one fails
    const options = { ordered: true };

    // Execute insert operation
    const result = await products.insertMany(docs, options);
   
    // Print result
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
