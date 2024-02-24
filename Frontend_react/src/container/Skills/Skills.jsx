import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Certifications</h2>

      <div className="app__skills-container">
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
    </>
  );
};


export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 'skills', "app__whitebg");