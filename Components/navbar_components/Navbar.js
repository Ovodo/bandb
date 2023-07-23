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
import UserIcon from "@mui/icons-material/SupervisedUserCircle";
import NightModeIcon from "@mui/icons-material/Nightlight";

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
    <div>
      <nav
        style={{ backgroundColor: theme ? "black" : "white" }}
        className='navbar px-[1vw] sticky top-0  '
      >
        <div
          // style={{ display: !showmenu ? "flex" : "none" }}
          className='logo-menu'
        >
          <Link href='/'>
            <motion.div
              initial={{}}
              animate={{
                y: [0, -15, 0, -15, 0, -17, 0, -12, 0],
                // x: [0, 0, 0, 0, 0, 15, 0, 0, 0, 0],
              }}
              transition={{
                delay: 0.1,
                repeat: 7,
                duration: 4,
                // x: { delay: 8, duration: 5, repeat: 2 },
              }}
              className='logos '
            >
              <div className='w-8 flex relative h-8'>
                <Image
                  src={"/assets/images/logo.png"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h1 className={`${textTheme} `}>{sm ? "฿" : `฿andbIndex`}</h1>
            </motion.div>
          </Link>
          <div className='menu-icon' onClick={toggleMenu}>
            {showmenu ? (
              <HiOutlineX color={"#F5900C"} size={35} />
            ) : (
              <HiOutlineMenu color={"#F5900C"} size={35} />
            )}
          </div>
        </div>
        <menu>
          <motion.ul
            className={` ${colorTheme} nav-menu md:w-[45vw]`}
            id={showmenu ? "mobile" : "hide"}
            whileHover={controls.stop}
          >
            <Link href='/'>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                // className='text-[#EE9220]'
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {"Home"}
              </motion.li>
            </Link>
            <Link href='/'>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {"Cryptocurrencies"}
              </motion.li>
            </Link>
            <Link href=''>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {"Insights"}
              </motion.li>
            </Link>
            <Link href=''>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {""}
              </motion.li>
            </Link>
            <div className='icon flex border-green-500  items-center'>
              <Link href='/claim' style={{ fontSize: 25, color: "#F5900C" }}>
                🎁
              </Link>

              <button
                onClick={() => {
                  dispatch(setTheme(!theme));
                }}
              >
                <HiSparkles
                  color='white'
                  style={{ fontSize: 25, color: "gold", cursor: "pointer" }}
                />
              </button>
              <HiUser
                color='white'
                style={{ fontSize: 25, color: "#F5900C" }}
              />
            </div>
          </motion.ul>
        </menu>

        {/* <div className='icon flex scale-50 items-center'>
          <MenuIcon />
          <DrawingComponent />
        </div> */}
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
