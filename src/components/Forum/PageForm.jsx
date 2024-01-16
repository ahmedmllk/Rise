import React from 'react'
import MiniPost from './MiniPost'
import './PageForm.css'
const PageForm = () => {
  return (
    <div className='PageForm'>
      <h1>THE FORM</h1>
      <div className='trie'>
      <select name="" id="">
          <option value="">Everything</option>
          <option value="">Latest</option>
          <option value="">Popular</option>
        </select>
        <select name="" id="">
          <option value="">IMO</option>
          <option value="">IPhO</option>
          <option value="">IOI</option>
        </select>
        

      </div>
      <MiniPost/>
        <MiniPost/>
        <MiniPost/>
        <div className='form'>
          <h1>ADD YOUR OWN POST</h1>
          <div className='fillout'>
           <label htmlFor="">Olympiad concerned :</label>
          <select name="" id="">
          <option value="">IMO</option>
          <option value="">IPhO</option>
          <option value="">IOI</option>
        </select>
          </div>
        
          <div className='fillout'>
            <label htmlFor="">Topic Title : </label>
            <input type="text" placeholder='Topic'/>
          </div>
          <div className='fillout'>
            <label htmlFor="">Input Your Article : </label>
           <textarea/>
          </div>
          <button>Submit</button>
        </div>
    </div>
  )
}

export default PageForm
