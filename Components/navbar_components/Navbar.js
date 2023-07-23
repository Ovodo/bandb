import React from "react";
import { GiWallet } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineMenu, HiUser, HiSparkles } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NightModeIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import RedeemIcon from "@mui/icons-material/Redeem";

// import { ethers } from 'ethers';
import DrawingComponent from "../DrawingComponent";
import Image from "next/image";
import { setTheme } from "@/store/reducers/Theme";

const Navbar = ({ children }) => {
  let sm = typeof window !== "undefined" && window.innerWidth < 789;
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [showmenu, setShowmenu] = useState(false);
  const dispatch = useDispatch();
  const controls = useAnimation();
  const { theme } = useSelector((state) => state.Theme);
  // const textTheme = theme ? "text-slate-950" : "text-slate-400";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";

  const connectWallet = async () => {
    // console.log('requesting accounts');
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setDefaultAccount(accounts[0]);
        dispatch(updateAddress(accounts[0]));
      } catch (error) {
        console.log("err:" + error);
      }
    } else {
      console.log("metamask not detected");
    }
  };

  let primary = "#25092c";
  // let secondary="#9be8a1"

  const toggleMenu = () => {
    setShowmenu(!showmenu);
  };
  const hideMenu = () => {
    setShowmenu(false);
  };

  const route = useRouter();
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const textTheme = !theme ? "text-slate-950" : "text-slate-300";

  const colorTheme = !theme ? "bg-white" : "bg-slate-950";

  return (
    <div className={backgroundTheme}>
      <nav
        // style={{ backgroundColor: theme ? "black" : "white" }}
        className={`navbar ${
          theme ? "bg-slate-950" : "bg-slate-300"
        } px-[1vw] sticky top-0  `}
      >
        <div className='logo-menu'>
          <Link href='/'>
            <motion.div
              initial={{}}
              animate={
                {
                  // y: [0, -15, 0, -15, 0, -17, 0, -12, 0],
                }
              }
              transition={{
                delay: 0.1,
                repeat: 7,
                duration: 4,
              }}
              className='logos '
            >
              <div className='lg:w-10 w-10 h-10 flex relative lg:h-10'>
                <Image
                  src={"/assets/images/logo.png"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h1 className={`${textTheme}  `}>{sm ? "฿" : `฿andbIndex`}</h1>
            </motion.div>
          </Link>
        </div>
        <div
          className='menu-icon  relative right-[37vw] md:right-[42vw]'
          onClick={toggleMenu}
        >
          {showmenu ? (
            <HiOutlineX color={"#F5900C"} size={35} />
          ) : (
            <HiOutlineMenu color={"#F5900C"} size={35} />
          )}
        </div>
        <menu>
          <motion.ul
            className={`${
              theme ? "bg-slate-950" : "bg-slate-300"
            } nav-menu   md:w-[55vw]`}
            id={showmenu ? "mobile" : "hide"}
          >
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`${textTheme} relative left-2 border-b-[1px] border-Gold border-opacity-`}
              transition={{
                type: "spring",
                stiffness: 500,
                duration: 0.1,
              }}
              onClick={() => {
                hideMenu();
              }}
            >
              <a>
                <Link href='/'>{"Home"}</Link>
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`${textTheme} relative left-2 border-b-[1px] border-Gold border-opacity-`}
              transition={{
                type: "spring",
                stiffness: 500,
                duration: 0.1,
              }}
              onClick={() => {
                hideMenu();
              }}
            >
              <a>
                <Link href='/'>{"Cryptocurrencies"}</Link>
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`${textTheme} relative left-2 border-b-[1px] border-Gold border-opacity-`}
              // style={{ borderBottom: "none" }}
              transition={{
                type: "spring",
                stiffness: 500,
                duration: 0.1,
              }}
              onClick={() => {
                hideMenu();
              }}
            >
              <a>
                <Link href=''>{"Insights"}</Link>
              </a>
            </motion.li>
            <div className='icon flex  items-center'>
              <Link href='/claim' style={{ fontSize: 25, color: "#F5900C" }}>
                <RedeemIcon
                  style={{
                    fontSize: 25,
                    color: "#F5900C",
                    cursor: "pointer",
                  }}
                />
              </Link>

              <button
                onClick={() => {
                  dispatch(setTheme(!theme));
                }}
              >
                {theme ? (
                  <NightModeIcon
                    color='white'
                    style={{
                      fontSize: 25,
                      color: "#F5900C",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <WbSunnyIcon
                    color='white'
                    style={{
                      fontSize: 25,
                      color: "#F5900C",
                      cursor: "pointer",
                    }}
                  />
                )}
              </button>

              <AccountCircleIcon
                color='white'
                style={{ fontSize: 25, color: "#F5900C" }}
              />
            </div>
          </motion.ul>
        </menu>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
