import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="relative pl-8 border-l-2 border-[#915EFF]/30 hover:border-[#915EFF] transition-colors duration-300 group"
  >
    {/* dot */}
    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#915EFF] ring-4 ring-[#050816] group-hover:scale-125 transition-transform duration-300" />

    <div className="mb-1 flex flex-wrap items-center gap-3">
      <span className="text-[11px] font-semibold tracking-widest uppercase text-[#915EFF] bg-[#915EFF]/10 px-3 py-1 rounded-full">
        {experience.date}
      </span>
      <span className="text-[11px] font-medium tracking-widest uppercase text-gray-500">
        {experience.type}
      </span>
    </div>

    <h3 className="text-white text-[20px] font-bold leading-snug">
      {experience.title}
    </h3>
    <p className="text-[#915EFF] text-[15px] font-semibold mb-4">
      {experience.company_name}
    </p>

    <ul className="space-y-2">
      {experience.points.map((point, i) => (
        <li key={i} className="flex gap-2 text-gray-400 text-[14px] leading-relaxed">
          <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#915EFF]/60 shrink-0" />
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>Where I've worked</p>
      <h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
    </motion.div>

    <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-16">
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} experience={exp} index={i} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
