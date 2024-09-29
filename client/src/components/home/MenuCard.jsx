import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ ItemNum }) => {
    return (
        <motion.div
            className="menuCard"
            initial={{
                x: "-100%",
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                delay,
            }}
        >
            <div>Item {{ ItemNum }}</div>

            <main></main>
        </motion.div>
    );
};

export default MenuCard;
