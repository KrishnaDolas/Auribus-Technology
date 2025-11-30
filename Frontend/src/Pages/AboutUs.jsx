// src/AboutUs.jsx
import React from "react";

const coreValues = [
  { icon: "⚡", title: "Excellence", description: "High‑quality, reliable solutions" },
  { icon: "🤝", title: "Partnership", description: "Long‑term, transparent relationships" },
  { icon: "🚀", title: "Innovation", description: "Modern development & DevOps practices" },
  { icon: "✓", title: "Integrity", description: "Honest, accountable engagement" },
  { icon: "📈", title: "Growth", description: "Continuous learning & capability" },
];

const teamAreas = [
  {
    icon: "🔧",
    area: "MERN Stack Development",
    stat: "40+ web applications built",
    software: "Real-time dashboards, e-commerce platforms, SaaS solutions"
  },
  {
    icon: "📱",
    area: "React Native Mobile Apps",
    stat: "30+ cross-platform apps",
    software: "iOS/Android apps, social networks, marketplace solutions"
  },
  {
    icon: "🌐",
    area: "WordPress & CMS Solutions",
    stat: "50+ websites deployed",
    software: "Corporate sites, blogs, content management systems"
  },
  {
    icon: "🔧",
    area: "DevOps Engineering",
    stat: "50+ Azure implementations",
    software: "CI/CD automation, release pipelines, GitOps workflows"
  },
  {
    icon: "📦",
    area: "Kubernetes & Containers",
    stat: "1000+ containers orchestrated",
    software: "Microservices platforms, scalable deployments, auto-healing"
  },
  {
    icon: "☁️",
    area: "Cloud Architecture",
    stat: "$50M+ infrastructure designed",
    software: "Multi-cloud solutions, disaster recovery, compliance"
  },
];

const testimonials = [
  {
    quote: "Built a complete e-commerce platform with MERN. Fast delivery, great architecture.",
    role: "E-Commerce Founder",
  },
  {
    quote: "Our mobile app went live in weeks with React Native expertise.",
    role: "Mobile Startup CEO",
  },
  {
    quote: "DevOps transformation reduced deployment times by 75%.",
    role: "Enterprise CTO",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 bg-sky-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/18 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero */}
        <section className="pt-10 md:pt-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              About Auribus IT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
              Full-stack development &{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                cloud infrastructure partner.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300/90 mb-4">
              7+ years building modern web & mobile apps, managing cloud platforms
              and delivering enterprise DevOps solutions for startups and Fortune 500s.
            </p>
            <ul className="space-y-1.5 text-sm text-slate-200">
              <li className="flex gap-2">
                <span>✓</span> MERN, React Native & WordPress expertise
              </li>
              <li className="flex gap-2">
                <span>✓</span> 120+ full-stack projects delivered
              </li>
              <li className="flex gap-2">
                <span>✓</span> End-to-end from design to DevOps & deployment
              </li>
            </ul>
          </div>

          {/* Mission / Vision card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-40 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 shadow-2xl space-y-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                  Mission
                </p>
                <p className="text-slate-100">
                  Deliver scalable, secure applications and DevOps platforms that
                  accelerate growth, reduce costs and unlock innovation.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                  Vision
                </p>
                <p className="text-slate-100">
                  Be the trusted partner for organizations transforming their
                  digital products and cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-14 md:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Our core values
          </h2>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center hover:border-sky-500/60 transition-colors"
              >
                <div className="text-2xl mb-2">{v.icon}</div>
                <p className="text-sm font-semibold text-slate-100 mb-1">
                  {v.title}
                </p>
                <p className="text-xs text-slate-400">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="mt-14 md:mt-16">
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold">
              What we deliver
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Complete solutions across web development, mobile apps, WordPress,
              cloud infrastructure and DevOps automation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamAreas.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-slate-100 mb-1">
                  {item.area}
                </p>
                <p className="text-xs text-slate-400 mb-2">{item.stat}</p>
                <p className="text-xs text-slate-300 border-t border-slate-700 pt-2">
                  {item.software}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-14 md:mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Why choose Auribus IT?
            </h2>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                • <strong>Full-stack capability:</strong> From frontend UI to backend
                APIs to cloud deployment—one trusted partner.
              </p>
              <p>
                • <strong>Modern tech stack:</strong> MERN, React Native, WordPress,
                Kubernetes, DevOps automation.
              </p>
              <p>
                • <strong>Proven delivery:</strong> 7+ years, 120+ projects, trusted by
                enterprises and startups.
              </p>
              <p>
                • <strong>Scalable solutions:</strong> Built for growth with security,
                performance and cost-efficiency.
              </p>
              <p>
                • <strong>Knowledge transfer:</strong> Your teams own and evolve the
                platform long‑term.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-slate-950 to-emerald-500/15 p-5 space-y-3">
            <p className="text-xs uppercase tracking-widest text-slate-300">
              What you get
            </p>
            <div className="space-y-2 text-sm text-slate-100">
              <p>
                <span className="text-emerald-400 font-semibold">40+</span> MERN web
                apps live in production
              </p>
              <p>
                <span className="text-sky-400 font-semibold">30+</span> React Native
                apps on iOS & Android
              </p>
              <p>
                <span className="text-indigo-400 font-semibold">50+</span> WordPress
                sites deployed
              </p>
              <p>
                <span className="text-amber-400 font-semibold">99.9%</span> platform
                uptime & reliability
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-14 md:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Trusted by product teams & enterprises
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
              >
                <p className="text-sm text-slate-100 mb-2">"{t.quote}"</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 md:mt-16 rounded-3xl border border-sky-500/50 bg-gradient-to-r from-sky-500/15 via-slate-900 to-indigo-500/15 p-5 sm:p-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Let's build or transform your platform
          </h2>
          <p className="text-sm text-slate-200 mb-4 max-w-2xl mx-auto">
            Whether you need a web app, mobile solution, WordPress site or complete
            cloud infrastructure—let's talk about your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-100">
            <a
              href="mailto:contact@auribus-it.com"
              className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200"
            >
              📧 contact@auribus-it.com
            </a>
            <span>•</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full bg-sky-500/20 px-3 py-1 border border-sky-400/60 text-sky-100 hover:bg-sky-500/30 transition-colors"
            >
              Schedule a call →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
