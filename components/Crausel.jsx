'use client'
import React, { Component } from 'react';
import Link from "next/link";



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import { BiArrowBack } from "react-icons/bi";
import SelectFilter from './SelectFilter';


const images = [
    { img: "/banner.jpg" },
    { img: "/banner1.jpg" },
    { img: "/banner4.jpg" },
]


class DemoCarousel extends Component {
    render() {
        return (
            <>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 text-white"
                        >
                            <BiArrowBack className="text-sm md:text-lg" />
                        </div>
                    )}
                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 text-white"
                        >
                            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                        </div>
                    )}
                >

                    {images?.map((image, i) => {
                        return (
                            <div key={i}>
                                <img
                                    src={image.img}
                                    className="aspect-[16/10] w-full  object-cover"
                                />
                                {/* <div >
                        <Link className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90" href={`/products`}>
                            Shop now
                        </Link>
                    </div> */}
                            </div>
                        )
                    })}


                </Carousel>

                <div className='paddingX py-8 '>
                    <h1 className=' text-xl md:text-2xl font-inter py-4'>
                        Search In Your City
                    </h1>

                    <SelectFilter />
                </div>
            </>
        );
    }
};

export default DemoCarousel
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>