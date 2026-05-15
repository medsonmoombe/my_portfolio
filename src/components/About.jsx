import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Devs Mentored" },
];

const skills = [
  { label: "Frontend", value: 90 },
  { label: "Backend", value: 75 },
  { label: "UI/UX Implementation", value: 85 },
  { label: "Team Leadership", value: 70 },
];

const StatCard = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="flex flex-col gap-1"
    >
      <span className="text-[48px] sm:text-[56px] font-black text-white leading-none">
        {count}{suffix}
      </span>
      <span className="text-gray-500 text-[13px] font-medium tracking-wide uppercase">
        {label}
      </span>
    </motion.div>
  );
};

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Who I am</p>
      <h2 className={styles.sectionHeadText}>About.</h2>
    </motion.div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 pb-12 border-b border-white/5">
      {stats.map((s, i) => (
        <StatCard key={s.label} {...s} index={i} />
      ))}
    </div>

    <div className="mt-12 grid md:grid-cols-2 gap-12 lg:gap-20">
      <motion.div variants={fadeIn("right", "", 0.1, 1)}>
        {/* client-facing value prop */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#915EFF] mb-4">
          What I do for you
        </p>
        <p className="text-gray-300 text-[16px] leading-[1.9] mb-5">
          I help startups and product teams ship fast, maintainable web products —
          from MVP to production-ready. Whether you need a full-stack engineer to
          own a feature end-to-end, or a frontend specialist to turn your Figma
          into pixel-perfect, performant code — I deliver.
        </p>
        <p className="text-gray-400 text-[15px] leading-[1.9]">
          Performance-driven Full-Stack Engineer with deep expertise in TypeScript,
          React, and robust database systems including PostgreSQL and MongoDB.
          Beyond shipping features, I mentor developers, set technical direction,
          and bridge the gap between design and engineering.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("left", "", 0.2, 1)} className="flex flex-col gap-6">
        {skills.map(({ label, value }) => (
          <div key={label}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-[13px] font-medium">{label}</span>
              <span className="text-[#915EFF] text-[13px] font-semibold">{value}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="h-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, "about");
