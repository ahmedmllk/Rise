import React from 'react'
import './Main.css'
import Navbar from './Navbar/Navbar'
import News from './News/News'
import Sidebar from './Sidebar/Sidebar'
import DailyFeed from './DailyFeed/DailyFeed'
import Profile from '../Profile/Profile'
import PageForm from '../Forum/PageForm'


const Main = () => {
  return (
    <div className='main'>
      <Navbar/>
      <div className='Page'>
      <Sidebar/>
      <div className='subPage'>
         <div className='subsubPage'>
        <News/>
        <DailyFeed/>
        </div> 
      
       
     </div>
      </div>
      
      
    </div>
  )
}

export default Main
