import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    id: "android",
    number: "01",
    title: "Android Mobile Repairing",
    subtitle: "Learn to understand, diagnose, and repair Android smartphones.",
    platform: "ANDROID",
    topics: [
      "Mobile hardware fundamentals",
      "Fault identification and troubleshooting",
      "Hardware and software repair concepts",
      "Practical mobile repair techniques",
    ],
  },
  {
    id: "apple",
    number: "02",
    title: "Apple iPhone Repairing",
    subtitle: "Develop mobile repair knowledge focused on Apple iPhone devices.",
    platform: "APPLE / iOS",
    topics: [
      "iPhone hardware fundamentals",
      "Device diagnosis and troubleshooting",
      "Hardware and software repair concepts",
      "Practical iPhone repair techniques",
    ],
  },
];

function Courses() { 
  const heroRef = useRef(null);
  const coursesRef = useRef(null);

  // 1. Hero Section Animation
  useGSAP(
    () => {
      gsap.from(".animate-course-hero", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });
    },
    { scope: heroRef }
  );

  // 2. Course Cards Animation (Fixed Left & Right Slide)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: coursesRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out", duration: 1, clearProps: "all" },
      });

      // Left card enters from slightly left
      tl.from(".animate-card-left", {
        opacity: 0,
        x: -35, // Safe value to prevent overflow clipping
      })
      // Right card enters from slightly right at the exact same time ("<")
      .from(".animate-card-right", {
        opacity: 0,
        x: 35,
      }, "<");
    },
    { scope: coursesRef }
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section ref={heroRef} className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="animate-course-hero inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            MOBDOC ACADEMY
          </span>

          <h1 className="animate-course-hero mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Master the Art of{" "}
            <span className="text-emerald-400">
              Mobile Repairing
            </span>
          </h1>

          <p className="animate-course-hero mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Build your mobile repairing skills with training
            focused on Android smartphones and Apple iPhones.
            Learn the fundamentals of diagnosis, troubleshooting,
            and repair techniques.
          </p>

          <a
            href="#our-courses"
            className="animate-course-hero mt-8 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Explore Our Courses
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Course Cards */}
      <section
        id="our-courses"
        className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Learn With MOBDOC
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Our Training Programs
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Choose the mobile repairing track that matches
              your learning goals.
            </p>
          </div>

          {/* Courses Grid */}
          <div ref={coursesRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <article
                key={course.id}
                className={`${
                  index === 0 ? "animate-card-left" : "animate-card-right"
                } group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20 sm:p-8`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      <rect
                        x="6"
                        y="2.5"
                        width="12"
                        height="19"
                        rx="2"
                      />
                      <path d="M10 18.5h4" />
                    </svg>
                  </div>

                  <span className="text-4xl font-bold text-slate-800 transition group-hover:text-emerald-500/30">
                    {course.number}
                  </span>
                </div>

                <span className="mt-6 text-xs font-semibold tracking-widest text-emerald-400">
                  {course.platform}
                </span>

                <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {course.subtitle}
                </p>

                {/* Learning Topics */}
                <div className="mt-6 border-t border-slate-800 pt-5">
                  <h4 className="mb-4 text-sm font-semibold text-slate-200">
                    Learning Areas
                  </h4>

                  <ul className="space-y-3">
                    {course.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#course-enquiry"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
                >
                  Enquire About This Course
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MOBDOC */}
      <section className="border-y border-slate-800 bg-slate-900/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Your Learning Journey
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Learn Skills. Build Confidence.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Understand mobile devices, develop troubleshooting
              skills, and learn about mobile repair practices
              through your chosen training program.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "Learn the Basics",
                description: "Understand mobile components and repair fundamentals.",
              },
              {
                title: "Understand Diagnosis",
                description: "Build knowledge of identifying device faults.",
              },
              {
                title: "Develop Practical Skills",
                description: "Learn repair techniques relevant to your course.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-6"
              >
                <span className="text-sm font-bold text-emerald-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section
        id="course-enquiry"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-4xl rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Contact MOBDOC to learn more about course content,
            available batches, fees, and admission details.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Contact MOBDOC
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Courses;