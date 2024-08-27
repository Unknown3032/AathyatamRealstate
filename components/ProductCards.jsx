
import Link from "next/link"
import { CiFilter } from "react-icons/ci";

//animation
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";

const demoLands = [
    { url: '/featureimg.jpg', title: "Vridavan", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: "/land.jpg", title: "Kokilavan", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: "/land1.jpg", title: "Semri", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: "/land2.jpg", title: "Mathura", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },
]

const ProductCards = ({ sidenavBar, setSidenavBar }) => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 md:mt-16 flex justify-center items-center">
            <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col  items-start  gap-4 md:gap-8">
                    <div className="grid gap-1">
                        <motion.h2
                            animate={'show'}
                            initial="hidden"
                            exit='hidden'
                            variants={fadeIn('right', 0.2, 0.5)}
                            className="text-3xl font-bold tracking-tight">
                            Explore Our Categories
                        </motion.h2>

                        <motion.p
                            animate={'show'}
                            initial="hidden"
                            exit='hidden'
                            variants={fadeIn('left', 0.2, 0.5)}
                            className="text-muted-foreground">
                            Find the perfect products for your needs.
                        </motion.p>
                    </div>

                    <div className="flex text-2xl justify-between w-full">
                        <motion.h1
                            animate={'show'}
                            initial="hidden"
                            exit='hidden'
                            variants={fadeIn('right', 0.2, 0.5)}
                            className="" >{demoLands?.length} Lands Available</motion.h1>
                        <motion.div
                            animate={'show'}
                            initial="hidden"
                            exit='hidden'
                            variants={fadeIn('left', 0.2, 0.5)}
                            className="md:hidden" >
                            <CiFilter
                                onClick={() => setSidenavBar(!sidenavBar)}
                                className="text-3xl" />
                        </motion.div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {
                        demoLands?.map((land, i) => {
                            return (
                                <motion.div
                                    variants={fadeIn(0.2, (i * 0.3))}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    key={i} className=" ">
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View Category</span>
                                        </Link>
                                        <img
                                            src={land?.url}
                                            alt="Electronics"
                                            width="300"
                                            height="300"
                                            className="object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold">{land?.title}</h3>
                                            <p className="text-sm text-muted-foreground">{land.des}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductCards
