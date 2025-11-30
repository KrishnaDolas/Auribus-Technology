// src/AboutUs.jsx
import React from "react";

const values = [
  {
    title: "Excellence",
    body: "Delivering high‑quality solutions that meet rigorous enterprise standards across reliability, security and performance.",
  },
  {
    title: "Partnership",
    body: "Building long‑term, transparent relationships focused on shared outcomes, not one‑off projects.",
  },
  {
    title: "Innovation",
    body: "Leveraging modern DevOps practices, cloud services and automation to continuously raise the bar.",
  },
  {
    title: "Integrity",
    body: "Operating with honesty, accountability and respect in every engagement and recommendation.",
  },
  {
    title: "Growth",
    body: "Investing in continuous learning, certifications and capability building for both our team and yours.",
  },
];

const teamStrengths = [
  {
    area: "Azure DevOps Engineering",
    capability:
      "7+ years designing and implementing enterprise CI/CD solutions and Git workflows.",
    impact: "50+ Azure DevOps implementations across regulated and high‑scale environments.",
  },
  {
    area: "Kubernetes & Containerization",
    capability:
      "End‑to‑end AKS architecture, cluster operations, Helm charts and service mesh patterns.",
    impact: "1000+ containers orchestrated with auto‑scaling and self‑healing capabilities.",
  },
  {
    area: "Infrastructure as Code",
    capability:
      "Terraform modules, ARM templates and multi‑cloud infrastructure blueprints.",
    impact: "100+ infrastructure designs automated across dev, QA, staging and production.",
  },
  {
    area: "Cloud Architecture",
    capability:
      "Azure, AWS and GCP solutions for mission‑critical, multi‑environment workloads.",
    impact: "$50M+ of cloud infrastructure designed, optimized and governed.",
  },
  {
    area: "Security & Compliance",
    capability:
      "GitHub Advanced Security, RBAC, policy‑as‑code and compliance automation.",
    impact: "SOC 2 and ISO 27001 ready foundations with 70% fewer critical vulnerabilities.",
  },
  {
    area: "Release Management & Agile Leadership",
    capability:
      "End‑to‑end release orchestration, Scrum practices and cross‑functional coordination.",
    impact: "95+ successful zero‑downtime releases and 100+ practitioners mentored.",
  },
];

const differentiators = [
  "Holistic approach: DevOps as an operating model, not just a toolchain.",
  "Proven delivery: 7+ years of enterprise‑scale implementations and repeat clients.",
  "Technical depth: Deep expertise across Azure, AWS, GCP and leading DevOps platforms.",
  "Agile mindset: Sprint‑based execution with clear visibility and adaptive planning.",
  "Security‑first: Compliance and risk management integrated from day one.",
  "Cost‑conscious: Cloud architectures optimized for performance and spend.",
  "Knowledge transfer: Structured enablement so your teams can own the platform.",
];

const testimonials = [
  {
    quote:
      "Auribus IT's DevOps expertise reduced our deployment times by 75% and significantly improved release reliability.",
    role: "Enterprise Client (Fortune 500)",
  },
  {
    quote:
      "The team provided strategic advisory that shaped our entire cloud transformation roadmap.",
    role: "Technology Director",
  },
  {
    quote:
      "Beyond implementation, Auribus IT invested in our team's capability building. A true partnership.",
    role: "CTO, High‑Growth Organization",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 bg-sky-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/18 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">

        {/* Intro / Executive overview */}
        <section className="pt-4 md:pt-8 grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-100 mb-3">
              About Auribus IT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
              A focused{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                DevOps & Cloud partner
              </span>{" "}
              for enterprise digital transformation.
            </h1>
            <p className="text-sm sm:text-base text-slate-300/90 mb-3 max-w-2xl">
              Auribus IT is a specialized DevOps and Cloud Infrastructure
              Solutions provider dedicated to transforming enterprise operations
              through automation, scalable cloud architectures and secure
              delivery practices.
            </p>
            <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl">
              With over 7 years of collective experience, the team has delivered
              complex infrastructure projects for Fortune 500 organizations and
              innovative startups, enabling higher agility, operational
              efficiency and measurable cost savings.
            </p>
          </div>

          {/* Mission / Vision card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-40 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 shadow-2xl text-xs sm:text-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Mission
              </p>
              <p className="text-slate-100 mb-3">
                To empower organizations with world‑class DevOps solutions that
                accelerate time‑to‑market, minimize operational risk, maximize
                cloud investment returns and free teams to focus on innovation.
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Vision
              </p>
              <p className="text-slate-100 mb-3">
                To be the trusted partner for enterprise digital transformation,
                recognized for delivering scalable, secure and cost‑efficient
                cloud infrastructure that fuels sustainable business growth.
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Commitment
              </p>
              <p className="text-slate-100">
                Every engagement is anchored in excellence, transparency,
                innovation and a relentless focus on client success.
              </p>
            </div>
          </div>
        </section>

        {/* Our story / what we do */}
        <section className="mt-14 md:mt-18 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Our story in DevOps & Cloud
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              Auribus IT was founded with a clear belief: enterprise DevOps
              should deliver predictable, repeatable results—not constant
              firefighting. The team brings deep experience across CI/CD,
              Kubernetes, Infrastructure as Code, security and observability.
            </p>
            <p className="text-sm text-slate-300">
              From repository migrations and zero‑touch deployment pipelines to
              Kubernetes platforms and cloud cost optimization, Auribus IT has
              helped organizations redesign the way software is built, shipped
              and operated.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-xs sm:text-sm text-slate-200 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              What this means for you
            </p>
            <p>
              • Faster delivery with CI/CD automation and GitOps workflows
              tailored to your stack.
            </p>
            <p>
              • Stronger resilience and availability through cloud‑native
              architectures and containers.
            </p>
            <p>
              • Lower risk via integrated security, compliance and governance
              practices.
            </p>
            <p>
              • Better economics with structured cost optimization and
              observability‑driven decisions.
            </p>
          </div>
        </section>

        {/* Team strengths */}
        <section id="team" className="mt-16 md:mt-20">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Our skilled technical team
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mt-1">
                Azure DevOps engineers, cloud architects, infrastructure
                automation specialists and Agile practitioners working as one
                team to deliver reliable outcomes.
              </p>
            </div>
            <span className="hidden sm:inline-flex text-[11px] rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1 text-slate-300">
              100+ professionals enabled & mentored
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {teamStrengths.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-1">
                  {item.area}
                </p>
                <p className="text-sm font-semibold text-slate-100 mb-1">
                  {item.capability}
                </p>
                <p className="text-xs text-slate-300">{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators + values */}
        <section
          id="values"
          className="mt-16 md:mt-20 grid lg:grid-cols-[1.4fr_1.1fr] gap-10 items-start"
        >
          {/* Differentiators */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              What makes Auribus IT different
            </h2>
            <p className="text-sm text-slate-300 mb-3 max-w-xl">
              Clients choose Auribus IT for a blend of strategic thinking,
              engineering excellence and a pragmatic, business‑first mindset.
            </p>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-xs sm:text-sm text-slate-200">
              <ul className="space-y-1.5">
                {differentiators.map((diff) => (
                  <li key={diff} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values grid */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
              Our core values
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 px-3 py-3"
                >
                  <p className="font-semibold text-slate-100 mb-1">
                    {v.title}
                  </p>
                  <p className="text-slate-300 text-[11px] sm:text-xs">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials + commitment */}
        <section className="mt-16 md:mt-20 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          {/* Testimonials */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Trusted by teams that ship critical software
            </h2>
            <p className="text-sm text-slate-300 mb-3 max-w-xl">
              Auribus IT partners with enterprises and high‑growth companies to
              modernize delivery, unlock cloud value and build sustainable
              DevOps capabilities.
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-xs text-slate-200">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-950/80 border border-slate-800 px-3 py-3"
                >
                  <p className="mb-1.5 text-slate-100">“{t.quote}”</p>
                  <p className="text-[10px] text-slate-400">{t.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment card */}
          <div className="rounded-3xl border border-sky-500/50 bg-gradient-to-br from-sky-500/20 via-slate-950 to-emerald-500/18 p-5 text-xs sm:text-sm text-slate-50 shadow-[0_20px_60px_rgba(56,189,248,0.32)]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-100 mb-2">
              Our commitment
            </p>
            <p className="mb-2">
              Auribus IT is committed to delivering exceptional value through
              excellence, partnership, innovation, integrity and continuous
              growth—for both clients and internal teams.
            </p>
            <p className="mb-3">
              Every project is approached as a joint journey: aligning DevOps
              initiatives with business goals, defining clear KPIs and
              transferring knowledge so improvements are sustainable long after
              go‑live.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950/90 px-4 py-1.5 text-[11px] font-semibold text-sky-100 border border-sky-400/60 hover:bg-slate-900 transition-colors"
            >
              Explore how we can partner
              <span className="ml-1 text-xs">↗</span>
            </a>
          </div>
        </section>

        {/* Contact anchor */}
        <section
          id="contact"
          className="mt-16 md:mt-20 border-t border-slate-800 pt-6 text-xs text-slate-400"
        >
          <p>
            Ready to learn more about Auribus IT? Reach out at{" "}
            <span className="text-sky-300">contact@auribus-it.com</span> or use
            the contact form on the home page to start a conversation about
            your DevOps and cloud journey.
          </p>
        </section>
      </div>
    </div>
  );
}
