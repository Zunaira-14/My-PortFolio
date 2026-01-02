import { Github, LinkedinIcon, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" via-[#4f4f51] to-[#313131] text-gray-400 py-8 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left border-t border-gray-700 pt-6 space-y-6 md:space-y-0">

        {/* Left Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Zunaira Abid | Web Developer
          </h2>
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
          <a href="/" className="hover:text-white transition-colors duration-300">
            Home
          </a>
          <a href="/projects" className="hover:text-white transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-5">
          <a
            href="https://github.com/zunaira-14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F97316] transition-colors duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/zunaira-abid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors duration-300"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1DA1F2] transition-colors duration-300"
          >
            <Twitter size={22} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            <Youtube size={22} />
          </a>
        </div>
<div className="flex items-center gap-2 justify-center md:justify-end">
  <a
    href="https://validator.w3.org/nu/?doc=https://my-port-folio-ochre.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block"
  >
    {/* Green big tick */}
    <span className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-lg shadow-lg ring-2 ring-white">
      ✓
    </span>

    <img
      src="https://www.vectorlogo.zone/logos/w3c_validator/w3c_validator-ar21.svg"
      alt="Valid HTML5"
      width="88"
      height="31"
      className="hover:opacity-80 transition bg-white rounded-lg"
    />
  </a>
</div>


      </div>
      
    </footer>
  );
}
