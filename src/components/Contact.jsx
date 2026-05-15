import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import resume from "../assets/files/resume/Emmanuel_moombe.pdf";

const socials = [
  { label: "GitHub", href: "https://github.com/medsonmoombe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-moombe-821918230/" },
  { label: "Twitter", href: "https://twitter.com/@emmanue78388405" },
];

const Contact = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What's next?</p>
      <h2 className={styles.sectionHeadText}>Get In Touch.</h2>
    </motion.div>

    <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">
      {/* left: copy + socials */}
      <motion.div variants={slideIn("left", "tween", 0.2, 0.8)} className="flex flex-col gap-6">
        <p className="text-gray-300 text-[16px] leading-[1.9] max-w-md">
          I'm currently open to new opportunities — whether it's a full-time role,
          freelance project, or just a conversation. My inbox is always open.
        </p>
        {/* availability badge */}
        <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-[#915EFF]/30 bg-[#915EFF]/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-300 text-[13px] font-medium">
            Open to remote contracts · GMT+2
          </span>
        </div>
        <a
          href="mailto:medsonmoombe@gmail.com"
          className="group inline-flex items-center gap-3 text-[#915EFF] text-[15px] font-semibold hover:gap-5 transition-all duration-200"
        >
          medsonmoombe@gmail.com
          <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>

        <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
          <p className="text-gray-600 text-[12px] tracking-widest uppercase font-medium">Find me on</p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 text-[14px] font-medium hover:text-[#915EFF] transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* CV download */}
        <a
          href={resume}
          download="Emmanuel_Moombe_CV.pdf"
          className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-lg bg-[#915EFF] text-white text-[13px] font-semibold hover:bg-[#7d4fe0] transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download My CV
        </a>
      </motion.div>

      {/* right: form */}
      <motion.form
        variants={slideIn("right", "tween", 0.2, 0.8)}
        action="https://formspree.io/f/xnqwbvpv"
        method="post"
        className="flex flex-col gap-5"
      >
        {[
          { id: "name", label: "Name", type: "text", placeholder: "Your name" },
          { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
        ].map(({ id, label, type, placeholder }) => (
          <div key={id} className="flex flex-col gap-2">
            <label htmlFor={id} className="text-gray-400 text-[13px] font-medium">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              required
              className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-gray-600 focus:outline-none focus:border-[#915EFF]/60 transition-colors duration-200"
            />
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-400 text-[13px] font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            required
            className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-gray-600 focus:outline-none focus:border-[#915EFF]/60 transition-colors duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          className="group relative w-full py-3.5 rounded-lg bg-[#915EFF] text-white text-[14px] font-semibold overflow-hidden mt-1"
        >
          <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative">Send Message</span>
        </button>
      </motion.form>
    </div>
  </>
);

export default SectionWrapper(Contact, "contact");
