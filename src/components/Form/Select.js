export default function Select(props) {
  return (
    <>
      <label htmlFor="guests" className="sr-only">
        Select
      </label>
      <select
        id="guests"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        <option>{props.text}</option>
        {props.data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </>
  );
}
