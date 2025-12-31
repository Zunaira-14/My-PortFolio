import { useState } from "react";

import aiCert from "/AIcertificate.PNG";
import mernCert from "/mernstack-certificate.png";

export default function Certifications() {
  const certificates = [
    {
      img: aiCert,
      title: "AI Certification",
      desc: "Professional AI Training Program",
      ribbon: "AI Expert",
      loading:"eager"
    },
    {
      img: mernCert,
      title: "MERN Stack Certification",
      desc: "Full Stack Web Development",
      ribbon: "Full Stack Pro",
      loading:"eager"
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
// from-[#030303] via-[#4f4f51] to-[#313131]
  return (
    <section
      id="certifications"
      className="py-20  mt-20 md:px-8 lg:px-12   bg-gradient-to-b  rounded-3xl"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#F97316]">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((cert, index) => (
            <article
              key={index}
              className="relative group rounded-2xl bg-[#272727]  border border-slate-700/60 shadow-xl overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => setOpenIndex(index)}
            >
              {/* Ribbon */}
              {cert.ribbon && (
                <div className="absolute top-4 left-0 bg-gray-300 text-slate-900 px-4 py-1 rounded-r-full text-xs md:text-sm font-semibold z-10 shadow-md">
                  {cert.ribbon}
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 mt-10">
                <img
                  src={cert.img}
                  alt={cert.title}
                  title={cert.title}

                  loading="eager"
                  className="w-full h-full object-contain md:object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-300">
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
      className="relative bg-[#272727] border border-slate-700 rounded-2xl
                 max-w-4xl w-[90%] md:w-[80%] p-4 md:p-6 shadow-2xl
                 flex flex-col gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full max-h-[70vh] flex items-center justify-center bg-slate-500 rounded-xl overflow-hidden">
        <img
          src={certificates[openIndex].img}
          alt={certificates[openIndex].title}
          className="w-full h-59 object-contain"
        />
      </div>

      <h3 className="text-center text-2xl md:text-3xl font-bold text-slate-50">
        {certificates[openIndex].title}
      </h3>

      <p className="text-center text-slate-300">
        {certificates[openIndex].desc}
      </p>

      {/* Close button last pe + orange */}
      <button
        className="mt-2 self-center px-6 py-2 rounded-full
                   bg-orange-500 hover:bg-orange-600
                   text-white text-sm md:text-base font-semibold
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
