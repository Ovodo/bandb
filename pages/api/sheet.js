import { google } from "googleapis";
import keys from "../../key";

export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: "v4", auth: client });

      //CUSTOMIZATION FROM HERE
      const opt = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!A1:J",
      };
      const lastweekSAS = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J9",
      };
      const lastMonthSAS = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J10",
      };
      const lastweekMSA = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J15",
      };
      const lastMonthMSA = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J16",
      };
      const lastweekRSI = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J21",
      };
      const lastMonthRSI = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J22",
      };

      let response = await gsapi.spreadsheets.values.get(opt);
      let response1 = await gsapi.spreadsheets.values.get(lastweekSAS);
      let response2 = await gsapi.spreadsheets.values.get(lastMonthSAS);
      let response3 = await gsapi.spreadsheets.values.get(lastweekMSA);
      let response4 = await gsapi.spreadsheets.values.get(lastMonthMSA);
      let response5 = await gsapi.spreadsheets.values.get(lastweekRSI);
      let response6 = await gsapi.spreadsheets.values.get(lastMonthRSI);

      // Get the data from the response
      const rows = response.data.values;
      const rows1 = response1.data.values;
      const rows2 = response2.data.values;
      const rows3 = response3.data.values;
      const rows4 = response4.data.values;
      const rows5 = response5.data.values;
      const rows6 = response6.data.values;
      // console.log(rows1[0][0]);

      // Transform the data into an array of objects
      const data = rows.map((row) => {
        return {
          Date: row[0],
          MSA: row[1],
          SAS: row[2],
          RSI: row[3],
          Bitcoin: row[4],
          Ethereum: row[5],
          column7: row[6],
          column8: row[7],
          "Date Calculator": row[8],
          column10: row[9],
        };
      });
      // Calculate the day before today
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      // Format the date as a string in the same format as the values in the Date column
      const dateString =
        ("0" + (yesterday.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + yesterday.getDate()).slice(-2) +
        "-" +
        yesterday.getFullYear();

      const yesterdayData = data.filter((row) => {
        // Add your filter conditions here
        return row.Date == dateString;
      });

      return res.status(400).send(
        JSON.stringify({
          error: false,
          data: {
            yesterday: yesterdayData[0],
            lastweek: { SAS: rows1[0][0], MSA: rows3[0][0], RSI: rows5[0][0] },
            lastMonth: { SAS: rows2[0][0], MSA: rows4[0][0], RSI: rows6[0][0] },
          },
        })
      );
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
