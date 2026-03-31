const WhyHireMe = () => {
  return (
    <div className="mt-10 pt-8 border-t border-slate-700/60">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6">
        Why You Should Hire Me
      </h2>

      <p className="text-gray-300 text-sm sm:text-base text-center max-w-2xl mx-auto mb-8">
        I build clean, reliable web applications using the MERN stack and
        focus on writing code that solves real problems, not just looks good.
        Recently, I also built an AI Developer Toolkit platform offering tools
        like PDF to DOCX converter, code fixer, smart AI summarizer, JSON
        formatter, image optimizer, API tester and AI image generator using
        React.js, Node.js, Express.js, MongoDB and multiple APIs.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-[#272727] border border-slate-700/60 rounded-2xl p-5 shadow-md hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">
            Real‑World MERN & AI Skills
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I’ve built full‑stack projects like ecommerce, medical store,
            portfolio sites and an AI tools platform, so I can handle both
            traditional web apps and AI‑powered features from end to end.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#272727] border border-slate-700/60 rounded-2xl p-5 shadow-md hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">
            Clean & User‑Focused UI
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I care about UX, responsiveness and accessibility, using React +
            Tailwind to create interfaces that feel modern, fast and easy to
            use on any device.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#272727] border border-slate-700/60 rounded-2xl p-5 shadow-md hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">
            Reliable & Easy to Work With
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I’m used to Git/GitHub workflows, clear communication and meeting
            deadlines. You’ll get someone who listens, adapts and finishes the
            work with attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;