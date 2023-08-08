import clientPromise from "@/lib/mongodb";

export default async function (req, res) {
  const { address, points } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("Bandb");

    const result = await db.collection("Index").findOneAndUpdate(
      { address: address }, // find a document with this filter
      { $inc: { points: points } }, // increment points field by the provided value
      { returnOriginal: false } // return updated document
    );

    if (!result.value) {
      res.status(404).json({ error: "Address not found" });
    } else {
      res.status(200).json({
        msg: "Points updated successfully",
        updatedDocument: result.value,
      });
    }
  } catch (e) {
    console.error("Update Error:", e);
    res
      .status(500)
      .json({ error: "An error occurred while updating the points" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
