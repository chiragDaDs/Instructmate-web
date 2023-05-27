"use client";
import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import Month from "./Month";
import CalenderContext from "./CalenderContext";
import CalenderHeader from "./CalenderHeader";
import CalenderContextWrapper from "./CalenderContextWrapper";
const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(CalenderContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
      <div className="h-full min-w-max flex flex-col">
        <CalenderHeader  />
        <div className="flex flex-1">
          <Month monthMatrix={currentMonth} />
        </div>
      </div>
  );
};

export default Calender;
