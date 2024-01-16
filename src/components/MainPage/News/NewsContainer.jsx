import React from 'react'
import TheNewCard from './TheNewCard'
import './News.css'

const NewsContainer = () => {
  var Liste =[
    {
      Title :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      Topic:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Et ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim diam vulputate ut pharetra sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Tortor at risus viverra adipiscing at in tellus integer. Turpis egestas sed tempus urna. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.',
      Link:'www.hello.com'
    },
    {
      Title :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      Topic:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Et ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim diam vulputate ut pharetra sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Tortor at risus viverra adipiscing at in tellus integer. Turpis egestas sed tempus urna. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.',
      Link:'www.hello.com'
    },
    {
      Title :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      Topic:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Et ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim diam vulputate ut pharetra sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Tortor at risus viverra adipiscing at in tellus integer. Turpis egestas sed tempus urna. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.',
      Link:'www.hello.com'
    },
  ]
  return (
    <div>
      {Liste.map(el=><TheNewCard el={el}/>)}
    </div>
  )
}

export default NewsContainer
