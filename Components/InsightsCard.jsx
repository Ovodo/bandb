import React from "react";

const InsightsCard = ({
  text,
  children,
  yesterday,
  lastweek,
  lastMonth,
  insights = false,
}) => {
  return (
    <div className='flex  flex-col items-center justify-between w-[80vw] relative md:w-[40vw] lg:w-[28vw] mx-auto my-[5vh] lg:my-[7vh]  h-[40vh] md:h-[35vh] lg:h-[45vh] bg-slate-200'>
      <p className='bg-slate-900 py-2 text-center text-white font-medium w-full'>
        {text}
      </p>
      {children}
      {insights ? (
        <>
          <p className='absolute font-extrabold text-xl top-[8vh] '>
            {yesterday < 40
              ? "Bearish"
              : yesterday < 60
              ? "Neutral"
              : yesterday > 60
              ? "Bullish"
              : ""}
          </p>
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
              <p className='text-[15px] font-[600]'>
                {yesterday < 40
                  ? "Bearish"
                  : yesterday < 60
                  ? "Neutral"
                  : yesterday > 60
                  ? "Bullish"
                  : ""}
              </p>
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
              <p className='text-[15px] font-[600]'>
                {lastweek < 40
                  ? "Bearish"
                  : lastweek < 60
                  ? "Neutral"
                  : lastweek > 60
                  ? "Bullish"
                  : ""}
              </p>
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
              <p className='text-[15px] font-[600]'>
                {lastMonth < 40
                  ? "Bearish"
                  : lastMonth < 60
                  ? "Neutral"
                  : "Bullish"}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default InsightsCard;
