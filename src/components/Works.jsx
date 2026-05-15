import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, code } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import resume from "../assets/files/resume/Emmanuel_moombe.pdf";

const ProjectRow = ({ index, name, featured, description, tags, image, source_code_link, link }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.5)}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-14 items-center py-14 border-b border-white/5 last:border-0`}
    >
      {/* image */}
      <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl bg-white/[0.03]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-[270px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-[filter] duration-300"
        />
        {/* featured ribbon */}
        {featured && (
          <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase bg-[#915EFF] text-white px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        {/* hover overlay */}
        <div className="absolute inset-0 bg-[#050816]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center gap-4">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[13px] font-medium hover:bg-white/20 transition-colors"
          >
            <img src={github} alt="github" className="w-4 h-4 object-contain invert" />
            Source Code
          </button>
          <button
            onClick={() => window.open(link, "_blank")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#915EFF] text-white text-[13px] font-medium hover:bg-[#7d4fe0] transition-colors"
          >
            <img src={code} alt="live" className="w-4 h-4 object-contain invert" />
            Live Demo
          </button>
        </div>
      </div>

      {/* text */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#915EFF]">
          Project {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-white text-[26px] sm:text-[30px] font-black leading-tight">
          {name}
        </h3>
        <p className="text-gray-400 text-[15px] leading-[1.85]">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-3 py-1 rounded-full border border-white/10 text-[12px] text-gray-400 bg-white/[0.03]"
            >
              {tag.name}
            </span>
          ))}
        </div>
        {/* inline links for non-hover access on mobile */}
        <div className="flex gap-4 pt-2 md:hidden">
          <a href={source_code_link} target="_blank" rel="noreferrer"
            className="text-[13px] text-gray-400 hover:text-white underline underline-offset-4">
            Source Code
          </a>
          <a href={link} target="_blank" rel="noreferrer"
            className="text-[13px] text-[#915EFF] hover:text-white underline underline-offset-4">
            Live Demo →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I've built</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    {/* client-facing framing */}
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-white/5"
    >
      <p className="text-gray-400 text-[15px] max-w-xl leading-[1.85]">
        I help startups and product teams ship fast, maintainable web products —
        from MVP to production. Below is a selection of work that shows how I
        think, architect, and execute across the full stack.
      </p>
      <a
        href={resume}
        download="Emmanuel_Moombe_CV.pdf"
        className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#915EFF]/40 text-[#915EFF] text-[13px] font-semibold hover:bg-[#915EFF] hover:text-white hover:border-[#915EFF] transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
        </svg>
        Download CV
      </a>
    </motion.div>

    <div className="mt-2">
      {projects.map((project, index) => (
        <ProjectRow key={project.name} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "");
