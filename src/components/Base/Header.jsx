import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="bg-blue-500 px-2">
      <div className="mx-auto container">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="text-lg underline-offset-5 font-bold text-white" to="/">
              Para Formatter
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm text-white">
                <li>
                  <NavLink to="/" className={({isActive}) => (isActive)?"underline transition-all text-base underline-offset-5 font-bold":"transition-all"}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={({isActive}) => (isActive)?"underline transition-all text-base underline-offset-5 font-bold":"transition-all"}>
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className={({isActive}) => (isActive)?"underline transition-all text-base underline-offset-5 font-bold":"transition-all"}>
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/explore" className={({isActive}) => (isActive)?"underline transition-all text-base underline-offset-5 font-bold":"transition-all"}>
                    Explore
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <a
                className="px-5 py-2 text-sm font-medium text-blue-500 shadow bg-white"
                href="#"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="px-5 py-2 text-sm font-medium border-2 border-white text-white"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
