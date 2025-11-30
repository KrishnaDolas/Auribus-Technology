// src/Services.jsx
import React, { useState } from "react";

const capabilitySections = [
  {
    id: "cicd",
    title: "CI/CD Pipeline Design & Automation",
    subtitle:
      "Design and implement intelligent CI/CD pipelines for zero‑touch, high‑frequency deployments.",
    metrics: ["60–80% faster deployments", "85% fewer manual interventions"],
    bullets: [
      "Multi-platform pipelines across Azure DevOps, GitHub Actions, Jenkins, Octopus Deploy and Bamboo.",
      "End‑to‑end workflows including build, test, security scanning, approvals and progressive rollouts.",
      "GitOps workflows for promotion across environments with auditable change history.",
      "Built‑in governance, quality gates and observability for every deployment.",
    ],
    tag: "Release faster",
  },
  {
    id: "mern",
    title: "MERN Stack & React Native Development",
    subtitle:
      "Design and build modern web and mobile applications using MERN and React Native, wired into robust CI/CD and cloud infrastructure.",
    metrics: [
      "Faster feature delivery with reusable components",
      "Unified codebase across web and mobile",
    ],
    bullets: [
      "Full‑stack JavaScript development with MongoDB, Express, React and Node.js.",
      "API‑first architectures with REST and microservices for scalable backends.",
      "React Native apps for iOS and Android with shared business logic.",
      "Integration with CI/CD pipelines, cloud services and observability from day one.",
    ],
    tag: "Build modern apps",
  },
  {
    id: "iac",
    title: "Infrastructure as Code & Cloud Architecture",
    subtitle:
      "Standardize and automate cloud infrastructure across Azure, AWS, GCP and Oracle Cloud.",
    metrics: [
      "Provisioning time cut from weeks to hours",
      "40–50% optimized cloud spend",
    ],
    bullets: [
      "Cloud architectures for multi‑environment workloads (dev, QA, staging, prod).",
      "Terraform modules, ARM templates and YAML‑based IaC for consistent provisioning.",
      "Network, security, data and app tiers modelled as reusable building blocks.",
      "Cost‑efficient patterns leveraging reserved instances, autoscaling and rightsizing.",
    ],
    tag: "Scale with confidence",
  },
  {
    id: "k8s",
    title: "Container Orchestration & Microservices",
    subtitle:
      "Build resilient, self‑healing microservices platforms powered by Kubernetes and Docker.",
    metrics: ["35% infra footprint reduction", "99.95% application availability"],
    bullets: [
      "AKS cluster design, node pools, autoscaling and multi‑AZ resilience.",
      "Hardened Docker images, image registries and standardized base images.",
      "Helm charts for consistent, repeatable application deployments.",
      "Service mesh patterns (Istio) for canary, blue‑green and advanced traffic shaping.",
    ],
    tag: "Modernize apps",
  },
  {
    id: "security",
    title: "Security, Compliance & Governance",
    subtitle:
      "Integrate security and compliance into every stage of your delivery lifecycle.",
    metrics: ["70% reduction in vulnerabilities", "SOC 2 & ISO 27001 ready"],
    bullets: [
      "GitHub Advanced Security for code scanning, secret scanning and dependency checks.",
      "RBAC, Azure AD, SSO and least‑privilege access across tooling and platforms.",
      "Secrets management via Azure Key Vault and Kubernetes Secrets with rotation policies.",
      "Policy‑as‑code to enforce guardrails for cost, security and regulatory compliance.",
    ],
    tag: "Security first",
  },
  {
    id: "observability",
    title: "Monitoring, Logging & Observability",
    subtitle:
      "Achieve unified visibility and proactive incident response across complex estates.",
    metrics: ["60% MTTR reduction", "95% incidents detected proactively"],
    bullets: [
      "Azure Monitor, Application Insights and Log Analytics for cloud workloads.",
      "Prometheus, Grafana and Jaeger for metrics, dashboards and tracing.",
      "Centralized logging with Elasticsearch, Kibana and Beats.",
      "Intelligent alerting, SLO/SLA tracking and runbooks for NOC/SRE teams.",
    ],
    tag: "See everything",
  },
  {
    id: "release",
    title: "Release Management & DevOps Transformation",
    subtitle:
      "Transform delivery from ad‑hoc releases to predictable, low‑risk delivery pipelines.",
    metrics: ["Weekly (or faster) releases", "99.9% release success rate"],
    bullets: [
      "Release orchestration across environments with zero‑downtime strategies.",
      "Git branching strategies, code review policies and quality gates.",
      "Change management, rollback and incident playbooks baked into releases.",
      "DevOps enablement, coaching and training for engineering and operations teams.",
    ],
    tag: "Transform ways of working",
  },
];

const engagementAccordion = [
  {
    id: 1,
    title: "Consulting & Architecture",
    content:
      "Strategic advisory to define your target DevOps operating model, reference architectures and migration roadmap for cloud and on‑prem workloads.",
  },
  {
    id: 2,
    title: "Implementation Services",
    content:
      "Hands‑on delivery of CI/CD pipelines, IaC, Kubernetes platforms, security tooling and observability—built to your standards and timelines.",
  },
  {
    id: 3,
    title: "Managed Services",
    content:
      "Ongoing operations, monitoring, optimization and lifecycle management for your DevOps platform with defined SLAs and continuous improvements.",
  },
  {
    id: 4,
    title: "Training & Enablement",
    content:
      "Role‑based enablement for developers, SREs and operations teams so your teams can own and evolve the platform after go‑live.",
  },
  {
    id: 5,
    title: "Proof of Concept (PoC)",
    content:
      "Low‑risk PoCs to validate new tools, architectures or patterns before enterprise‑wide rollout, with clear success criteria and ROI metrics.",
  },
];

// New: creative / marketing / ERP blocks
const creativeSections = [
  {
    id: "ai-video",
    label: "AI Studio",
    title: "AI Video Generation & Cinematic Content Production",
    punchline:
      "Produce studio‑quality videos with AI to dramatically cut production time and cost while boosting engagement.",
    columns: [
      {
        heading: "Technologies & Tools",
        bullets: [
          "Veo 3 for ultra‑realistic cinematic text‑to‑video generation.",
          "Runway Gen‑3 for film‑style AI video creation.",
          "Pika Labs, Hailuo, Kling AI for scene‑based realistic videos.",
          "Kaiber, MidJourney for style animation & character creation.",
          "D‑ID / Sora‑style lip‑sync generation for talking avatars.",
          "NanoBanana for hyper‑realistic AI character videos.",
          "ElevenLabs, PlayHT, XTTS for AI voice cloning & dubbing.",
        ],
      },
      {
        heading: "Content We Deliver",
        bullets: [
          "3D Pixar‑style storytelling and brand films.",
          "Ads, brand promotional videos & social media reels.",
          "YouTube shorts & influencer‑ready viral content.",
          "Explainer videos for products, apps and workflows.",
          "Training & corporate videos with AI actors and AI voiceovers.",
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Growth Lab",
    title: "Digital Marketing & Brand Acceleration",
    punchline:
      "Scale brands using data‑driven advertising, funnels and content that converts—across paid, organic and creator ecosystems.",
    columns: [
      {
        heading: "Expertise Areas",
        bullets: [
          "Social Media Marketing (Facebook, Instagram, YouTube, LinkedIn).",
          "Paid campaigns via Google Ads & Meta Ads.",
          "Influencer & creator marketing campaigns.",
          "Personal branding & corporate branding programs.",
          "Content strategy and editorial calendars.",
        ],
      },
      {
        heading: "Core Services",
        bullets: [
          "Meta Ads (Facebook + Instagram) and YouTube marketing.",
          "Google Ads for search, display and performance campaigns.",
          "Lead generation and sales funnel strategy & optimization.",
          "SEO for sustainable organic traffic growth.",
          "Corporate & celebrity‑style personal branding.",
        ],
      },
    ],
  },
  {
    id: "erp",
    label: "Business Systems",
    title: "ERP & Business Automation Solutions",
    punchline:
      "Build ERP systems that automate multi‑department operations under a single, actionable dashboard.",
    columns: [
      {
        heading: "Modules We Develop",
        bullets: [
          "HRMS (Payroll, Attendance, Appraisal).",
          "CRM for leads, sales & client management.",
          "Inventory + Purchase + Vendor management.",
          "Production & job / project tracking.",
          "Finance & accounting workflows.",
          "Sales & delivery with invoice automation.",
        ],
      },
      {
        heading: "Technologies",
        bullets: [
          "Node.js and Python for scalable backends.",
          ".NET Core for enterprise‑grade applications.",
          "Firebase, SQL, PostgreSQL for data storage.",
          "REST APIs & microservices architectures.",
          "Power BI dashboards for analytics & reporting.",
        ],
      },
    ],
  },
];

function EngagementItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-slate-800 rounded-xl bg-slate-950/70 overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-left hover:bg-slate-900/70 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 text-xs font-semibold">
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
        className={`px-4 md:px-5 pb-3 md:pb-4 text-xs md:text-sm text-slate-300 transition-all duration-300 ${
          isOpen ? "max-h-32 md:max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {item.content}
      </div>
    </div>
  );
}

export default function Services() {
  const [openEngagementId, setOpenEngagementId] = useState(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-sky-500/40 blur-3xl rounded-full" />
        <div className="absolute top-56 -right-24 h-80 w-80 bg-indigo-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/15 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero / Intro */}
        <section className="pt-4 md:pt-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100 mb-3">
              Services & Practices
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
              Services engineered for{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                speed, creativity
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                scale
              </span>
              .
            </h1>
            <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl">
              Auribus IT brings together DevOps & Cloud engineering, AI‑powered
              content production, digital marketing and ERP automation to help
              brands grow faster and operate smarter.
            </p>
          </div>

          {/* Quick stats strip */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <div className="text-xl font-semibold text-sky-300">7+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Years building enterprise‑grade platforms
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <div className="text-xl font-semibold text-emerald-300">50+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Major projects delivered across domains
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <div className="text-xl font-semibold text-indigo-300">
                99.9%+
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Release success with automated controls
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <div className="text-xl font-semibold text-amber-300">
                up to 50%
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Cloud & ops cost optimization
              </div>
            </div>
          </div>
        </section>

       {/* Practices overview: DevOps, App Dev, Creative/Growth */}
<section className="mt-10 grid md:grid-cols-3 gap-5">
  {/* Practice 1: DevOps & Cloud */}
  <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
      Practice 1
    </p>
    <h2 className="text-lg sm:text-xl font-semibold mb-1">
      DevOps & Cloud Infrastructure
    </h2>
    <p className="text-xs sm:text-sm text-slate-300 mb-3">
      Design and operate modern delivery platforms: CI/CD, Kubernetes,
      Infrastructure as Code, security and observability for critical
      applications.
    </p>
    <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5">
      <li>• CI/CD automation & release management.</li>
      <li>• Kubernetes (AKS), containers & microservices.</li>
      <li>• Infrastructure as Code on Azure, AWS, GCP.</li>
      <li>• Security, compliance & governance automation.</li>
      <li>• Monitoring, logging & SRE practices.</li>
    </ul>
  </div>

  {/* NEW: MERN & React Native */}
  <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
      Practice 2
    </p>
    <h2 className="text-lg sm:text-xl font-semibold mb-1">
      MERN Stack & React Native
    </h2>
    <p className="text-xs sm:text-sm text-slate-300 mb-3">
      Build modern web and mobile applications using JavaScript end‑to‑end,
      integrated with robust APIs, CI/CD and cloud infrastructure.
    </p>
    <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5">
      <li>• MERN stack web apps (MongoDB, Express, React, Node.js).</li>
      <li>• REST APIs & microservices for scalable backends.</li>
      <li>• React Native apps for iOS & Android.</li>
      <li>• Auth, role‑based access and secure API integrations.</li>
      <li>• Integration with DevOps pipelines and observability.</li>
    </ul>
  </div>

  {/* Practice 3: AI / Marketing / ERP */}
  <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
      Practice 3
    </p>
    <h2 className="text-lg sm:text-xl font-semibold mb-1">
      AI Studio, Marketing & ERP Automation
    </h2>
    <p className="text-xs sm:text-sm text-slate-300 mb-3">
      Combine AI video production, digital marketing strategy and ERP
      systems to accelerate growth while automating operations.
    </p>
    <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5">
      <li>• AI video generation & cinematic content.</li>
      <li>• Digital marketing & performance campaigns.</li>
      <li>• Personal & corporate brand building.</li>
      <li>• ERP & business automation solutions.</li>
      <li>• Analytics dashboards & reporting.</li>
    </ul>
  </div>
</section>


        {/* Creative / Marketing / ERP sections */}
        <section
          id="creative-practice"
          className="mt-14 md:mt-18 space-y-8"
        >
          {creativeSections.map((block) => (
            <div
              key={block.id}
              className="relative rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6 lg:p-7 overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-400/10 opacity-70" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-200">
                    {block.label}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-1.5">
                  {block.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  {block.punchline}
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                  {block.columns.map((col) => (
                    <div
                      key={col.heading}
                      className="rounded-2xl bg-slate-950/80 border border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-200"
                    >
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                        {col.heading}
                      </p>
                      <ul className="space-y-1.5">
                        {col.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-5">
  {/* DevOps */}
  <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
      DevOps & Cloud
    </p>
    <h3 className="text-sm sm:text-base font-semibold mb-2">
      DevOps Engineering & SRE
    </h3>
    <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5">
      <li>• CI/CD pipelines & release automation.</li>
      <li>• Kubernetes, containers & microservices.</li>
      <li>• Infrastructure as Code on Azure / AWS / GCP.</li>
      <li>• Security, compliance & observability.</li>
    </ul>
  </div>

  {/* Web development */}
  <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
      Web development
    </p>
    <h3 className="text-sm sm:text-base font-semibold mb-2">
      Modern Web & Mobile Apps
    </h3>
    <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5">
      <li>• MERN Stack applications (MongoDB, Express, React, Node).</li>
      <li>• React Native apps for iOS & Android.</li>
      <li>• WordPress corporate & marketing websites.</li>
      <li>• API‑first architectures with secure integrations.</li>
    </ul>
  </div>

  {/* UI/UX & Video / Branding */}
  <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
      UI/UX & Creative
    </p>
    <h3 className="text-sm sm:text-base font-semibold mb-2">
      Branding, UI/UX & Video Design
    </h3>
    <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5">
      <li>• Logo & brand identity systems.</li>
      <li>• Marketing kits (brochures, banners, digital ads).</li>
      <li>• Product packaging & visual systems.</li>
      <li>• Top‑tier UI/UX for web & mobile.</li>
      <li>• Creative motion graphics & video design.</li>
    </ul>
  </div>
</section>


        {/* DevOps capabilities */}
        <section id="capabilities" className="mt-14 md:mt-18 space-y-8">
          <div className="mb-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              DevOps & Cloud Capabilities
            </p>
          </div>
          {capabilitySections.map((cap) => (
            <div
              key={cap.id}
              className="relative rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-400/10 opacity-70" />
              <div className="relative z-10 grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-8 items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-200">
                      {cap.tag}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-1">
                    {cap.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4">
                    {cap.subtitle}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 px-4 py-3 text-xs text-slate-200">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                      Impact snapshot
                    </p>
                    <div className="space-y-1 text-[11px] sm:text-xs">
                      {cap.metrics.map((m) => (
                        <p key={m} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>{m}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-3 text-[11px] text-slate-300">
                    <p className="mb-1 font-semibold text-slate-100">
                      Example outcomes
                    </p>
                    <ul className="space-y-0.5">
                      <li>
                        • Quarterly releases compressed to weekly without
                        increasing risk.
                      </li>
                      <li>
                        • Manual provisioning time reduced from weeks to hours
                        with IaC.
                      </li>
                      <li>
                        • Platform foundations ready for SOC 2 and ISO 27001
                        audits.
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-4 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 transition-colors">
                    Discuss this capability
                    <span className="ml-1 text-xs">↗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Engagement models + mini outcomes */}
        <section
          id="engagement"
          className="mt-16 md:mt-20 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Flexible engagement models to fit your journey
            </h2>
            <p className="text-sm text-slate-300 mb-4 max-w-xl">
              Start small with a focused PoC or partner on full‑scale platform
              and marketing modernization. Auribus IT adapts to your pace, your
              stack and your regulatory environment.
            </p>
            <div className="space-y-3">
              {engagementAccordion.map((item) => (
                <EngagementItem
                  key={item.id}
                  item={item}
                  isOpen={openEngagementId === item.id}
                  onToggle={() =>
                    setOpenEngagementId(
                      openEngagementId === item.id ? null : item.id
                    )
                  }
                />
              ))}
            </div>
          </div>

          <div id="outcomes" className="space-y-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-200">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                Typical outcomes
              </p>
              <ul className="space-y-1.5">
                <li>
                  • Release cycles reduced from quarterly to weekly (or faster)
                  with automated pipelines.
                </li>
                <li>
                  • 60% reduction in mean‑time‑to‑resolution via unified
                  monitoring and runbooks.
                </li>
                <li>
                  • 70% fewer critical security findings thanks to integrated
                  scanning and governance.
                </li>
                <li>
                  • 35%+ infrastructure footprint reduction through
                  containerization and autoscaling.
                </li>
                <li>
                  • Significant reduction in content production time and media
                  spend via AI video and paid media optimization.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-slate-950 to-emerald-500/15 p-4 text-xs text-slate-50 shadow-[0_18px_45px_rgba(56,189,248,0.25)]">
              <p className="font-semibold text-sm mb-1.5">
                Ready to scope your next initiative?
              </p>
              <p className="text-[11px] text-slate-100 mb-3">
                Share where you are today and where you want to be—Auribus IT
                will help you define a pragmatic roadmap and the right mix of
                engineering, AI and marketing services to get there.
              </p>
              <a
                href="/Contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950/90 px-4 py-1.5 text-[11px] font-semibold text-sky-100 border border-sky-400/60 hover:bg-slate-900 transition-colors"
              >
                Schedule a discovery call
                <span className="ml-1 text-xs">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Simple contact anchor text */}
        <section
          id="contact"
          className="mt-16 md:mt-20 border-t border-slate-800 pt-6 text-xs text-slate-400"
        >
          <p>
            Looking for a specific combination of services? Reach out at{" "}
            <span className="text-sky-300">contact@auribus-it.com</span> or use
            the contact form on the Contact page to design a tailored engagement.
          </p>
        </section>
      </div>
    </div>
  );
}
