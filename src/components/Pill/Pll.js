export default function Pill({ text, selected }) {
  return (
    <button
      className={`${
        selected.name === text && "bg-blue-100 text-blue-500"
      } py-2.5 text-sm lg:text-xl px-5 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
    >
      {text}
    </button>
  );
}
