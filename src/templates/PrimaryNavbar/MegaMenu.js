import { useCallback, useEffect, useRef, useState } from "react";
import MegaMenuLink from "./MegaMenuLink";
import { NewsIcon, PlayoffIcon, PromptIcon, TrendsIcon } from "./MegaMenuIcons";
import { MegaMenuList } from "./MegaMenuList";
const MegaMenu = (props) => {
  const megaMenuRef = props.megaMenuRef;
  const toggleMegaMenu = useCallback(
    (e) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        props.setToggleMegaMenu(false);
      }
    },
    [props.toggleMegaNav]
  );
  return (
    <>
      <div
        id="mega-menu"
        className={`grid ${
          !props.toggleMegaMenu && "hidden"
        }  z-10 w-full bg-white border border-gray-100 shadow-md dark:border-gray-700 lg:  lg:w-auto lg:grid-cols-3 dark:bg-gray-700`}
      >
        <div className="p-2 text-gray-900  bg-white lg:  dark:text-white lg:col-span-2 dark:bg-gray-800">
          <ul>
            {MegaMenuList.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  props.setMegaItem(item);
                  props.setToggleMegaMenu(false);
                }}
              >
                <MegaMenuLink icon={item.icon} text={item.text} />
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5 px-5 bg-gray-50 lg:  lg:col-span-1 dark:bg-gray-700">
          <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
            Browse categories
          </h3>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Animation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Branding
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Illustration
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Print
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Product Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Web Design
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MegaMenu;
