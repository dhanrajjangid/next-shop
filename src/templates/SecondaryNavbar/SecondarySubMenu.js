import { useCallback, useEffect, useRef, useState } from "react";
const SecondarySubMenu = (props) => {
  const subMenuRef = props.subMenuRef;
  return (
    <>
      <div
        className={`grid ${
          !props.isSubActive && "hidden"
        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {props.secondaryItems?.menu?.map((item, index) => {
            return (
              <li key={index} onClick={props.toggleSub}>
                <a
                  href="#"
                  className="block sm:text-right py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default SecondarySubMenu;
