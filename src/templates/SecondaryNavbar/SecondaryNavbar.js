"use client";

import React, { useEffect, useRef, useState } from "react";
import SecondaryMainMenu from "./SecondaryMainMenu";
import { subMenuItems } from "@/constants/SubMenuItems";
import SecondarySubMenu from "./SecondarySubMenu";

export default function SecondaryNavbar() {
  const catMenu = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const [isSubActive, setSubIsActive] = useState(false);
  const toggleSubClass = () => {
    setSubIsActive(!isActive);
  };
  const [secondaryItems, setSecondaryItems] = useState({
    label: subMenuItems[0].title,
    menu: subMenuItems[0].menu,
  });
  const toggleSub = ()=>{
    setSubIsActive(false);
  }
  //sub menu
  const subMenuRef = useRef();
  return (
    <nav  className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div  className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div
          className=" w-1/2 justify-between items-center  lg:flex lg:w-auto lg:order-0"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col lg:py-2 font-medium lg:flex-row lg:space-x-8">
            <li>
              <button
                onClick={toggleClass}
                id="mega-menu-button2"
                data-dropdown-toggle="mega-menu"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 lg:w-auto hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {secondaryItems?.label}
                <svg
                  className="ml-1 w-5 h-5 lg:w-4 lg:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div ref={catMenu}>
                <SecondaryMainMenu
                  setSecondaryItems={setSecondaryItems}
                  setIsActive={setIsActive}
                  isActive={isActive}
                  catMenu={catMenu}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center lg:order-1 " ref={subMenuRef}>
          <button
            onClick={toggleSubClass}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-1 ml-1 text-sm text-gray-500   lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <SecondarySubMenu
          isSubActive={isSubActive}
          secondaryItems={secondaryItems}
          toggleSubMenu={toggleSubMenu}
          toggleSub={toggleSub}
          subMenuRef={subMenuRef}
        />
      </div>
    </nav>
  );
}
