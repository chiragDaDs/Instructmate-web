import React, {useContext} from "react";
import CalenderContext from "./CalenderContext";
import dayjs from "dayjs";

function CalenderHeader(props) {
  const { monthIndex, setMonthIndex } = useContext(CalenderContext);
  const handleReset = () => {
    setMonthIndex(dayjs().month());
  };
  const handlePrevMonth = () => { 
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  return (
    <header className="px-4 py-2 flex items-center w-full ">
      <div className="flex justify-between w-full">
      <button onClick={handleReset} className="border rounded-lg bg-[#ff4500] text-white py-2 px-4 ">
        Today
      </button>
      <h1 className="text-[#ff4500] text-xl font-bold	 ">
            {dayjs().month(monthIndex).format('MMMM YYYY')} 
      </h1>
      <div>
      <button name="PreviousMonth" onClick={handlePrevMonth} className="text-orange-red">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button name="NextMonth" onClick={handleNextMonth} className="text-[#ff4500]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      </div>
      </div>
    </header>
  );
}


export default CalenderHeader;
