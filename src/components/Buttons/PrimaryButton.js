import React from "react";

export default function PrimaryButton({ text }) {
  return (
    <button
      type="button"
      className="text-white bg-red-600 hover:black focus:ring-4 focus:ring-black-300 font-medium   text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none dark:focus:ring-black-800"
    >
      {text}
    </button>
  );
}
