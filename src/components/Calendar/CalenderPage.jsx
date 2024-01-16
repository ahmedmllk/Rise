import React from 'react'
import Navbar from '../MainPage/Navbar/Navbar'
import Calendar from './Calendar'
import CalendarEvents from './CalendarEvents'
import './CalendarPage.css'
import Sidebar from '../MainPage/Sidebar/Sidebar'
const CalenderPage = () => {
  
  return (
    <div>
      <div className='CL'>
        <Navbar/>
        <Sidebar/>
        <Calendar/>
        <CalendarEvents/>
      </div>
    </div>
  )
}

export default CalenderPage
