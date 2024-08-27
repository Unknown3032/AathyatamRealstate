import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";



const FadeInRight = ({ children }) => {
    const controls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref)

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            exit='hidden'
            variants={fadeIn('right', 0.1, 0.5)}
        >
            {children}
        </motion.div>
    );
}

export default FadeInRight