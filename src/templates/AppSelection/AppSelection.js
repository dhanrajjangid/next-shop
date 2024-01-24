"use client";

import AppsForm from "./AppsForm";
import React, { useState } from "react";
import AgenciesForm from "./AgenciesForm";
import ThemesForm from "./ThemesForm";
import ServicesForm from "./ServicesForm";
import Pill from "@/components/Pill/Pll";

export default function AppSelection() {
  const Apps = [
    {
      name: "Apps",
      form: AppsForm,
    },
    {
      name: "Agencies",
      form: AgenciesForm,
    },
    {
      name: "Themes",
      form: ThemesForm,
    },
    {
      name: "Services",
      form: ServicesForm,
    },
  ];
  const [activeApp, setActiveApp] = useState(Apps[0]);

  return (
    <section className="px-4">
      <div className="justify-center my-4 select-none flex">
        {Apps.map((item, index) => {
          return (
            <div key={index} onClick={() => setActiveApp(item, index)}>
              <Pill selected={activeApp} text={item.name} />
            </div>
          );
        })}
      </div>
      <div className="relative py-2 px-4 mx-auto max-w-screen-xl text-white lg:py-2 xl:px-0 z-1">
        {activeApp && React.createElement(activeApp.form)}
      </div>
    </section>
  );
}
