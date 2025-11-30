import React from "react";

// Emoji-based Tech Icons
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
    quote: "Their DevOps expertise drastically improved our release quality.",
    role: "Fortune 500 Client",
  },
  {
    quote: "A knowledgeable team that truly partners with your engineering org.",
    role: "CTO",
  },
  {
    quote: "Exceptional advisory support during cloud migration.",
    role: "Tech Director",
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background Lighting */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-5 h-96 w-96 bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute top-52 right-10 h-96 w-96 bg-emerald-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 py-14">
        {/* Header Section */}
        <section className="text-center mb-12">
          <span className="px-4 py-1 text-xs bg-sky-600/20 border border-sky-500/40 rounded-full">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Real{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Transformations
            </span>{" "}
            Delivered.
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Proven case studies across DevOps, Cloud, Full-Stack, Mobile, and CMS development.
          </p>
        </section>

        {/* 👉 FEATURED CASE STUDY */}
        <section className="mb-16">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/60 p-8 shadow-xl hover:shadow-sky-700/20 transition">
            <h2 className="text-xl font-semibold">Featured Case Study ⭐</h2>
            <p className="text-slate-300 mt-2">
              A complete transformation of a retail startup—from outdated monolithic backend to a fully automated microservice architecture on Azure.
            </p>

            <div className="flex items-center gap-4 text-sm mt-4">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                ⚓ Kubernetes
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                🧱 Terraform
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                🐳 Docker
              </span>
            </div>
          </div>
        </section>

        {/* 👉 SUCCESS STORIES GRID */}
        <section className="grid md:grid-cols-2 gap-6">
          {stories.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl hover:border-sky-500/40 hover:scale-[1.01] transition"
            >
              <p className="text-xs text-slate-400 mb-1">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{item.challenge}</p>

              <p className="text-xs uppercase text-slate-400 mt-4">Outcome</p>
              <p className="text-sm text-slate-200">{item.outcome}</p>

              <div className="flex gap-4 mt-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex flex-col text-center items-center"
                  >
                    <div className="text-2xl">{techIcons[tech]}</div>
                    <p className="text-[10px] text-slate-400">{tech}</p>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 👉 TECHNOLOGIES WE USE */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {Object.keys(techIcons).map((tech) => (
              <div
                key={tech}
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 flex items-center gap-2 text-sm hover:border-sky-500/40 transition"
              >
                <span className="text-xl">{techIcons[tech]}</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 👉 OUR PROCESS */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Process</h2>
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

        {/* 👉 TESTIMONIALS */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-6">What Clients Say</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 hover:border-sky-500/40 transition"
              >
                <p className="text-slate-100 mb-2 text-sm">“{t.quote}”</p>
                <p className="text-[11px] text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 👉 CTA SECTION */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">Let’s Build Your Success Story 🚀</h2>
          <p className="text-slate-300 mb-6">
            Whether it's Cloud, DevOps, MERN, React Native, or WordPress — we deliver results.
          </p>
          <button className="px-6 py-3 bg-sky-600 hover:bg-sky-500 rounded-xl font-semibold transition shadow-lg">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}
