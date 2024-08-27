'use client'

import React, { useState } from 'react';

//components
import ProductCards from '@/components/ProductCards'
import SideNavbarProduct from '@/components/SideNavbarProduct'

//animation
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";

const Page = () => {

    const [sidenavBar, setSidenavBar] = useState(false);

    return (
        <div className='min-h-screen flex w-full '>
            <div>
                <AnimatePresence>
                    {sidenavBar &&
                        (
                            <motion.div
                                variants={fadeIn('right', 0.1, 0.5)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className=' md:hidden bg-white w-full h-full absolute pb-20  z-20 '>
                                <SideNavbarProduct sidenavBar={sidenavBar} setSidenavBar={setSidenavBar} />
                            </motion.div>
                        )}
                </AnimatePresence>

                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='hidden md:w-60 md:block bg-white'>
                    <SideNavbarProduct sidenavBar={sidenavBar} setSidenavBar={setSidenavBar} />
                </motion.div>
            </div>
            <div
                className='w-full  md:mt-7'>
                <ProductCards sidenavBar={sidenavBar} setSidenavBar={setSidenavBar} />
            </div>
        </div>
    )
}

export default Page
