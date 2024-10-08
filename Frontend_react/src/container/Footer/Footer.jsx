import React from "react";
import { motion } from "framer-motion";
import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";

import { images } from "../../constants";
import { AppWrapFooter, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  // const [formData, setFormData] = useState({name:'', email:'', message:''});
  //   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //   const [loading, setLoading] = useState(false);

  //   const { name, email, message } = formData;
  //   const handleChangeInput = (e)=> {
  //     const {name, value} = e.target;
  //     setFormData({...formData, [name]: value});
  //   }
  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.name,
  //     email: formData.email,
  //     message: formData.message,
  //   }

  //   client.create(contact)
  //     .then(()=>{
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  // }

  return (
    <>
      <p className="p-text">Get In Touch</p>
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:krishnanhari@outlook.com" className="p-text">
            krishnanhari@outlook.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (548) 333-7639" className="p-text">
            +1 (548) 333-7639
          </a>
        </div>
      </div>
      <div className="app__socials">
        <div>
          <a
            href="https://www.linkedin.com/in/harikrishnan-karuppiah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Harikrishnan-HK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.behance.net/harikrikaruppi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBehance />
          </a>
        </div>
      </div>

      {/* {!isFormSubmitted ? 
    <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input className='p-text' type='text' placeholder='Your Name' name= 'name' value={name} onChange={handleChangeInput} />
      </div>
      <div className='app__flex'>
        <input className='p-text' type='email' placeholder='Your Email' name= 'email' value={email} onChange={handleChangeInput} />
      </div>
      <div>
        <textarea className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{loading ?'Sending' : 'Send Message'}</button>

    </div>
    : <div>
      <h3 className='head-text'>Thank you for getting in touch</h3>
    </div>
    } */}
    </>
  );
};

export default AppWrapFooter(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
