import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Link from "next/link";
import InsightsCard from "@/Components/InsightsCard";
import SemiCircle from "@/Components/SemiCircle";
import SemiCircle1 from "@/Components/SemiCircle1";
import SemiCircle2 from "@/Components/SemiCircle2";
import Charts from "@/Components/Charts";
import MarketSentiment from "@/Components/MarketSentiment";
import CountdownTimer from "@/Components/CountdownTimer";
import LongCard from "@/Components/LongCard";
import BackToTopButton from "@/Components/BackToTopButton";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { HiArrowCircleDown } from "react-icons/hi";
const inter = Inter({ subsets: ["latin"] });

const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
const year = date.getFullYear();
const todaysDate = `${day} ${month} ${year}`;

export default function Home({
  chartData,
  yesterday,
  lastweek,
  lastMonth,
  sentiment,
  BTD,
  STP,
  today,
  coin,
}) {
  const [screenWidth, setScreenWidth] = useState(1000);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-300";

  const colorTheme = theme ? "bg-slate-100" : "bg-slate-950";

  const text1 = (
    <div className={textTheme}>
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
    </div>
  );

  const text2 = (
    <div className={textTheme}>
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
    </div>
  );

  const text3 = (
    <div className={textTheme}>
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
    </div>
  );

  const text4 = (
    <div className={textTheme}>
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
    </div>
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const mobile = screenWidth < 798;

  // Define a linear interpolation function
  function lerp(inputStart, inputEnd, outputStart, outputEnd, input) {
    return (
      outputStart +
      ((outputEnd - outputStart) * (input - inputStart)) /
        (inputEnd - inputStart)
    );
  }

  console.log(coin);

  return (
    <main className={` ${colorTheme} relative   flex flex-col`}>
      <div className='flex w-full justify-between h-[11vh] md:h-[14vh] lg:h-[18vh]'>
        <div className='flex relative bottom-[1vh] lg:bottom-0 h-[70%] my-auto self-start items-center'>
          <p
            className={`absolute top-[8vh] ${textTheme} md:top-[15vh] ml-[6vh] md:ml-[9.5vw] lg:ml-[8vw] min-w-max self-center`}
          >
            {mobile ? "" : ""}
          </p>
        </div>
        <div className='w-[20vw] self-center absolute items-center right-[2vw] flex flex-col justify-center'>
          <h4 className={` ${textTheme} hidden font-[800] lg:flex`}>
            {todaysDate}
          </h4>
          <p
            style={{ lineHeight: 1 }}
            className='font-[900] text-center text-orange-500 text-lg'
          >
            {mobile ? "" : <CountdownTimer />}
          </p>
          <b>
            <BackToTopButton />
          </b>
        </div>
      </div>
      <LongCard
        background={"transparent"}
        title={"Market Overview"}
        width={"95%"}
      >
        <section className=' flex w-full relative flex-col md:grid md:grid-cols-2 lg:grid-cols-3 pb-[6vh]'>
          <InsightsCard text='Historical Analysis'>
            <div className='flex w-[80vw] h-full justify-center items-center'>
              <Charts height={mobile ? 430 : 280} chartData={chartData} />
            </div>
          </InsightsCard>
          <InsightsCard text='Actionable Insight'>
            <div className='flex flex-col justify-between relative bottom-[2vh] items-center self-center h-[85%]'>
              <div className='bg-gray-700 relative top-[10vh] w-[65%] h-[12%]'>
                <div
                  style={{ width: `${BTD}%` }}
                  className='bg-[#04bd64ff] w-[30%] h-full'
                ></div>
              </div>
              <p className='self-center relative top-[5vh] text-[20px] font-[800] text-[#04bd64ff]'>
                Buy the Dip
              </p>
              <div className='bg-gray-700 relative top-[5vh] w-[65%] h-[12%]'>
                <div
                  style={{ width: `${STP}%` }}
                  className='bg-[#c0041dff] w-[30%] h-full'
                ></div>
              </div>
              <p className='self-center text-[20px] font-[800] text-[#c0041dff]'>
                Sell the Pump
              </p>
            </div>
          </InsightsCard>
          <InsightsCard text='Market Sentiment'>
            <MarketSentiment sentiment={sentiment} />
            {/* <p>{sentiment}</p> */}
          </InsightsCard>
          <InsightsCard
            today={today.MSA}
            yesterday={yesterday.MSA}
            lastweek={lastweek.MSA}
            lastMonth={lastMonth.MSA}
            insights
            text='Market Sentiment Analysis'
          >
            <div className='relative bottom-7'>
              <SemiCircle guage={lerp(0, 100, -90, 90, today.MSA)} />
            </div>
          </InsightsCard>
          <InsightsCard
            today={today.SAS}
            yesterday={yesterday.SAS}
            lastweek={lastweek.SAS}
            lastMonth={lastMonth.SAS}
            insights
            text='Social Analysis Summary'
          >
            <div className='relative bottom-7'>
              <SemiCircle1 guage={lerp(0, 100, -90, 90, today.SAS)} />
            </div>
          </InsightsCard>
          <InsightsCard
            today={today.RSI}
            yesterday={yesterday.RSI}
            lastweek={lastweek.RSI}
            lastMonth={lastMonth.RSI}
            insights
            text='Relative Strength Index'
          >
            <div className='relative bottom-7'>
              <SemiCircle2 guage={lerp(0, 100, -90, 90, today.RSI)} />
            </div>
            {/* <MeterGauge /> */}
          </InsightsCard>
          <h1
            className={`${textTheme} text-xl absolute bottom-[3vh]  font-semibold`}
          >
            View More
          </h1>
          <motion.div
            initial={{}}
            animate={{
              y: [0, -5, 0, -5, 0, -7, 0, -2, 0],
              // x: [0, 0, 0, 0, 0, 15, 0, 0, 0, 0],
            }}
            transition={{
              delay: 0.1,
              repeat: 4,
              duration: 2,
              // x: { delay: 8, duration: 5, repeat: 2 },
            }}
            className=' button h-8 mx-auto hover:animate-pulse rounded-sm bg-orange-950 absolute bottom-[-2vh] w-[92vw] self-center flex items-center justify-center'
          >
            <HiArrowCircleDown style={{ fontSize: 25, color: "#F5900C" }} />
          </motion.div>
        </section>
      </LongCard>
      <section className='flex flex-col mt-[10vh] mb-[15vh] items-center'>
        <LongCard title='Why Bear & Bull Index?' text={text1} />
      </section>
      {/* <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard title='Data Sources' text={text2} />
      </section> */}
      <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard text={text3} title='Bear and Bull Index indicators' />
      </section>
      <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard text={text4} title='Disclaimer' />
      </section>
      <center>
        Powered by{" "}
        <a
          href='https://lunarcrush.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <b>LunarCrush</b>
        </a>
      </center>
      <br />
      <br />
      <p></p>
    </main>
  );
}

// export async function getServerSideProps({}) {
//   const baseUrl =
//     process.env.NODE_ENV === "production"
//       ? "https://bandb.vercel.app/"
//       : "http://localhost:3000";

//   const req = await fetch(`${baseUrl}/api/sheet`);
//   const res = await req.json();

//   return {
//     props: {
//       yesterday: res.data.yesterday,
//       lastweek: res.data.lastweek,
//       lastMonth: res.data.lastMonth,
//     },
//   };
// }

export async function getServerSideProps({}) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bandb.vercel.app/"
      : "http://localhost:3000";
  const APIkey = " h569uy3tkd6hfydgfzz8q74fd6lkbkpvjv0m4r85e";

  const chartDataReq = fetch(`${baseUrl}/api/chart`);
  const sheetDataReq = fetch(`${baseUrl}/api/sheet`);
  const dipDataReq = fetch(`${baseUrl}/api/dip`);
  const lunrReq = fetch("https://lunarcrush.com/api3/coinoftheday", {
    headers: {
      Authorization: `Bearer${APIkey}`,
    },
  });
  const [chartDataRes, sheetDataRes, dipDataRes, lunrRes] = await Promise.all([
    chartDataReq,
    sheetDataReq,
    dipDataReq,
    lunrReq,
  ]);

  const chartData = await chartDataRes.json();
  const sheetData = await sheetDataRes.json();
  const dipData = await dipDataRes.json();
  const lunrData = await lunrRes.json();

  return {
    props: {
      coin: { name: lunrData.name, symbol: lunrData.symbol },
      sentiment: dipData.data.sentiment,
      STP: dipData.data.STP,
      BTD: dipData.data.BTD,
      chartData: chartData.data,
      yesterday: sheetData.data.yesterday,
      today: sheetData.data.today,
      lastweek: sheetData.data.lastweek,
      lastMonth: sheetData.data.lastMonth,
    },
  };
}
