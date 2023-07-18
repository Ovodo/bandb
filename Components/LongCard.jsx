import React from "react";

export default function LongCard({ title }) {
  const text1 = (
    <>
      <br />
      The Bear and Bull Index provides an unbiased view of the crypto market, backed by <a href="https://lunarcrush.com/" target="_blank">LunarCrush’s</a> AI-driven social insights and metrics we help the average crypto user to understand the market better. Technical analysis and social analysis made is now made easy.
      <br />
<br />
<b>Learn More:</b> Check out the <a href="https://docs.google.com/document/d/1dsthZ5d2hSGMdHRsdGo_qVAlc7XmtzT9mtwtiea6Zdk/edit" target="_blank"><b>whitepaper</b></a>
    </>
  );

  const text2 = (
    <>
      <br />
      We are gathering data from the following sources everyday to visualize social sentiment change of the crypto market.
      <br /><br />
<b>Key metrics on LunarCrush we analyze for insight:</b>
<br />
<br />
<ol>

<li>• Galaxy Score</li>
<li>• AltRank</li>
<li>• Social Metrics</li>
<li>• Global Metrics</li>
</ol>
<br />
<br />
<b>Other index/metrics we put into consideration:</b>
<br /><br />
<ol>
<li>• Fear & Greed Index</li>
<li>• 24 Trading Volume on CoinGecko</li>
<li>• Relative Strength Index</li>
</ol>
    </>
  );

  const text3 = (
    <>
      <br />
      The following built-in indicators help to visualize social and technical analysis sentiment change of the crypto market.
      <br /><br />
      <b>1. Market Sentiment Analysis</b>
      <br />
<br />
The Market Sentiment Analysis is a general overview of the crypto market,
the indicator ranges between Bearish, Neural and Bullish sentiment:
<br />
<br />
<ol>
<li>• Values of 60 or above indicate the crypto market is Bullish.</li>
<li>• Values between the range of 40 to 59 indicate the crypto market is Neutral.</li>
<li>• Values between the range of 0 to 39 indicate the crypto market is Bearish.</li>
</ol>
<br />
<br />
<b>2. Social Analysis Summary</b>
<br />
<br />
The Social Analysis Summary analyzes what socials are saying about the
crypto market. The indicator ranges between Sell, Neutral or Buy:
<br />
<br />
<ol>
<li>• Values of 60 or above indicate Buy or Dollar cost average.</li>
<li>• Values between the range of 40 to 59 indicate Neutral or No opinion.</li>
<li>• Values between the range of 0 to 39 indicate Sell or Use stop loss.</li>
</ol>
<br />
<br />
<b>3. BTD and STP Indicator</b>
<br />
<br />
The BTD (Buy the Dip) and STP (Sell the Pump) indicators are one of the most simplified indicators we created from our research, it’s time-sensitive and change quickly with crypto market sentiment. To track the market sentiment, we created the market sentiment indicator to complement the BTD and STP indicators.
<br />
<br />
<b>4. Crypto Market Sentiment Indicator</b>
<br />
<br />
The crypto market sentiment indicator measures when the crypto market is fearful or hopeful, however like the BTD (Buy the Dip) and STP (Sell the Pump) indicator it’s time sensitive and changes quickly with the general crypto market sentiment driven by social.


    </>
  );


  const text4 = (
    <>
      <br />
     <b> No Investment Advice Here, Please take note of the following:</b>
     <br />
<br />
<b>1.</b> The BandBindex App is for educational purposes only, it’s a simple way to get a general view of the market but complementing it with other metrics and indicators will give you
a more balanced view of the market:
<br />
<br />
<b>2.</b> The information provided on this website does not constitute investment
advice, financial advice, trading advice, or any other sort of advice and you
should not treat any of the website's content as such.
<br />
<br />
<b>3.</b> We do not recommend that any cryptocurrency should be bought, sold,
or held by you. Do conduct your own due diligence and consult your financial
advisor before making any investment decisions.
<br />
<br />
<b>4.</b> The <a href="https://docs.google.com/document/d/1dsthZ5d2hSGMdHRsdGo_qVAlc7XmtzT9mtwtiea6Zdk/edit" target="_blank"><b>Bear and Bull $INDEX token</b></a> is not a currency or an investment of any form, rather it’s an In-App reward token created to incentivize community participation and unlock features within the BandBindex App and community.
    </>
  );

  return (
    <div className="bg-white shadow-md p-5 w-[80vw] md:w-[87vw] lg:w-[92%] shadow-gray-400 rounded-md">
      <font size="5">
        <b>{title}</b>
      </font>
      <br />
      <font size="4"><p>{title === "Why Bear & Bull Index?" ? text1 : title === "Data Sources" ? text2 : title === "Bear and Bull Index indicators" ? text3 : text4}</p></font>
    </div>
  );
}
