// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const base =
    "text-xs sm:text-sm text-slate-300 hover:text-sky-300 transition-colors";
  const active =
    "text-xs sm:text-sm text-sky-300 border-b border-sky-400 pb-0.5 transition-colors";

  return (
    <header className="sticky top-0 z-30">
     <div className="backdrop-blur-xl bg-slate-950 border-b border-slate-800/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo + brand */}
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 flex items-center justify-center text-lg font-black shadow-lg shadow-sky-500/40">
                A
              </div>
              <div>
                <div className="text-[11px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
                  Auribus Tech
                </div>
                <div className="text-[10px] text-slate-500">
                  {/* DevOps & Cloud Infrastructure */}
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/" end className={({ isActive }) => (isActive ? active : base)}>
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? active : base)}
              >
                About Us
              </NavLink>
              {/* <NavLink
                to="/success-stories"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Success Stories
              </NavLink>
              <NavLink
                to="/technology-stack"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Technology Stack
              </NavLink> */}
              {/* <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Solutions
              </NavLink> */}

              <Link
                to="/Contact"
                className="ml-2 inline-flex items-center rounded-full border border-sky-500 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold text-sky-100 hover:bg-sky-500/20 hover:border-sky-400 transition-colors shadow-sm shadow-sky-500/30"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile (simple – you can expand later) */}
            <div className="md:hidden">
              {/* optional burger menu later */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
