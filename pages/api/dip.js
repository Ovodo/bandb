import { useCors } from "@/hooks/useCors";
import { google } from "googleapis";
// import keys from "../../key";

export default async function (req, res) {
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
      const BTDdata = {
        spreadsheetId: "1rNt-prhPIjxg7QWyGfLcljYEURjvH0S-rgNqu3kjpDY",
        range: "Beta!A15",
      };
      const STPdata = {
        spreadsheetId: "1rNt-prhPIjxg7QWyGfLcljYEURjvH0S-rgNqu3kjpDY",
        range: "Beta!E15",
      };

      const responses = await Promise.all([
        gsapi.spreadsheets.values.get(BTDdata),
        gsapi.spreadsheets.values.get(STPdata),
      ]);

      const rows = responses[0].data.values;
      const BTD = responses[1].data.values;
      const STP = responses[2].data.values;

      // Transform the data into an array of objects

      return res.status(200).send(
        JSON.stringify({
          error: false,
          data: { BTD: BTD, STP: STP },
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
