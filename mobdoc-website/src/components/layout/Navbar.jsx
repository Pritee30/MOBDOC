import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: "Home", path: "/home" },
    { label: "Services", path: "/services" },
    { label: "Courses", path: "/courses" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D0C]/95 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="MOBDOC Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950">
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/courses"
            className="rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-bold text-[#07110D] transition hover:bg-emerald-300"
          >
            Explore Courses
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-emerald-400 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Panel */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#080D0C] p-4 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "text-slate-300 hover:bg-emerald-400/10 hover:text-emerald-400"
                    }`
                  }
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/courses"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-emerald-400 px-4 py-3 text-center text-sm font-bold text-[#07110D] transition hover:bg-emerald-300"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
