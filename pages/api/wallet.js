import clientPromise from "@/lib/mongodb";

export default async function (req, res) {
  const { address } = req.body;

  //   const body = req.body;
  //   console.log(req.body);

  //   res.status(200).json(req.body);

  try {
    const client = await clientPromise;
    const db = client.db("Bandb");

    await db.collection("Index").insertOne(req.body);
    // console.log(users);
    // .sort({ metacritic: -1 })
    // .limit(20)
    //   .toArray();
    // client.close();

    res.status(200).json({ msg: "Wallet inserted successfully" });
  } catch (e) {
    console.error("Insert Error:", e);
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
