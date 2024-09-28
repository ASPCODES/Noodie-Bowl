import React from "react";
import { delay, motion } from "framer-motion";

const Home = () => {
  const option = {
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
    <section className="home">
      <div>
        <motion.h1 {...option}>Hot Oven</motion.h1>
        <motion.p {...option} transition={{ delay: 0.2 }}>
          The Art of Elegant Baking!!
        </motion.p>
      </div>

      <motion.a
        href="#menu"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
      >
        Explore menu
      </motion.a>
    </section>
  );
};

export default Home;
