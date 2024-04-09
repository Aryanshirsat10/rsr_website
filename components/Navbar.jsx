"use client";
import { useState } from "react";

const Navbar = () => {
  const menu = [
    {
      name: "Journey",
      to: "/journey",
    },
    {
      name: "Team",
      to: "/team",
    },
    {
      name: "Sponsors",
      to: "/sponsors",
    },
    {
      name: "Gallery",
      to: "/gallery",
    },
    {
      name: "Fund Us",
      to: "/fund",
    },
    {
      name: "Contact",
      to: "/#contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="px-5 py-2 fixed left-0 top-0 right-0 overflow-hidden bg-black z-50 shadow-2xl shadow-slate-900">
      {/* PC Navbar */}
      <div className="flex items-center justify-between w-full ">
        <div>
          <a href="/">
            <img src="/images/logo-white.png" alt="" className="w-36" />
          </a>
        </div>
        <div className="gap-7 px-5 mt-1 hidden md:flex items-center">
          {menu.map((item, index) => {
            return (
              <a
                href={item.to}
                key={index}
                className="text-white hover:text-mainRed text-xl font-normal cursor-pointer px-1 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </a>
            );
          })}
          <a href="https://kjsce.somaiya.edu/en">
            <img
              src="/images/somaiyaLogo1.jpg"
              alt="Somaiya Trust"
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="/images/somaiyaLogo2.jpg"
              alt="Somaiya Trust"
              className="w-16"
            />
          </a>
        </div>
        <div className="md:hidden mt-6">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <img src="/icons/cross.svg" alt="" />
            ) : (
              <img src="/icons/hamburger.svg" alt="" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showMenu && (
        <div className="md:hidden w-full p-2 h-screen md:h-auto shadow-2xl shadow-slate-900">
          <div className="flex flex-col gap-2">
            {menu.map((item, index) => {
              return (
                <button
                  className="flex items-center gap-5"
                  key={index}
                  onClick={toggleMenu}
                >
                  <a
                    href={item.to}
                    key={index}
                    className="text-purple text-3xl font-medium cursor-pointer py-2"
                  >
                    {item.name}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
