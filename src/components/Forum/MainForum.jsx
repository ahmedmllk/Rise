import React from 'react'
import './Main.css'
import Navbar from '../MainPage/Navbar/Navbar'
import Sidebar from '../MainPage/Sidebar/Sidebar'

import PageForm from './PageForm'

const MainForum = () => {
  return (
    <div className='main'>
      <Navbar/>
      <div className='Page'>
      <Sidebar/>
      <div className='subPage'>
        
        <PageForm/>
     </div>
      </div>
    </div>
  )
}

export default MainForum
