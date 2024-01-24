import Image from "next/image";
export default function Card({ text }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image src="/next.jpg" width={500} height={500} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </a>
      </div>
    </div>
  );
}
