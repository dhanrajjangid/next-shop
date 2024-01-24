"use client";

import SocialPill from "@/components/SocialPill/SocialPill";
import { GitIcon, GoogleIcon, TwitterIcon } from "@/constants/SocialIcons";
import { useEffect, useRef, useState } from "react";


export default function PopularNow() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="justify-center my-4 select-none flex">
        <SocialPill icon={GoogleIcon} text={"Gogle"} />
        <SocialPill icon={TwitterIcon} text={"Twitter"} />
        <SocialPill icon={GitIcon} text={"Github"} />
      </div>
    </section>
  );
}
