import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { isAdminLoggedIn, clearAdminKey } from "../utils/adminAuth";

const WHATSAPP_NUMBER = "94721000801"; // Sri Lanka format, NO +
const WHATSAPP_TEXT =
  "Hello! I would like to know about your home nursing services.";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-semibold transition ${
      isActive
        ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100"
        : "text-gray-700 hover:text-emerald-800 hover:bg-emerald-50"
    }`;

  function logoutAdmin() {
    clearAdminKey();
    window.location.hash = "#/admin/login";
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src="/images/logo.jpg"
            alt="Health Care Home Nursing Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-contain"
          />
          <div className="leading-tight min-w-0">
            <div className="font-extrabold tracking-tight text-gray-900 truncate">
              Health Care Home Nursing
            </div>
            <div className="text-xs font-semibold text-emerald-700 truncate">
              Reliable Elite Care
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/reviews" className={linkClass}>
            Reviews
          </NavLink>

          {/* Admin button */}
          {isAdminLoggedIn() ? (
            <button
              onClick={logoutAdmin}
              className="ml-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-bold text-white hover:bg-black"
            >
              Logout Admin
            </button>
          ) : (
            <NavLink
              to="/admin/login"
              className="ml-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50"
            >
              Admin
            </NavLink>
          )}

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3 py-2 text-sm font-bold text-white hover:bg-emerald-700"
          >
            WA
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/reviews"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Reviews
            </NavLink>

            {/* Mobile Admin */}
            {isAdminLoggedIn() ? (
              <button
                onClick={() => {
                  setOpen(false);
                  logoutAdmin();
                }}
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-bold text-white"
              >
                Logout Admin
              </button>
            ) : (
              <NavLink
                to="/admin/login"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-900"
              >
                Admin
              </NavLink>
            )}

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
