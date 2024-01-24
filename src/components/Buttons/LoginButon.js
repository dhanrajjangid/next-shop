"use client";
import { UserIcon } from "@/templates/PrimaryNavbar/MegaMenuIcons";
import React from "react";

export default function LoginButton({ props }) {
  return (
    <a
      href="#"
      className=" text-white dark:text-white font-medium   text-sm px-1 py-2 lg:px-5 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      <span className="block lg:hidden ml-1 text-white">
        {React.createElement(UserIcon)}
      </span>
      <span className="hidden lg:block ml-1">Login</span>
    </a>
  );
}
