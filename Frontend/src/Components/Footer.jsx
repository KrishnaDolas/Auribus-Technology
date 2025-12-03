// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left: brand + summary */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 flex items-center justify-center text-sm font-black shadow-md shadow-sky-500/40">
              A
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-100">
                Auribus Tech
              </p>
              <p className="text-[11px] text-slate-400">
                {/* CI/CD, Kubernetes, Infrastructure as Code, security & observability
                for modern enterprises. */}
              </p>
            </div>
          </div>

          {/* Right: contact + link */}
          <div className="flex flex-col items-start sm:items-end gap-2 text-[11px] text-slate-300">
            <div className="flex flex-col sm:items-end gap-0.5">
              <a
                href="mailto:support@auribustech.com"
                className="hover:text-blue-600 transition"
              >
                📧 support@auribustech.com
              </a>

              <a
                href="tel:+918149524655"
                className="hover:text-blue-600 transition"
              >
                📱 +91-8149524655
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/auribus-solutions-673657268"
              target="_blank"
              rel="noreferrer"
              className="text-sky-300 hover:text-sky-200 underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom nav + copyright */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="hover:text-sky-300">
              Home
            </Link>
            <Link to="/services" className="hover:text-sky-300">
              Services
            </Link>
            <Link to="/about" className="hover:text-sky-300">
              About Us
            </Link>
            {/* <Link to="/SuccessStories" className="hover:text-sky-300">
              Success Stories
            </Link>
            <Link to="/TechnologyStack" className="hover:text-sky-300">
              Technology Stack
            </Link>
            <Link to="/solutions" className="hover:text-sky-300">
              Solutions
            </Link> */}
            <Link to="/Contact" className="hover:text-sky-300">
              Contact Us
            </Link>
          </div>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Auribus IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
