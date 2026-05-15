import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Vue", "Redux", "jQuery", "HTML5", "CSS3", "Tailwind CSS", "Chakra UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Socket.io", "Ruby on Rails", "Java"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Firebase"],
  },
  {
    category: "Tools & Methods",
    skills: ["Git", "GitHub", "Jest", "TDD", "Redux", "Docker", "Figma", "Mobile/Responsive Dev"],
  },
];

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
    </motion.div>

    <div className="mt-14 grid sm:grid-cols-2 gap-10">
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.category}
          variants={fadeIn("up", "spring", gi * 0.15, 0.6)}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#915EFF] mb-4">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 + si * 0.05 }}
                whileHover={{ y: -2, borderColor: "#915EFF" }}
                className="px-4 py-1.5 rounded-full border border-white/10 text-gray-300 text-[13px] font-medium bg-white/[0.03] cursor-default transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "");
