"use client";

import Card from "@/components/Card/Card";
import CommunityButton from "@/components/Buttons/CommunityButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";


export default function EcommerceSuccess() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-4 px-2 mx-auto max-w-screen-xl text-center sm:py-2 lg:px-6 font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        Worldwid ecommerce success stories
      </div>
      <div className="justify-center text-sm select-none flex">
        Politics, Power, and Personality
      </div>
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto mb-10 lg:col-span-8 xl:col-span-9 xl:mb-0">
          <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((item, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
        <div className="justify-center max-w-screen-sm lg:mt-0 lg:col-span-5 xl:col-span-3  dark:bg-gray-800 dark:border-gray-700">
          <div className="bg-white p-8 shadow sm:p-6 lg:p-8 ">
            <CommunityButton />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              To know everything about Shopify
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Connect, share and engage with community and build relationships.
            </p>
            <div className="flex flex-col">
              <PrimaryButton text={"Login to continue"} />
              <PrimaryButton text={"Add Post"} />
              <PrimaryButton text={"Subscribe for $100/YEAR"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
