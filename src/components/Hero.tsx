import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles/style";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
        mx-aut flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className={`text-[#915eff]`}>Long</span>
          </h1>
          <p>
            I develop 3d visuals, user <br className="sm:block hidden"></br>
            interface and web application
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
