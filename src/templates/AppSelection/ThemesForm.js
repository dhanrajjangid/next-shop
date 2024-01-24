import DateRange from "@/components/Form/DateRange";
import Select from "@/components/Form/Select";
import SubmitButton from "@/components/Buttons/SubmitButton";

const ThemesForm = (props) => {
  return (
    <>
     <form
        action="#"
        className="grid gap-y-4 p-4 w-full bg-white rounded lg:gap-x-4 lg:grid-cols-8  dark:bg-gray-800"
      >
        <div className="grid grid-cols-2 gap-x-4 lg:col-span-4">
          <div className="relative">
          <DateRange text={"Start Date"} />
          </div>
          <div className="relative">
          <DateRange text={"End Date"} />
          </div>
        </div>
        <div className="lg:col-span-2">
        <Select data={[1, 2, 3, 4]} text="Themes" />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};
export default ThemesForm;
