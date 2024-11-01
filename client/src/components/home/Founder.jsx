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
            <section className="founder">
                <motion.div {...options}>
                    <img src={owner} alt="Chef" height={200} width={200} />
                    <h2>Chef Kapoor</h2>

                    <p>
                        Hello, I'm Mr. Kapoor, The Founder and Chef at Noodie Bowl.
                        <br />
                        We are here to Transform Noodles into Culinary Magic.
                    </p>
                </motion.div>
            </section>
        </>
    );
};

export default Founder;
