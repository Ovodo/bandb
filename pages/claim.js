import React from "react";
import { useState, useEffect } from "react";
import { boxDays } from "../data/Days";
import Box from "../Components/Box";
import { TiTime } from "react-icons/ti";
import SlideIn from "../Components/SlideIn";
import { useSelector, useDispatch } from "react-redux";
import {
  progressClaim,
  claimPoints,
  setClaimed,
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

  // UseEffect
  useEffect(() => {
    if (lastClaim[0] !== null) {
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

  //   useEffect(() => {
  //     let now = new Date();
  //     now.getDate() > lastClaim[0] ? dispatch(setClaimed()) : null;
  //   }, [timeLeft, lastClaim]);

  // FUNCTIONS;

  const onClaim = () => {
    dispatch(claimPoints());
    dispatch(progressClaim());
    dispatch(setClaimed());
    setIsOpen(true);
  };

  return (
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
            <center><font size='20'>🎁</font></center><br></br>
          Balance: You have {Points} Index
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
            <span className='text-teal-600 font-bold'>{dailyClaim}</span> Index
            🍢🍢 next
          </p>
          <p className='mb-2'>
            Get more Index on Zealy <a href='#'>Join Daily Competition</a>
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
  );
};

export default Claim;
