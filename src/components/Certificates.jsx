
import { useState } from "react";

import aiCert from "/AIcertificate.webp";
import mernCert from "/mernstack-certificate.webp";
import seoCert from "/seo-certificate.webp";

export default function Certifications() {
  const certificates = [
    {
      img: aiCert,
      title: "AI Certification",
      desc: "Professional AI Training Program",
      ribbon: "AI Expert",
      loading: "eager",
    },
    {
      img: mernCert,
      title: "MERN Stack Certification",
      desc: "Full Stack Web Development",
      ribbon: "Full Stack Pro",
      loading: "eager",
    },
    {
      img: seoCert,
      title: "SEO Certification",
      desc: "Search Engine Optimization Training",
      ribbon: "SEO Specialist",
      loading: "eager",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="certifications"
      className="py-12 mt-12 px-4 bg-gradient-to-b rounded-2xl"
    >
      <div className="max-w-md md:max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center text-[#F97316]">
          Certifications
        </h2>

        {/* Mobile: 1, Tablet: 2, Desktop: 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <article
              key={index}
              className="relative group rounded-lg bg-[#272727] border border-slate-700/60 shadow-md overflow-hidden backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer w-full"
              onClick={() => setOpenIndex(index)}
            >
              {/* Ribbon */}
              {cert.ribbon && (
                <div className="absolute top-2 left-0 bg-gray-300 text-slate-900 px-2 py-1 rounded-r-full text-xs font-semibold z-10 shadow-sm">
                  {cert.ribbon}
                </div>
              )}

              {/* Image – full width, natural height */}
              <div className="relative w-full mt-4">
                <img
                  src={cert.img}
                  alt={cert.title}
                  title={cert.title}
                  loading={cert.loading || "eager"}
                  className="w-full max-w-full h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-semibold text-slate-50">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  {cert.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative bg-[#272727] border border-slate-700 rounded-lg
                       w-[92%] max-w-sm md:max-w-md p-3 shadow-lg
                       flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-center bg-slate-500 rounded-md overflow-hidden">
              <img
                src={certificates[openIndex].img}
                alt={certificates[openIndex].title}
                className="w-full max-w-full h-auto object-contain"
              />
            </div>

            <h3 className="text-center text-lg md:text-xl font-bold text-slate-50">
              {certificates[openIndex].title}
            </h3>

            <p className="text-center text-xs text-slate-300">
              {certificates[openIndex].desc}
            </p>

            <button
              className="self-center px-3 py-1.5 rounded-full
                         bg-orange-500 hover:bg-orange-600
                         text-white text-xs font-semibold
                         transition-colors"
              onClick={() => setOpenIndex(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}