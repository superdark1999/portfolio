import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "@/styles/style";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

import { SectionWrapper } from "@/hoc";

interface MyDivProps extends React.HTMLAttributes<HTMLDivElement> {
  options: { max: number; sale: number; speed: number };
}

const ServiceCard = ({
  title,
  index,
  icon,
}: {
  title: string;
  index: number;
  icon: any;
}) => {
  const divProps: MyDivProps = {
    options: { max: 45, sale: 1, speed: 450 },
    className:
      "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",
  };
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div {...divProps}>
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
      >
        I'm a skilled software developer with expjaslkdfjls klasjdfkl asdklfj
        lsfjkl sdadjfl sdfkljas dlfk sdfj sd sdf sd fkladjsflkjdsk Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Aliquam soluta
        necessitatibus a libero vel laboriosam, doloribus ducimus. Id ullam
        alias odit a vitae in atque! Accusantium veritatis, doloremque, ipsum
        voluptatem itaque expedita ab quaerat atque vero aspernatur error
        suscipit natus? Unde recusandae repudiandae similique at minus velit
        totam quo suscipit.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            index={index}
            icon={service.icon}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
