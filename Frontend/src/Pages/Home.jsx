// src/Home.js
import React from "react";
import { Link } from "react-router-dom";

const coreHighlights = [
  "DevOps consulting & implementation",
  "MERN Stack ,React.js ,Node.js Web Applications",
  "React Native Mobile Apps",
  "Cloud infrastructure on Azure, AWS, GCP",
  "CI/CD pipelines & automation",
  "Kubernetes & container platforms",
  "Security, monitoring & reliability",
  "WordPress websites & CMS",
];


const techLogos = [
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "GCP", logo: "/logos/gcp.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Terraform", logo: "/logos/terraform.svg" },
  { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
  { name: "Jenkins", logo: "/logos/jenkins.svg" },
];

const logoRows = [
  [
    {
      name: "Azure DevOps",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Jenkins",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Terraform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
  ],
  [
    {
      name: "GCP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
  name: "Express",
  logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
},
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ],
];



function LogoMarqueeRow({ logos, reverse }) {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Track wrapper */}
      <div
        className={`flex gap-8 min-w-max ${
          reverse ? "marquee-row-reverse" : "marquee-row"
        }`}
      >
        {/* First copy */}
        {logos.map((logo) => (
          <div
            key={logo.name + "-1"}
            className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_12px_30px_rgba(15,23,42,0.9)]"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-8 w-8 object-contain"
            />
            <span className="text-xs sm:text-sm text-slate-100">
              {logo.name}
            </span>
          </div>
        ))}
        {/* Second copy for seamless loop */}
        {logos.map((logo) => (
          <div
            key={logo.name + "-2"}
            className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_12px_30px_rgba(15,23,42,0.9)]"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-8 w-8 object-contain"
            />
            <span className="text-xs sm:text-sm text-slate-100">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full" />
        <div className="absolute top-40 -left-20 h-72 w-72 bg-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-sky-500/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero */}
        <main>
          <section className="pt-10 md:pt-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Auribus IT · DevOps & Cloud
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
                We design, build and run{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  modern DevOps & cloud platforms
                </span>
                .
              </h1>

              <p className="text-sm sm:text-base text-slate-300/90 mb-5 max-w-xl">
                Auribus IT helps teams ship faster, stay secure and keep cloud
                systems reliable with practical DevOps and cloud infrastructure services.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
                >
                  Talk to us
                  <span className="ml-2 text-base">↗</span>
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2 text-xs font-medium text-slate-100 hover:border-slate-400 hover:bg-slate-900 transition-colors"
                >
                  View all services
                </Link>
              </div>

              <ul className="space-y-1.5 text-sm text-slate-200">
                {coreHighlights.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simple summary card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-40 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
                <h2 className="text-sm font-semibold text-slate-100 mb-3">
                  In one line
                </h2>
                <p className="text-sm text-slate-300 mb-4">
                  We set up and manage your CI/CD, cloud infrastructure and
                  Kubernetes so your teams can focus on building products.
                </p>

                <div className="grid grid-cols-3 gap-3 text-xs text-slate-200">
                  <div className="rounded-2xl bg-slate-950/60 border border-slate-700 px-3 py-3">
                    <div className="text-lg font-semibold text-sky-300">7+</div>
                    <div className="mt-0.5 text-slate-400">years in DevOps</div>
                  </div>
                  <div className="rounded-2xl bg-slate-950/60 border border-slate-700 px-3 py-3">
                    <div className="text-lg font-semibold text-emerald-300">
                      50+
                    </div>
                    <div className="mt-0.5 text-slate-400">enterprise projects</div>
                  </div>
                  <div className="rounded-2xl bg-slate-950/60 border border-slate-700 px-3 py-3">
                    <div className="text-lg font-semibold text-indigo-300">
                      99.9%
                    </div>
                    <div className="mt-0.5 text-slate-400">reliable releases</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech logos */}
          {/* Logo carousel */}
        <section className="mt-10 space-y-4">
          <p className="text-xs sm:text-sm text-slate-400 mb-1">
            Hover on the rows to pause and inspect individual technologies.
          </p>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <LogoMarqueeRow logos={logoRows[0]} speedClass="animate-marquee-slow" />
            <div className="mt-1 border-t border-slate-800/70" />
            <LogoMarqueeRow
              logos={logoRows[1]}
              speedClass="animate-marquee-slow"
              reverse
            />
          </div>
        </section>

          {/* Contact strip */}
          <section
            id="contact"
            className="mt-14 rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/15 via-slate-900 to-indigo-500/15 p-5 sm:p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  Ready to Create Your Own HRMS , CRM or Employee Management System ?
                </h2>
                <p className="text-sm text-slate-100">
                  Share a few details and the Auribus IT team will get back to you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-100">
                <span>📧 contact@auribus-it.com</span>
                <span>📱 +91-XXXXXXXXXX</span>
                <a
                  href="https://www.linkedin.com/in/auribus-solutions-673657268"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-200 underline underline-offset-2"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

            {/* Contact / CTA */}
          <section
            id="contact"
            className="mt-16 md:mt-20 rounded-3xl border border-sky-500/50 bg-gradient-to-r from-sky-500/15 via-slate-900 to-indigo-500/15 p-5 sm:p-7 shadow-[0_20px_60px_rgba(56,189,248,0.28)]"
          >
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Let’s accelerate your DevOps journey
                </h2>
                <p className="text-sm text-slate-100 mb-4 max-w-xl">
                  Whether you&apos;re modernizing legacy infrastructure, scaling
                  Kubernetes, hardening security or optimizing cloud costs, Auribus
                  IT has the experience to deliver measurable, repeatable results.
                </p>
                <div className="space-y-1 text-xs text-slate-100">
                  <p>
                    📧 Email:{" "}
                    <span className="text-sky-200">contact@auribus-it.com</span>
                  </p>
                  <p>
                    📱 Phone: <span className="text-sky-200">+91-XXXXXXXXXX</span>
                  </p>
                  <p>
                    💼 LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/auribus-solutions-673657268"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-200 underline underline-offset-2"
                    >
                      Auribus Solutions Profile
                    </a>
                  </p>
                </div>
              </div>


              <form className="space-y-3 bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-slate-300">
                      Company
                    </label>
                    <input
                      type="text"
                      className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                      placeholder="Organization name"
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-slate-300">
                      Work email
                    </label>
                    <input
                      type="email"
                      className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-slate-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                </div>


                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    What do you need help with?
                  </label>
                  <select className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
                    <option>CI/CD & Release Automation</option>
                    <option>Cloud Migration & IaC</option>
                    <option>Kubernetes & Microservices</option>
                    <option>Security & Compliance Automation</option>
                    <option>Monitoring & Observability</option>
                    <option>DevOps Transformation & Training</option>
                  </select>
                </div>


                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Briefly describe your current challenges
                  </label>
                  <textarea
                    rows={3}
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
                    placeholder="e.g., long release cycles, frequent deployment failures, high cloud costs..."
                  />
                </div>


                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
                >
                  Submit request
                </button>
                <p className="text-[10px] text-slate-400">
                  By submitting, you agree to be contacted about DevOps & Cloud
                  consulting services from Auribus IT.
                </p>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}