import React from "react";

const InsightsCard = ({ text, children, insights = false }) => {
  return (
    <div className=' w-[80vw] relative md:w-[40vw] lg:w-[28vw] mx-auto my-[5vh] lg:my-[7vh]  h-[45vh] md:h-[35vh] lg:h-[40vh] bg-slate-200'>
      <p className='bg-slate-900 py-2 text-center text-white font-medium w-full'>
        {text}
      </p>
      {children}
      {insights ? (
        <div className='absolute bottom-0 flex justify-around w-full border-2'>
          <div className=' flex flex-col justifiy-center items-center'>
            <p className='text-[12px]'>Yesterday</p>
            <p className='text-[25px] text-red-800 font-[800]'>36</p>
            <p className='text-[15px] font-[600]'>Bearish</p>
          </div>
          <div className=' flex flex-col justifiy-center items-center'>
            <p className='text-[12px]'>Last Week</p>
            <p className='text-[25px] text-green-800 font-[800]'>65</p>
            <p className='text-[15px] font-[600]'>Bullish</p>
          </div>
          <div className=' flex flex-col justifiy-center items-center'>
            <p className='text-[12px]'>Last Month</p>
            <p className='text-[25px] text-yellow-600 font-[800]'>40</p>
            <p className='text-[15px] font-[600]'>Neutral</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InsightsCard;
