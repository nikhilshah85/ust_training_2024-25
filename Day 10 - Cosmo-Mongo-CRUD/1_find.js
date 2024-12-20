import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://nikhilshah:Password1234@shopping-cluster.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

const client = new MongoClient(uri);

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("shoppingDB");
    const myProduct = database.collection("products");

    // Query for a product that has the product id 107
    const query = { pId: 102 };



    // Execute query
    const result = await myProduct.findOne(query);

    // Print the document returned by findOne()
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
