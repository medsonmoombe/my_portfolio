import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { ComputersCanvas } from "./canvas";
import resume from "../assets/files/resume/Emmanuel_moombe.pdf";

const roles = [
  "Full-Stack Engineer",
  "React & Vue Specialist",
  "TypeScript & Node.js Developer",
  "API Architect & Tech Lead",
  "UI/UX Implementer",
];

const socials = [
  { label: "GitHub", href: "https://github.com/medsonmoombe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-moombe-821918230/" },
  { label: "Twitter", href: "https://twitter.com/@emmanue78388405" },
];

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* background glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#915EFF]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#bf61ff]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 md:pl-24 grid md:grid-cols-2 gap-12 items-center py-24">
        {/* left: text */}
        <div className="flex flex-col gap-6">
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-px bg-[#915EFF]" />
            <span className="text-[#915EFF] text-[12px] font-semibold tracking-[0.2em] uppercase">
              Available for work
            </span>
          </motion.div>

          {/* name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-[52px] sm:text-[68px] lg:text-[80px] font-black leading-[0.95] text-white tracking-tight">
              Emmanuel
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] via-[#bf61ff] to-[#915EFF] bg-[length:200%] animate-gradient">
                Moombe
              </span>
            </h1>
          </motion.div>

          {/* typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 h-8"
          >
            <span className="text-[18px] sm:text-[20px] text-gray-300 font-medium">
              {displayed}
            </span>
            <span className="w-0.5 h-6 bg-[#915EFF] animate-pulse" />
          </motion.div>

          {/* bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-[15px] leading-[1.85] max-w-md"
          >
            Performance-driven engineer specialising in TypeScript, React, and
            robust database systems. I architect scalable web apps, translate
            complex wireframes into high-fidelity code, and lead teams toward
            technical excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#work"
              className="group relative px-7 py-3 rounded-lg bg-[#915EFF] text-white text-[14px] font-semibold overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border border-[#915EFF]/40 text-gray-300 text-[14px] font-semibold hover:border-[#915EFF] hover:text-white transition-all duration-200"
            >
              Let's Talk
            </a>
            <a
              href={resume}
              download="Emmanuel_Moombe_CV.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-white/10 text-gray-400 text-[14px] font-semibold hover:border-white/30 hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 pt-2"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-gray-500 hover:text-[#915EFF] transition-colors duration-200 font-medium"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* right: photo + 3D canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col items-center gap-6 relative h-[500px]"
        >
          {/* profile photo — add profile.jpg to src/assets/ to activate */}
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-[#915EFF]/30 shadow-[0_0_40px_rgba(145,94,255,0.15)]">
            <div className="w-full h-full bg-gradient-to-br from-[#915EFF]/20 to-[#050816] flex flex-col items-center justify-center gap-2">
              <span className="text-5xl font-black text-[#915EFF]/60">EM</span>
            </div>
          </div>
          {!isMobile && <ComputersCanvas />}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2">
          <span className="text-[11px] text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#915EFF] to-transparent"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
