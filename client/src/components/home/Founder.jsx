import React from "react";
import { motion } from "framer-motion";
import owner from "../../assets/chef.avif";

const Founder = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    };
    return (
        <>
            <section className="founder"></section>
            <motion.div {...options}>
                <img src={owner} alt="Chef" height={300} width={300} />
                <h3>Robert Oliver</h3>

                <p>
                    Hello, I'm Robert Oliver, The Founder and Chef at Hot Oven.
                    <br />
                    Our dedication is to bring innovative flavors to your plate.
                </p>
            </motion.div>
        </>
    );
};

export default Founder;
