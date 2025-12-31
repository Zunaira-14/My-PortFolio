
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  //  from-[#030303] via-[#4f4f51] to-[#313131]
  return (
    <section
      id="about"
      className=" pt-30 pb-30 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 bg-gradient-to-br   rounded-3xl mt-30"
    ><Helmet>
  <title>About Me | Zunaira Abid – Full Stack Developer</title>
  <meta
    name="description"
    content="Learn more about Zunaira Abid, a Full Stack MERN Developer with experience in React, Node.js, MongoDB and modern UI development."
  />
</Helmet>

      <div className="max-w-5xl w-full bg-gradient-to-br  border bg-blend-lighten bg-gradient-to-br  from-[#030303] via-[#4f4f51] to-[#313131]  border-slate-800 rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-400 mb-8">
          About Me
        </h1>

        {/* Top: basic info + intro */}
        <div className="grid md:grid-cols-[1.1fr,1.3fr] gap-8 mb-10">
          {/* Personal Info */}
          <div className="space-y-3 text-sm sm:text-base">
            <p>
              <span className="font-semibold text-orange-400">Name:</span>{" "}
              Zunaira Abid
            </p>
            
            <p>
              <span className="font-semibold text-orange-400">Email:</span>{" "}
              <a
                href="mailto:zunairaabid140@gmail.com"
                className="text-orange-200 hover:text-orange-300 underline underline-offset-2"
              >
                zunairaabid140@gmail.com
              </a>
            </p>
          </div>

          {/* Short bio */}
          <div className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
  <p>
    I&apos;m a{" "}
    <span className="font-semibold text-orange-300">
      Full‑Stack Web Developer
    </span>{" "}
    from Pakistan, passionate about turning ideas into clean, user‑friendly
    digital products. I specialize in building scalable web applications
    using modern JavaScript frameworks, focusing on writing maintainable
    code and delivering smooth, high-performance experiences for real
    users. I thrive in collaborative environments and enjoy solving complex
    problems with elegant, efficient solutions.
  </p>
</div>

        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="font-medium">
  <h2 className="text-3xl font-semibold text-orange-400 mb-3">
    Experience
  </h2>
  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
    Worked at{" "}
    <a
      href="https://www.codeexpertx.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-orange-400 underline underline-offset-2 hover:text-orange-200"
    >
      Code Expert
    </a>
    , where I contributed to building modern, responsive websites and learned
    real‑world development workflows, collaboration and problem solving. I
    closely followed industry best practices, used GitHub for version control
    and participated in code reviews to improve code quality.
  </p>
</div>

     <div className="font-medium">
  <h2 className="text-3xl font-semibold text-orange-400 mb-3">
    Education
  </h2>
  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
    Completed{" "}
    <span className="font-semibold text-white">FSc (Pre‑Medical)</span>{" "}
    but my passion for technology led me towards{" "}
    <span className="text-orange-300 font-semibold">
      Full‑Stack Development
    </span>{" "}
    through self‑learning, real projects and professional training. I am
    currently pursuing a{" "}
    <span className="font-semibold text-white">
      BS in Computer Science
    </span>{" "}
    to strengthen my foundations in programming, software engineering and modern
    web technologies.
  </p>
</div>


        </div>

{/* /* What I Can Do */ }
<div className="mb-10 font-medium">
  <h2 className="text-3xl md:text-3xl font-semibold text-orange-400 mb-6 text-center md:text-left">
    What I Can Do
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="group bg-gradient-to-r border border-slate-800 rounded-2xl p-5 
                    hover:border-orange-400/80 hover:-translate-y-1 
                    transition-all duration-300 shadow-lg hover:shadow-orange-500/20">
      <div className="flex items-center gap-3 mb-2">
        {/* Icon */}
        <div className="h-10 w-10 rounded-full bg-orange-500/15 flex items-center justify-center
                        border border-orange-400/40 group-hover:bg-orange-500/25 transition-colors">
          <span className="text-2xl">🖥️</span>
        </div>
        {/* Heading */}
        <h3 className="text-lg md:text-xl font-semibold text-orange-100 group-hover:text-orange-300 transition-colors">
          Modern Frontend Experiences
        </h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        Build responsive, accessible UIs using{" "}
        <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Tailwind CSS</span>, focusing on clean layouts,
        reusable components and smooth micro‑interactions.
      </p>
    </div>

    {/* Card 2 */}
   <div className="group bg-gradient-to-r border border-slate-800 rounded-2xl p-5 
                    hover:border-orange-400/80 hover:-translate-y-1 
                    transition-all duration-300 shadow-md hover:shadow-orange-500/20">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-full bg-orange-500/15 flex items-center justify-center
                        border border-orange-400/40 group-hover:bg-orange-500/25 transition-colors">
          <span className="text-2xl">🛠️</span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-orange-100 group-hover:text-orange-300 transition-colors">
          APIs & Backend Logic
        </h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        Design RESTful APIs with{" "}
        <span className="font-semibold">Node.js</span> and{" "}
        <span className="font-semibold">Express</span>, and work with{" "}
        <span className="font-semibold">MongoDB</span> to store and manage data securely.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group bg-gradient-to-r border border-slate-800 rounded-2xl p-5 
                    hover:border-orange-400/80 hover:-translate-y-1 
                    transition-all duration-300 shadow-md hover:shadow-orange-500/20">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-full bg-orange-500/15 flex items-center justify-center
                        border border-orange-400/40 group-hover:bg-orange-500/25 transition-colors">
          <span className="text-2xl">🌐</span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-orange-100 group-hover:text-orange-300 transition-colors">
          End‑to‑End Web Apps
        </h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        Take a project from idea to deployment, including auth, routing,
        dashboards and integrations, ensuring frontend and backend stay in sync.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group bg-gradient-to-r border border-slate-800 rounded-2xl p-5 
                    hover:border-orange-400/80 hover:-translate-y-1 
                    transition-all duration-300 shadow-md hover:shadow-orange-500/20">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10  rounded-full bg-orange-500/15 flex items-center justify-center
                        border border-orange-400/40 group-hover:bg-orange-500/25 transition-colors">
          <span className="text-2xl">🤝</span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-orange-100 group-hover:text-orange-300 transition-colors">
          Teamwork & Problem‑Solving
        </h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        Collaborate using GitHub, manage tasks into clear milestones, and debug
        calmly to deliver reliable features on time.
      </p>
    </div>
  </div>
</div>

        {/* Contact Button */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
