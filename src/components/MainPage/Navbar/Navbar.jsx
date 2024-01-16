import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='Main'>
      <div className='navbar'>
        <h2> Think OLympiad </h2>
        <ul>
            <li><button>Cookies</button></li>
            <li><button>Contact</button></li>
            <li><button onClick={()=>navigate('/Profile')}>Profile</button></li>
            <li><button>Help</button></li>
        </ul>
      </div>
      <h1>The OlympiadHub</h1>
      <hr />
      <div className='navbare'>
        <button onClick={()=>navigate('/Main')}>Home</button>
        <button>IMO</button>
        <button>IPhO</button>
        <button>IOI</button>
        <button >Calendar</button>
        <button onClick={()=>navigate('/Forum')}>Forum</button>
        <button><CiSearch /></button>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
