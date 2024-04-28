import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skills2, setSkills2] = useState([]);
  const [certifications, setCertifications] = useState([]);



  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const skills2Query = '*[_type == "skills2"]';
    const certificationsQuery = '*[_type == "certifications"]';


    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(skills2Query).then((data) => {
      setSkills2(data);
    });
    client.fetch(certificationsQuery).then((data) => {
      setCertifications(data);
    });


  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Certifications</h2>

      <div className="app__skills-container">
      <div className="app__skills-exp">

      <h3 className='medium-text'>Web Development Skills</h3>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
        <div className="app__skills-exp">

        <h3 className='medium-text'>DevOps Skills</h3>

        <motion.div className="app__skills-list">

          {skills2.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>

        
        
        {/* <div className="app__skills-exp">
          {skills.map((skill) => (
            <motion.div
              className="app__skills-exp-item"
              key={skill.name}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{skill.name}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {skills.map((skill) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={skill.name}
                      key={skill.name}
                    >
                      <h3 className="bold-text">{skill.name}</h3>
                      <h4 className="bold-text" style={{color:`var(--secondary-color)`}}>{skill.name}</h4>
                      <p className="p-text">{skill.name}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div> */}
              </div>
              <div style={{ marginBottom: '2em' }}></div>

        <div className="app__skills-exp" >
        <h3 className='medium-text'>Certifications</h3>

          {certifications.map((certification) => (

          <motion.div
              className="app__skills-exp-item"
              key={certification.name}
            >
              <div className="app__skills-exp-year">
              <img src={urlFor(certification.icon)} alt={certification.name} />
                </div>
              <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={certification.name}
                      key={certification.name}
                    >
                      <h3 className="bold-text">{certification.name}</h3>
                      <h4 className="bold-text" style={{color:`var(--secondary-color)`}}>{certification.company}</h4>
                      <p className="p-text">{certification.desc1}</p>
                    </motion.div>

                  </>
              </motion.div>
              </motion.div>

          ))}
        </div>

    </>
  );
};


export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 'skills', "app__whitebg");