import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

// const scaleVariants = {
//   whileInView: {
//     scale: [0,1],
//     opacity: [0,1],
//     transition: {
//       duration:1,
//       ease: 'easeInOut',
//     }
//   }
// }
const Header = () => {
  const navigateToAbout = () => {
    window.location.href = "./#about";
  };
  const downloadResume = () => {
    window.open("/HariResume.pdf", "_blank");
  };
  return (
    <div className="app__headr">
      <div className=".app__headerName">
        <h1>Harikrishnan Karuppiah</h1>
        <h2>
          I'm a
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "DevOps Engineer",
              2000,
              "Cloud Solution Architect",
              2000,
              "Coder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            style={{ fontSize: "1em", color: "#40128B", paddingLeft: "5px" }}
            repeat={Infinity}
          />
        </h2>
      </div>

      <div class="btn-container">
        <button class="btn btn-color-1" onClick={navigateToAbout}>
          Explore My Story
        </button>
        <button class="btn btn-color-2" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </div>

    // <div className='app__headr' >
    //   <motion.div
    //     whileInView={{x: [-100, 0], opacity:[0,1]}}
    //     transition={{duration:0.5}}
    //     className='app__header-info'
    //   >
    //     <div className='app__header-badge'>
    //       <div className='badge-cmp app__flex'>
    //         <span>👋🏻</span>
    //         <div style={{marginLeft:20}} >
    //           <p className='p-text'>Hello, I am</p>
    //           <h1 className='head-text'>Harikrishnan Karuppiah</h1>
    //         </div>
    //       </div>
    //       <div className='tag-cmp app__flex'>
    //         <p className='p-text'>Full Stack Web Developer</p>
    //         <p className='p-text'>Freelancer</p>
    //       </div>
    //     </div>
    //   </motion.div>
    // <motion.div
    //   whileInView={{opacity:[0,1]}}
    //   transition={{duration:0.5, delayChildren:0.5}}
    //   className='app__header-img'
    // >
    //   <img src={images.profile} alt="profile_bg" />
    //   <motion.img
    //   whileInView={{scale:[0,1]}}
    //   transition={{duration:1, ease:'easeInOut'}}
    //   src={images.circle}
    //   alt='profile_circle'
    //   className='overlay_circle'
    //   />
    // </motion.div>
    // <motion.div
    //   variant={scaleVariants}
    //   whileInView={scaleVariants.whileInView}
    //   transition={{duration:0.5}}
    //   className='app__header-circles'
    // >
    //   {[images.flutter, images.redux, images.sass].map((circle,index)=>(
    //     <div className='circle-cmp app__flex' key={`circle-${index}`}>
    //       <img src={circle} alt="circle"/>

    //     </div>
    //   ))}
    // </motion.div>
    // </div>
  );
};

export default AppWrap(Header, "home");
