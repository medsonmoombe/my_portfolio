import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, desc }) => (
  <Tilt className="xs:w-[250px] w-full m-auto">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full m-auto p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
        </div>
        <h3 className="text-white text-[28px] font-bold text-center mt-6">
          {title}
        </h3>
        <p className="text-white text-[16px] text-center w-[100%] mt-6">
          {desc}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer, with expertise in TypeScript,
        JavaScript, and frameworks like React, Node.js, I have experience in Ruby on Rails, SQL, and PostgreSQL. I
        am a quick learner and enjoy collaborating with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
