import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Experiences.scss";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My Work Experience</h2>

      <div className="app__skills-container">
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h3 className="bold-text">{work.name}</h3>
                      <h4
                        className="bold-text"
                        style={{ color: `var(--secondary-color)` }}
                      >
                        {work.company}
                      </h4>
                      <p className="p-text">{work.desc1}</p>
                      <p className="p-text">{work.desc2}</p>
                      <p className="p-text">{work.desc3}</p>
                      <p className="p-text">{work.desc4}</p>
                    </motion.div>

                    {/* <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip> */}
                  </>
                ))}
              </motion.div>
              {experience.works.map((work) => (
                <img src={urlFor(work.icon)} alt={work.name} />
              ))}
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
  MotionWrap(Experiences, "app__skills"),
  "experiences",
  "app__primarybg"
);
