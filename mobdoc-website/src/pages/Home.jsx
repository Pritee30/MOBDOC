import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function Home() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      // Timeline for smooth sequential animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Left side items stagger upward on load
      tl.from(".animate-hero-left", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
      })
      // 2. Right side card slides in from the right
      .from(
        ".animate-hero-right",
        {
          opacity: 0,
          x: 60,
          scale: 0.95,
          duration: 1,
          clearProps: "all", // Ensures normal hover effects work smoothly afterwards
        },
        "-=1.3" // Starts slightly before the text animation finishes
      );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[#080D0C]">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:py-32 lg:px-8">
        <div>
          {/* Badge */}
          <div className="animate-hero-left mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Mobile Repair & Technical Academy
          </div>

          {/* Heading */}
          <h2 className="animate-hero-left max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Repair Smarter.
            <span className="mt-2 block text-emerald-400">Learn Better.</span>
            Build Your Future.
          </h2>

          {/* Subtitle */}
          <p className="animate-hero-left mt-6 max-w-lg text-base leading-8 text-slate-400 md:text-lg">
            Professional mobile repairing services and practical technical
            training designed to turn skills into real-world opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="animate-hero-left mt-9 flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-[#07110D] transition hover:bg-emerald-300 shadow-lg shadow-emerald-400/20"
            >
              Explore Training →
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Our Services
            </Link>
          </div>

          {/* Stats / Highlights */}
          <div className="animate-hero-left mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <div>
              <p className="text-lg font-bold text-white">Hands-on</p>
              <p className="mt-1 text-sm text-slate-500">Practical Learning</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">Expert</p>
              <p className="mt-1 text-sm text-slate-500">Repair Support</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">Skill-first</p>
              <p className="mt-1 text-sm text-slate-500">Technical Training</p>
            </div>
          </div>
        </div>

        {/* Right Side Card Preview */}
        <div className="animate-hero-right relative">
          <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-[#101916] p-6 shadow-2xl sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">WELCOME TO</p>
                <h3 className="mt-1 text-2xl font-extrabold text-white">
                  MOBDOC
                </h3>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-2xl">
                ⚙
              </div>
            </div>

            <div className="my-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:border-emerald-400/40">
                <span className="text-3xl">🔧</span>
                <h4 className="mt-4 font-bold text-white">Repair Lab</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Diagnostics, maintenance and component-level repair.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/40">
                <span className="text-3xl">🎓</span>
                <h4 className="mt-4 font-bold text-white">Learn & Grow</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Practical training for aspiring mobile technicians.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
              <p className="text-sm font-semibold text-emerald-300">
                YOUR NEXT SKILL STARTS HERE
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Explore our courses, discover our services, and see what you can
                build with the right skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
