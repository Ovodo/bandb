import { useCors } from "@/hooks/useCors";
import clientPromise from "@/lib/mongodb";

export default async function (req, res) {
  await useCors("https://bandb-ovodo.vercel.app")(req, res);

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://bandb-ovodo.vercel.app"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "application/x-www-form-urlencoded"
    );
    res.status(200).end();
    return;
  }
  const { address } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("Bandb");

    const result = await db.collection("Index").findOne({ address: address });

    if (!result) {
      res.status(404).json({ error: "Address not found" });
    } else {
      // Get current timestamp and lastClaim timestamp
      let now = new Date();

      let lastClaimDate;

      // Check if lastClaim exists and is a valid date
      if (result.lastClaim && !isNaN(new Date(result.lastClaim).getTime())) {
        lastClaimDate = new Date(result.lastClaim);
      } else {
        // If lastClaim doesn't exist or isn't a valid date, set lastClaimDate to now and reset dailyClaim to 10
        lastClaimDate = now;
        result.dailyClaim = 10;
      }

      // Check if more than 24 hours have passed since the last claim
      let diffInHours = Math.abs(now - lastClaimDate) / (1000 * 60 * 60);
      if (diffInHours > 24) {
        result.dailyClaim = 10;
      }

      // Update the document with the new dailyClaim and lastClaim values
      await db
        .collection("Index")
        .updateOne(
          { address: address },
          { $set: { dailyClaim: result.dailyClaim, lastClaim: lastClaimDate } }
        );

      res.status(200).json({
        msg: "Address found",
        points: result.points,
        dailyClaim: result.dailyClaim,
        lastClaim: result.lastClaim,
      });
    }
  } catch (e) {
    console.error("Query Error:", e);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the points" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
