import React from "react";

export default function LongCard({ title }) {
  const text1 = `1. Market Sentiment Analysis

The Market Sentiment Analysis is a general overview of the crypto market,
the indicator ranges between Bearish, Neural and Bullish sentiment.


Values of 60 or above indicate the crypto market is Bullish.
Values between the range of 40 to 59 indicate the crypto market is Neutral.
Values between the range of 0 to 39 indicate the crypto market is Bearish.`;

  const text2 = `2. Social Analysis Summary

The Social Analysis Summary analyzes what socials are saying about the
crypto market. The indicator ranges between Sell, Neural or Buy.

Values of 60 or above indicate Buy or Dollar cost average.
Values between the range of 40 to 59 indicate Neutral or No opinion.
Values between the range of 0 to 39 indicate Sell or Use stop loss.`;

const text3 = `1. Market Sentiment Analysis

The Market Sentiment Analysis is a general overview of the crypto market,
the indicator ranges between Bearish, Neural and Bullish sentiment.


Values of 60 or above indicate the crypto market is Bullish.
Values between the range of 40 to 59 indicate the crypto market is Neutral.
Values between the range of 0 to 39 indicate the crypto market is Bearish.

`;


  const text4 = `Disclaimer

The BandBindex App is for educational purposes only, it’s a simple way to get a general view of the market but complementing it with other metrics and indicators will give you
a more balanced view of the market.

The information provided on this website does not constitute investment
advice, financial advice, trading advice, or any other sort of advice and you
should not treat any of the website's content as such.

We do not recommend that any cryptocurrency should be bought, sold,
or held by you. Do conduct your own due diligence and consult your financial
advisor before making any investment decisions.
`;

  return (
    <div className="bg-white shadow-md p-5 w-[80vw] md:w-[87vw] lg:w-[92%] h-[15vh] shadow-gray-400 rounded-md">
      <font size="5">
        <b>{title}</b>
      </font>
      <br />
      <p>{title === "Why Bear & Bull Index?" ? text1 : title === "Data Sources" ? text2 : title === "Bear and Bull Index indicators" ? text3 : text4}</p>
    </div>
  );
}
