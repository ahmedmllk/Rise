import React from 'react'
import './Main.css'
import Navbar from '../MainPage/Navbar/Navbar'
import Sidebar from '../MainPage/Sidebar/Sidebar'
import Profile from './Profile'

const MainProfile = () => {
  return (
    <div className='main'>
      <Navbar/>
      <div className='Page'>
      <Sidebar/>
      <div className='subPage'>
        
      
         <Profile/>
      
     </div>
      </div>
    </div>
  )
}

export default MainProfile
