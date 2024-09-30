import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ ItemNum, noodleSrc, price, title, handler, delay }) => {
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
            <div>Item [{ItemNum}]</div>

            <main>
                <img src={noodleSrc} alt={ItemNum} />

                <h4>${price}</h4>

                <p>{title}</p>

                <button onClick={() => handler()}>Buy Now</button>
            </main>
        </motion.div>
    );
};

export default MenuCard;
