"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MegaMenuList } from "./MegaMenuList";
import MobilePrimaryDropdown from "./MobilePrimaryDropdown";
import MegaMenuButton from "./MegaMenuButton";
import ButtonLink from "@/components/Buttons/ButtonLink";
import MainMenu from "./MainMenu";
import MegaMenu from "./MegaMenu";
import LoginButton from "@/components/Buttons/LoginButon";

const PrimaryNavbar = () => {
  //main menu
  const mainMenuRef = useRef();
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  //Mega menu
  const megaMenuRef = useRef();
  const [toggleMegaMenu, setToggleMegaMenu] = useState(false);
  //Mega menu selected
  const [megaItem, setMegaItem] = useState(MegaMenuList[0]);
  const updateMegaItem = (item) => {
    setMegaItem(item);
    setToggleMainMenu(false);
  };
  return (
    <header>
      <nav
        ref={mainMenuRef}
        className="bg-red-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <MobilePrimaryDropdown
              setToggleMainMenu={() => setToggleMainMenu(!toggleMainMenu)}
            />
            <span className="self-center font-semibold whitespace-nowrap text-white dark:text-white">
              Shop Digest
            </span>
            <div className="mx-2 border-l px-2">
              <MegaMenuButton
                megaItem={megaItem}
                setToggleMegaMenu={() => setToggleMegaMenu(!toggleMegaMenu)}
              />
            </div>
          </a>
          <div className="flex items-center lg:order-2">
            <ButtonLink text={"Add Post"} />
            <LoginButton text={"Login"} />
          </div>
          <MainMenu
            toggleMainMenu={toggleMainMenu}
            setToggleMainMenu={setToggleMainMenu}
            mainMenuRef={mainMenuRef}
          />
        </div>
      </nav>
      <div ref={megaMenuRef}>
        <MegaMenu
          setMegaItem={updateMegaItem}
          toggleMegaMenu={toggleMegaMenu}
          setToggleMegaMenu={setToggleMegaMenu}
          megaMenuRef={megaMenuRef}
        />
      </div>
    </header>
  );
};
export default PrimaryNavbar;
