import { subMenuItems } from "@/constants/SubMenuItems";

const SecondaryMainMenu = (props) => {
  const handleSelectSubMenu = (item) => {
    props.setSecondaryItems({ label: item.title, menu: item.menu });
    props.setIsActive(false);
  };

  return (
    <>
      <div
        id="mega-menu"
        className={` ${
          !props.isActive && "hidden"
        } absolute z-10 bg-white   divide-y divide-gray-100 shadow dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm font-light text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown-button"
        >
          {subMenuItems?.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSelectSubMenu(item)}>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500"
                >
                  {item.svg}
                  <span className="">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default SecondaryMainMenu;
