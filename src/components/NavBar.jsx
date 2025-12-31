
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkedinUrl = "https://www.linkedin.com/in/zunaira-abid";
  const githubUrl = "https://github.com/zunaira-14";

  // Sirf top par smooth scroll (Home button ke liye)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Specific section par scroll (About, Projects, Skills)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 90; // navbar offset
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const goHomeAndScroll = (id) => {
    navigate("/");
    setTimeout(() => scrollToSection(id), 150);
    setOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(scrollToTop, 150);
    setOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav
        className="backdrop-blur-xl mx-3 sm:mx-6 md:mx-16 lg:mx-32 xl:mx-56 mt-3 mb-3
        rounded-full shadow-lg bg-gradient-to-r from-orange-600/80 via-orange-500/70 to-amber-400/70
        border border-white/10 transition-all duration-500 hover:shadow-orange-500/40"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/zlogo.png"
              alt="Zunaira Abid"
              title="Zunaira Abid"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover hover:scale-105 transition duration-500"
            />
            <span className="hidden sm:inline font-semibold text-lg">
              Zunaira Abid
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center text-sm lg:text-base">
            {/* Home */}
            <Link
              to="/"
              onClick={handleHomeClick}
              className="hover:text-yellow-300"
            >
              Home
            </Link>
 {/* Skills (scroll) */}
            <button
              onClick={() => goHomeAndScroll("skills")}
              className="hover:text-yellow-300"
            >
              Skills
            </button>


            {/* Projects (scroll) */}
            <button
              onClick={() => goHomeAndScroll("projects")}
              className="hover:text-yellow-300"
            >
              Projects
            </button>

            {/* About (scroll) */}
            <button
              onClick={() => goHomeAndScroll("about")}
              className="hover:text-yellow-300"
            >
              About Me
            </button>
            <button
              onClick={() => goHomeAndScroll("contact")}
              className="inline-block bg-white text-black px-4 py-2 rounded-full shadow-md
                hover:bg-amber-700 hover:text-white font-semibold transition duration-300"
            >
              Hire Me
            </button>

            {/* Social Icons */}
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <svg
                className="w-5 h-5 hover:text-blue-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.33H4.76V24H.24V8.33zm7.82 0H12v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.04 0 4.78 2.66 4.78 6.12V24h-4.53v-7.88c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.18V24H8.06V8.33z" />
              </svg>
            </a>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <svg
                className="w-5 h-5 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2c-3.19.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.18 1.19a11 11 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.65.24 2.87.12 3.17.74.81 1.2 1.84 1.2 3.1 0 4.44-2.68 5.42-5.24 5.7.41.35.77 1.05.77 2.12v3.15c0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white hover:text-yellow-300 text-xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-orange-700 mx-3 rounded-2xl p-4 text-center space-y-3 shadow-md mb-3">
          <button
            onClick={handleHomeClick}
            className="block w-full hover:text-yellow-300"
          >
            Home
          </button>

          <button
            onClick={() => goHomeAndScroll("about")}
            className="block w-full hover:text-yellow-300"
          >
            About Me
          </button>

          <button
            onClick={() => goHomeAndScroll("skills")}
            className="block w-full hover:text-yellow-300"
          >
            Skills
          </button>

          <button
            onClick={() => goHomeAndScroll("projects")}
            className="block w-full hover:text-yellow-300"
          >
            Projects
          </button>

          <button
            onClick={() => goHomeAndScroll("contact")}
            className="inline-block bg-white text-black px-5 py-2 rounded-full shadow-md hover:bg-amber-700 font-semibold transition duration-300"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}

export default NavBar;
