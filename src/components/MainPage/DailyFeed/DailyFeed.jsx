import React from 'react'
import './DailyFeed.css'
import DailyFeedCard from './DailyFeedCard'
const DailyFeed = () => {
    var Liste =[
        {
          concerns:'IOI',
          Title :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          Topic:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Et ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim diam vulputate ut pharetra sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Tortor at risus viverra adipiscing at in tellus integer. Turpis egestas sed tempus urna. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.',
         
        },
        {
            concerns:'IOI',
            Title :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            Topic:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Et ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim diam vulputate ut pharetra sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Tortor at risus viverra adipiscing at in tellus integer. Turpis egestas sed tempus urna. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.',
           
          },
          {
            concerns:'IOI',
            Title :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            Topic:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Et ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim diam vulputate ut pharetra sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Tortor at risus viverra adipiscing at in tellus integer. Turpis egestas sed tempus urna. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.',
          
          },
        
      ]
  return (
    <div className='DailyFeed'>
      <h1>Daily Feed</h1>
      {Liste.map(el=><DailyFeedCard el={el}/>)}
    </div>
  )
}

export default DailyFeed
