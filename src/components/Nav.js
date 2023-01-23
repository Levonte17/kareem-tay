import React from 'react'
import {GrSchedule} from "react-icons/gr";
import { FiPhoneCall,
         FiInstagram
} from "react-icons/fi";

function Nav(props) {
  return (
    <div className='nav'>
                <div className='nav'>
    <a href='tel:+19544083913'>
             <FiPhoneCall />
             (912)429-9201
    </a>
                </div>

                <div className="contact2">
    </div>


                <div className='navs'>
                <a href='/'>
                <GrSchedule />
                Contact Form
            </a>
                </div>
                
                <div className='navs' >
                    <a href='https://www.instagram.com/kareemtay_/'
                        className='a'>
                        <FiInstagram/> 
                        kareemtay_
                    </a> 
                </div>


                </div>
  )
};

export default Nav;
