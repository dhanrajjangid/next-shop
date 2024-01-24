export default function PrimaryNavLink({ text }) {
  return (
    <a
      href="#"
      className="block text-sm font-normal py-2 pr-4 pl-3 text-white lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
      aria-current="page"
    >
      {text}
    </a>
  );
}
