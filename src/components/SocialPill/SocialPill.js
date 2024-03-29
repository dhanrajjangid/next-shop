import React from "react";

export default function SocialPill({ text, icon }) {
  return (
    <button className="py-2 flex  items-center justify-center px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      {React.createElement(icon)} {" "} {text}
    </button>
  );
}
