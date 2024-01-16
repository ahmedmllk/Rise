import React from 'react'
import Event from './Event'
const CalendarEvents = () => {
  var liste=[]
  return (
    <div className='CalendarEvent'>
      <h1>18 August</h1>
      <hr />
      <div className='Events'>
        {liste.map(el=><Event el={el}/>)}
      </div>
    </div>
  )
}

export default CalendarEvents
