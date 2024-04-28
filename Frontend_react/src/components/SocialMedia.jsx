import React from 'react'
import { BsBehance, BsGithub, BsLinkedin } from 'react-icons/bs' ;

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/harikrishnan-karuppiah/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
        </div>
        <div>
          <a href="https://github.com/Harikrishnan-HK" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
        <div>
        <a href="https://www.behance.net/harikrikaruppi" target="_blank" rel="noopener noreferrer">
                <BsBehance />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia