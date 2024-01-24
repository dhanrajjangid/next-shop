export default function ButtonLink({ text }) {
  return (
    <a
      href="#"
      className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium   text-sm px-2 py-2 lg:px-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    >
      {text}
    </a>
  );
}
