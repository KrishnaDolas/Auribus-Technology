// src/Services.jsx
import React, { useState } from "react";

// Tech logo URLs
const techLogos = {
  azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  gcp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  k8s: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  wordpress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
};

// Team / what-we-deliver sections
const teamAreas = [
  {
    icon: "🔧",
    area: "MERN Stack Development",
    stat: "40+ web applications built",
    software: "Real-time dashboards, e-commerce platforms, SaaS solutions",
  },
  {
    icon: "📱",
    area: "React Native Mobile Apps",
    stat: "30+ cross-platform apps",
    software: "iOS/Android apps, social networks, marketplace solutions",
  },
  {
    icon: "🌐",
    area: "WordPress & CMS Solutions",
    stat: "50+ websites deployed",
    software: "Corporate sites, blogs, content management systems",
  },
  {
    icon: "🔧",
    area: "DevOps Engineering",
    stat: "50+ Azure implementations",
    software: "CI/CD automation, release pipelines, GitOps workflows",
  },
  {
    icon: "📦",
    area: "Kubernetes & Containers",
    stat: "1000+ containers orchestrated",
    software: "Microservices platforms, scalable deployments, auto-healing",
  },
  {
    icon: "☁️",
    area: "Cloud Architecture",
    stat: "$50M+ infrastructure designed",
    software: "Multi-cloud solutions, disaster recovery, compliance",
  },
];

// Emoji-based Tech Icons for stories badges
const techIcons = {
  MERN: "🟩",
  "React Native": "📱",
  WordPress: "📝",
  "Azure DevOps": "☁️",
  GitHub: "🐙",
  Kubernetes: "⚓",
  Terraform: "🧱",
  Docker: "🐳",
  Grafana: "📊",
  SonarQube: "🔍",
};

const stories = [
  {
    id: 1,
    category: "CI/CD Automation",
    title: "Enterprise Pipeline Modernization",
    challenge:
      "Slow, manual releases affected delivery speed and system stability.",
    technologies: ["Azure DevOps", "GitHub"],
    outcome: "Stable weekly releases with improved reliability.",
  },
  {
    id: 2,
    category: "Kubernetes",
    title: "AKS Cluster Deployment",
    challenge: "Scaling issues during high-traffic periods.",
    technologies: ["Kubernetes"],
    outcome: "High availability with reduced infra cost.",
  },
  {
    id: 3,
    category: "Containerization",
    title: "Microservices Migration",
    challenge: "Legacy monolithic structure slowed deployments.",
    technologies: ["Docker", "Kubernetes"],
    outcome: "Scalable microservices with 40% performance boost.",
  },
  {
    id: 4,
    category: "Full Stack",
    title: "MERN Marketplace Platform",
    challenge: "Client needed a scalable eCommerce marketplace.",
    technologies: ["MERN"],
    outcome: "5000+ active users within 3 months.",
  },
  {
    id: 5,
    category: "Mobile App",
    title: "Attendance App for Schools",
    challenge: "Manual attendance was time-consuming.",
    technologies: ["React Native"],
    outcome: "Automated attendance with camera + geotagging.",
  },
  {
    id: 6,
    category: "CMS Development",
    title: "WordPress SEO-Optimized Website",
    challenge: "Low ranking and slow performance.",
    technologies: ["WordPress"],
    outcome: "Ranked on Page 1 within 40 days.",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "Our MERN-based platform was launched on time with a clean, scalable architecture.",
    role: "Product Founder · SaaS",
  },
  {
    quote:
      "The React Native app experience feels polished and truly production-ready.",
    role: "Head of Engineering · Mobility",
  },
  {
    quote:
      "Our WordPress site, SEO and campaigns now work together as a single growth engine.",
    role: "Marketing Lead · D2C Brand",
  },
];

// Logo marquee rows
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
      <div
        className={`flex gap-8 min-w-max ${
          reverse ? "marquee-row-reverse" : "marquee-row"
        }`}
      >
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

// MAIN SERVICES
const mainServices = [
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Automate deployments, scale with Kubernetes, secure your platforms.",
    features: [
      "CI/CD pipelines (Azure DevOps, GitHub Actions, Jenkins)",
      "Kubernetes & container orchestration (AKS)",
      "Infrastructure as Code (Terraform, ARM)",
      "Security & compliance automation",
      "Monitoring & observability (Prometheus, Grafana)",
    ],
    techs: [
      techLogos.azure,
      techLogos.aws,
      techLogos.gcp,
      techLogos.docker,
      techLogos.k8s,
      techLogos.terraform,
    ],
    metrics: ["60–80% faster deployments", "99.9%+ release success"],
  },
  {
    id: "app-dev",
    icon: "💻",
    title: "MERN Stack & React Native",
    description: "Build modern web and mobile apps with JavaScript end-to-end.",
    features: [
      "Full-stack MERN applications (MongoDB, Express, React, Node.js)",
      "REST APIs & microservices",
      "React Native apps for iOS & Android",
      "Real-time dashboards & SaaS platforms",
      "Integrated CI/CD & cloud deployment",
    ],
    techs: [techLogos.react, techLogos.nodejs, techLogos.mongodb],
    metrics: ["40+ web apps delivered", "30+ mobile apps live"],
  },
  {
    id: "wordpress",
    icon: "🌐",
    title: "WordPress & Static Sites",
    description:
      "Fast, secure websites for corporate, marketing and e-commerce.",
    features: [
      "WordPress sites with custom themes",
      "E-commerce integrations (WooCommerce)",
      "Performance optimization & CDN",
      "SEO & mobile-first design",
      "Automated backups & security hardening",
    ],
    techs: [techLogos.wordpress],
    metrics: ["50+ WordPress sites", "All mobile-optimized"],
  },
  {
    id: "content",
    icon: "🎬",
    title: "AI Video & Content Creation",
    description:
      "Generate studio-quality videos and marketing content with AI.",
    features: [
      "AI video generation (Veo 3, Runway Gen-3)",
      "Brand storytelling & explainer videos",
      "Social media content & shorts",
      "AI voiceovers & lip-sync avatars",
      "Content calendar strategy",
    ],
    metrics: ["50% faster content production", "70% lower video costs"],
  },
  {
    id: "marketing",
    icon: "📊",
    title: "Digital Marketing & Growth",
    description:
      "Scale brands with paid ads, organic SEO and influencer marketing.",
    features: [
      "Google Ads & Meta Ads campaigns",
      "Social media marketing strategy",
      "SEO & content marketing",
      "Influencer & creator partnerships",
      "Lead generation & sales funnels",
    ],
    metrics: ["3–5x ROI on ad spend", "Lead cost reduction by 40%"],
  },
  {
    id: "erp",
    icon: "📦",
    title: "ERP & Business Automation",
    description: "Automate multi-department operations under one dashboard.",
    features: [
      "HRMS (Payroll, Attendance, Appraisal)",
      "CRM for leads & sales management",
      "Inventory & purchase management",
      "Finance & accounting workflows",
      "Real-time reporting & Power BI dashboards",
    ],
    metrics: ["100+ hours/month saved", "Single source of truth"],
  },
];

// ENGAGEMENT MODELS
const engagementModels = [
  {
    id: 1,
    title: "Consulting & Strategy",
    description: "Define your roadmap & stack.",
  },
  {
    id: 2,
    title: "Implementation",
    description: "We build the solution end-to-end.",
  },
  {
    id: 3,
    title: "Managed Services",
    description: "Ongoing support & optimization.",
  },
  {
    id: 4,
    title: "Training & Enablement",
    description: "Upskill teams for long-term success.",
  },
  {
    id: 5,
    title: "Proof of Concept",
    description: "Validate new solutions quickly.",
  },
];

// SERVICE CARD COMPONENT
function ServiceCard({ service }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 hover:border-sky-500/60 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl">{service.icon}</div>

        {service.techs && (
          <div className="flex gap-1.5">
            {service.techs.map((logo) => (
              <img
                key={logo}
                src={logo}
                alt="tech"
                className="h-5 w-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        )}
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-1.5">
        {service.title}
      </h3>

      <p className="text-xs sm:text-sm text-slate-400 mb-3">
        {service.description}
      </p>

      <ul className="space-y-1 mb-4 text-xs text-slate-300">
        {service.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1 h-1 w-1 rounded-full bg-sky-400 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {service.metrics && (
        <div className="rounded-2xl bg-sky-500/10 border border-sky-500/30 px-3 py-2 text-[11px] text-sky-200">
          <p className="font-semibold mb-1">Typical outcomes:</p>
          <p>{service.metrics.join(" • ")}</p>
        </div>
      )}
    </div>
  );
}

// MAIN COMPONENT
export default function Services() {
  const [expandedModel, setExpandedModel] = useState(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-sky-500/40 blur-3xl rounded-full" />
        <div className="absolute top-56 -right-24 h-80 w-80 bg-indigo-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/15 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* HERO SECTION */}
        <section className="pt-10 md:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100 mb-3">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            Services
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
            Services for{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              modern teams.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300/90 mb-6 max-w-2xl">
            From DevOps to cloud infrastructure, web/mobile development, content
            and automation—Auribus Tech delivers modern solutions for
            fast-growing brands.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-sky-300">
                120+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Projects delivered
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-emerald-300">
                7+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Years experience
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-indigo-300">
                99.9%
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Uptime guarantee
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-amber-300">
                6
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Core services
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="mt-12 md:mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Logo carousel */}
        <section className="mt-10 space-y-4">
          <p className="text-xs sm:text-sm text-slate-400 mb-1">
            Hover on the rows to pause and inspect individual technologies.
          </p>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <LogoMarqueeRow logos={logoRows[0]} />
            <div className="mt-1 border-t border-slate-800/70" />
            <LogoMarqueeRow logos={logoRows[1]} reverse />
          </div>
        </section>

        {/* BACKEND TECHNOLOGIES & TOOLS */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-100 text-center mb-4">
            Backend Technologies & Tools
          </h2>

          <p className="text-center text-slate-300 text-sm max-w-2xl mx-auto mb-12">
            We use modern, scalable, and secure backend technologies to deliver
            high-performance applications that power startups and enterprises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Node.js Stack */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="h-8"
                />
                <h3 className="text-lg font-semibold text-sky-300">
                  Node.js & JavaScript Stack
                </h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• NestJS</li>
                <li>• REST APIs & WebSockets</li>
              </ul>
            </div>

            {/* Python */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="h-8"
                />
                <h3 className="text-lg font-semibold text-sky-300">
                  Python Backend
                </h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>• Django</li>
                <li>• Flask</li>
                <li>• FastAPI</li>
              </ul>
            </div>

            {/* PHP */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  className="h-8"
                />
                <h3 className="text-lg font-semibold text-sky-300">
                  PHP Frameworks
                </h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>• Laravel</li>
                <li>• CodeIgniter</li>
                <li>• Core PHP</li>
              </ul>
            </div>

            {/* Java & .NET */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  className="h-8"
                />
                <h3 className="text-lg font-semibold text-sky-300">
                  Java & .NET
                </h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>• Java Spring Boot</li>
                <li>• .NET Core / MVC</li>
                <li>• Microservices Architecture</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  className="h-8"
                />
                <h3 className="text-lg font-semibold text-sky-300">
                  Databases & Storage
                </h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>• MongoDB</li>
                <li>• MySQL / PostgreSQL</li>
                <li>• Redis</li>
                <li>• Firebase Firestore</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  className="h-8"
                />
                <h3 className="text-lg font-semibold text-sky-300">
                  Cloud & DevOps
                </h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>• AWS / Azure / GCP</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD (GitHub Actions, Jenkins)</li>
                <li>• Nginx / Apache</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT MODELS */}
        <section className="mt-14 md:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            How we work with you
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {engagementModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setExpandedModel(model.id)}
                className={`rounded-2xl border p-4 text-center transition-all duration-300 ${
                  expandedModel === model.id
                    ? "border-sky-500/60 bg-sky-500/10"
                    : "border-slate-800 bg-slate-950/80 hover:border-slate-600"
                }`}
              >
                <p className="text-sm font-semibold text-slate-100 mb-1">
                  {model.title}
                </p>
                <p className="text-xs text-slate-400">{model.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-14 md:mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Why Auribus Tech?
            </h2>

            <div className="space-y-2 text-sm text-slate-300">
              <p>
                ✓ <strong>End-to-end expertise.</strong> From DevOps to apps &
                automation.
              </p>
              <p>
                ✓ <strong>Modern stack.</strong> Cloud, Kubernetes, MERN, AI &
                more.
              </p>
              <p>
                ✓ <strong>Proven delivery.</strong> 7+ years, 120+ successful
                projects.
              </p>
              <p>
                ✓ <strong>Knowledge transfer.</strong> We empower your teams
                long-term.
              </p>
              <p>
                ✓ <strong>Flexible models.</strong> Consulting to full managed
                services.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-slate-950 to-emerald-500/15 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-widest text-slate-300 mb-3">
              Ready to get started?
            </p>

            <p className="text-sm text-slate-100 mb-4">
              Share your project requirements. Our team will design a solution
              tailored to your business goals.
            </p>

            <div className="space-y-2 text-xs text-slate-200">
              <p>
                📧{" "}
                <a
                  href="mailto:support@auribustech.com"
                  className="text-sky-300 hover:text-sky-200"
                >
                  support@auribustech.com
                </a>
              </p>

              <p>
                📱{" "}
                <a
                  href="tel:+91-8149524655"
                  className="text-sky-300 hover:text-sky-200"
                >
                  +91-8149524655
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1. Discovery", emoji: "🔍" },
              { step: "2. Planning", emoji: "📘" },
              { step: "3. Development", emoji: "⚙️" },
              { step: "4. Deployment", emoji: "🚀" },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-xl bg-slate-900 border border-slate-800 p-5 text-center hover:border-sky-500/40 transition"
              >
                <div className="text-3xl">{p.emoji}</div>
                <p className="mt-2 text-sm">{p.step}</p>
              </div>
            ))}
          </div>
        </section>

      {/* INDUSTRIES WE SERVE */}
<section className="mt-14 md:mt-16">
  <div className="mb-5">
    <h2 className="text-xl sm:text-2xl font-semibold">
      Industries we serve
    </h2>
    <p className="text-sm text-slate-300 mt-1 max-w-2xl">
      Auribus Tech partners with digital-first startups and growing
      enterprises across multiple domains to ship reliable, scalable products.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors">
      <div className="text-2xl mb-2">🛒</div>
      <p className="text-sm font-semibold text-slate-100 mb-1">
        E‑commerce & Marketplaces
      </p>
      <p className="text-xs text-slate-400 mb-2">
        B2C stores, multi-vendor marketplaces and subscription platforms.
      </p>
      <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
        Cart flows, payments, catalog, inventory, analytics.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors">
      <div className="text-2xl mb-2">🏥</div>
      <p className="text-sm font-semibold text-slate-100 mb-1">
        Healthcare & Wellness
      </p>
      <p className="text-xs text-slate-400 mb-2">
        Patient-facing apps, portals and internal tooling for care teams.
      </p>
      <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
        Appointment systems, reports, secure data workflows.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors">
      <div className="text-2xl mb-2">🏫</div>
      <p className="text-sm font-semibold text-slate-100 mb-1">
        EdTech & Training
      </p>
      <p className="text-xs text-slate-400 mb-2">
        Learning platforms, assessment tools and mobile-first experiences.
      </p>
      <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
        Courses, progress tracking, live classes, integrations.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors">
      <div className="text-2xl mb-2">🏦</div>
      <p className="text-sm font-semibold text-slate-100 mb-1">
        FinTech & SaaS Products
      </p>
      <p className="text-xs text-slate-400 mb-2">
        Dashboards, subscription products and workflow-heavy web apps.
      </p>
      <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
        Billing, reporting, role-based access, audit trails.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors">
      <div className="text-2xl mb-2">🏭</div>
      <p className="text-sm font-semibold text-slate-100 mb-1">
        Manufacturing & Logistics
      </p>
      <p className="text-xs text-slate-400 mb-2">
        Operational dashboards, tracking solutions and internal portals.
      </p>
      <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
        Fleet tracking, inventory views, workflow automation.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors">
      <div className="text-2xl mb-2">📣</div>
      <p className="text-sm font-semibold text-slate-100 mb-1">
        Agencies & Creators
      </p>
      <p className="text-xs text-slate-400 mb-2">
        Marketing sites, campaign landing pages and content platforms.
      </p>
      <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
        SEO‑ready sites, performance-focused builds, easy content updates.
      </p>
    </div>
  </div>
</section>


        {/* TESTIMONIALS */}
        <section className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100">
              What clients say
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
              Real feedback from shipped products.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              From MERN platforms and React Native apps to WordPress and digital
              marketing, teams rely on Auribus Tech to deliver outcomes, not
              just code.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-5 pt-7 text-left hover:border-sky-500/50 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,47,73,0.8)] transition-all"
              >
                <div className="absolute -top-3 left-5 h-7 w-7 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center text-lg font-bold shadow-lg">
                  “
                </div>
                <p className="text-slate-100 mb-3 text-sm leading-relaxed">
                  {t.quote}
                </p>
                <div className="h-px w-10 bg-sky-500/60 mb-2" />
                <figcaption className="text-[11px] font-medium text-slate-400">
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Let’s Build Your Success Story 🚀
          </h2>
          <p className="text-slate-300 mb-6">
            Whether it's Cloud, DevOps, MERN, React Native, or WordPress — we
            deliver results.
          </p>
          <button className="px-6 py-3 bg-sky-600 hover:bg-sky-500 rounded-xl font-semibold transition shadow-lg">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}
