import React from "react";
import { useState, useEffect } from "react";
import { boxDays } from "../data/Days";
import Box from "../Components/Box";
import RedeemIcon from "@mui/icons-material/Redeem";
import { TiTime } from "react-icons/ti";
import SlideIn from "../Components/SlideIn";
import { useSelector, useDispatch } from "react-redux";
import {
  progressClaim,
  claimPoints,
  setClaimed,
  setDailyClaim,
} from "../store/reducers/AppReducer";
// import moment from "moment";
import { motion } from "framer-motion";

const Claim = (props) => {
  const dispatch = useDispatch();
  const { Claimed, dailyClaim, Points, lastClaim } = useSelector(
    (state) => state.App
  );
  const [timeLeft, setTimeLeft] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-400";

  // UseEffect
  useEffect(() => {
    if (lastClaim !== null) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const hours = 23 - now.getHours();
        const minutes = 59 - now.getMinutes();

        const seconds = 59 - now.getSeconds();
        const timeString = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        setTimeLeft(timeString.split("-").join(""));
      }, 1000);

      // Clean up the interval on unmount
      return () => clearInterval(intervalId);
    }
  }, [lastClaim]);

  useEffect(() => {
    // Get the current date and set the time to 00:00:00.000
    let now = new Date();
    now.setHours(0, 0, 0, 0);

    // Assuming lastClaim is a Date object, set the time to 00:00:00.000
    let lastClaimDate = new Date(lastClaim);
    lastClaimDate.setHours(0, 0, 0, 0);
    console.log(now.getTime() > lastClaimDate.getTime());
    now.getTime() > lastClaimDate.getTime()
      ? dispatch(setClaimed(false))
      : null;
    // Add one day to the last claim date
    lastClaimDate.setDate(lastClaimDate.getDate() + 1);

    // Now, if 'now' is greater than 'lastClaimDate + 1 day', it means that at least two days have passed since the last claim.
    now.getTime() > lastClaimDate.getTime() ? dispatch(setDailyClaim()) : null;
  }, [lastClaim]);

  // FUNCTIONS;

  const onClaim = () => {
    dispatch(claimPoints());
    dispatch(progressClaim());
    dispatch(setClaimed(true));
    setIsOpen(true);
  };

  return (
    <div className={textTheme}>
      <div className='min-h-[100vh] px-5 flex items-center'>
        <div className='max-w-max mx-auto flex flex-col items-center'>
          <motion.h1
            initial={{ scale: [0], rotate: [0] }}
            animate={{
              scale: [0, 0.2, 0.4, 1, 0.8, 1],
              rotate: [],
            }}
            className='mb-5 text-xl font-bold'
          >
            <center>
              <RedeemIcon
                color='white'
                style={{ fontSize: 80, color: "#F5900C" }}
              />
            </center>
            <div className={textTheme}> Balance: You have {Points} Index</div>
          </motion.h1>
          <div className=' flex flex-col items-start text-[13px] mb-5 rectangular-component'>
            <h2 className='mb-5'>{props.title}</h2>
            <div className='flex flex-wrap md:flex-nowrap'>
              {boxDays.map((box) => {
                return <Box key={box.day} day={box.day} sticks={box.points} />;
              })}
            </div>
            <p className='mt-4'>
              Nice! You can pick up{" "}
              <span className='text-teal-600 font-bold'>{dailyClaim}</span>{" "}
              Index 🍢🍢 next time you log into BandBindex.
            </p>

            <p className='mb-2'>
              Get more Index on Zealy <a href='#'>Join Daily Competition.</a>
            </p>

            <button
              onClick={onClaim}
              disabled={Claimed}
              className='w-full py-2 flex justify-center items-center rounded bg-gray-800 disabled:bg-gray-500 text-teal-100'
            >
              {Claimed ? (
                <>
                  Come back in <TiTime /> {timeLeft}
                </>
              ) : (
                <> Collect {dailyClaim} Sticks</>
              )}{" "}
            </button>

            <SlideIn
              isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;

// export async function getServerSideProps({}) {
//   const baseUrl =
//     process.env.NODE_ENV === "production"
//       ? "https://bandb.vercel.app/"
//       : "http://localhost:3000";

//   const claimDataReq = fetch(`${baseUrl}/api/claim`);

//   const [claimDataRes] = await Promise.all([claimDataReq]);

//   const claimData = await claimDataRes.json();

//   return {
//     props: {
//       time: claimData.data,
//     },
//   };
// }
