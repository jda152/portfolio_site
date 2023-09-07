import React, { forwardRef } from 'react';
import './About.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const About = forwardRef((props, ref) => { 
  return (
    <div ref={ref}className='app__about app__flex'>
      <motion.div 
      className='app__about-container'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      >
        <div className='app__about-skills'>
          <h2>Tech stack</h2>
          <div className='app__about-logos'>
            <ul>
              <li className='logo-container'><img src={images.react} title='REACT' alt='logo'/></li>
              <li className='logo-container'><img src={images.html} title='HTML5' alt='logo'/></li>
              <li className='logo-container'><img src={images.css} title='CSS' alt='logo'/></li>
              <li className='logo-container'><img src={images.javascript} title='JAVASCRIPT' alt='logo'/></li>
              <li className='logo-container'><img src={images.sass} title='SCSS' alt='logo'/></li>
              <li className='logo-container'><img src={images.python} title='PYTHON' alt='logo'/></li>

            </ul>
          </div>
        </div>

        <div className='app__about-bio'>
            <span>
              <img src={images.typing} title='coding' alt='coding'/>
            </span>
            <h2>About me</h2>
            <h3>Jersey raised Front End Dev 🏡</h3>
            <p>
            I'm a recent Computer Science graduate from Rutgers University
            Newark with a passion for front-end web development. 
            My coursework in Cloud Computing, Mobile App Development, 
            Data Structures, and Software Engineering equips me 
            to create captivating user experiences through design 
            and technology.
            </p>

          </div>  

      </motion.div>
    </div>
  )
});



export default About