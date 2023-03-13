import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-5 py-10 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#715AFF] to-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-br from-[#715AFF] to-[#915EFF]" />
        </div>

        <div className="z-10 gap-4 w-1/2">
  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-2 w-1/2">
    Hi, I'm <span className="text-[#915EFF]">Emmanuel</span>
  </h1>
  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 w-4/5">
    Full-stack developer crafting beautiful, efficient, and scalable web applications with expertise in JavaScript, Node.js, Ruby on Rails, and SQL.
  </p>
  <div className="mt-10">
    <a
      href="#contact"
      className="px-8 py-3 cursor-pointer rounded-lg bg-[#915EFF] text-white hover:bg-opacity-80 transition duration-300 ease-in-out"
    >
      Get in Touch
    </a>
  </div>
</div>

      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-16 h-16 rounded-full border-4 border-[#915EFF] flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
