import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import resume from "../assets/files/resume/Emmanuel_moombe.pdf";

const SERVICE_ID  = "service_gqsmd59";
const TEMPLATE_ID = "template_5mzw8tu";
const PUBLIC_KEY  = "QORArzL44LdXjYdP1";

const socials = [
  { label: "GitHub",   href: "https://github.com/medsonmoombe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-moombe-821918230/" },
  { label: "Twitter",  href: "https://twitter.com/@emmanue78388405" },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState(null); // "success" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    "Emmanuel",
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What's next?</p>
        <h2 className={styles.sectionHeadText}>Get In Touch.</h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">
        {/* left */}
        <motion.div variants={slideIn("left", "tween", 0.2, 0.8)} className="flex flex-col gap-6">
          <p className="text-gray-300 text-[16px] leading-[1.9] max-w-md">
            I'm currently open to new opportunities — whether it's a full-time role,
            freelance project, or just a conversation. My inbox is always open.
          </p>

          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-[#915EFF]/30 bg-[#915EFF]/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300 text-[13px] font-medium">
              Open to remote contracts · GMT+2
            </span>
          </div>

          <a
            href="mailto:medsonmoombe21@gmail.com"
            className="group inline-flex items-center gap-3 text-[#915EFF] text-[15px] font-semibold hover:gap-5 transition-all duration-200"
          >
            medsonmoombe21@gmail.com
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
            <p className="text-gray-600 text-[12px] tracking-widest uppercase font-medium">Find me on</p>
            <div className="flex gap-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="text-gray-400 text-[14px] font-medium hover:text-[#915EFF] transition-colors duration-200">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

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
          ref={formRef}
          variants={slideIn("right", "tween", 0.2, 0.8)}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {[
            { id: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-gray-400 text-[13px] font-medium">{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                value={form[id]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-gray-600 focus:outline-none focus:border-[#915EFF]/60 transition-colors duration-200"
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-400 text-[13px] font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-gray-600 focus:outline-none focus:border-[#915EFF]/60 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full py-3.5 rounded-lg bg-[#915EFF] text-white text-[14px] font-semibold overflow-hidden mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-[13px] font-medium text-center">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-[13px] font-medium text-center">
              Something went wrong. Please email me directly at medsonmoombe21@gmail.com
            </p>
          )}
        </motion.form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
