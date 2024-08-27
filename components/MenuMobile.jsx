import React, { useEffect } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/varient";


const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Land", url: "/all-lands" },
    { id: 4, name: "Blog", url: "/blog" },
];

const subMenuData = [
    { id: 1, name: "tshirt", doc_count: 11 },
    { id: 2, name: "mug", doc_count: 8 },
    { id: 3, name: "mouse-pad", doc_count: 64 },
    { id: 4, name: "keychain", doc_count: 107 },
];

const MenuMobile = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
    mobileMenu
}) => {


    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>



                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;