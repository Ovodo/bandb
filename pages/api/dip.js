import { google } from "googleapis";
// import keys from "../../key";

export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res
          .status(400)
          .send(JSON.stringify({ error: true, message: err }));
      }

      const gsapi = google.sheets({ version: "v4", auth: client });

      //CUSTOMIZATION FROM HERE
      const opt = {
        spreadsheetId: "1a82UuOfFTg5-rLCOtGZWC-0TdUwgggljBe5HGdOXaro",
        range: "Insight!B6",
      };

      const responses = await Promise.all([gsapi.spreadsheets.values.get(opt)]);

      const rows = responses[0].data.values;
      console.log(rows);

      // Transform the data into an array of objects

      return res.status(200).send(
        JSON.stringify({
          error: false,
          data: rows,
        })
      );
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}

// export this from the api route
export const config = {
  api: {
    externalResolver: true,
  },
};
