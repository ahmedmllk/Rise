import React from 'react'
import image from './Picture.png'
import './Profile.css'
import Post from '../Forum/Post'
const Profile = () => {
  return (
    <div className='profile'>
      <div className='SideProfile'>
        <img src={image} alt="" />
        <h3>Contacts</h3>
            <ul>
              <li>Phone : 46391213</li>
              <li>Adress : 00000</li>
              <li>Email : ahmedmallek2007@gmail.com</li>
              <li>Birthday : 11/09/2007</li>
              <li>Gender : Male</li>
            </ul>
      </div>
      <div className='MainProfile'>
        <div className='Names'>
            <h1>Ahmed Mallek</h1> {/* Full Name */}
            <h2>Student</h2>{/* Position */}
            <h1>300</h1> {/* Score */}
            <div className='Interact'>
                <button>Send Message</button>
                <button>Follow</button>
                <button>report user</button>
            </div>
        </div>
        <div className='Postes'>
          <h3>Postes</h3>
            <Post/>
        </div>
        <div className='Buttons'>
          <button>←</button>
          <button>→</button>
        </div>
        </div>
        
      </div>

  )
}

export default Profile
