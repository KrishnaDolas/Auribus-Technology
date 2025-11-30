// src/TechnologyStack.jsx
import React from "react";

const stackSections = [
  {
    title: "CI/CD Platforms",
    description:
      "Enterprise‑grade pipelines for automated build, test and deployment across multiple runtimes and environments.",
    items: ["Azure DevOps", "GitHub Actions", "Jenkins", "Octopus Deploy", "Bamboo"],
  },
  {
    title: "Cloud Platforms",
    description:
      "Multi‑cloud expertise to design resilient, secure and cost‑optimized infrastructures.",
    items: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Oracle Cloud"],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Declarative, repeatable infrastructure definitions to standardize environments across the SDLC.",
    items: ["Terraform", "ARM Templates", "YAML", "Ansible"],
  },
  {
    title: "Containers & Orchestration",
    description:
      "Cloud‑native runtimes and orchestration for scalable, self‑healing microservices platforms.",
    items: ["Docker", "Kubernetes (AKS)", "Helm", "Istio"],
  },
  {
    title: "Monitoring & Logging",
    description:
      "Unified observability across applications, infrastructure and user journeys.",
    items: ["Azure Monitor", "Application Insights", "Prometheus", "Grafana", "Elasticsearch", "Kibana"],
  },
  {
    title: "Security & Quality",
    description:
      "Security and quality embedded directly into pipelines and cloud governance.",
    items: ["GitHub Advanced Security", "SonarQube", "Azure Security Center", "Snyk"],
  },
  {
    title: "Scripting & Automation",
    description:
      "Custom automation and tooling to glue platforms together and accelerate operations.",
    items: ["Python", "PowerShell", "Bash", "Azure CLI", "TypeScript"],
  },
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
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
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
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Grafana",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    },
    {
      name: "Prometheus",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    },
    {
      name: "Linux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Bash",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
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


export default function TechnologyStack() {
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
            Technology Stack
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
            A modern{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              DevOps & Cloud toolchain
            </span>{" "}
            built for scale.
          </h1>
          <p className="text-sm sm:text-base text-slate-300/90 mb-3">
            Auribus IT works across leading CI/CD, cloud, container, security
            and observability platforms to design solutions that are modern,
            maintainable and enterprise‑ready.
          </p>
          <p className="text-sm sm:text-base text-slate-300/90">
            Below is a curated view of the technologies frequently used to
            deliver repeatable, high‑impact DevOps and cloud outcomes.
          </p>
        </section>

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

        {/* Stack sections */}
        <section className="mt-14 md:mt-18 grid md:grid-cols-2 gap-6">
          {stackSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                {section.title}
              </p>
              <p className="text-sm text-slate-100 mb-2">{section.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-16 md:mt-20 rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/15 via-slate-950 to-emerald-500/15 p-5 sm:p-7 text-xs sm:text-sm text-slate-50 shadow-[0_20px_60px_rgba(56,189,248,0.28)]">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-100 mb-2">
                Prefer a different stack?
              </p>
              <p className="mb-2">
                Auribus IT adapts to your existing investments—whether you are
                standardizing on Azure, AWS, GCP, GitHub, GitLab, Jenkins or a
                combination of platforms—while introducing best‑practice
                patterns for security, observability and automation.
              </p>
              <p>
                The goal is not to force a specific tool, but to create a
                coherent, reliable delivery platform around the technologies
                your teams already know and trust.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950/90 px-4 py-2 text-[11px] font-semibold text-sky-100 border border-sky-400/70 hover:bg-slate-900 transition-colors"
              >
                Discuss your current toolchain
                <span className="ml-1 text-xs">↗</span>
              </a>
              <p className="text-[11px] text-slate-300">
                Share what you use today and where you want to go. Together we
                can design a roadmap that balances standardization, innovation
                and practicality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
