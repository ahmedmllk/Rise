import React from 'react'
import image from './OIP.png'
const Recommendations = () => {
  return (
    <div className='Recommendation'>
        <div className='SmallContainer'>
            <h1>RECOMMENDATIONS</h1>
            <div className='buttons'>
                <button>←</button>
                <button>→</button>
            </div>
        </div>
        <img src={image} alt="" />
        <a href=""> books that would change your study materials</a>
    </div>
  )
}

export default Recommendations
