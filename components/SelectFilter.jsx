import React from 'react'
import { Select, Option } from "@material-tailwind/react";

//animation
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";



const SelectFilter = () => {
    return (
        <motion.div
            variants={fadeIn('left', 0.1, 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='paddingX w-full bg-grey h-64 md:h-28 flex md:justify-around md:items-center md:flex-row flex-col gap-2'>


            <div className='spaddingY  my-3'>
                <div

                    className="flex justify-between gap-2 md:w-[80%] flex-wrap md:flex-nowrap">
                    <Select color="purple" label="Select State">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                    <Select color="purple" label="Select City">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                    <Select color="teal" label="Select Land Type">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                </div>
            </div>

            <div className=' flex justify-center my-2'>
                <button className='btn-dark spaddingY md:w-auto w-full'>
                    Search
                </button>
            </div>
        </motion.div >
    )
}

export default SelectFilter