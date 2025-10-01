import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [toggler, setToggler] = useState(true);

  const navigationData = [
    { id: 2, name: "Mobile", path: "/mobiles" },
    { id: 3, name: "Laptop", path: "/laptop" },
    { id: 1, name: "Users", path: "/users" },
    { id: 4, name: "Posts", path: "/posts" },
    // { id: 5, name: "Blog", path: "/blog" },
  ];

  // map links dynamically
  const menuLinks = navigationData.map((route) => (
    <li key={route.id}>
      <NavLink
        to={route.path}
        className="transition duration-300 hover:text-accent"
      >
        {route.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <div className="relative flex items-center justify-between py-5">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold transition duration-300 hover:text-accent">
            <Link to="/">React Route</Link>
          </h1>
        </div>

        {/* Dropdown Menu (Mobile) */}
        <div
          onClick={() => setToggler(!toggler)}
          className="md:block lg:hidden"
        >
          {toggler ? (
            <>
              {/* Menu Icon */}
              <span className="togglerIcon">☰</span>
            </>
          ) : (
            <>
              {/* Close Icon */}
              <span className="togglerIcon">✕</span>
            </>
          )}

          <ul
            className={`absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md transition-all duration-500
    ${!toggler ? "opacity-100 top-16" : "opacity-0 -top-56"}`}
          >
            {navigationData.map((route) => (
              <li key={route.id}>
                <Link
                  to={route.path}
                  className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-5">{menuLinks}</ul>
        </nav>

        {/* Button */}
        <div className="lg:block hidden">
          <button className="btn btn-accent font-bold text-white">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
