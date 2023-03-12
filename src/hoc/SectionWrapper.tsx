import React, { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/style";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = (Component: ComponentType, idName: any) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} 
        max-w-7x1 mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.div>
    );
  };

export default SectionWrapper;
