// src/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [btnText, setBtnText] = useState("Submit request");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ stop default redirect

    setIsSubmitting(true);
    setBtnText("Submitting...");

    const form = e.target;

    // Send manually to FormSubmit
    fetch("https://formsubmit.co/sachinbhailume05@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setBtnText(
          "Done! Your form has been submitted. We'll reach you shortly."
        );
      })
      .catch(() => {
        setBtnText("Error! Try Again");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-80 w-80 bg-sky-500/35 blur-3xl rounded-full" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 bg-indigo-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/18 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 pb-20">
        {/* Intro */}
        <section className="pt-2 md:pt-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100 mb-3">
            Contact Auribus Tech
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
            Let&apos;s talk{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              about your
            </span>{" "}
            roadmap.
          </h1>
        </section>

        {/* Main contact layout */}
        <section className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          {/* Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
              Share your details
            </p>

            {/* ⭐⭐⭐ CUSTOM FORM WITH BUTTON TEXT CHANGES ⭐⭐⭐ */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-xs sm:text-sm"
            >
              {/* Hidden fields to keep FormSubmit formatting */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission from Auribus Website"
              />

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">Full name</label>
                  <input
                    name="fullname"
                    type="text"
                    required
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="Organization name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">Work email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Phone (with country code)
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  What do you need help with?
                </label>
                <select
                  name="service"
                  required
                  className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                >
                  <option value="">Select a service</option>
                  <option>DevOps & Cloud Infrastructure</option>
                  <option>CI/CD & Release Automation</option>
                  <option>Cloud Migration & Infrastructure as Code</option>
                  <option>Kubernetes & Microservices</option>
                  <option>Monitoring & Observability</option>
                  <option>Security & Compliance Automation</option>
                  <option>MERN Stack Web Applications</option>
                  <option>React Native Mobile Apps</option>
                  <option>REST APIs & Microservices Backend</option>
                  <option>WordPress Websites & CMS</option>
                  <option>SEO & Mobile-first Web Design</option>
                  <option>Digital Marketing & Growth</option>
                  <option>Google Ads & Meta Ads</option>
                  <option>Lead Generation & Funnels</option>
                  <option>ERP & Business Automation</option>
                  <option>Consulting / Not sure yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  Briefly describe your current challenges
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
                  placeholder="Describe your needs..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  name="consent"
                  id="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-sky-500"
                />
                <label
                  htmlFor="consent"
                  className="text-[11px] text-slate-300 leading-snug"
                >
                  I agree to be contacted by Auribus Tech. My details will be used
                  only for this purpose.
                </label>
              </div>

              {/* SUBMIT BUTTON WITH STATUS TEXT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {btnText}
              </button>

              <p className="text-[10px] text-slate-400">
                Typical response time: 1–2 business days. You&apos;ll receive a
                follow-up email soon.
              </p>
            </form>
          </div>

          {/* Contact details / side card */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Direct contact
              </p>
              <div className="space-y-1.5 text-slate-100">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:support@auribustech.com"
                    className="hover:text-blue-500 transition"
                  >
                    support@auribustech.com
                  </a>
                </p>
                <p>
                  📱 Phone:{" "}
                  <a
                    href="tel:+918149524655"
                    className="hover:text-blue-500 transition"
                  >
                    +91-8149524655
                  </a>
                </p>

                <p>
                  💼 LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/auribus-solutions-673657268"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 underline underline-offset-2"
                  >
                    Auribus Tech Solutions Profile
                  </a>
                </p>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Prefer email or LinkedIn? Reach out directly—our team will respond
                with next steps.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                What to expect
              </p>
              <ul className="space-y-1.5 text-slate-200">
                <li>• A short intro call to understand your needs.</li>
                <li>• A discussion of goals and timeline.</li>
                <li>• Suggestions for the best starting point.</li>
                <li>• Optional next steps: PoC or project plan.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Ideal for teams that are
              </p>
              <ul className="space-y-1.5 text-slate-200">
                <li>• Struggling with slow deployments.</li>
                <li>• Migrating to the cloud.</li>
                <li>• Scaling microservices.</li>
                <li>• Preparing for audits.</li>
                <li>• Standardizing engineering workflows.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
