import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://nikhilshah:Password1234@shopping-cluster.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

const client = new MongoClient(uri);

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("shoppingDB");
    const products = database.collection("products");

   

 

    // Execute query 
    const cursor = products.find();

    // Print a message if no documents were found
    if ((await products.countDocuments()) === 0) {
      console.log("No documents found!");
    }

    // Print returned documents
    for await (const doc of cursor) {
      console.dir(doc);
    }

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
