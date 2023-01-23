import React from 'react'
import baa from '../assets/baa.png'
import ranger from '../assets/ranger.png'
import cowboy from '../assets/cowboy.png'

function Us(props) {
  return (
<div className='us'>



    <div className='sidebysideimgs'>
    <div className='sidebysidepink'>
    <h1>
        Life Insurance: 
    
    <p>
        Life insurance can be a living and death benefit for 
        all ages. 
    <br/>
        We Offer Careers That Set Up Your 
        Path To Retirement
        </p>
    </h1>
        <br/>

    <h1>
        Financial Services:
    
    <p>
        Globe Life Provides Passive Income
        Travel & Flexible Hours
    <br/>
        Wealth For Future Generations
        Guidance In Entrepreneurship to become a business owner
    </p>
    </h1>
        <br/>
    </div>
    </div>
<div className='usthree'>
    <h1>
        DID YOU KNOW
    </h1>
    <p>
        Globe Life is the Official
        Partner of The Dallas
        Cowboys, Texas Rangers and Business Athlete Association 
    </p>
    <img src={cowboy} alt='globe'/>
    <img src={ranger} alt='globe'/>
    <img src={baa} alt='globe'/>
    </div>


</div>
  )
}

export default Us
