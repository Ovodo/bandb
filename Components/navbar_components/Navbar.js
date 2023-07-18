import React from "react";
import { GiWallet } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from '@mui/icons-material/SupervisedUserCircle';
import NightModeIcon from '@mui/icons-material/Nightlight';

// import { ethers } from 'ethers';
import DrawingComponent from "../DrawingComponent";
import Image from "next/image";

const Navbar = ({ children }) => {
  let sm = typeof window !== "undefined" && window.innerWidth < 789;
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [showmenu, setShowmenu] = useState(false);
  const dispatch = useDispatch();
  const controls = useAnimation();

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

  return (
    <div>
      <nav className='navbar  sticky top-0  '>
        <menu>
          <motion.ul
            className='nav-menu md:w-[45vw]'
            // id={showmenu ? "mobile" : "hide"}
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
                className='text-[#EE9220]'
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
                {""}
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
          </motion.ul>
        </menu>

        {/* <div className='icon flex scale-50 items-center'>
          <MenuIcon />
          <DrawingComponent />
        </div> */}
        <div className='icon flex border-green-500  items-center'><Link href='/claim' style={{ fontSize: 25, color: "#F5900C" }} >🎁</Link>
        {/*<NightModeIcon color='white' style={{ fontSize: 30, color: "#F5900C" }}/>*/}
          {<UserIcon color='white' style={{ fontSize: 30, color: "#F5900C" }} />}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
