import React from "react";
import { useSelector } from "react-redux";

const InsightsCard = ({
  text,
  children,
  yesterday,
  lastweek,
  lastMonth,
  today,
  insights = false,
}) => {
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = !theme ? "text-slate-950" : "text-slate-50";
  const textTheme2 = theme ? "text-slate-950" : "text-slate-300";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";
  const backgroundTheme2 = !theme ? "bg-slate-50" : "bg-slate-900";
  const todayRSI = !today
    ? "..."
    : today <= 30
    ? "Sold"
    : today == 50
    ? "No Trend"
    : today < 70
    ? "Neutral"
    : today >= 70
    ? "Bought"
    : null;

  const todaySAS = !today
    ? "..."
    : today < 40
    ? "Stop Loss"
    : today < 60
    ? "Neutral"
    : today >= 60
    ? "Dollar Cost"
    : null;
  const todayMSA = !today
    ? "..."
    : today < 40
    ? "Bearish"
    : today < 60
    ? "Neutral"
    : today >= 60
    ? "Bullish"
    : null;

  const yesterdayRSI = !yesterday
    ? "..."
    : yesterday <= 30
    ? "Sold"
    : yesterday == 50
    ? "No Trend"
    : yesterday < 70
    ? "Neutral"
    : yesterday >= 70
    ? "Bought"
    : null;

  const yesterdaySAS = !yesterday
    ? "..."
    : yesterday < 40
    ? "Stop Loss"
    : yesterday < 60
    ? "Neutral"
    : yesterday >= 60
    ? "Dollar Cost"
    : null;

  const yesterdayMSA = !yesterday
    ? "..."
    : yesterday < 40
    ? "Bearish"
    : yesterday < 60
    ? "Neutral"
    : yesterday >= 60
    ? "Bullish"
    : null;

  const lastweekRSI = !lastweek
    ? "..."
    : lastweek <= 30
    ? "Sold"
    : lastweek == 50
    ? "No Trend"
    : lastweek < 70
    ? "Neutral"
    : lastweek >= 70
    ? "Bought"
    : null;

  const lastweekSAS = !lastweek
    ? "..."
    : lastweek < 40
    ? "Stop Loss"
    : lastweek < 60
    ? "Neutral"
    : lastweek >= 60
    ? "Dollar Cost"
    : null;

  const lastweekMSA = !lastweek
    ? "..."
    : lastweek < 40
    ? "Bearish"
    : lastweek < 60
    ? "Neutral"
    : lastweek >= 60
    ? "Bullish"
    : null;

  const lastMonthRSI = !lastMonth
    ? "..."
    : lastMonth <= 30
    ? "Sold"
    : lastMonth == 50
    ? "No Trend"
    : lastMonth < 70
    ? "Neutral"
    : lastMonth >= 70
    ? "Bought"
    : null;

  const lastMonthSAS = !lastMonth
    ? "..."
    : lastMonth < 40
    ? "Stop Loss"
    : lastMonth < 60
    ? "Neutral"
    : lastMonth >= 60
    ? "Dollar Cost"
    : null;

  const lastMonthMSA = !lastMonth
    ? "..."
    : lastMonth < 40
    ? "Bearish"
    : lastMonth < 60
    ? "Neutral"
    : lastMonth >= 60
    ? "Bullish"
    : null;

  const todayTitle =
    text == "Social Analysis Summary"
      ? todaySAS
      : text == "Market Sentiment Analysis"
      ? todayMSA
      : text == "Relative Strength Index"
      ? todayRSI
      : null;

  const yesterdayTitle =
    text == "Social Analysis Summary"
      ? yesterdaySAS
      : text == "Market Sentiment Analysis"
      ? yesterdayMSA
      : text == "Relative Strength Index"
      ? yesterdayRSI
      : null;
  const lastWeekTitle =
    text == "Social Analysis Summary"
      ? lastweekSAS
      : text == "Market Sentiment Analysis"
      ? lastweekMSA
      : text == "Relative Strength Index"
      ? lastweekRSI
      : null;
  const lastMonthTitle =
    text == "Social Analysis Summary"
      ? lastMonthSAS
      : text == "Market Sentiment Analysis"
      ? lastMonthMSA
      : text == "Relative Strength Index"
      ? lastMonthRSI
      : null;

  return (
    <div
      className={` ${backgroundTheme} flex   ${
        theme ? "shadow-slate-300" : "shadow-slate-800"
      } flex-col items-center justify-between w-[80vw] relative md:w-[40vw] lg:w-[28vw] mx-auto my-[5vh] lg:my-[7vh]  h-[45vh] md:h-[35vh] lg:h-[45vh]  shadow-md rounded-sm`}
    >
      <p
        className={`${backgroundTheme2} ${textTheme} py-2 text-center  font-medium w-full`}
      >
        {text}
      </p>
      {children}
      {insights ? (
        <>
          <div className='absolute flex flex-col items-center top-[7vh]'>
            <p className={`font-extrabold ${textTheme2}  text-xl`}>
              <b>{todayTitle}</b>
            </p>
            <p
              style={{
                color:
                  today < 40 ? "Red" : today < 60 ? "rgb(202 138 4)" : "Green",
              }}
              className='text-[25px] font-[800]'
            >
              {today}
            </p>
          </div>
          <div className='absolute bottom-2 flex justify-around w-full'>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className={` ${textTheme2} text-[12px]`}>Yesterday</p>
              <p
                style={{
                  color:
                    yesterday < 40
                      ? "Red"
                      : yesterday < 60
                      ? "rgb(202 138 4)"
                      : "Green",
                }}
                className='text-[25px] text-[#c0041dff] font-[800]'
              >
                {yesterday}
              </p>
              <p className={` ${textTheme2} text-[15px] font-[600]`}>
                {yesterdayTitle}
              </p>
            </div>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className={` ${textTheme2} text-[12px]`}>Last Week</p>
              <p
                style={{
                  color:
                    lastweek < 40
                      ? "Red"
                      : lastweek < 60
                      ? "rgb(202 138 4)"
                      : "Green",
                }}
                className='text-[25px] text-[#04bd64ff] font-[800]'
              >
                {lastweek}
              </p>
              <p className={` ${textTheme2} text-[15px] font-[600]`}>
                {lastWeekTitle}
              </p>
            </div>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className={` ${textTheme2} text-[12px]`}>Last Month</p>
              <p
                style={{
                  color:
                    lastMonth < 40
                      ? "Red"
                      : lastMonth < 60
                      ? "rgb(202 138 4)"
                      : "Green",
                }}
                className='text-[25px] text-[#f19719ff] font-[800]'
              >
                {lastMonth}
              </p>
              <p className={` ${textTheme2} text-[15px] font-[600]`}>
                {lastMonthTitle}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default InsightsCard;
