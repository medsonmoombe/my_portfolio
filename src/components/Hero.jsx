import { motion } from "framer-motion";
import { useMediaQuery } from '@react-hook/media-query';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const media = useMediaQuery('(max-width: 767px)');

  return (
    <section className="relative w-full h-screen mv:h-[750px] mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-5 py-10 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#715AFF] to-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-br from-[#715AFF] to-[#915EFF]" />
        </div>

        <div className="z-10 mv:gap-2 gap-4 w-1/2 mv:w-[100%]">
          <h1 className="text-4xl mv:text-xl md:text-5xl font-bold leading-tight text-white mb-2 w-1/2 mv:w-[100%]">
            Hi, I'm <span className="text-[#915EFF]">Emmanuel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 w-4/5 mv:text-sm">
            Full-stack developer crafting beautiful, efficient, and scalable web
            applications with expertise in JavaScript, Node.js, Ruby on Rails,
            and SQL.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="px-8 py-3 mv:px-4 mv:py-3 mv:text-sm mv: cursor-pointer rounded-lg bg-[#915EFF] text-white hover:bg-opacity-80 transition duration-300 ease-in-out"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {!media ? (
        <ComputersCanvas />
      ) : (
        <div class="mv:hidden">
          <ComputersCanvas />
        </div>
      )}

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
