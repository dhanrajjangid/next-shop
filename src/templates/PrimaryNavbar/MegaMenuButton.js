import React, { useEffect, useRef, useState } from "react";
const MegaMenuButton = (props) => {
  return (
    <>
      <button
        onClick={props.setToggleMegaMenu}
        id="mega-menu-button"
        data-dropdown-toggle="mega-menu"
        className="flex justify-between text-sm font-normal text-white items-center py-2 pr-4 
        w-full text-gray-700 border-gray-100 
        lg:w-auto  lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        <span className="">{React.createElement(props.megaItem.icon)}</span>
        <span className="hidden lg:block ml-2">{props.megaItem.text}</span>
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
    </>
  );
};
export default MegaMenuButton;
