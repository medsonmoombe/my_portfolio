import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

/**
 * REPLACE these with real quotes from colleagues, managers, or clients.
 * Reach out to someone at CMOS Tech, Bofrak POS, or Chrilan Tech for even
 * one sentence — it converts far better than any design element.
 */
const testimonials = [
  {
    quote:
      "Emmanuel has a rare ability to take a complex requirement and turn it into clean, working code fast. He also made our junior devs significantly better just by being on the team.",
    name: "Team Lead",
    role: "CMOS Tech",
    initials: "CT",
  },
  {
    quote:
      "Working with Emmanuel on our POS system was seamless. He understood both the technical constraints and the business needs, and delivered features that just worked.",
    name: "Engineering Manager",
    role: "Bofrak POS",
    initials: "BP",
  },
  {
    quote:
      "Emmanuel brought structure and speed to our frontend. He turned detailed designs into production-ready code and helped the whole team level up in the process.",
    name: "CTO",
    role: "Chrilan Tech",
    initials: "CH",
  },
];

const TestimonialCard = ({ quote, name, role, initials, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.6)}
    className="flex flex-col justify-between gap-6 p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#915EFF]/30 hover:bg-white/[0.04] transition-all duration-300"
  >
    {/* quote mark */}
    <div>
      <span className="text-[#915EFF]/40 text-[64px] font-black leading-none select-none">"</span>
      <p className="text-gray-300 text-[15px] leading-[1.85] -mt-4">
        {quote}
      </p>
    </div>

    {/* author */}
    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      <div className="w-10 h-10 rounded-full bg-[#915EFF]/20 border border-[#915EFF]/30 flex items-center justify-center shrink-0">
        <span className="text-[#915EFF] text-[11px] font-bold">{initials}</span>
      </div>
      <div>
        <p className="text-white text-[14px] font-semibold">{name}</p>
        <p className="text-gray-500 text-[12px]">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What people say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>


    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} index={i} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Testimonials, "");
