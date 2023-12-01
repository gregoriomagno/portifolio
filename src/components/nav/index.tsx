"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
// import { close, logo, menu } from "../assets";
// const navLinks = [
//   { navLinkId: "Home", scrollToId: "homeContainer" },
//   // { navLinkId: 'About', scrollToId: 'aboutContainer' },
//   { navLinkId: "Projetos", scrollToId: "portifolioContainer" },
//   // { navLinkId: 'Contact', scrollToId: 'contactContainer' },
// ];
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projetos",
    title: "Portfólio",
  },
  // {
  //   id: "product",
  //   title: "Product",
  // },
  // {
  //   id: "clients",
  //   title: "Clients",
  // },
];

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex z-50 p-6 justify-between items-center navbar 	sticky top-0  bg-opacity-75 backdrop-blur-lg

    ">
      {/* Logo */}
      <h1 className="text-3xl font-semibold text-white">
        {"< Gregorio Magno />"}
      </h1>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] text-white ${
              active === nav.title ? "border-b-2" : "none"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link
              activeClass="active"
              
              smooth
              spy
              to={nav.id}
              offset={-100}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          width={4}
          height={4}
          src={"/public/next.svg"}
          alt="menu"
          className="w-[28px] 	h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
