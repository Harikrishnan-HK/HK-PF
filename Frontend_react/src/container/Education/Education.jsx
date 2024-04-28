import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Education.scss';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      const sortedEducation = data.sort((a, b) => b.year - a.year);
      setEducation(sortedEducation);
    });

  }, []);

  return (
    <>
      <h2 className="head-text">Education</h2>

      <div className="app__skills-container">

        <div className="app__skills-exp">
          {education.map((edu) => (
            <motion.div
              className="app__skills-exp-item"
              key={edu.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{edu.year}</p>
                </div>
              <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={edu.name}
                      key={edu.name}
                    >
                      <h3 className="bold-text">{edu.name}</h3>
                      <h4 className="bold-text" style={{color:`var(--secondary-color)`}}>{edu.college}</h4>
                      <p className="p-text">{edu.location}</p>
                    </motion.div>

                  </>
              </motion.div>
              <motion.div className="app__skills-item app__flex" >
              <div
                className="app__flex"
                style={{ backgroundColor: edu.bgColor }}
              >
              <img src={urlFor(edu.icon)} alt={edu.name} />
              </div>

              </motion.div>
                  
              </motion.div>

          ))}
        </div>
        {/* <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {experiences.map((experience) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={experience.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: experience.bgColor }}
              >
                <img src={urlFor(experience.icon)} alt={experience.name} />
              </div>
              <p className="p-text">{experience.name}</p>
            </motion.div>
          ))}
        </motion.div>
        </div > */}


      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Education, 'app__skills'), 'education', "app__whitebg");