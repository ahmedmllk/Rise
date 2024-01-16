import React from 'react'
import './News.css'
import NewsContainer from './NewsContainer'
import Image from './OIP.png'
const News = () => {
  return (
    <div className='News'>
      <h1>Breaking News</h1>
      <hr className='Hr' />
      <img src={Image} alt="" />
      <NewsContainer/>
    </div>
  )
}

export default News
