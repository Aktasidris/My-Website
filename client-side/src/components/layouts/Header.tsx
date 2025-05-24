import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeSwitcher from "../common/ThemeSwitcher";
import LangSwitcher from "../common/LangSwitcher";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { headerdata } from "../../data/headercomponent";
export default function Header() {
  const lang = useSelector((state: RootState) => state.app.lang);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur text-md sm:text-lg md:text-xl ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-[var(--color-primary)]">
        <div className="flex gap-4 items-center justify-center">
          <Link
            to="/"
            className="text-md sm:text-lg md:text-xl  font-semibold tracking-tight"
            children={"- IDRIS AKTAS -"}
          ></Link>
          <LangSwitcher />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden sm:flex gap-3 md:gap-6 text-sm font-medium"
          ref={menuRef}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            {headerdata[lang].navlinks.home}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            {headerdata[lang].navlinks.projects}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            {headerdata[lang].navlinks.about}
          </NavLink>
          <NavLink
            to="/cv"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            Cv
          </NavLink>
          <NavLink
            to="/testimonials"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            {headerdata[lang].navlinks.testimonials}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            {headerdata[lang].navlinks.contact}
          </NavLink>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="flex gap-2">
          <ThemeSwitcher />
          <button
            className="sm:hidden text-2xl text-[var(--color-primary)]"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <div className="flex gap-2 ">
                <HiX />
              </div>
            ) : (
              <div className="flex gap-2">
                <HiMenu />
              </div>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="sm:hidden bg-[var(--color-background)] px-4 pb-4 pt-2 flex flex-col gap-3 text-sm font-medium text-[var(--color-primary)] shadow-md "
        >
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="hover:text-[var(--color-accent)]"
          >
            {headerdata[lang].navlinks.home}
          </NavLink>
          <NavLink
            to="/projects"
            onClick={toggleMenu}
            className="hover:text-[var(--color-accent)]"
          >
            {headerdata[lang].navlinks.projects}
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className="hover:text-[var(--color-accent)]"
          >
            {headerdata[lang].navlinks.about}
          </NavLink>
          <NavLink
            to="/cv"
            onClick={toggleMenu}
            className="hover:text-[var(--color-accent)]"
          >
            Cv
          </NavLink>
          <NavLink
            to="/testimonials"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[var(--color-accent)] transition ${
                isActive ? " text-[var(--color-accent)]" : ""
              }`
            }
          >
            {headerdata[lang].navlinks.testimonials}
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-[var(--color-accent)]"
          >
            {headerdata[lang].navlinks.contact}
          </NavLink>
        </div>
      )}
    </header>
  );
}
