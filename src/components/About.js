import React from 'react'
import kcircle from '../assets/kcircle.png'

function About(props) {
  return (
    <div className='about'>
        <h1>
            Who Is Kareem Taylor?
        </h1>
          <img src={kcircle}  className='avatarimg' alt='about' />
      
    </div>
  )
}

export default About
