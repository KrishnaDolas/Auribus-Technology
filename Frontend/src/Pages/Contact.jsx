// src/Contact.jsx
import React from "react";

export default function Contact() {
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
            Let&apos;s talk {" "}
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
            <form className="space-y-4 text-xs sm:text-sm">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Company
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="Organization name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Phone (with country code)
                  </label>
                  <input
                    type="tel"
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  What do you need help with?
                </label>
                <select className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
  <option value="">Select a service</option>

  {/* DevOps & Cloud */}
  <option>DevOps & Cloud Infrastructure</option>
  <option>CI/CD & Release Automation</option>
  <option>Cloud Migration & Infrastructure as Code</option>
  <option>Kubernetes & Microservices</option>
  <option>Monitoring & Observability</option>
  <option>Security & Compliance Automation</option>
  <option>DevOps Transformation & Training</option>

  {/* Web & Mobile */}
  <option>MERN Stack Web Applications</option>
  <option>React Native Mobile Apps</option>
  <option>REST APIs & Microservices Backend</option>
  <option>Real-time Dashboards & SaaS Platforms</option>

  {/* WordPress & Web */}
  <option>WordPress Websites & CMS</option>
  <option>WordPress E-commerce (WooCommerce)</option>
  <option>Performance Optimization & CDN</option>
  <option>SEO & Mobile-first Web Design</option>

  {/* AI & Content */}
  <option>AI Video & Content Creation</option>
  <option>Social Media Content & Shorts</option>
  <option>Brand Storytelling & Explainer Videos</option>

  {/* Marketing */}
  <option>Digital Marketing & Growth</option>
  <option>Google Ads & Meta Ads Campaigns</option>
  <option>SEO & Content Marketing</option>
  <option>Lead Generation & Sales Funnels</option>

  {/* ERP & Automation */}
  <option>ERP & Business Process Automation</option>
  <option>HRMS, CRM & Inventory Systems</option>
  <option>Finance, Accounting & Reporting Workflows</option>

  {/* General */}
  <option>Consulting & Architecture Review</option>
  <option>Managed Services & Support</option>
  <option>Other / Not sure yet</option>
</select>

              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  Briefly describe your current challenges
                </label>
                <textarea
                  rows={4}
                  className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
                  placeholder="e.g., long release cycles, frequent deployment failures, high cloud costs, audit pressure..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="consent"
                  type="checkbox"
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500"
                />
                <label
                  htmlFor="consent"
                  className="text-[11px] text-slate-300 leading-snug"
                >
                  I agree to be contacted by Auribus Tech about DevOps & Cloud
                  consulting services. My details will be used only for this
                  purpose.
                </label>
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
              >
                Submit request
              </button>

              <p className="text-[10px] text-slate-400">
                Typical response time: 1–2 business days. You&apos;ll receive a
                follow‑up email to schedule a conversation or request more
                details.
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
                  <span className="text-sky-300">
                    support@auribustech.com
                  </span>
                </p>
                <p>
                  📱 Phone:{" "}
                  <span className="text-sky-300">+91-8149524655</span>
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
                Prefer email or LinkedIn? Reach out directly and briefly
                describe your context—an architect or DevOps lead will respond
                with next steps.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                What to expect
              </p>
              <ul className="space-y-1.5 text-slate-200">
                <li>• A short intro call to understand your current state.</li>
                <li>• A discussion of goals, constraints and timelines.</li>
                <li>• Suggestions for 1–2 high‑impact starting points.</li>
                <li>• Optional next step: assessment, PoC or project plan.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Ideal for teams that are
              </p>
              <ul className="space-y-1.5 text-slate-200">
                <li>• Struggling with slow, manual deployments.</li>
                <li>• Planning or in the middle of a cloud migration.</li>
                <li>• Building or scaling containerized microservices.</li>
                <li>• Preparing for SOC 2 / ISO 27001 or similar audits.</li>
                <li>• Looking to standardize DevOps practices across teams.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
