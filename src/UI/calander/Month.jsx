import React, { Fragment } from 'react'
import { getMonth } from './util'
import Day from './Day';
import { Dayjs } from 'dayjs'
function Month({monthMatrix}) {
  return (
    <>
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {monthMatrix.map((week, i)=>{
            return <Fragment key={i}>
                {week.map((day,j)=>(
                    <Fragment key={j}>
                        <Day day = {day} rowIndex = {i}></Day>
                    </Fragment>
                ))}
            </Fragment>
        })}
    </div>
    </>
  )
}

export default Month