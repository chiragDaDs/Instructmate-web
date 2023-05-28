import React from 'react'
import dayjs from 'dayjs';

const CalenderContext = React.createContext({
    monthIndex : dayjs().month(),
    setMonthIndex: (index) => {},

});

export default CalenderContext