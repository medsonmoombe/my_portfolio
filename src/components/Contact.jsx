import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <motion.form
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          action="https://formspree.io/f/xnqwbvpv"
          method="post"
          className="flex flex-col w-full max-w-md bg-black-100 rounded p-4 m-auto"
        >
          <h1 className="text-3xl font-bold text-[#915EFF] mb-4">Let's Talk</h1>
          <p className="text-white text-lg mb-4">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-white text-sm font-semibold mb-1 block"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 rounded border-2 border-[#915EFF] focus:border-cyan-700 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-white text-sm font-semibold mb-1 block"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 rounded border-2 border-[#915EFF] focus:border-cyan-700 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-white text-sm font-semibold mb-1 block"
            >
              Message
            </label>
            <textarea
              className="w-full p-2 rounded border-2 border-[#915EFF] focus:border-cyan-700 focus:outline-none"
              id="message"
              name="message"
              placeholder="Your message here..."
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#915EFF] px-8 py-3 cursor-pointer rounded-lg  text-white hover:bg-opacity-80 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
