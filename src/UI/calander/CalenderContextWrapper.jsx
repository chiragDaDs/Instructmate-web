import React, {useState}from 'react'; 
import dayjs from 'dayjs';
import CalenderContext from './CalenderContext';

function CalenderContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <CalenderContext.Provider value={{monthIndex,setMonthIndex}}>
        {props.children}
    </CalenderContext.Provider>
  )
}

export default CalenderContextWrapper