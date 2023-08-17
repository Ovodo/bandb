import clientPromise from "@/lib/mongodb";
import { useCors } from "@/hooks/useCors";

export default async function (req, res) {
  // Use the cors middleware and pass the origin you want to accept
  await useCors("https://bandb-ovodo.vercel.app")(req, res);

  // Handle OPTIONS request
  // if (req.method === "OPTIONS") {
  //   res.setHeader(
  //     "Access-Control-Allow-Origin",
  //     "https://bandb-ovodo.vercel.app"
  //   );
  //   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //   res.setHeader("Access-Control-Allow-Headers", "application/json");
  //   res.status(200).end();
  //   return;
  // }

  const { address } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("Bandb");

    // Check if the wallet address already exists in the database
    const existingWallet = await db
      .collection("Index")
      .findOne({ address: address });

    if (existingWallet) {
      // If the wallet address exists, return an error message
      res.status(200).json({ message: "Wallet address already exists" });
    } else {
      // If the wallet address does not exist, insert it into the database
      await db.collection("Index").insertOne(req.body);
      res.status(200).json({ msg: "Wallet inserted successfully" });
    }
  } catch (e) {
    console.error("API Error:", e);
    res
      .status(500)
      .json({ error: "An error occurred while inserting the wallet" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
