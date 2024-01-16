import React from 'react'

const LatestAricticles = () => {
    var Liste =[
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
        {
            topics:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:'www.hello.com'
        },
       
    ]
  return (
    <div >
      <h1>LATEST ARTICLE</h1>
      <ul className='LatestA'>
        {Liste.map(el=> <li><a href={el.link}>{el.topics}</a></li>)}
      </ul>
    </div>
  )
}

export default LatestAricticles
