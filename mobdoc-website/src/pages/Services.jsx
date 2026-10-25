import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: "01",
    title: "Screen Repair",
    description:
      "Assistance with damaged, cracked, or unresponsive mobile screens.",
    icon: "screen",
  },
  {
    id: 2,
    number: "02",
    title: "Battery Services",
    description:
      "Battery inspection and assistance with charging or battery performance issues.",
    icon: "battery",
  },
  {
    id: 3,
    number: "03",
    title: "Charging Issues",
    description:
      "Diagnosis of charging problems and inspection of charging ports.",
    icon: "charging",
  },
  {
    id: 4,
    number: "04",
    title: "Software Troubleshooting",
    description:
      "Help with supported software issues, device settings, and system-related problems.",
    icon: "software",
  },
  {
    id: 5,
    number: "05",
    title: "Hardware Diagnosis",
    description:
      "Inspection to help identify mobile hardware faults and possible repair solutions.",
    icon: "hardware",
  },
  {
    id: 6,
    number: "06",
    title: "General Mobile Repair",
    description:
      "Assistance with other mobile device problems, subject to inspection and repair availability.",
    icon: "repair",
  },
];

const supportedDevices = [
  {
    name: "Android Smartphones",
    description:
      "Mobile repair and troubleshooting services for supported Android devices.",
    label: "ANDROID",
  },
  {
    name: "Apple iPhones",
    description:
      "Mobile repair and troubleshooting services for supported Apple iPhone models.",
    label: "APPLE / iOS",
  },
];

function ServiceIcon({ type }) {
  const common = {
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (type) {
    case "screen":
      return (
        <svg {...common}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M9 5h6M10 18h4" />
        </svg>
      );

    case "battery":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="11" rx="2" />
          <path d="M20 10h2v5h-2M8 12h3m-1.5-1.5v3" />
        </svg>
      );

    case "charging":
      return (
        <svg {...common}>
          <path d="M8 3v5m8-5v5M6 8h12v3a6 6 0 0 1-6 6v4m-3-4h6" />
          <path d="m13 9-3 4h3l-2 3" />
        </svg>
      );

    case "software":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="m9 9-3 3 3 3m6-6 3 3-3 3m-2-7-2 8" />
        </svg>
      );

    case "hardware":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 2v5m6-5v5M9 17v5m6-5v5M2 9h5m-5 6h5m10-6h5m-5 6h5" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="M14 6 18 2l4 4-4 4" />
          <path d="m16 8-8 8m-2-2-4 4 4 4 4-4" />
          <path d="m12 4 8 8" />
        </svg>
      );
  }
}

function Services() {
  // References for section containers
  const heroRef = useRef(null);
  const devicesRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  // 1. Hero Section Animation (Runs automatically on load)
  useGSAP(
    () => {
      gsap.from(".animate-hero", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: heroRef },
  );

  // 2. Devices Cards Animation
  useGSAP(
    () => {
      gsap.from(".animate-device-card", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: devicesRef.current,
          start: "top 85%", // Triggers when top of section enters 85% of viewport
        },
      });
    },
    { scope: devicesRef },
  );

  // 3. Service Cards Animation (3D Flip + Staggered Uplift)
  // 3. Service Cards Animation (Clean 2D Uplift + Fade)
  useGSAP(
    () => {
      gsap.from(".animate-service-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "all", // 👈 THIS FIXES THE VISIBILITY ISSUE AFTER ANIMATING!
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 90%", // 👈 Triggers earlier so cards appear smoothly as soon as section enters screen
        },
      });
    },
    { scope: servicesRef },
  );

  // 4. Process Steps Animation
  useGSAP(
    () => {
      gsap.from(".animate-process-step", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: processRef },
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section ref={heroRef} className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="animate-hero inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            MOBDOC MOBILE CARE
          </span>

          <h1 className="animate-hero mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Reliable Care for Your{" "}
            <span className="text-emerald-400">Mobile Device</span>
          </h1>

          <p className="animate-hero mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            From everyday mobile issues to hardware diagnosis, MOBDOC provides
            mobile repair services for supported Android smartphones and Apple
            iPhones.
          </p>

          <a
            href="#our-services"
            className="animate-hero mt-8 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Explore Our Services
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Device Support
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              We Service Mobile Devices
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {supportedDevices.map((device) => (
              <article
                key={device.name}
                className="animate-device-card group flex items-start gap-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-emerald-500/50 sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <ServiceIcon type="screen" />
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-widest text-emerald-400">
                    {device.label}
                  </span>

                  <h3 className="mt-2 text-xl font-bold">{device.name}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {device.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section
        id="our-services"
        className="border-y border-slate-800 bg-slate-900/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              What We Do
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Our Mobile Repair Services
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Get help identifying and resolving common mobile device problems.
              Available repairs depend on the device model and the nature of the
              fault.
            </p>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <article
                key={service.id}
                className="animate-service-card group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-slate-950">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <span className="text-2xl font-bold text-slate-800 transition group-hover:text-emerald-500/30">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold">{service.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <a
                  href="#service-enquiry"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  Enquire About Service
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section ref={processRef} className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Simple Process
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Get Your Device Checked
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              A straightforward way to get started with your mobile repair
              enquiry.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Tell Us the Issue",
                description: "Explain the problem with your Android or iPhone.",
              },
              {
                number: "02",
                title: "Device Inspection",
                description:
                  "Discuss the device inspection and possible repair options.",
              },
              {
                number: "03",
                title: "Discuss the Repair",
                description:
                  "Confirm the available repair, estimated cost, and next steps.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="animate-process-step rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm font-bold text-emerald-400">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="service-enquiry"
        className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mx-auto max-w-5xl rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-10 text-center sm:px-10 sm:py-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
            <ServiceIcon type="repair" />
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            Need Help With Your Mobile?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Contact MOBDOC to discuss your device issue, repair availability,
            and service charges.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
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

export default Services;
