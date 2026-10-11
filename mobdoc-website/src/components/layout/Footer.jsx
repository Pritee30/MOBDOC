import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faLocation,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const courseLinks = [
  { name: "All Courses", path: "/courses" },
  { name: "Mobile Repairing", path: "/courses" },
  { name: "Advanced Training", path: "/courses" },
  { name: "Enquire Now", path: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: faInstagram,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: faFacebook,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/",
    icon: faYoutube,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-slate-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wide text-white">
                  MOB<span className="text-emerald-400">DOC</span>
                </h2>
                <p className="text-xs text-slate-400">Repair • Learn • Build</p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your trusted destination for professional mobile repairing
              services and practical technical training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Academy
            </h3>

            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+910000000000"
                  className="flex items-start gap-3 transition-colors hover:text-emerald-400"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xl text-emerald-400 transition-colors hover:text-white"
                  />
                  {/* <span className="text-emerald-400">☎</span> */}
                  <span>+91 7709815816</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-emerald-400"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-xl text-emerald-400 transition-colors hover:text-white"
                  />
                  {/* <span className="text-emerald-400">✉</span> */}
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>

              <li>
                <a
                href="https://www.google.com/maps/place/Mob+Doc+Mobile+Repair+%26+Training+Institute/@18.1627173,74.5872591,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc3a17f9fd122c7:0x112b4e5448b821d8!8m2!3d18.1627173!4d74.5872591!16s%2Fg%2F11f9j8h7h7?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-emerald-400"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-xl text-emerald-400 transition-colors hover:text-white"
                  />
                  {/* <span className="text-emerald-400">⌖</span> */}
                  <span>near VirShaiv Mangal Karyalay, Sahyog Society, Baramati, Maharashtra 413102</span>
                </a>
              </li>
            </ul>

            <h4 className="mb-3 mt-7 font-semibold text-white">Follow Us</h4>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-md font-bold text-slate-300 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500 hover:text-slate-950"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {currentYear} MOBDOC. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with <span className="text-emerald-400">♥</span> for
            technology and learning.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
