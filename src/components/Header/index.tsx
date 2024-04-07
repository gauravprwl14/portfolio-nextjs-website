"use client";
import * as React from "react";
import { useState } from "react";

import MobileMenu from "./MobileMenu";

const menuItems = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Blogs",
  },
  {
    name: "Contact",
  },
];

const Header = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      {/* bg-white */}
      <nav className="px-2 lg:px-8 py-2 lg:py-6  fixed top-0 left-0 right-0 z-30 bg-white lg:bg-transparent">
        {/* container */}
        <div className="w-full mx-auto h-auto py-0 px-10 relative clear-both max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <div className="flex">
              <img src={"/img/logo.svg"}></img>
            </div>

            <div className="hidden lg:flex items-center w-auto justify-center">
              <div className="flex">
                <ul className="flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {menuItems.map((obj, index) => {
                    return (
                      <li key={index} className="flex justify-center flex-1">
                        {" "}
                        <a className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white w-max">
                          {" "}
                          {obj.name}{" "}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <MobileMenu isActive={toggle} onToggle={setToggle}></MobileMenu>
          </div>

          {toggle && (
            <div className="lg:hidden">
              <div className="flex">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {menuItems.map((obj, index) => {
                    return (
                      <li
                        key={index}
                        className="flex  border-b-2 border-gray-600"
                      >
                        {" "}
                        <a className="block py-2 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white w-max">
                          {" "}
                          {obj.name}{" "}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const Menu = () => {};

export default Header;
