import React from "react";

const InsightsCard = ({
  text,
  children,
  yesterday,
  lastweek,
  lastMonth,
  today,
  insights = false,
}) => {
  const todayRSI = !today
    ? "..."
    : today <= 30
    ? "Oversold"
    : today == 50
    ? "No Trend"    
    : today < 70
    ? "Neutral"
    : today >= 70
    ? "Overbought"
    : null;

  const todaySAS = !today
    ? "..."
    : today < 40
    ? "Sell"
    : today < 60
    ? "Neutral"
    : today >= 60
    ? "Buy"
    : null;
  const todayMSA = !today
    ? "..."
    : today < 40
    ? "Bearish"
    : today < 60
    ? "Neutral"
    : today >= 70
    ? "Bullish"
    : null;

  const yesterdayRSI = !yesterday
    ? "..."
    : yesterday <= 30
    ? "Oversold"
    : yesterday == 50
    ? "No Trend"    
    : yesterday < 70
    ? "Neutral"
    : yesterday >= 70
    ? "Overbought"
    : null;

  const yesterdaySAS = !yesterday
    ? "..."
    : yesterday < 40
    ? "Sell"
    : yesterday < 60
    ? "Neutral"
    : yesterday >= 60
    ? "Buy"
    : null;

  const yesterdayMSA = !yesterday
    ? "..."
    : yesterday < 40
    ? "Bearish"
    : yesterday < 60
    ? "Neutral"
    : yesterday >= 70
    ? "Bullish"
    : null;

  const lastweekRSI = !lastweek
    ? "..."
    : lastweek <= 30
    ? "Oversold"
    : lastweek == 50
    ? "No Trend"    
    : lastweek < 70
    ? "Neutral"
    : lastweek >= 70
    ? "Overbought"
    : null;

  const lastweekSAS = !lastweek
    ? "..."
    : lastweek < 40
    ? "Sell"
    : lastweek < 60
    ? "Neutral"
    : lastweek >= 60
    ? "Buy"
    : null;

  const lastweekMSA = !lastweek
    ? "..."
    : lastweek < 40
    ? "Bearish"
    : lastweek < 60
    ? "Neutral"
    : lastweek >= 70
    ? "Bullish"
    : null;

  const lastMonthRSI = !lastMonth
    ? "..."
    : lastMonth <= 30
    ? "Oversold"
    : lastMonth == 50
    ? "No Trend"  
    : lastMonth < 70
    ? "Neutral"
    : lastMonth >= 70
    ? "Overbought"
    : null;

  const lastMonthSAS = !lastMonth
    ? "..."
    : lastMonth < 40
    ? "Sell"
    : lastMonth < 60
    ? "Neutral"
    : lastMonth >= 60
    ? "Buy"
    : null;

  const lastMonthMSA = !lastMonth
    ? "..."
    : lastMonth < 40
    ? "Bearish"
    : lastMonth < 60
    ? "Neutral"
    : lastMonth >= 70
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
    <div className='flex  flex-col items-center justify-between w-[80vw] relative md:w-[40vw] lg:w-[28vw] mx-auto my-[5vh] lg:my-[7vh]  h-[45vh] md:h-[35vh] lg:h-[45vh] bg-slate-200'>
      <p className='bg-slate-900 py-2 text-center text-white font-medium w-full'>
        {text}
      </p>
      {children}
      {insights ? (
        <>
          <div className='absolute flex flex-col items-center top-[7vh]'>
            <p className=' font-extrabold text-slate-900  text-xl'>
              {todayTitle}
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
              <p className='text-[12px]'>Yesterday</p>
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
              <p className='text-[15px] font-[600]'>{yesterdayTitle}</p>
            </div>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className='text-[12px]'>Last Week</p>
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
              <p className='text-[15px] font-[600]'>{lastWeekTitle}</p>
            </div>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className='text-[12px]'>Last Month</p>
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
              <p className='text-[15px] font-[600]'>{lastMonthTitle}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default InsightsCard;
