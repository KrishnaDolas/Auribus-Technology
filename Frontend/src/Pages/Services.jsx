// src/Services.jsx
import React, { useState } from "react";

// Tech logo URLs
const techLogos = {
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  gcp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  k8s: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
};

// MAIN SERVICES
const mainServices = [
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Cloud Infrastructure",
    description: "Automate deployments, scale with Kubernetes, secure your platforms.",
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
    description: "Fast, secure websites for corporate, marketing and e-commerce.",
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
    description: "Generate studio-quality videos and marketing content with AI.",
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
    description: "Scale brands with paid ads, organic SEO and influencer marketing.",
    features: [
      "Google Ads & Meta Ads campaigns",
      "Social media marketing strategy",
      "SEO & content marketing",
      "Influencer & creator partnerships",
      "Lead generation & sales funnels",
    ],
    metrics: ["3-5x ROI on ad spend", "Lead cost reduction by 40%"],
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
  { id: 1, title: "Consulting & Strategy", description: "Define your roadmap & stack." },
  { id: 2, title: "Implementation", description: "We build the solution end-to-end." },
  { id: 3, title: "Managed Services", description: "Ongoing support & optimization." },
  { id: 4, title: "Training & Enablement", description: "Upskill teams for long-term success." },
  { id: 5, title: "Proof of Concept", description: "Validate new solutions quickly." },
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

      <p className="text-xs sm:text-sm text-slate-400 mb-3">{service.description}</p>

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
            and automation—Auribus IT delivers modern solutions for fast-growing brands.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-sky-300">120+</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Projects delivered</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-emerald-300">7+</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Years experience</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-indigo-300">99.9%</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Uptime guarantee</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div className="text-base sm:text-lg font-semibold text-amber-300">6</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Core services</div>
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

        {/* BACKEND TECHNOLOGIES & TOOLS */}
<section className="mt-16">
  <h2 className="text-3xl font-semibold text-slate-100 text-center mb-4">
    Backend Technologies & Tools
  </h2>

  <p className="text-center text-slate-300 text-sm max-w-2xl mx-auto mb-12">
    We use modern, scalable, and secure backend technologies to deliver
    high-performance applications that power startups and enterprises.
  </p>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Node.js Stack */}
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-8" />
        <h3 className="text-lg font-semibold text-sky-300">Node.js & JavaScript Stack</h3>
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-8" />
        <h3 className="text-lg font-semibold text-sky-300">Python Backend</h3>
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="h-8" />
        <h3 className="text-lg font-semibold text-sky-300">PHP Frameworks</h3>
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="h-8" />
        <h3 className="text-lg font-semibold text-sky-300">Java & .NET</h3>
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="h-8" />
        <h3 className="text-lg font-semibold text-sky-300">Databases & Storage</h3>
      </div>
      <ul className="text-slate-300 text-sm space-y-1.5">
        <li>• MongoDB</li>
        <li>• MySQL / PostgreSQL</li>
        <li>• Redis</li>
        <li>• Firebase Firestore</li>
      </ul>
    </div>

    {/* DevOps */}
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-8" />
        <h3 className="text-lg font-semibold text-sky-300">Cloud & DevOps</h3>
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">How we work with you</h2>

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
                <p className="text-sm font-semibold text-slate-100 mb-1">{model.title}</p>
                <p className="text-xs text-slate-400">{model.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-14 md:mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Why Auribus IT?</h2>

            <div className="space-y-2 text-sm text-slate-300">
              <p>✓ <strong>End-to-end expertise.</strong> From DevOps to apps & automation.</p>
              <p>✓ <strong>Modern stack.</strong> Cloud, Kubernetes, MERN, AI & more.</p>
              <p>✓ <strong>Proven delivery.</strong> 7+ years, 120+ successful projects.</p>
              <p>✓ <strong>Knowledge transfer.</strong> We empower your teams long-term.</p>
              <p>✓ <strong>Flexible models.</strong> Consulting to full managed services.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-slate-950 to-emerald-500/15 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-widest text-slate-300 mb-3">
              Ready to get started?
            </p>

            <p className="text-sm text-slate-100 mb-4">
              Share your project requirements. Our team will design a solution tailored
              to your business goals.
            </p>

            <div className="space-y-2 text-xs text-slate-200">
              <p>
                📧{" "}
                <a href="mailto:contact@auribus-it.com" className="text-sky-300 hover:text-sky-200">
                  contact@auribus-it.com
                </a>
              </p>

              <p>
                📱{" "}
                <a href="tel:+91-XXXXXXXXXX" className="text-sky-300 hover:text-sky-200">
                  +91-XXXXXXXXXX
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
