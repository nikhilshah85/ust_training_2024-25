// Update a document

import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string
const uri = "mongodb+srv://nikhilshah:Password1234@shopping-cluster.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("shoppingDB");
    const products = database.collection("products");

    // Create a filter for products with the title "Random Harvest"
    const filter = { pId: 106 };

    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };

    // Specify the update to set a value for the plot field
    const updateDoc = {
      $set: {
        pName: "Cheese Grill Sandwitch"
      },
    };

    // Update the first document that matches the filter
    const result = await products.updateOne(filter, updateDoc, options);
    
    // Print the number of matching and modified documents
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown errors
run().catch(console.dir);
