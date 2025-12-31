import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Helmet } from "react-helmet-async";

// ================= PROJECT DATA =================
const projectData = [
  {
    id: 1,
    title: "Online Medical Store",
    description:
      "A full-stack pharmacy website built using React, Tailwind, Express & MongoDB.",
    image: "medi.jpg",
    live: "https://benevolent-kheer-0493f0.netlify.app",
    code: "https://github.com/Zunaira-14/Medical-Store.git",
    tags: ["MERN", "Fullstack"],
    features: ["Responsive UI", "User Authentication", "Cart & Checkout"],
  },
  {
    id: 2,
    title: "Food Recipe App",
    description: "A modern food ordering UI built with React and TailwindCSS.",
    image: "food-recipe.png", 
    live: "https://food-recipe-app-zunaira-abids-projects.vercel.app",
    code: "https://github.com/Zunaira-14/food-recipe-app.git",
    tags: ["React", "UI", "Fullstack"],
    features: ["Modern UI/UX", "Search Recipes", "Save Favorites"],
  },
  {
    id: 3,
    title: "Ecommerce App",
    description:
      "Ecommerce website built with React, Tailwind, Express and MongoDB.",
    image: "ecom.jpg",
    live: "https://ecommerce-branding-site-46l8.vercel.app",
    code: "https://github.com/Zunaira-14/ecommerce-branding-site.git",
    tags: ["MERN", "Fullstack"],
    features: ["User Login System", "Shopping Cart", "Admin Panel"],
  },
];

const tagsList = ["All", "React", "MERN", "Fullstack", "UI"];

// ================= COMPONENT =================
const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProjects =
    selectedTag === "All"
      ? projectData
      : projectData.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="bg-gradient-to-b rounded-3xl text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 mt-12">
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Projects | Zunaira Abid – MERN Stack Developer</title>
        <meta
          name="description"
          content="Explore real-world MERN Stack and React projects by Zunaira Abid including ecommerce, medical store and recipe apps."
        />
      </Helmet>

      {/* ===== Title ===== */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
          My Projects
        </h1>
        <p className="text-gray-300 mb-4">
          Explore my advanced and interactive apps & UI designs.
        </p>

        <div className="flex justify-center gap-2 flex-wrap">
          {tagsList.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 border rounded-full text-sm transition ${
                selectedTag === tag
                  ? "bg-orange-500 text-black border-orange-500"
                  : "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* ===== Project Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden rounded-xl border border-orange-500/30 bg-[#272727] transition hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.45)]">
              {/* Image */}
              <PhotoProvider>
                <PhotoView src={`/${project.image}`}>
                  <img
                    src={`/${project.image}`}
                    alt={`${project.title} – MERN Stack web application by Zunaira Abid`}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </PhotoView>
              </PhotoProvider>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-orange-400 mb-1">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                  {project.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-600 px-3 py-1.5 rounded-md text-sm hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-orange-500 px-3 py-1.5 rounded-md text-sm hover:bg-orange-600"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Orange Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-t from-orange-500/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
