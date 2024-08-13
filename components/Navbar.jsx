'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";


//icons 
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

//animation
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";

//components
import Menu from "./Menu";
import Wrapper from "./Wrapper";
import MenuMobile from "./MenuMobile";
import UserNavigation from "./UserNavigation";


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0 absolute");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const [cartItems, setCartItems] = useState()
    const [userNavigate, setUserNavigate] = useState(false)
    const [baground, setBaground] = useState("md:bg-transparent")


    const controlNavbar = () => {

        if (lastScrollY) {
            setShow("shadow-sm sticky");
            setBaground(" bg-white ")
        }

        if (window.scrollY > 150) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px] ");
            } else {
                setShow("shadow-sm sticky");
            }
            setBaground(" bg-white ")
        } else {
            setShow("translate-y-0 absolute");
            setBaground("md:bg-transparent")
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);


    return (
        <header
            className={`w-full h-[60px] md:h-[80px] max-md:bg-white flex items-center justify-between z-20 max-md:sticky  top-0 transition-transform duration-300 max-md:shadow-sm  ${show} ${baground}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href="/">
                    <img src="/hindu.png" className="w-[85px]" />
                </Link>
                {/* menu for desktop  */}
                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />
                {/* menu for mobile  */}
                <AnimatePresence>
                    {mobileMenu && (
                        <motion.div
                            variants={fadeIn('left', 0.1, 0.5)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black"
                        >
                            <MenuMobile
                                showCatMenu={showCatMenu}
                                setShowCatMenu={setShowCatMenu}
                                setMobileMenu={setMobileMenu}
                                categories={categories}
                                mobileMenu={mobileMenu}
                            />
                        </motion.div>

                    )}
                </AnimatePresence>

                {/* icons  */}
                <div className="flex items-center gap-2 text-black">
                    {/* Icon start */}
                    {/* <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                    <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                        51
                    </div>
                </div>  */}

                    {/* Icon end

                {/* Icon start */}
                    <Link href="/cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            {cartItems && Object.keys(cartItems)?.length > 0 &&
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {Object.keys(cartItems)?.length}
                                </div>
                            }
                        </div>
                    </Link>
                    {/* Icon end */}

                    {<div className="group w-8 md:w-12 h-8 md:h-12 rounded-full flex flex-col justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
                        <Link href={'/signIn'}>
                            <IoLogInOutline className="text-[19px] md:text-[24px]" />
                        </Link>
                    </div>
                    }

                    {/* Mobile icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon end */}
                </div>
            </Wrapper>
        </header>
    )
}

export default Navbar