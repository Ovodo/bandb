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
  text1,
  text2,
  text3,
  text4,
}) {
  const [screenWidth, setScreenWidth] = useState(1000);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  // Little to no chabge

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

  console.log(BTD);

  return (
    <main className='relative bg-slate-950 flex flex-col'>
      <div className='flex w-full justify-between h-[11vh] md:h-[14vh] lg:h-[18vh]'>
        <div className='flex relative bottom-[1vh] lg:bottom-0 h-[70%] my-auto self-start items-center'>
          <h1 className='absolute top-[2vh] md:top-[1vh] ml-[6vh] md:ml-[9.5vw] lg:ml-[8vw] min-w-max self-center'>
            {mobile ? "" : "📉 Bear & Bull Index"}
          </h1>{" "}
        </div>
        <h4 className='self-end mx-auto'>Market Overview</h4>
        <div className='w-[20vw] self-center absolute items-center right-[2vw] flex flex-col justify-center'>
          <h4 className='hidden font-[800] lg:flex'>{todaysDate}</h4>
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
      <section className='mx-[2vw] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[4vh]'>
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
      </section>
      <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard title='Why Bear & Bull Index?' text={text1} />
      </section>
      <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard title='Data Sources' text={text2} />
      </section>
      <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard title='Bear and Bull Index indicators' text={text3} />
      </section>
      <section className='flex flex-col mb-[15vh] items-center'>
        <LongCard title='Disclaimer' text={text4} />
      </section>
      <center>
        Bear and Bull Index is Powered by{" "}
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
      <p>
        Her Name is Joy Imasuen and she is here to learn coding. I hope shes
        strong enough
      </p>
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

  const chartDataReq = fetch(`${baseUrl}/api/chart`);
  const sheetDataReq = fetch(`${baseUrl}/api/sheet`);
  const dipDataReq = fetch(`${baseUrl}/api/dip`);

  const [chartDataRes, sheetDataRes, dipDataRes] = await Promise.all([
    chartDataReq,
    sheetDataReq,
    dipDataReq,
  ]);

  const chartData = await chartDataRes.json();
  const sheetData = await sheetDataRes.json();
  const dipData = await dipDataRes.json();

  return {
    props: {
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
