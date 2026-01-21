
import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID;
    const userTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_USER_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 1) Send to Admin
    emailjs.sendForm(serviceId, adminTemplate, formRef.current, publicKey)
      .then(() => {
        // 2) Send auto reply to user
        return emailjs.sendForm(serviceId, userTemplate, formRef.current, publicKey);
      })
      .then(() => {
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("❌ Failed to send. Try again.");
      });
  };

  return (
    <section className="mt-30 mb-20 pt-20 pb-20 rounded-3xl py-16 px-4 sm:px-8 md:px-12">
      <Helmet>
        <title>Contact | Zunaira Abid – Web Developer</title>
        <meta
          name="description"
          content="Get in touch with Zunaira Abid for web development projects, freelance work and remote opportunities."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#030303] via-[#4f4f51] to-[#313131] border-slate-800 rounded-3xl shadow-xl">
        <h1 className="text-5xl text-orange-400 font-bold mb-10 text-center pt-30">Contact Me</h1>

        <div className="px-6 sm:px-10 pt-8 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-orange-300 mb-2">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-3">
            Let's build something together
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
            Share your idea, project or question. Replies usually within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.1fr,1.4fr] gap-8 px-6 sm:px-10 pb-10 pt-8">
          <div className="space-y-5 text-sm sm:text-base">
            <div>
              <h3 className="text-orange-300 font-semibold mb-1">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:zunairaabid140@gmail.com" className="hover:text-orange-200 underline">
                  zunairaabid140@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-orange-300 font-semibold mb-1">Availability</h3>
              <p className="text-gray-300">
                Open to remote opportunities, freelance projects, and collaborations.
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-inner"
          >
            <div className="space-y-1">
              <label className="text-sm text-gray-200" htmlFor="from_name">Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg text-white border border-gray-950 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] outline-none text-sm transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-200" htmlFor="from_email">Email</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-lg text-white border border-gray-950 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] outline-none text-sm transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-200" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg text-white border border-gray-950 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] outline-none text-sm transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-200" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about your project or question..."
                className="w-full p-3 rounded-lg text-white border border-gray-950 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] outline-none text-sm resize-none transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F97316] hover:bg-[#FDBA74] text-black font-semibold py-3 rounded-lg shadow-lg shadow-orange-500/30 transition"
            >
              Send Message
            </button>

            {status && (
              <p
                className={`text-center text-sm mt-2 ${
                  status.includes("✅")
                    ? "text-green-400"
                    : status.includes("❌")
                    ? "text-red-400"
                    : "text-gray-300"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
