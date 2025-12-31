
import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import About from "./About";
import Certifications from "../components/Certificates";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";


/* ===== Typing + then waving + floating heading ===== */
const useTypingOnce = (text, speed = 90, onDone) => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) {
      if (onDone) onDone();
      return;
    }
    const timeout = setTimeout(() => {
      setDisplay((prev) => prev + text.charAt(index));
      setIndex((i) => i + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, text, speed, onDone]);

  return display;
};

const HeadingAnimated = () => {
  const [finished, setFinished] = useState(false);
  const text = "Welcome to my portfolio";
  const typed = useTypingOnce(text, 95, () => setFinished(true));

  if (!finished) {
    return (
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400">
        {typed}
      </h1>
    );
  }

  return (
    
    <h1 className="wave-heading float-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400">
      {text.split("").map((ch, i) => (
        <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
      ))}
    </h1>
  );
};
<Helmet>
  <title>Zunaira Abid | MERN Stack Developer Portfolio</title>
  <meta
    name="description"
    content="Zunaira Abid is a MERN Stack Developer skilled in React, Tailwind CSS, Node.js and MongoDB. View projects, skills and certifications."
  />
  <meta name="keywords" content="MERN Stack Developer, React Developer Portfolio, Full Stack Developer Pakistan" />
</Helmet>

/* ===== Skills (Devicon Classes) ===== */
const skills = [
  { name: "HTML", icon: "devicon-html5-plain", level: 90 },
  { name: "CSS", icon: "devicon-css3-plain", level: 85 },
  { name: "JavaScript", icon: "devicon-javascript-plain", level: 80 },
  { name: "React", icon: "devicon-react-original", level: 75 },
  { name: "Node.js", icon: "devicon-nodejs-plain", level: 70 },
  { name: "MongoDB", icon: "devicon-mongodb-plain", level: 65 },
  { name: "Express.js", icon: "devicon-express-original", level: 60 },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain", level: 85 },
  { name: "GitHub", icon: "devicon-github-original", level: 75 },
];

/* ===== Framer Motion Variants ===== */
const heroContainer = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionContainer = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const sectionItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ===== Roles list (smooth vertical scroll) ===== */
const roles = [
  "Web Developer",
  "MERN Stack Developer",
  "Full‑Stack JavaScript Developer",
  "Problem Solver & Debugging Enthusiast",
];

const roleVariants = {
  enter: { y: "100%", opacity: 0 },
  center: { y: "0%", opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      2300
    );
    return () => clearInterval(id);
  }, []);

  const currentRole = roles[roleIndex];

  return (
    <div className="body-orange-rain relative min-h-screen overflow-hidden ">
      {/* === Background Video + overlays === */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* <video
          className="w-full h-full object-cover"
          src="homebg.mp4"   
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <video
  className="w-full h-full object-cover"
  // src="https://player.cloudinary.com/embed/?cloud_name=dngjyqkzp&public_id=homebg.mp4_t0eka9&profile=cld-default"
  src="https://res.cloudinary.com/dngjyqkzp/video/upload/v1767116240/homebg.mp4_t0eka9.mp4"
  autoPlay
  loop
  muted
  playsInline
/>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 " />
        {/* Optional: lightning + rain effect */}
        <div className="pointer-events-none absolute inset-0 lightning-bg to-[#020617]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.06),_transparent_60%)]" />
          <div className="rain" />
        </div>
      </div>

      {/* === Page content === */}
      <div className="text-[#F9FAFB] min-h-screen pt-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        {/* ===== Heading + Hero + Buttons ===== */}
        <motion.section
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Heading (type once then float) */}
          <motion.main
            className="text-center font-bold mb-10"
            variants={heroItem}
          >
            <HeadingAnimated />
          </motion.main>

          {/* Hero Section */}
          <motion.div
            className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left gap-8"
            variants={heroItem}
          >
            {/* LEFT: professional intro + roles */}
            <motion.div className="md:w-1/2" variants={heroItem}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex flex-col items-center md:items-start">
                <span className="mb-1">I am a</span>

                {/* rotating roles vertical scroll */}
                <div className="h-10 sm:h-12 md:h-14 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      variants={roleVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400"
                    >
                      {currentRole}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                Designing and building reliable, user‑focused web applications
                with a strong emphasis on{" "}
                <span className="text-orange-300 font-semibold">
                  clean architecture, performance and maintainable code
                </span>
                . Turning ideas into production‑ready products using modern
                JavaScript tools, scalable APIs and intuitive interfaces that
                feel fast, polished and consistent.
              </p>
            </motion.div>

            {/* RIGHT: image */}
            <motion.div
              className="md:w-1/2 flex justify-center mt-10 md:mt-0"
              variants={heroItem}
            >
              <div className="relative mt-10">
                <div className="pic-orange-rain rounded-full" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/40 via-pink-500/30 to-yellow-400/40 blur-3xl rounded-full -z-10" />
                <div className="bg-[#020617] border border-orange-400/40 rounded-full p-3 shadow-2xl shadow-black/60 relative">
                 <img
  src="/portfolio.jpg"
  alt="Zunaira Abid"
  title="Zunaira Abid"
  loading="lazy"
  className="
    h-24 w-24
    sm:h-28 sm:w-28
    md:h-36 md:w-36
    lg:h-44 lg:w-44
    rounded-full
    object-cover
    hover:scale-105
    transition
    duration-500
  "
/>


                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 "
            variants={heroItem}
          >
            <Link
              to="/projects"
              className="bg-[#F97316] hover:bg-[#FBBF24] text-black font-semibold px-6 py-3 rounded-lg shadow-md transition text-center inline-block"
            >
              View Projects
            </Link>
            <a
              href="/cv.portfolio.PNG"
              download="Zunaira-Abid-CV.png"
              className="border border-[#F97316] hover:bg-[#F97316] text-amber-50 font-semibold px-6 py-3 rounded-lg shadow-md transition text-center inline-block"
            >
              Download CV
            </a>
          </motion.div>
        </motion.section>
{/* bg-gradient-to-br from-[#030303] via-[#4f4f51] to-[#313131]  */}
        {/* ===== Skills with scroll animation ===== */}
        <motion.section
          id="skills"
          className="py-20 mt-20  rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
        >
          <motion.h2
            className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-yellow-300"
            variants={sectionItem}
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 mb-14 max-w-xl mx-auto"
            variants={sectionItem}
          >
            Technologies I use to build modern, scalable and high‑performance
            web applications.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mr-10">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={sectionItem}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#272727] rounded-2xl p-3 border border-orange-400/20 shadow-lg hover:shadow-orange-500/30 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                    from-orange-400/10 to-yellow-300/10 opacity-0 
                    group-hover:opacity-100 blur-xl transition"
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="h-14 w-14 rounded-full bg-[#020617] 
                        flex items-center justify-center border border-orange-400/30"
                    >
                      <i
                        className={`${skill.icon} text-4xl text-orange-400 
                          group-hover:text-shadow-gray-500 group-hover:scale-110 
                          transition-all duration-300`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r 
                        from-orange-400 to-yellow-300 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-right text-sm text-gray-400 mt-2">
                    {skill.level}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== Other Sections ===== */}
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="certification">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
