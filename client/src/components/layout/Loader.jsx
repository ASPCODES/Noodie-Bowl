import React from 'react';
import { CiBowlNoodles } from "react-icons/ci";
import { motion } from "framer-motion";

const Loader = () => {

    const options = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 1,
            ease: "linear",
            repeat: "Infinity",
            repeatType: "reverse",
        },
    };

    return (
        <div className="loader">
            <CiBowlNoodles />

            <div>
                <motion.p {...options}>Loading...</motion.p>
            </div>
        </div>
    )
}

export default Loader