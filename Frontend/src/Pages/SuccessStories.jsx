// src/SuccessStories.jsx
import React from "react";

const stories = [
  {
    id: 1,
    category: "CI/CD & Release Automation",
    title: "Enterprise CI/CD Pipeline Implementation",
    clientType: "Global enterprise with legacy deployment processes",
    challenge:
      "Manual deployments, long release cycles and frequent production incidents made it difficult to deliver new features reliably.",
    technologies: ["Azure DevOps", "Octopus Deploy", "GitHub Actions"],
    outcome: "Weekly deployments with 98%+ release success rate.",
    impact: [
      "Saved 500+ manual deployment hours annually.",
      "Standardized pipelines across multiple teams and applications.",
      "Reduced deployment-related incidents and rollbacks.",
    ],
  },
  {
    id: 2,
    category: "Version Control & Security",
    title: "Repository Migration to GitHub with GHAS",
    clientType: "Enterprise development organization on legacy TFVC",
    challenge:
      "Centralized TFVC repositories limited collaboration, slowed code review and lacked modern security scanning capabilities.",
    technologies: ["GitHub", "GitHub Advanced Security", "Git Workflow"],
    outcome:
      "Seamless migration to GitHub with automated security scanning enabled.",
    impact: [
      "Zero data loss across all migrated repositories.",
      "Modern Git workflows improved collaboration and code quality.",
      "Security issues surfaced earlier via integrated scanning.",
    ],
  },
  {
    id: 3,
    category: "Kubernetes & Microservices",
    title: "Kubernetes Cluster Deployment (AKS)",
    clientType: "Customer‑facing digital platform",
    challenge:
      "Existing infrastructure could not scale efficiently under peak traffic, leading to performance drops and downtime.",
    technologies: ["Azure Kubernetes Service", "Helm", "Container Orchestration"],
    outcome:
      "99.95% application availability and 35% infrastructure cost reduction.",
    impact: [
      "Enabled auto‑scaling and self‑healing capabilities.",
      "Standardized Helm‑based deployments for 50+ services.",
      "Improved deployment consistency across environments.",
    ],
  },
  {
    id: 4,
    category: "Cloud Migration",
    title: "Azure Cloud Migration with Zero Downtime",
    clientType: "Enterprise migrating from on‑prem data center",
    challenge:
      "On‑prem infrastructure was expensive and slow to scale, with strict uptime and performance requirements.",
    technologies: [
      "Azure Data Factory",
      "Azure Virtual Machines",
      "Azure Web Apps",
      "ARM Templates",
    ],
    outcome:
      "Zero‑downtime migration to Azure with 40% operational cost reduction.",
    impact: [
      "Successfully transitioned critical on‑prem workloads to the cloud.",
      "Improved performance and resilience through cloud‑native services.",
      "Automated environment provisioning with ARM templates.",
    ],
  },
  {
    id: 5,
    category: "Security & Compliance",
    title: "Security & Compliance Automation",
    clientType: "Regulated organization preparing for audits",
    challenge:
      "Manual checks and fragmented tooling made it difficult to maintain consistent security and compliance posture.",
    technologies: [
      "GitHub Advanced Security",
      "SonarQube",
      "Azure Policy",
      "Compliance Tools",
    ],
    outcome:
      "70% vulnerability reduction and SOC 2 Type II compliance achieved.",
    impact: [
      "Automated scanning and governance across codebases and environments.",
      "Continuous compliance visibility with policy‑as‑code.",
      "Reduced audit preparation time and effort.",
    ],
  },
  {
    id: 6,
    category: "Infrastructure as Code",
    title: "Infrastructure as Code Automation",
    clientType: "Multi‑environment enterprise platform",
    challenge:
      "Environment setup required manual steps, causing delays and configuration drift across teams.",
    technologies: ["Terraform", "ARM Templates", "Azure DevOps"],
    outcome: "Setup time reduced from weeks to hours.",
    impact: [
      "Standardized multi‑environment infrastructure provisioning.",
      "Reusable Terraform modules for repeatable deployments.",
      "Improved consistency and traceability across environments.",
    ],
  },
  {
    id: 7,
    category: "Observability",
    title: "Monitoring & Observability Setup",
    clientType: "High‑availability customer‑facing systems",
    challenge:
      "Limited visibility and reactive incident response led to long resolution times and customer impact.",
    technologies: [
      "Azure Monitor",
      "Application Insights",
      "Grafana",
      "Prometheus",
    ],
    outcome: "60% reduction in incident response time (MTTR).",
    impact: [
      "Unified monitoring and dashboards across applications and infrastructure.",
      "Proactive alerting and correlation of incidents.",
      "Data‑driven performance optimization.",
    ],
  },
  {
    id: 8,
    category: "Containerization",
    title: "Microservices Containerization at Scale",
    clientType: "Enterprise application portfolio",
    challenge:
      "Monolithic apps created scaling challenges, long deployments and inconsistent environments.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Helm",
      ".NET",
      "Java Microservices",
    ],
    outcome:
      "50+ applications containerized and 35% infrastructure footprint reduction.",
    impact: [
      "Scalable and resilient microservices architecture.",
      "Faster, safer deployments with standardized container images.",
      "Better resource utilization across clusters.",
    ],
  },
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

export default function SuccessStories() {
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
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-100 mb-3">
            Client Success Stories
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
            Real{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              DevOps & Cloud outcomes
            </span>{" "}
            delivered by Auribus IT.
          </h1>
          <p className="text-sm sm:text-base text-slate-300/90 mb-3">
            From CI/CD and repository migrations to Kubernetes, security
            automation and observability, these stories highlight how Auribus IT
            helps enterprises reduce risk, accelerate delivery and optimize
            cloud investments.
          </p>
          <p className="text-sm sm:text-base text-slate-300/90">
            Each project started from a specific business challenge and evolved
            into a repeatable pattern that can be tailored to your own
            environment.
          </p>
        </section>

        {/* Highlight metrics strip */}
        <section className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
            <div className="text-xl font-semibold text-sky-300">50+</div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Enterprise projects successfully delivered
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
            <div className="text-xl font-semibold text-emerald-300">98%+</div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Release success rate on automated pipelines
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
            <div className="text-xl font-semibold text-indigo-300">99.95%</div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Availability achieved on cloud‑native platforms
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
            <div className="text-xl font-semibold text-amber-300">
              up to 50%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Cloud cost optimization across environments
            </div>
          </div>
        </section>

        {/* Stories list */}
        <section className="mt-14 md:mt-18 space-y-8">
          {stories.map((s, index) => (
            <div
              key={s.id}
              className="relative rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-400/10 opacity-70" />
              <div className="relative z-10 grid md:grid-cols-[1.5fr_1.1fr] gap-6 md:gap-8 items-start">
                {/* Left: narrative */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-200">
                      {s.category}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Case {s.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    {s.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mb-1.5">
                    <span className="font-semibold text-slate-100">
                      Client:
                    </span>{" "}
                    {s.clientType}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mb-3">
                    <span className="font-semibold text-slate-100">
                      Challenge:
                    </span>{" "}
                    {s.challenge}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                    Impact in practice
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                    {s.impact.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: outcome + tech + CTA */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                      Outcome
                    </p>
                    <p className="text-slate-100">{s.outcome}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                      Technology stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] text-slate-400 max-w-[75%]">
                      Curious how a similar approach would look in your context?
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 transition-colors"
                    >
                      Talk about this
                    </a>
                  </div>
                </div>
              </div>

              {/* Subtle index pill */}
              <div className="absolute -right-6 top-6 h-12 w-12 rounded-full border border-slate-700/80 bg-slate-950/85 flex items-center justify-center text-[11px] text-slate-500">
                #{index + 1}
              </div>
            </div>
          ))}
        </section>

        {/* Testimonials + CTA */}
        <section className="mt-16 md:mt-20 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              What our clients say
            </h2>
            <p className="text-sm text-slate-300 mb-3 max-w-xl">
              Outcomes are not just numbers—they are reflected in how teams
              experience delivery, collaboration and reliability after a DevOps
              transformation.
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

          <div className="rounded-3xl border border-sky-500/50 bg-gradient-to-br from-sky-500/20 via-slate-950 to-emerald-500/18 p-5 text-xs sm:text-sm text-slate-50 shadow-[0_20px_60px_rgba(56,189,248,0.32)]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-100 mb-2">
              Your success story next
            </p>
            <p className="mb-2">
              Whether you&apos;re tackling long release cycles, fragile
              infrastructure, audit pressure or cloud cost overruns, Auribus IT
              can help define and deliver a focused success story for your
              organization.
            </p>
            <p className="mb-3">
              Start with a conversation about your current challenges and we&apos;ll
              identify the first 1–2 initiatives that create visible impact
              quickly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950/90 px-4 py-1.5 text-[11px] font-semibold text-sky-100 border border-sky-400/70 hover:bg-slate-900 transition-colors"
            >
              Schedule a discovery call
              <span className="ml-1 text-xs">↗</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
