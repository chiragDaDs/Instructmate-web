import React, { useContext } from "react";
import dayjs from "dayjs";
import CalenderContext from "./CalenderContext";

function Day({ day, rowIndex }) {
  const date = day.format();
  const { monthIndex } = useContext(CalenderContext);
  console.log(dayjs().month(monthIndex).month() + " " + day.month());
  return (
    <div className="border border-orange-tera-cotta bg-[#FDF2EF] rounded-md  flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex == 0 && (
          <p className="text-xl text-orange-red mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        {dayjs().month(monthIndex).month() == day.month() &&
          day.format("DD/MM/YY") !== dayjs().format("DD/MM/YY") && (
            <p className="text-lg p-1 my-1 text-orange-red text-center">
              {day.format("DD")}
            </p>
          )}
        {dayjs().month(monthIndex).month() != day.month() && (
          <p className="text-lg p-1 my-1 text-orange-tangerine text-center">
            {day.format("DD")}
          </p>
        )}
        {dayjs().month(monthIndex).month() == day.month() && day.format("DD/MM/YY") === dayjs().format("DD/MM/YY") && (
          <p className="text-md text-center bg-orange-red rounded-full text-[#FDF2EF] w-6 h-6">
            {day.format("DD")}
          </p>
        )}
      </header>
    </div>
  );
}

export default Day;
