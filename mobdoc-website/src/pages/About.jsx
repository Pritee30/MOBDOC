import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faGraduationCap,
  faScrewdriverWrench,
  faBullseye,
  faEye,
  faHandshake,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const values = [
  {
    icon: faScrewdriverWrench,
    title: "Practical Learning",
    description:
      "Learn mobile repairing through hands-on practice, technical guidance, and real-world repair concepts.",
  },
  {
    icon: faGraduationCap,
    title: "Skill Development",
    description:
      "Build technical knowledge and practical skills to grow your confidence in mobile technology.",
  },
  {
    icon: faHandshake,
    title: "Customer Trust",
    description:
      "We believe in honest communication, reliable service, and building long-term relationships.",
  },
];

const highlights = [
  "Practical, skill-focused training",
  "Mobile repair and troubleshooting",
  "Learning-oriented technical guidance",
  "Customer-focused repair services",
];

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              About MOBDOC
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Repair Technology.
              <span className="block text-emerald-400">
                Build Your Skills.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              MOBDOC brings mobile repairing services and technical training
              together. Our goal is to help customers with their repair needs
              while helping learners develop practical mobile technology skills.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Explore Our Services
              </Link>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Who We Are
          </p>

          <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
            A place for mobile repair solutions and technical learning
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            At MOBDOC, we bring together mobile repairing and practical
            technical education. Whether you need assistance with a mobile
            device or want to learn about mobile repair, we aim to provide
            useful guidance in a welcoming environment.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            We believe technical skills grow through curiosity, consistent
            practice, and learning how things work. Our focus is on making
            mobile technology and repair concepts easier to understand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-emerald-500/50">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="text-xl"
              />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Repair Services
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Support for mobile device repair and troubleshooting needs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-emerald-500/50 sm:mt-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Technical Academy
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Practical learning opportunities for aspiring mobile repair
              technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-8 lg:px-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <FontAwesomeIcon icon={faBullseye} className="text-xl" />
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Our Mission
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              To provide helpful mobile repairing services and accessible,
              practical technical learning that encourages people to develop
              useful skills and confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <FontAwesomeIcon icon={faEye} className="text-xl" />
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Our Vision
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              To build a trusted destination where customers find repair
              support and learners discover opportunities to grow through
              technical knowledge and hands-on experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            What Matters to Us
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            The Values Behind MOBDOC
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            The principles that guide our approach to service, training,
            and technical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 sm:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FontAwesomeIcon icon={value.icon} className="text-xl" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Why MOBDOC
            </p>

            <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              Focused on practical solutions and meaningful learning
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              We aim to combine a customer-focused approach with learning
              that helps aspiring technicians understand mobile repair
              concepts through practice and guidance.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mt-1 text-emerald-400"
                />

                <p className="text-sm leading-6 text-slate-300 sm:text-base">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let's Get Started
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Looking for mobile repair support or interested in learning
            mobile repairing? Get in touch with MOBDOC to explore your options.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Contact Us
            </Link>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

