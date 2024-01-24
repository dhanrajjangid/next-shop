import React, { useCallback, useEffect, useRef, useState } from "react";
const MegaMenuLink = (props) => {
  return (
    <>
      <a
        href="#"
        className="flex items-center p-3   hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <div className="p-2 mr-4 bg-white   shadow dark:bg-gray-700">
          {React.createElement(props.icon)}
        </div>
        <div>
          <div className="font-semibold">{props.text}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
            Trending designs to inspire you
          </div>
        </div>
      </a>
    </>
  );
};
export default MegaMenuLink;
