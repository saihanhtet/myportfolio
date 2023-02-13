import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const menuItems = [
    {
      menu: "Home",
      link: "/",
    },
    {
      menu: "About Me",
      link: "/about",
    },
    {
      menu: "Services",
      link: "/services",
    },
    {
      menu: "Education",
      link: "/education",
    },
    {
      menu: "Contact Me",
      link: "/contact",
    },
  ];
  const [active,setActive] = useState(0);
  const [url, setUrl] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-bg px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl logo font-semibold whitespace-nowrap dark:text-white">
            <span className="logo-gold s">S.</span> Han{" "}
            <span className="">Htet</span>
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            {menuItems.map((el, i) => (
              <li>
                <NavLink
                  to={el.link}
                  onClick={() => setActive(i + 1)}
                  key={i+1}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {el.menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button className="sub-btn ml-3">
          <FaHeart />
          <span>subscribe</span>
        </button>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => (open === true ? setOpen(false) : setOpen(true))}
          className="inline-flex items-center p-2 ml-0 text-xl text-white rounded-lg md:hidden hover:nav-bg focus:outline-none focus:ring-2 dark:nav-text dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <AiOutlineMenu />
        </button>
      </div>
      {open && (
        <div className="nav-down">
          <ul>
            <li>Home</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
