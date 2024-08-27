
import Link from "next/link"
import { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { Slider } from "@material-tailwind/react";

//animation
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";


const states = [
    { name: "Delhi" },
    { name: "U.P" },
    { name: "Rajasthan" },
]

const city = [
    { name: "New Delhi" },
    { name: "Mathura" },
    { name: "Vrindavan" },
]


const SideNavbarProduct = ({ sidenavBar, setSidenavBar }) => {

    const [curSliderVal, setCurSliderVal] = useState(5);
    const [currentPrice, setCurrentPrice] = useState(500000);
    const [controlSideNav, setControlSideNav] = useState('fixed');

    const handlePriceSlider = (e) => {
        const curvalue = Math.round(e.target.value);
        setCurrentPrice(curvalue * 100000);
        setCurSliderVal(curvalue);
    }


    const controlSideNavbar = () => {
        if (window.scrollY > 150) {
            if (window.scrollY > 500) {
                setControlSideNav('sticky')
            }
        };
    }

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = sidenavBar ? "hidden" : "auto";
        }

    }, [sidenavBar])


    return (

        <div className={` w-full md:w-72 h-full absolute md:block  pb-20 bg-white z-20 md:z-10 ${sidenavBar ? 'flex' : 'hidden'} `}>
            <aside id="sidebar-multi-level-sidebar" className={` absolute mt-5 bg-white md:top-32 left-0 z-40 md:w-72 w-full h-auto md:h-auto md:${controlSideNav} `} aria-label="Sidebar">

                <span className="md:hidden" onClick={() => setSidenavBar(!sidenavBar)}> <VscClose className="ml-[90vw] text-2xl " /></span>

                <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
                    <h1 className="text-2xl pl-4 pb-5 font-medium">State</h1>
                    <ul className="font-medium">
                        {states.map((state, i) => {
                            return (
                                <li key={i}>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="ms-3">{state.name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
                    <h1 className="text-2xl pl-4 pb-5 font-medium">City</h1>
                    <ul className=" font-medium">
                        {city.map((city, i) => {
                            return (
                                <li key={i}>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="ms-3">{city.name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">

                    <h1 className="text-2xl pl-4 pb-5 font-medium">Price</h1>
                    <div className="px-4 w-44">
                        <Slider
                            onChange={handlePriceSlider}
                            defaultValue={curSliderVal}
                        />
                        <p className="py-2 text-dark-grey ">{currentPrice.toLocaleString()}</p>
                    </div>
                </div>

            </aside>


        </div>
    )
}

export default SideNavbarProduct