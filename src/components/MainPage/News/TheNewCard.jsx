import React from 'react'
import './News.css'

const TheNewCard = ({el}) => {
  return (
    <div className='NewsCard'> 
      <h1>{el.Title}</h1> {/* Title */}
      <p>{el.Topic}</p> {/* Brief summery */}
      <div className='small'>
        <button>Read More</button>
        <h2>from : <a href={el.Link}>{el.Link}</a> </h2> {/* source */}
      </div>
      <hr />
    </div>
  )
}

export default TheNewCard
