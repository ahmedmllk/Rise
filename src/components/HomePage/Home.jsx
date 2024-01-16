import React from 'react'
import './Home.css';
import Image from './Image.png'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='Home'>
       <div className='bondenoire1'>
        <h2>Olympiad Concept</h2>
        <h2>2024</h2> {/* year */}
        <ul>
            <li><button>Identify</button></li>
            <li><button>Help</button></li>
        </ul>
       </div>
       <h1>OlympiadHub</h1> {/* Tiltle */}
       <div className='bondenoire2'>
        <h2>Bringing student closer and support them while preparing for national and international olympiads</h2>
       </div>
       <div className='container'>
        <div className='intro'>
          <hr />
          <h3>ABOUT US</h3>
          <hr />
          <div className='par'>
            <p>Welcome to our innovative online platform dedicated to elevating your experience in academic Olympiads. Our website is designed to be a comprehensive resource hub catering to students aspiring to excel in prestigious competitions such as the International Mathematical Olympiad (IMO), International Physics Olympiad (IPhO), and International Olympiad in Informatics (IOI).</p>
            <p>Whether you are a mathematics enthusiast, a physics prodigy, or a coding aficionado, our website aims to provide you with the tools and support needed to navigate the challenges of these Olympiads successfully. We offer a dynamic array of resources, including practice problems, study guides, interactive quizzes, and collaborative learning spaces.</p>
            <p>Join our community to connect with like-minded individuals, share insights, and embark on a journey of intellectual exploration and growth. Elevate your Olympiad preparation with our user-friendly interface, personalized progress tracking, and a wealth of content curated to foster your academic excellence. Welcome to a space where your Olympiad aspirations are nurtured and celebrated!</p>
          </div>
        </div>
        <img src={Image} alt="" />
       </div>
       <button className='more' onClick={()=>navigate('/Main')}>- Explore a wide range of knowledge  -</button>
       <hr />
    </div>
  )
}

export default Home
