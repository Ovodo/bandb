import Image from "next/image";
import { Inter } from "next/font/google";
import DrawingComponent from "@/Components/DrawingComponent";
import Square from "@/Components/Square";
import { IconWifi } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconWand } from "@tabler/icons-react";
import Lottie from "lottie-react";
import greenLady from "@/public/assets/lottie/greenlady.json";
import Tbars from "@/public/assets/icons/Tbars";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";
import Link from "next/link";
import InsightsCard from "@/Components/InsightsCard";
import SemiCircle from "@/Components/SemiCircle";
import MeterGauge from "@/Components/MeterGuage";
import Charts from "@/Components/Charts";
import MarketSentiment from "@/Components/MarketSentiment";

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
  dip,
}) {
  const [screenWidth, setScreenWidth] = useState(1000);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();

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

  // Interpolate the value of the yesterday prop
  const guage = lerp(0, 100, -90, 90, 100);

  console.log(guage);

  return (
    <main className='relative flex flex-col'>
      <div className='flex w-full justify-between   h-[11vh] md:h-[14vh] lg:h-[18vh]'>
        <div className='flex relative bottom-[1vh] lg:bottom-0  h-[70%] my-auto   self-start  items-center '>
          <div className='flex absolute left-[-2vh] md:left-0 top-[-2.5vh] md:top-[-1vh] lg:top-[-7vh]  max-w-max items-center justify-center'>
            <Tbars size={mobile ? 100 : 160} />
          </div>
          <h1 className='absolute top-[2vh] md:top-[1vh] ml-[6vh] md:ml-[9.5vw] lg:ml-[8vw] min-w-max  self-center'>
            Bear & Bull Index
          </h1>
        </div>
        <h4 className='self-end  mx-auto'>Market Overview</h4>
        <div className='w-[20vw] self-center   absolute items-center right-[2vw]  flex flex-col justify-center'>
          <h4 className='hidden  font-[800]  lg:flex'>{todaysDate}</h4>
          <Link href={"/claim"}>
            <p
              style={{ lineHeight: 1 }}
              className='font-[900]  text-center text-green-500 text-lg'
            >
              {mobile ? "Claim $INDEX" : "Claim $INDEX Token"}
            </p>
          </Link>
        </div>
      </div>
      <section className=' mx-[2vw] flex  flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[4vh]'>
        <InsightsCard text={"Historical Anaysis"}>
          <div className='flex w-[80vw] h-full  justify-center items-center'>
            <Charts height={mobile ? 430 : 280} chartData={chartData} />
          </div>
        </InsightsCard>
        <InsightsCard text={"Actionable Insight"}>
          <div className=' flex flex-col justify-between relative bottom-[2vh] items-center self-center h-[85%]'>
            <div className=' bg-gray-700  relative top-[10vh] w-[65%] h-[12%]'>
              <div className='bg-[#04bd64ff] w-[30%] h-full'></div>
            </div>
            <p className='self-center relative top-[5vh] text-[20px] font-[800] text-[#04bd64ff]'>
              Buy the Dip
            </p>
            <div className=' bg-gray-700  relative top-[5vh] w-[65%] h-[12%]'>
              <div className='bg-[#c0041dff] w-[30%] h-full'></div>
            </div>
            <p className='self-center  text-[20px] font-[800] text-[#c0041dff]'>
              Sell the Pump
            </p>
          </div>
        </InsightsCard>
        <InsightsCard text={"Market Sentiment"}>
          <MarketSentiment sentiment={dip} />
          {/* <p>{dip}</p> */}
        </InsightsCard>
        <InsightsCard
          yesterday={yesterday.MSA}
          lastweek={lastweek.MSA}
          lastMonth={lastMonth.MSA}
          insights
          text={"Market Sentiment Analysis"}
        >
          <div className='relative bottom-7'>
            <SemiCircle guage={lerp(0, 100, -90, 90, yesterday.MSA)} />
          </div>
        </InsightsCard>
        <InsightsCard
          yesterday={yesterday.SAS}
          lastweek={lastweek.SAS}
          lastMonth={lastMonth.SAS}
          insights
          text={"Social Analysis Summary"}
        >
          <div className='relative bottom-7'>
            <SemiCircle guage={lerp(0, 100, -90, 90, yesterday.SAS)} />
          </div>
        </InsightsCard>
        <InsightsCard
          yesterday={yesterday.RSI}
          lastweek={lastweek.RSI}
          lastMonth={lastMonth.RSI}
          insights
          text={"Relative Strenght Index"}
        >
          <div className='relative bottom-7'>
            <SemiCircle
            // guage={lerp(0, 100, -90, 90, yesterday.RSI)}
            />
          </div>
          {/* <MeterGauge /> */}
        </InsightsCard>
      </section>
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

  console.log(chartDataRes);
  console.log(sheetDataRes);
  console.log(dipDataRes);
  const chartData = await chartDataRes.json();
  const sheetData = await sheetDataRes.json();
  const dipData = await dipDataRes.json();

  return {
    props: {
      dip: dipData.data,
      chartData: chartData.data,
      yesterday: sheetData.data.yesterday,
      lastweek: sheetData.data.lastweek,
      lastMonth: sheetData.data.lastMonth,
    },
  };
}
