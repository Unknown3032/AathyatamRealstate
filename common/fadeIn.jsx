import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";



const FadeIn = ({ children, delay = 0.5 }) => {
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
            variants={fadeIn(0.2, delay)}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn