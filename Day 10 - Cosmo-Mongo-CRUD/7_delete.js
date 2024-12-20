// Delete a document

import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string
const uri = "mongodb+srv://nikhilshah:Password1234@shopping-cluster.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("shoppingDB");
    const products = database.collection("products");

    /* Delete the first document in the "products" collection that matches
    the specified query document */
    const query = { pId: 106 };
    const result = await products.deleteOne(query);

    /* Print a message that indicates whether the operation deleted a
    document */
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown exceptions
run().catch(console.dir);
