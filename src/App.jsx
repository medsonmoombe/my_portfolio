import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Testimonials,
  StarsCanvas,
} from "./components";
import resume from "./assets/files/resume/Emmanuel_moombe.pdf";

const Footer = () => (
  <footer className="md:pl-[72px] border-t border-white/5 bg-primary">
    <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-[#915EFF] flex items-center justify-center text-white font-black text-xs shrink-0">
          EM
        </span>
        <span className="text-gray-600 text-[13px]">
          Emmanuel Moombe · Full-Stack Engineer
        </span>
      </div>

      <nav className="flex gap-6">
        {["about", "work", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-gray-600 text-[13px] capitalize hover:text-[#915EFF] transition-colors duration-200"
          >
            {id}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <a
          href={resume}
          download="Emmanuel_Moombe_CV.pdf"
          className="text-gray-600 text-[13px] hover:text-[#915EFF] transition-colors duration-200"
        >
          Download CV
        </a>
        <p className="text-gray-700 text-[12px]">
          &copy; {new Date().getFullYear()} Emmanuel Moombe
        </p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="md:pl-[72px]">
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="absolute inset-0 bg-black/75" />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
