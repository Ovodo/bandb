export default function handler(req, res) {
  try {
    let timeString;
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = 23 - now.getHours();
      const minutes = 59 - now.getMinutes();

      const seconds = 59 - now.getSeconds();
      timeString = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      //   setTimeLeft(timeString.split("-").join(""));
    }, 1000);

    intervalId();
    return res.status(200).send(
      JSON.stringify({
        error: false,
        data: timeString.split("-").join(""),
      })
    );
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
