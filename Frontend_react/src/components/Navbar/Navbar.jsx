import React, { useState } from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'


import './Navbar.scss';
import {images} from '../../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigateToHome = () => {
    window.location.href = './';
  };

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} onClick={navigateToHome}/>
        </div>
        <ul className="app__navbar-links">
            {['home', 'about', 'projects','skills','experiences', 'contact' ].map((item)=>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>

                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=> setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{x:[300,0]}}
              transition={{duration: 0.85,ease:'easeOut'}}
            >
              <HiX onClick={()=> setToggle(false)}/>
              <ul>

              {['home', 'about', 'projects','skills','experiences', 'contact' ].map((item)=>(
                <li  key={item}>
                <a href={`#${item}`} onClick={()=> setToggle(false)}> {item}</a>

                </li>
              ))}
              </ul>


            </motion.div>
          )}

        </div>
    </nav>
  )
}

export default Navbar