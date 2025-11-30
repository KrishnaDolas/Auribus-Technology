// src/Solutions.jsx
import React from "react";

const useCases = [
  {
    id: 1,
    label: "Modernize legacy delivery",
    title: "From manual releases to automated CI/CD",
    problem:
      "Releases are manual, risky and infrequent. Teams rely on scripts, shared folders and long change windows.",
    solutionPoints: [
      "Design end‑to‑end CI/CD pipelines using Azure DevOps or GitHub Actions with automated build, test and deployment stages.",
      "Implement Git branching strategies, pull request workflows and quality gates to standardize change flow.",
      "Adopt GitOps for environment promotion with auditable, version‑controlled releases.",
    ],
    impact:
      "Release cycles move from quarterly to weekly (or faster), deployment risk drops and teams can ship features with confidence.",
    tech: ["Azure DevOps", "GitHub Actions", "Octopus Deploy", "Jenkins"],
  },
  {
    id: 2,
    label: "Cloud migration & IaC",
    title: "Lift‑and‑shift to cloud‑native infrastructure as code",
    problem:
      "Applications run on aging on‑prem infrastructure with slow provisioning, inconsistent environments and high maintenance costs.",
    solutionPoints: [
      "Design target Azure / AWS architectures for multi‑environment workloads with clear security and networking patterns.",
      "Codify infrastructure using Terraform and ARM templates for consistent, repeatable provisioning.",
      "Implement automated environment creation for dev, QA, staging and production with configuration baked into code.",
    ],
    impact:
      "Provisioning time is cut from weeks to hours and cloud infrastructure spend is optimized by 40–50% through rightsizing and governance.",
    tech: ["Azure", "AWS", "Terraform", "ARM Templates", "Azure DevOps"],
  },
  {
    id: 3,
    label: "Kubernetes & microservices",
    title: "Scale applications on Kubernetes (AKS)",
    problem:
      "Monolithic applications are hard to scale and deploy. Outages during peak traffic impact customers and revenue.",
    solutionPoints: [
      "Containerize applications using Docker and design AKS clusters with autoscaling and multi‑AZ resilience.",
      "Create Helm charts and standardized deployment patterns for microservices and APIs.",
      "Introduce service mesh (Istio) for canary, blue‑green and traffic management between services.",
    ],
    impact:
      "Infrastructure footprint is reduced by ~35%, availability reaches 99.95% and the platform self‑heals under load spikes.",
    tech: ["Docker", "Kubernetes (AKS)", "Helm", "Istio"],
  },
  {
    id: 4,
    label: "Security & compliance automation",
    title: "Embed security and compliance into your pipelines",
    problem:
      "Security is handled late in the cycle. Vulnerabilities and misconfigurations are caught right before (or after) production.",
    solutionPoints: [
      "Enable GitHub Advanced Security and SonarQube for code, secrets and dependency scanning in CI.",
      "Implement policy‑as‑code and RBAC across cloud platforms and tooling to enforce least privilege.",
      "Centralize secrets management using Azure Key Vault and automate rotation for sensitive credentials.",
    ],
    impact:
      "Critical vulnerabilities are reduced by ~70%, and platforms are aligned with SOC 2 / ISO 27001 controls via automated checks.",
    tech: ["GHAS", "SonarQube", "Azure Key Vault", "Azure Policy"],
  },
  {
    id: 5,
    label: "Observability & reliability",
    title: "Unified monitoring and faster incident response",
    problem:
      "Alerts are noisy and disconnected. Teams spend hours piecing together logs and metrics to understand incidents.",
    solutionPoints: [
      "Implement Azure Monitor, Application Insights and Log Analytics for cloud workloads and applications.",
      "Deploy Prometheus, Grafana and ELK for metrics, dashboards and centralized logging across environments.",
      "Define SLOs/SLAs, intelligent alerting and runbooks that guide on‑call engineers from alert to remediation.",
    ],
    impact:
      "Mean‑time‑to‑resolution drops by 60% and 95% of incidents are detected proactively with clear visibility.",
    tech: ["Azure Monitor", "App Insights", "Prometheus", "Grafana", "ELK"],
  },
  {
    id: 6,
    label: "Org‑wide DevOps transformation",
    title: "From siloed teams to a DevOps operating model",
    problem:
      "Development, operations and security work in silos. Processes are inconsistent and there is no single delivery model.",
    solutionPoints: [
      "Define a target DevOps operating model with roles, responsibilities and shared practices.",
      "Roll out standardized workflows, templates and tooling across teams via pilots and phased adoption.",
      "Provide training, coaching and playbooks to embed new ways of working in day‑to‑day delivery.",
    ],
    impact:
      "Release success rates exceed 99.9%, collaboration improves and teams have a clear, repeatable delivery model.",
    tech: ["Azure DevOps", "GitHub", "Scrum", "Agile Coaching"],
  },
];

const quickCards = [
  {
    title: "Who we help",
    bullets: [
      "Enterprises modernizing legacy on‑prem delivery and infrastructure.",
      "High‑growth product companies scaling on Azure, AWS or GCP.",
      "Teams preparing for SOC 2, ISO 27001 or industry‑specific audits.",
    ],
  },
  {
    title: "Where we start",
    bullets: [
      "Current‑state assessment of pipelines, infrastructure and operations.",
      "Prioritized roadmap of initiatives with realistic timelines.",
      "Quick‑win recommendations you can implement immediately.",
    ],
  },
  {
    title: "How we engage",
    bullets: [
      "Short PoCs to validate tools and patterns before wider rollout.",
      "Project‑based implementation or ongoing managed services.",
      "Structured enablement so your teams can own and evolve the platform.",
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-80 w-80 bg-sky-500/35 blur-3xl rounded-full" />
        <div className="absolute top-48 right-[-6rem] h-80 w-80 bg-indigo-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/16 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 pb-20">
        {/* Intro */}
        <section className="pt-2 md:pt-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100 mb-3">
            Solutions & Use Cases
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
            Practical{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              DevOps & Cloud solutions
            </span>{" "}
            for real‑world challenges.
          </h1>
          <p className="text-sm sm:text-base text-slate-300/90 mb-3">
            Auribus IT translates DevOps principles into concrete, measurable
            improvements across delivery speed, reliability, security and cloud
            economics—tailored to where your organization is today.
          </p>
          <p className="text-sm sm:text-base text-slate-300/90">
            Explore how typical clients move from manual deployments, fragile
            infrastructure and siloed teams to automated pipelines, cloud‑native
            platforms and a mature DevOps operating model.
          </p>
        </section>

        {/* Quick context cards */}
        <section className="mt-10 grid md:grid-cols-3 gap-4">
          {quickCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 text-xs sm:text-sm text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.85)]"
            >
              <p className="font-semibold text-slate-100 mb-2">{card.title}</p>
              <ul className="space-y-1.5">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Use-case sections */}
        <section className="mt-14 md:mt-18 space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="relative rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-400/10 opacity-70" />
              <div className="relative z-10 grid md:grid-cols-[1.4fr_1.1fr] gap-6 md:gap-8 items-start">
                {/* Left: narrative */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-200">
                      {useCase.label}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Use case {useCase.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    {useCase.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mb-3">
                    <span className="font-semibold text-slate-100">The challenge: </span>
                    {useCase.problem}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                    How Auribus IT helps
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                    {useCase.solutionPoints.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: impact + tech */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                      Impact
                    </p>
                    <p className="text-slate-100">{useCase.impact}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                      Typical toolchain
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tech.map((t) => (
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
                      Want to see a similar outcome for your organization?
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 transition-colors"
                    >
                      Discuss this use case
                    </a>
                  </div>
                </div>
              </div>

              {/* subtle index pill */}
              <div className="absolute -right-6 top-6 h-12 w-12 rounded-full border border-slate-700/80 bg-slate-950/80 flex items-center justify-center text-[11px] text-slate-500">
                #{index + 1}
              </div>
            </div>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-16 md:mt-20 rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/15 via-slate-950 to-emerald-500/15 p-5 sm:p-7 text-xs sm:text-sm text-slate-50 shadow-[0_20px_60px_rgba(56,189,248,0.28)]">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-100 mb-2">
                Not sure where to start?
              </p>
              <p className="text-sm sm:text-base mb-2">
                Share your current delivery, infrastructure and compliance
                challenges, and Auribus IT will map them to a tailored set of
                solutions—from quick wins to long‑term transformation.
              </p>
              <p>
                Many clients begin with a focused assessment or PoC to validate
                new architectures, pipelines or platforms before rolling them
                out more broadly.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950/90 px-4 py-2 text-[11px] font-semibold text-sky-100 border border-sky-400/70 hover:bg-slate-900 transition-colors"
              >
                Schedule a discovery session
                <span className="ml-1 text-xs">↗</span>
              </a>
              <p className="text-[11px] text-slate-300">
                Expect a practical, technical conversation—not a sales pitch.
                The goal is to understand your context and identify where DevOps
                and Cloud improvements will have the biggest impact.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
