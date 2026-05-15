import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const socials = [
  { label: "GitHub", href: "https://github.com/medsonmoombe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-moombe-821918230/" },
  { label: "Twitter", href: "https://twitter.com/@emmanue78388405" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((n) => document.getElementById(n.id));
      const scrollY = window.scrollY + window.innerHeight / 3;
      sections.forEach((sec) => {
        if (sec && scrollY >= sec.offsetTop) setActive(sec.id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop: fixed left rail ── */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-[72px] hover:w-52 z-50 flex-col justify-between py-10 px-4 bg-[#050816]/80 backdrop-blur-md border-r border-white/5 transition-all duration-300 group overflow-hidden">
        {/* logo */}
        <a
          href="#"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-3 shrink-0"
        >
          <span className="w-9 h-9 rounded-lg bg-[#915EFF] flex items-center justify-center text-white font-black text-sm shrink-0">
            EM
          </span>
          <span className="text-white font-bold text-[13px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Emmanuel
          </span>
        </a>

        {/* nav links */}
        <ul className="flex flex-col gap-6">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.id)}
                className="flex items-center gap-3 group/item"
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 transition-all duration-200 ${
                    active === nav.id
                      ? "bg-[#915EFF] scale-125"
                      : "bg-gray-600 group-hover/item:bg-[#915EFF]"
                  }`}
                />
                <span
                  className={`text-[13px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                    active === nav.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {nav.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* socials */}
        <div className="flex flex-col gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-sm bg-gray-600 shrink-0 hover:bg-[#915EFF] transition-colors" />
              <span className="text-[12px] text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-white">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* ── Mobile: top bar ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#050816]/90 backdrop-blur-md border-b border-white/5">
        <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <span className="w-8 h-8 rounded-lg bg-[#915EFF] flex items-center justify-center text-white font-black text-xs">
            EM
          </span>
        </a>
        <button
          onClick={() => setToggle(!toggle)}
          className="flex flex-col gap-1.5 p-1"
          aria-label="menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${toggle ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${toggle ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${toggle ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {toggle && (
          <div className="absolute top-full left-0 right-0 bg-[#050816]/95 backdrop-blur-md border-b border-white/5 py-4 px-6 flex flex-col gap-4">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => setToggle(false)}
                className="text-gray-300 hover:text-white text-[15px] font-medium"
              >
                {nav.title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
