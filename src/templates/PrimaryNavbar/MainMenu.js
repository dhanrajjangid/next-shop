import { useCallback, useEffect, useRef, useState } from "react";
import PrimaryNavLink from "./PrimaryNavLink";
const MainMenu = (props) => {
  const mainMenuRef = props.mainMenuRef;
  const toggleMainMenu = useCallback(
    (e) => {
      if (mainMenuRef.current && !mainMenuRef.current.contains(e.target)) {
        props.setToggleMainMenu(false);
      }
    },
    [props.toggleMainNav]
  );

  return (
    <>
      <div
        className={`grid ${
          !props.toggleMainMenu && "hidden"
        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {["APPS", "THEMES", "AGENCIES", "FIND AN EXPERT", "STORIES"].map(
            (item, index) => (
              <li
                key={index}
                onClick={() => {
                  props.setToggleMainMenu(false);
                }}
              >
                <PrimaryNavLink text={item} />
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default MainMenu;
