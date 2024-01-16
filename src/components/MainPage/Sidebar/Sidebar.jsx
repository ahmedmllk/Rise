import React from 'react'
import './Sidebar.css'
import LatestAricticles from './Elements/LatestAricticles'
import Recommendations from './Elements/Recommendations'
import TopTopics from './Elements/TopTopics'
const Sidebar = () => {
   
  return (
    <div className='Sidebar'>
      {/* Latest article */}
      <LatestAricticles/>
      <hr />
      {/* recommendations */}
      <Recommendations/>
      {/* Most important */}
      <TopTopics/>
      
    </div>
  )
}

export default Sidebar
