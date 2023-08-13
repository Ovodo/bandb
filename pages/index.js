import Image from "next/image";
import { Inter } from "next/font/google";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import InsightsCard from "@/Components/InsightsCard";
import SemiCircle from "@/Components/SemiCircle";
import SemiCircle1 from "@/Components/SemiCircle1";
import SemiCircle2 from "@/Components/SemiCircle2";
import Charts from "@/Components/Charts";
import MarketSentiment from "@/Components/MarketSentiment";
import CountdownTimer from "@/Components/CountdownTimer";
import LongCard from "@/Components/LongCard";
import BackToTopButton from "@/Components/BackToTopButton";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ArticleIcon from "@mui/icons-material/Article";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RedeemIcon from "@mui/icons-material/Redeem";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import LockIcon from "@mui/icons-material/Lock";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { setTheme } from "@/store/reducers/Theme";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

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

  function lerp(inputStart, inputEnd, outputStart, outputEnd, input) {
    return (
      outputStart +
      ((outputEnd - outputStart) * (input - inputStart)) /
        (inputEnd - inputStart)
    );
  }

  const { balance } = useSelector((state) => state.App);

  // ... (Hold INDEX to View Data End Here)

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-300";

  const colorTheme = theme ? "bg-[#EDF1E4]" : "bg-slate-950";
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

  const mobile = screenWidth < 798;

  return (
    <>
      <main className={` ${colorTheme} relative flex flex-col`}>
        <div className='flex w-full justify-between  h-[11vh] md:h-[14vh] lg:h-[18vh]'>
          <div className='flex relative bottom-[1vh] lg:bottom-0 h-[70%] my-auto self-start items-center'>
            <div className='absolute flex top-[2vh] md:top-[1vh] ml-[6vh] md:ml-[9.5vw] lg:ml-[8vw] min-w-max self-center'>
              <h4 className={`${textTheme}`}>
                {mobile ? (
                  ""
                ) : (
                  <motion.div
                    // initial={{ x: -400 }}
                    animate={{ x: [0, -200, 400, 0] }}
                    transition={{
                      duration: 40,
                      repeatType: "reverse",
                      repeat: 2,
                      repeatDelay: 1,
                    }}
                  >
                    <WhatshotIcon
                      color='white'
                      style={{ fontSize: 16, color: "#F5900C" }}
                    />
                    <b className='text-lg cursor-auto'>{"What's Hot: "}</b>
                    <a
                      href='https://lunarcrush.com/trending'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-base hover:text-lg hover:text-midorange transition-all duration-200'
                    >
                      ${coin.symbol}
                    </a>
                  </motion.div>
                )}
              </h4>
            </div>
          </div>
          <h4
            className={` ${textTheme} market_overview text-2xl md:text-5xl  w-full text-center self-end mx-auto`}
          >
            Market Overview
          </h4>
          <div className='w-[20vw] self-center absolute items-center right-[2vw] flex flex-col justify-center'>
            <h4 className={` ${textTheme} hidden font-[800] lg:flex`}>
              {todaysDate}
            </h4>
            <div
              style={{ lineHeight: 1, color: "#FF8D5C" }}
              className='font-[900] text-center hidden md:flex  text-lg'
            >
              {<CountdownTimer />}
            </div>
            <b>
              <BackToTopButton />
            </b>
          </div>
        </div>
        <section className='mx-[2vw] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[4vh]'>
          <div>
            {!balance || balance < 100 ? (
              <InsightsCard
                tooltip={"This is the historicl Analysis "}
                text='Historical Analysis'
              >
                <div
                  className='flex flex-col justify-center items-center h-[85%]'
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    className={`${textTheme}`}
                  >
                    <LockIcon style={{ fontSize: 50, color: "#F5900C" }} />
                    Need 100 INDEX to Unlock
                  </div>
                </div>
              </InsightsCard>
            ) : (
              <InsightsCard text='Historical Analysis'>
                <div className='flex w-[80vw] h-full justify-center items-center'>
                  <Charts height={mobile ? 430 : 280} chartData={chartData} />
                </div>
              </InsightsCard>
            )}
          </div>

          <div>
            {!balance || balance < 100 ? (
              <InsightsCard text='Actionable Insight'>
                <div
                  className='flex flex-col justify-center items-center h-[85%]'
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    className={`${textTheme}`}
                  >
                    <LockIcon style={{ fontSize: 50, color: "#F5900C" }} />
                    Need 100 INDEX to Unlock
                  </div>
                </div>
              </InsightsCard>
            ) : (
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
            )}
          </div>

          {!balance || balance < 100 ? (
            <>
              <InsightsCard text='Market Sentiment'>
                <MarketSentiment sentiment={sentiment} />
                {/* <p>{sentiment}</p> */}
              </InsightsCard>
              <InsightsCard text='Market Sentiment Analysis'>
                <div
                  className='flex flex-col justify-center items-center h-[85%]'
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    className={`${textTheme}`}
                  >
                    <LockIcon style={{ fontSize: 50, color: "#F5900C" }} />
                    Need 100 INDEX to Unlock
                  </div>
                </div>
              </InsightsCard>
            </>
          ) : (
            <>
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
            </>
          )}

          {!balance || balance < 100 ? (
            <>
              <InsightsCard text='Social Analysis Summary'>
                <div
                  className='flex flex-col justify-center items-center h-[85%]'
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    className={`${textTheme}`}
                  >
                    <LockIcon style={{ fontSize: 50, color: "#F5900C" }} />
                    Need 100 INDEX to Unlock
                  </div>
                </div>
              </InsightsCard>
            </>
          ) : (
            <>
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
            </>
          )}

          {!balance || balance < 100 ? (
            <>
              <InsightsCard text='Relative Strength Index'>
                <div
                  className='flex flex-col justify-center items-center h-[85%]'
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    className={`${textTheme}`}
                  >
                    <LockIcon style={{ fontSize: 50, color: "#F5900C" }} />
                    Need 100 INDEX to Unlock
                  </div>
                </div>
              </InsightsCard>
            </>
          ) : (
            <>
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
            </>
          )}
        </section>
        <section className='flex flex-col mb-[10vh] items-center'></section>
        <section className='flex flex-col mb-[15vh] items-center'>
          <LongCard title='Why Bear & Bull Index?' />
        </section>
        <section className='flex flex-col mb-[15vh] items-center'>
          <LongCard title='Data Sources' />
        </section>
        <section className='flex flex-col mb-[15vh] items-center'>
          <LongCard title='Bear and Bull Index indicators' />
        </section>
        <section className='flex flex-col mb-[15vh] items-center'>
          <LongCard title='Disclaimer' />
        </section>

        <div className={textTheme}>
          <footer class='footer-distributed'>
            <div class='footer-left'>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/images/logo.png"}
                  alt='Logo'
                  width={35}
                  height={35}
                  style={{ verticalAlign: "middle", marginRight: "1px" }}
                />
                <h3>BandBindex</h3>
              </div>

              <br></br>
              <div class='footer-about'>
                <p class='footer-company-about'>
                  Combining technical and social analysis, the Bear and Bull
                  Index gives a holistic market view. Useful for
                  less-experienced investors seeking informed choices in
                  cryptoverse.
                </p>
              </div>
              <br></br>
              <p class='footer-company-name'>
                <font style={{ color: "#F5900C" }}>Ⓒ</font> 2023{" "}
                <a
                  href='http://niti.com.ng/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {" "}
                  Neroitech Inventions
                </a>{" "}
                Ltd.
              </p>
            </div>

            <div class='footer-center'>
              <div>
                <i class='fa fa-envelope'>
                  <LinkIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  <b>QUICK LINKS</b>
                </p>
              </div>

              <div>
                <i class='fa fa-envelope'>
                  <ArticleIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  {" "}
                  <a
                    href='https://bandbindex.gitbook.io/bandbindex-2.0-whitepaper/project-details/disclaimer'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: "#FFFFFF" }}
                  >
                    Project WhitePaper
                  </a>
                </p>
              </div>

              <div>
                <i class='fa fa-envelope'>
                  <HandshakeIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  {" "}
                  <a
                    href='https://t.me/bandbindex_official'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: "#FFFFFF" }}
                  >
                    Request Collaboration
                  </a>
                </p>
              </div>

              <div>
                <i class='fa fa-envelope'>
                  <RedeemIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  <a
                    href='/claim'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: "#FFFFFF" }}
                  >
                    Claim Rewards
                  </a>
                </p>
              </div>

              <div>
                <i class='fa fa-envelope'>
                  {theme ? (
                    <ToggleOffIcon
                      color='white'
                      style={{
                        fontSize: 25,
                        color: "#F5900C",
                      }}
                    />
                  ) : (
                    <ToggleOnIcon
                      color='white'
                      style={{
                        fontSize: 25,
                        color: "#F5900C",
                      }}
                    />
                  )}
                </i>

                <p>
                  <a
                    href='#switchtheme'
                    style={{ color: "#FFFFFF" }}
                    onClick={() => {
                      dispatch(setTheme(!theme));
                    }}
                  >
                    Switch Theme
                  </a>
                </p>
              </div>
            </div>

            <div class='footer-right'>
              <p class='footer-company-about'>
                <span>
                  <AnnouncementIcon
                    style={{ fontSize: 25, color: "#F5900C" }}
                  />{" "}
                  DISCLAIMER
                </span>
                The website&apos;s information isn&apos;t investment, financial,
                or trading advice. Don&apos;t interpret its content as such. Do
                your research and seek professional advice for financial
                decisions.
              </p>

              <div class='footer-icons'>
                <a
                  href='https://twitter.com/BandBindex'
                  style={{ background: "#33383b" }}
                >
                  <TwitterIcon />
                </a>
                <a
                  href='https://t.me/bandbindex_official'
                  style={{ background: "#33383b" }}
                >
                  <TelegramIcon />
                </a>
                <a
                  href='https://github.com/LiquidityApe/BandBindex'
                  style={{ background: "#33383b" }}
                >
                  <GitHubIcon />
                </a>
                <a
                  href='https://bandbindex.gitbook.io/bandbindex-2.0-whitepaper/project-details/disclaimer'
                  style={{ background: "#33383b" }}
                >
                  <FileOpenIcon />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({}) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bandb.vercel.app"
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
