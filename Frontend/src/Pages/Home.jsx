// src/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqItems = [
  {
    id: 1,
    title: "What does Auribus IT specialize in?",
    content:
      "Auribus IT focuses on DevOps and Cloud Infrastructure solutions: CI/CD automation, Infrastructure as Code, Kubernetes and containers, security & compliance, observability, and release management for enterprises.",
  },
  {
    id: 2,
    title: "What business outcomes do you deliver?",
    content:
      "Typical outcomes include faster release cycles, 60–80% reduction in deployment time, 40–50% cloud cost optimization, 99.9%+ release success, and high availability architectures for critical workloads.",
  },
  {
    id: 3,
    title: "Which cloud and DevOps tools do you use?",
    content:
      "We work across Azure, AWS, GCP and Oracle Cloud using tools like Azure DevOps, GitHub Actions, Jenkins, Terraform, Docker, Kubernetes (AKS), Helm, Prometheus, Grafana, SonarQube and GitHub Advanced Security.",
  },
  {
    id: 4,
    title: "How do engagement models work?",
    content:
      "We offer consulting & architecture, implementation projects, managed services, training & enablement, and low‑risk Proof of Concepts so you can validate value before large-scale rollout.",
  },
];

const services = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Design and implement intelligent CI/CD pipelines using Azure DevOps, GitHub Actions, Jenkins, Octopus Deploy and Bamboo to cut deployment time by up to 80%.",
    tag: "Release faster",
  },
  {
  title: "MERN Stack & React Native",
  description:
    "Design and build modern web and mobile applications using MongoDB, Express, React, Node.js and React Native—integrated with secure APIs, CI/CD and cloud services.",
  tag: "Build modern apps",
},

  {
    title: "Kubernetes & Microservices",
    description:
      "Design, deploy and operate AKS clusters, Dockerized services, Helm charts and Istio-based service meshes for resilient microservices platforms.",
    tag: "Modernize apps",
  },
  {
    title: "Security, Compliance & Governance",
    description:
      "Integrate GitHub Advanced Security, RBAC, Key Vault, policy-as-code and automated scanning to meet SOC 2, ISO 27001 and other regulatory needs.",
    tag: "Security first",
  },
  {
    title: "Monitoring & Observability",
    description:
      "Leverage Azure Monitor, Application Insights, Prometheus, Grafana and ELK to achieve unified visibility, proactive alerting and 60% MTTR reduction.",
    tag: "See everything",
  },
  {
    title: "Release Management & DevOps Transformation",
    description:
      "Orchestrate zero-downtime releases, Git workflows, change management and Agile practices to move from quarterly to weekly (or faster) deployments.",
    tag: "Transform ways of working",
  },
];

const stats = [
  { label: "Years of expertise", value: "7+" },
  { label: "Enterprise projects", value: "50+" },
  { label: "Availability achieved", value: "99.95%" },
  { label: "Cloud cost reduction", value: "up to 50%" },
];

const techStack = [
  "Azure DevOps",
  "GitHub Actions",
  "Jenkins",
  "Terraform",
  "Azure",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes (AKS)",
  "Helm",
  "Prometheus",
  "Grafana",
  "GHAS",
  "SonarQube",
];

const testimonials = [
  {
    quote:
      "Auribus IT's DevOps expertise reduced our deployment times by 75% and dramatically improved release reliability.",
    role: "Enterprise Client (Fortune 500)",
  },
  {
    quote:
      "The team provided strategic advisory that shaped our entire cloud transformation roadmap.",
    role: "Technology Director",
  },
  {
    quote:
      "Beyond implementation, Auribus IT invested in our team's capability building. A true long-term partner.",
    role: "CTO, High-Growth Company",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-slate-700/60 rounded-xl bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left hover:bg-slate-800/70 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold">
            {item.id}
          </span>
          <span className="font-semibold text-slate-50 text-sm md:text-base">
            {item.title}
          </span>
        </div>
        <span
          className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-600 text-xs text-slate-200 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-slate-300 transition-all duration-300 ${
          isOpen ? "max-h-40 md:max-h-48 pt-0 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {item.content}
      </div>
    </div>
  );
}

export default function Home() {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background gradient / glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full" />
        <div className="absolute top-40 -left-20 h-72 w-72 bg-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-sky-500/20 blur-3xl rounded-full" />
      </div>

      {/* Page wrapper */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        {/* Navbar */}
      


        {/* Hero */}
        <main>
          <section className="pt-6 md:pt-10 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Enterprise DevOps & Cloud Specialists
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                Transform your{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  infrastructure
                </span>{" "}
                into a high‑velocity, secure, cloud-native platform.
              </h1>

              <p className="text-sm sm:text-base text-slate-300/90 mb-6 max-w-xl">
                Auribus IT designs, implements and optimizes enterprise‑grade DevOps
                ecosystems that accelerate time‑to‑market, harden security and
                maximize cloud ROI for Fortune 500s and high‑growth innovators.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
                >
                  Talk to an Expert
                  <span className="ml-2 text-base">↗</span>
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2 text-xs font-medium text-slate-100 hover:border-slate-400 hover:bg-slate-900 transition-colors"
                >
                  View Success Stories
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-3 py-3 sm:px-4 sm:py-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]"
                  >
                    <div className="text-lg sm:text-xl font-semibold text-sky-300">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] sm:text-xs text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: gradient card with key capabilities */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-40 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-slate-100 tracking-wide">
                    DevOps Control Center
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1 text-[10px] font-medium text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live transformation
                  </span>
                </div>

                {/* Pill row */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "CI/CD Automation",
                    "Kubernetes & AKS",
                    "IaC with Terraform",
                    "Security & Compliance",
                    "Observability",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-[10px] text-slate-200 border border-slate-700"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Mini pipeline timeline */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                    <span>Plan</span>
                    <span>Code</span>
                    <span>Build</span>
                    <span>Test</span>
                    <span>Deploy</span>
                    <span>Operate</span>
                  </div>
                  <div className="relative h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 w-3/4 animate-[pulse_3s_ease-in-out_infinite]" />
                  </div>
                  <div className="mt-2 text-[11px] text-slate-400">
                    GitOps workflows, zero‑touch deployments and automated rollback
                    for high‑frequency, low‑risk releases.
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
                  <div className="rounded-2xl bg-slate-900/80 border border-sky-500/30 px-3 py-3">
                    <div className="text-sm font-semibold text-sky-300">
                      60–80%
                    </div>
                    <div className="mt-0.5 text-slate-400">
                      faster deployments with optimized CI/CD pipelines
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 border border-emerald-500/30 px-3 py-3">
                    <div className="text-sm font-semibold text-emerald-300">
                      40–50%
                    </div>
                    <div className="mt-0.5 text-slate-400">
                      cloud cost savings via rightsizing and governance
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 border border-indigo-500/30 px-3 py-3">
                    <div className="text-sm font-semibold text-indigo-300">
                      99.9%+
                    </div>
                    <div className="mt-0.5 text-slate-400">
                      release success with automated quality & security gates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="mt-16 md:mt-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Enterprise DevOps & Cloud Services
                </h2>
                <p className="text-sm text-slate-400 max-w-xl mt-1">
                  From CI/CD and infrastructure as code to Kubernetes, security and
                  observability, Auribus IT delivers end‑to‑end DevOps solutions
                  tailored to complex enterprise environments.
                </p>
              </div>
              <span className="hidden sm:inline-flex text-[11px] rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1 text-slate-300">
                50+ projects delivered
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 hover:border-sky-500/60 hover:bg-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <span className="inline-flex items-center rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-medium text-slate-200 mb-2 border border-slate-700">
                      {service.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {service.description}
                    </p>
                    <button className="mt-3 inline-flex items-center text-[11px] text-sky-300 group-hover:text-sky-200">
                      Learn more
                      <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why partner + accordion */}
          <section
            id="solutions"
            className="mt-16 md:mt-20 grid md:grid-cols-2 gap-10 items-start"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Why partner with Auribus IT?
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                DevOps is more than tools. Auribus IT blends strategy, engineering
                depth and agile leadership to drive measurable transformation across
                your entire software delivery lifecycle.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Holistic transformation: operating models, tooling, governance and
                  culture all aligned to business outcomes.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Proven delivery: 7+ years of hands‑on enterprise implementations
                  across regulated and high‑scale environments.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Security‑first, cost‑conscious architectures with built‑in
                  compliance and optimized cloud spend.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Strong focus on knowledge transfer so your internal teams can own
                  and evolve the platform confidently.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </div>
          </section>

          {/* Tech stack + testimonials */}
          <section
            id="case-studies"
            className="mt-16 md:mt-20 grid lg:grid-cols-[1.4fr_1fr] gap-10"
          >
            {/* Tech stack strip */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Built on a modern, enterprise‑ready stack
              </h2>
              <p className="text-sm text-slate-300 mb-4 max-w-xl">
                Your DevOps platform is powered by battle‑tested tools across CI/CD,
                cloud, containers, security and observability—to keep you fast,
                compliant and resilient.
              </p>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Technology stack
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Azure · AWS · GCP · Oracle Cloud
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 shadow-xl">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Client testimonials
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Trusted partner for Fortune 500 enterprises and high‑growth
                technology companies.
              </p>
              <div className="space-y-4">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-950/60 border border-slate-800 px-3 py-3"
                  >
                    <p className="text-xs text-slate-100 mb-1.5">
                      “{t.quote}”
                    </p>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                ))}
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
