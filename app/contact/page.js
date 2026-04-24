"use client";
import { useState } from "react";
import TextReveal from "@/components/TextReveal";
import Navbar from "@/components/Navbar";

const WA_NUMBER = "919211633068"; // +91 92116 33068

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `*New Project Enquiry — Emark*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📋 *Project Details:*\n${form.message}`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-48 pb-24 min-h-screen bg-black relative overflow-hidden w-full selection:bg-lime selection:text-black">

        {/* Background glow */}
        <div className="absolute top-[10%] md:top-[20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-lime/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

        {/* Vertical guide line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none hidden md:block" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Heading */}
          <TextReveal
            text="Start Transmission"
            className="text-4xl sm:text-6xl md:text-8xl font-bold font-syne text-white mb-6 tracking-tighter w-full"
          />
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Enter your parameters below. Our intake system will route your query to the appropriate agent.
          </p>

          {/* Form */}
          <form
            className="bg-[#080808] border border-white/[0.07] rounded-3xl p-8 md:p-12"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

              {/* Full Name */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-lime transition-colors placeholder:text-white/20 text-base"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-lime transition-colors placeholder:text-white/20 text-base"
                  placeholder="jane@company.com"
                  required
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-3 mb-12">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono font-bold">
                Project Parameters
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-lime transition-colors resize-none min-h-[120px] placeholder:text-white/20 text-base leading-relaxed"
                placeholder="Describe your project — website, AI automation, Shopify store, or full growth system..."
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-lime text-black font-black font-syne py-5 rounded-full hover:bg-white transition-all duration-300 text-[15px] uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span>{sent ? "Message Sent → WhatsApp Opened ✓" : "Transmit Data"}</span>
              {!sent && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:translate-x-1 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )}
            </button>

            {sent && (
              <p className="text-center text-[12px] text-gray-600 mt-4 font-mono uppercase tracking-widest">
                WhatsApp tab opened → complete the message there
              </p>
            )}
          </form>

          {/* Bottom note */}
          <p className="text-center text-gray-700 text-xs uppercase tracking-widest mt-8 font-mono">
            We typically respond within 2 hours · Mon–Sat · 10am–8pm IST
          </p>
        </div>
      </main>
    </>
  );
}
