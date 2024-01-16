import React from 'react'

const DailyFeedCard = ({el}) => {
  return (
    <div className='DailyFeedCard'>
      <h3>{el.concerns}</h3>
      <h2>{el.Title}</h2>
      <p>{el.Topic}</p>
    </div>
  )
}

export default DailyFeedCard
