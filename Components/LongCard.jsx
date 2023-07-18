import React from "react";

export default function LongCard({ title }) {
  const text1 = (
    <>
      <br />
      The Bear and Bull Index provides an unbiased view of the crypto market,
      backed by{" "}
      <a
        href='https://lunarcrush.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        LunarCrush’s
      </a>{" "}
      AI-driven social insights and metrics. We help the average crypto user to
      better understand the market through technical analysis and social
      analysis made easy.
      <br />
      <br />
      <b>Learn More:</b> Check out the{" "}
      <a
        href='https://docs.google.com/document/d/1dsthZ5d2hSGMdHRsdGo_qVAlc7XmtzT9mtwtiea6Zdk/edit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <b>whitepaper</b>
      </a>
    </>
  );

  const text2 = (
    <>
      <br />
      We gather data from the following sources every day to visualize social
      sentiment changes in the crypto market.
      <br />
      <br />
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
      <b>Other indices/metrics we consider:</b>
      <br />
      <br />
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
      The following built-in indicators help visualize social and technical
      analysis sentiment changes in the crypto market.
      <br />
      <br />
      <b>1. Market Sentiment Analysis</b>
      <br />
      <br />
      The Market Sentiment Analysis provides a general overview of the crypto
      market, and the indicator ranges between Bearish, Neural, and Bullish
      sentiment:
      <br />
      <br />
      <ol>
        <li>• Values of 60 or above indicate a Bullish crypto market.</li>
        <li>• Values between 40 and 59 indicate a Neutral crypto market.</li>
        <li>• Values between 0 and 39 indicate a Bearish crypto market.</li>
      </ol>
      <br />
      <br />
      <b>2. Social Analysis Summary</b>
      <br />
      <br />
      The Social Analysis Summary analyzes what social media platforms are
      saying about the crypto market. The indicator ranges between Sell,
      Neutral, or Buy:
      <br />
      <br />
      <ol>
        <li>
          • Values of 60 or above indicate a Buy or Dollar cost average
          sentiment.
        </li>
        <li>
          • Values between 40 and 59 indicate a Neutral or No opinion sentiment.
        </li>
        <li>
          • Values between 0 and 39 indicate a Sell or Use stop loss sentiment.
        </li>
      </ol>
      <br />
      <br />
      <b>3. BTD and STP Indicator</b>
      <br />
      <br />
      The BTD (Buy the Dip) and STP (Sell the Pump) indicators are simplified
      indicators created from our research. They are time-sensitive and change
      quickly with crypto market sentiment. To track the market sentiment, we
      created the Market Sentiment Indicator to complement the BTD and STP
      indicators.
      <br />
      <br />
      <b>4. Crypto Market Sentiment Indicator</b>
      <br />
      <br />
      The crypto market sentiment indicator measures when the crypto market is
      fearful or hopeful. However, like the BTD (Buy the Dip) and STP (Sell the
      Pump) indicator, it is time-sensitive and changes quickly with the general
      crypto market sentiment driven by social media.
    </>
  );

  const text4 = (
    <>
      <br />
      <b> No Investment Advice Here, Please take note of the following:</b>
      <br />
      <br />
      <b>1.</b> The BandBindex App is for educational purposes only. It provides
      a general view of the market, but complementing it with other metrics and
      indicators will give you a more balanced understanding.
      <br />
      <br />
      <b>2.</b> The information provided on this website does not constitute
      investment advice, financial advice, trading advice, or any other form of
      advice. You should not treat any of the website's content as such.
      <br />
      <br />
      <b>3.</b> We do not recommend buying, selling, or holding any
      cryptocurrency. Please conduct your own due diligence and consult your
      financial advisor before making any investment decisions.
      <br />
      <br />
      <b>4.</b> The{" "}
      <a
        href='https://docs.google.com/document/d/1dsthZ5d2hSGMdHRsdGo_qVAlc7XmtzT9mtwtiea6Zdk/edit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <b>Bear and Bull $INDEX token</b>
      </a>{" "}
      is not a currency or an investment of any form. It is an In-App reward
      token created to incentivize community participation and unlock features
      within the BandBindex App and community.
    </>
  );

  return (
    <div className='bg-white shadow-md p-5 w-[80vw] md:w-[87vw] lg:w-[92%] rounded-md'>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <p className='text-lg'>
        {title === "Why Bear & Bull Index?"
          ? text1
          : title === "Data Sources"
          ? text2
          : title === "Bear and Bull Index indicators"
          ? text3
          : text4}
      </p>
    </div>
  );
}
