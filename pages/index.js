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

const inter = Inter({ subsets: ["latin"] });

export default function Home({ sheetData }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
      animation2.start({
        scale: 1,
        opacity: 1,
        transition: { type: "tween", duration: 2.5 },
      });
    } else {
      animation.start({
        x: `100vw`,
      });
      animation2.start({
        scale: 0,
        opacity: 0,
      });
    }
  }, [inView, animation, animation2]);

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

  return (
    <main className='relative flex flex-col'>
      <div className='flex w-full justify-between   h-[11vh] md:h-[14vh] lg:h-[18vh]'>
        <div className='flex relative bottom-[1vh] lg:bottom-0  h-[70%] my-auto   self-start  items-center '>
          <div className='flex absolute left-[-2vh] md:left-0 top-[-2.5vh] md:top-[-1vh] lg:top-[-7vh]  max-w-max items-center justify-center'>
            <Tbars size={mobile ? 100 : 160 ?? 160} />
          </div>
          <h1 className='absolute top-[2vh] md:top-[1vh] ml-[6vh] md:ml-[9.5vw] lg:ml-[8vw] min-w-max  self-center'>
            Bear & Bull Index
          </h1>
        </div>
        <h4 className='self-end  mx-auto'>Market Overview</h4>
        <div className='w-[20vw] self-center   absolute items-center right-[2vw]  flex flex-col justify-center'>
          <h4 className='hidden  font-[800]  lg:flex'>24 JUN 2023</h4>
          <Link href={"/"}>
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
        <InsightsCard text={"Historical Anaysis"}></InsightsCard>
        <InsightsCard text={"Actionable Insight"}>
          <div className=' flex flex-col justify-between relative bottom-[2vh] items-center self-center h-[85%]'>
            <div className=' bg-gray-700  relative top-[10vh] w-[65%] h-[12%]'>
              <div className='bg-green-600 w-[30%] h-full'></div>
            </div>
            <p className='self-center relative top-[5vh] text-[20px] font-[600] text-green-600'>
              Buy the Dip
            </p>
            <div className=' bg-gray-700  relative top-[5vh] w-[65%] h-[12%]'>
              <div className='bg-red-600 w-[30%] h-full'></div>
            </div>
            <p className='self-center  text-[20px] font-[600] text-red-600'>
              Sell the Pump
            </p>
          </div>
        </InsightsCard>
        <InsightsCard text={"Market Sentiment"}></InsightsCard>
        <InsightsCard insights text={"Market Analysis"}></InsightsCard>
        <InsightsCard insights text={"Social Analysis Summary"}></InsightsCard>
        <InsightsCard insights text={"Relative Strenght Index"}></InsightsCard>
      </section>
    </main>
  );
}

// export async function getServerSideProps({}) {
//   const req = await fetch("http://localhost:3000/api/sheet");
//   const res = await req.json();

//   return {
//     props: { sheetData: res.data },
//   };
// }
