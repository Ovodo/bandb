import Image from "next/image";
import { Inter } from "next/font/google";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from '@mui/icons-material/Forum';
import RedeemIcon from "@mui/icons-material/Redeem";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import LockIcon from "@mui/icons-material/Lock";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { PacmanLoader } from "react-spinners";

import useScreenWidth from "@/hooks/useScreenWidth";
import InsightsCard from "@/Components/InsightsCard";
import SemiCircle from "@/Components/SemiCircle";
import SemiCircle1 from "@/Components/SemiCircle1";
import SemiCircle2 from "@/Components/SemiCircle2";
import Charts from "@/Components/Charts";
import MarketSentiment from "@/Components/MarketSentiment";
import CountdownTimer from "@/Components/CountdownTimer";
import LongCard from "@/Components/LongCard";
import BackToTopButton from "@/Components/BackToTopButton";
import { setTheme } from "@/store/reducers/Theme";
import { useRouter } from "next/router";
import useDataFetching from "@/hooks/useDataFetching";

const inter = Inter({ subsets: ["latin"] });
const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
const year = date.getFullYear();
const todaysDate = `${day} ${month} ${year}`;

export default function Home({}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);
  const { balance } = useSelector((state) => state.App);
  const { data, loading, error } = useDataFetching();
  const mobile = useScreenWidth() < 788;
  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const colorTheme = theme ? "bg-[#EDF1E4]" : "bg-slate-950";
  const isFocused = router.pathname === "/index";
  console.log("sentiment", data.sentiment);

  //function to interpolate data for the semi-circle guage
  function lerp(inputStart, inputEnd, outputStart, outputEnd, input) {
    return (
      outputStart +
      ((outputEnd - outputStart) * (input - inputStart)) /
        (inputEnd - inputStart)
    );
  }

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  if (loading) {
    return (
      <div className={textTheme}>
        <div className={` ${colorTheme} relative flex flex-col`}>
          <div className='flex flex-row items-center h-[100vh] justify-center'>
            <div className='max-w-max'>
              <PacmanLoader
                color={"#F5900C"}
                loading={loading ? true : false}
                cssOverride={override}
                size={28}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    const reloadTimeout = setTimeout(() => {
      window.location.reload();
    }, 5000);

    // Clear the reload timeout before unmounting
    useEffect(() => {
      return () => clearTimeout(reloadTimeout);
    }, []);

    return (
      <div className={textTheme}>
        <div className={` ${colorTheme} relative flex flex-col`}>
          <div className='flex flex-row items-center h-[100vh] justify-center'>
            <div className='max-w-max'>
              <center>
                <p className={textTheme}>Oops! Something went wrong. We're working to fix it.</p>
                <p className={textTheme}>The page will automatically reload in 5 seconds.</p>
                <p className={textTheme}>{error.message}</p>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className='flex items-center justify-center h-full flex-1'>
      <main className={` ${colorTheme} relative flex flex-col`}>
        <div className='flex w-full justify-between  h-[11vh] md:h-[14vh] lg:h-[18vh]'>
          <div className='flex relative bottom-[1vh] lg:bottom-0 h-[70%] my-auto self-start items-center'>
            <div className='absolute flex top-[2vh] md:top-[1vh] ml-[6vh] md:ml-[9.5vw] lg:ml-[8vw] min-w-max self-center'>
            <h4 className={`${textTheme}`}>
                {mobile ? (
                  ""
                ) : (
                  <>
                    <WhatshotIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C" }}
                    />
                    <b>{"What's Hot: "}</b>
                    <a
                    href='https://lunarcrush.com/trending'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-midorange transition-all duration-200'
                  >
                    ${data.coin.symbol}
                  </a>
                  </>
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
  style={{ lineHeight: 1, color: "#F5900C" }}
  className='font-medium-light text-center hidden md:flex text-lg'
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
                tooltip='Historical Analysis refers to a concise overview of the BandBindex data spanning a 7-day period. It offers insights into trends, patterns, and changes that have occurred within this timeframe.'
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
              <InsightsCard
              tooltip='Historical Analysis refers to a concise overview of the BandBindex data spanning a 7-day period. It offers insights into trends, patterns, and changes that have occurred within this timeframe.'
              text='Historical Analysis'
              >
                <div className='flex w-[80vw] h-full justify-center items-center'>
                  <Charts
                    height={mobile ? 400 : 280}
                    chartData={data.chartData}
                  />
                </div>
              </InsightsCard>
            )}
          </div>

          <div>
            {!balance || balance < 100 ? (
              <InsightsCard
              tooltip='Actionable Insights refer to the presentation of both Buy the Dip (BTD) and Sell the Pump (STP) signals. These insights assist users in identifying potential opportunities for buying or selling based on shifts in market sentiment.'
              text='Actionable Insight'>
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
              <InsightsCard
              tooltip='Actionable Insights refer to the presentation of both Buy the Dip (BTD) and Sell the Pump (STP) signals. These insights assist users in identifying potential opportunities for buying or selling based on shifts in market sentiment.'
              text='Actionable Insight'
              >
                <div className='flex flex-col justify-between relative bottom-[2vh] items-center self-center h-[85%]'>
                  <div className='bg-gray-700 relative top-[10vh] w-[65%] h-[12%]'>
                    <div
                      style={{ width: `${data.BTD}%` }}
                      className='bg-[#04bd64ff] w-[30%] h-full'
                    ></div>
                  </div>
                  <p className='self-center relative top-[5vh] text-[20px] font-[800] text-[#04bd64ff]'>
                    Buy the Dip
                  </p>
                  <div className='bg-gray-700 relative top-[5vh] w-[65%] h-[12%]'>
                    <div
                      style={{ width: `${data.STP}%` }}
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

          <div>
            <InsightsCard
            tooltip='Market Sentiment provides an insight into the prevailing emotions and attitudes within the crypto market. This sentiment is often influenced by discussions and interactions on social media platforms. It reflects moments of fear, optimism, skepticism, or enthusiasm that traders and investors express online.'
            text='Market Sentiment'>
              <MarketSentiment sentiment={data.sentiment} />
            </InsightsCard>
          </div>

          <div>
            {!balance || balance < 100 ? (
              <InsightsCard
              tooltip='The Market Sentiment Analysis tool within BandBindex provides users with a comprehensive overview of the prevailing sentiment within the crypto market. This sentiment is categorized into three main states: Bearish, Neutral, and Bullish'
              text='Market Sentiment Analysis'>
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
              <InsightsCard
                today={data?.today?.MSA}
                yesterday={data?.yesterday?.MSA}
                lastweek={data?.lastweek?.MSA}
                lastMonth={data?.lastMonth?.MSA}
                insights
                tooltip='The Market Sentiment Analysis tool within BandBindex provides users with a comprehensive overview of the prevailing sentiment within the crypto market. This sentiment is categorized into three main states: Bearish, Neutral, and Bullish'
                text='Market Sentiment Analysis'
              >
                <div className='relative bottom-7'>
                  <SemiCircle guage={lerp(0, 100, -90, 90, data?.today?.MSA)} />
                </div>
              </InsightsCard>
            )}
          </div>

          {!balance || balance < 100 ? (
            <>
              <InsightsCard
              tooltip='The Social Analysis Summary feature of BandBindex involves a comprehensive analysis of the ongoing social conversations related to various cryptocurrencies. This tool assesses the sentiment expressed in these conversations and classifies it into three main categories: Dollar Cost Average, Neutral, or Stop Loss.'
              text='Social Analysis Summary'>
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
                today={data?.today?.SAS}
                yesterday={data?.yesterday?.SAS}
                lastweek={data?.lastweek?.SAS}
                lastMonth={data?.lastMonth?.SAS}
                insights
                tooltip='The Social Analysis Summary feature of BandBindex involves a comprehensive analysis of the ongoing social conversations related to various cryptocurrencies. This tool assesses the sentiment expressed in these conversations and classifies it into three main categories: Dollar Cost Average, Neutral, or Stop Loss.'
                text='Social Analysis Summary'
              >
                <div className='relative bottom-7'>
                  <SemiCircle1
                    guage={lerp(0, 100, -90, 90, data?.today?.SAS)}
                  />
                </div>
              </InsightsCard>
            </>
          )}

          {!balance || balance < 100 ? (
            <>
              <InsightsCard
              tooltip='The Relative Strength Index (RSI) is a widely used technical indicator that assists in evaluating potential overbought or oversold conditions in the price of cryptocurrencies within the crypto market.'
              text='Relative Strength Index'>
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
                today={data?.today?.RSI}
                yesterday={data?.yesterday?.RSI}
                lastweek={data?.lastweek?.RSI}
                lastMonth={data?.lastMonth?.RSI}
                insights
                tooltip='The Relative Strength Index (RSI) is a widely used technical indicator that assists in evaluating potential overbought or oversold conditions in the price of cryptocurrencies within the crypto market.'
                text='Relative Strength Index'
              >
                <div className='relative bottom-7'>
                  <SemiCircle2
                    guage={lerp(0, 100, -90, 90, data?.today?.RSI)}
                  />
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
          <LongCard title='Bear and Bull Index Indicators' />
        </section>
        <section className='flex flex-col mb-[15vh] items-center'>
          <LongCard title='Disclaimer' />
        </section>

        <div className={textTheme}>
          <footer className='footer-distributed'>
            <div className='footer-left'>
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
              <div className='footer-about'>
                <p className='footer-company-about'>
                  Combining technical and social analysis, the Bear and Bull
                  Index gives a holistic market view. Useful for
                  less-experienced investors seeking informed choices in
                  cryptoverse.
                </p>
              </div>
              <br></br>
              <p className='footer-company-name'>
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

            <div className='footer-center'>
              <div>
                <i className='fa fa-envelope'>
                  <LinkIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  <b>QUICK LINKS</b>
                </p>
              </div>

              <div>
                <i className='fa fa-envelope'>
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
                <i className='fa fa-envelope'>
                  <ForumIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  {" "}
                  <a
                    href='https://t.me/bandbindex_official'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: "#FFFFFF" }}
                  >
                    Join Community
                  </a>
                </p>
              </div>

              <div>
                <i className='fa fa-envelope'>
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
                <i className='fa fa-envelope'>
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

            <div className='footer-right'>
              <p className='footer-company-about'>
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

              <div className='footer-icons'>
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
                  href='https://www.linkedin.com/company/bandbindex/'
                  style={{ background: "#33383b" }}
                >
                  <LinkedInIcon />
                </a>                
                <a
                  href='https://github.com/LiquidityApe/BandBindex'
                  style={{ background: "#33383b" }}
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
