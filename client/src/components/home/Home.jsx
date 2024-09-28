import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";

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
    <>

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

      <Founder />
    </>
  );
};

export default Home;
