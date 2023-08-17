import React from "react";
import { useState, useEffect } from "react";
import { boxDays } from "../data/Days";
import Box from "../Components/Box";
import RedeemIcon from "@mui/icons-material/Redeem";
import { TiTime } from "react-icons/ti";
import SlideIn from "../Components/SlideIn";
import { useSelector, useDispatch } from "react-redux";
import { setClaimed, setDailyClaim } from "../store/reducers/AppReducer";
import { motion } from "framer-motion";
import axios from "axios";
import { MoonLoader } from "react-spinners";

const Claim = (props) => {
  const dispatch = useDispatch();
  const { Claimed, User } = useSelector((state) => state.App);
  const [timeLeft, setTimeLeft] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(null);
  const [lastClaimed, setLastClaimed] = useState(null);
  const [dailyClaimed, setDailyClaimed] = useState(null);
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-400";
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bandb.vercel.app"
      : "http://localhost:3000";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  // UseEffect
  useEffect(() => {
    if (lastClaimed !== null) {
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
  }, [lastClaimed]);

  useEffect(() => {
    // Get the current date and set the time to 00:00:00.000
    let now = new Date();
    now.setHours(0, 0, 0, 0);

    if (!lastClaimed) {
      dispatch(setClaimed(false));
      return;
    }

    // Assuming lastClaim is a Date object, set the time to 00:00:00.000
    let lastClaimDate = new Date(lastClaimed);
    lastClaimDate.setHours(0, 0, 0, 0);
    // console.log(now.getTime() > lastClaimDate.getTime());
    now.getTime() > lastClaimDate.getTime()
      ? dispatch(setClaimed(false))
      : dispatch(setClaimed(true));
  }, [lastClaimed]);

  const updatePoints = () => {
    const address = User;

    // Define the baseUrl
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://bandb.vercel.app"
        : "http://localhost:3000";

    // Make a POST request to /api/points with the address in the body
    axios
      .post(`${baseUrl}/api/points`, { address })
      .then((res) => {
        const claimData = res.data;
        // Update the state variable with the returned points
        console.log(claimData);
        setPoints(claimData.points);
        setLastClaimed(claimData.lastClaim);
        setDailyClaimed(claimData.dailyClaim);
        dispatch(setDailyClaim(claimData.dailyClaim));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!points) {
      updatePoints();
    }
  });

  // FUNCTIONS;
  const sendPoints = async (address, points) => {
    try {
      const result = await axios.post(`${baseUrl}/api/claim`, {
        address: address,
        points: points,
        lastClaim: new Date(),
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClaim = () => {
    dispatch(setClaimed(true));
    setIsOpen(true);
    sendPoints(User, dailyClaimed);
  };

  return (
    <div className={textTheme}>
      <div className='min-h-[100vh] px-5 flex items-center'>
        {points === null ? (
          <MoonLoader
            color={"red"}
            loading={points === null ? true : false}
            cssOverride={override}
            size={100}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        ) : (
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
              <div className={textTheme}> Balance: You have {points} Index</div>
            </motion.h1>
            <div className=' flex flex-col items-start text-[13px] mb-5 rectangular-component'>
              <h2 className='mb-5'>{props.title}</h2>
              <div className='flex flex-wrap md:flex-nowrap'>
                {boxDays.map((box) => {
                  return (
                    <Box key={box.day} day={box.day} sticks={box.points} />
                  );
                })}
              </div>
              <p className='mt-4'>
                Nice! You can pick up{" "}
                <span className='text-teal-600 font-bold'>{dailyClaimed}</span>{" "}
                $INDEX 📈 next time you log into BandBindex.
              </p>

              <p className='mb-2'>
                Get more $INDEX on Zealy <a href='#'>Join Daily Competition.</a>
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
                  <> Collect {dailyClaimed} Sticks</>
                )}{" "}
              </button>

              <SlideIn
                isOpen={isOpen}
                onClose={() => {
                  setIsOpen(false);
                  updatePoints();
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Claim;
