"use client";

export default function AnimatedText() {
  return (
    <span className="text-blue-500  px-4 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
      <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
        <li className="text-center lg:text-left inline-block align-baseline">
          Shopify Apps
        </li>
        <li className="text-center lg:text-left inline-block align-baseline">
          React Apps
        </li>
        <li className="text-center lg:text-left inline-block align-baseline">
          Wordpress Apps
        </li>
        <li className="text-center lg:text-left inline-block align-baseline">
          Crypto Apps
        </li>
        <li className="text-center lg:text-left inline-block align-baseline">
          NextJs Apps
        </li>
        <li
          className="text-center lg:text-left inline-block align-baseline"
          aria-hidden="true"
        >
          Finance Apps
        </li>
      </ul>
    </span>
  );
}
