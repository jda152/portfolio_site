import React, { forwardRef } from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const Header = forwardRef((props, ref) => { 

  return (
    <div ref={ref} className='app__header app__flex'>
      <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='app__header-info'>
        <div className='app__header-badge'>
          <motion.div
            whileInView={{ x:[-100, 0], opacity: [0,1]  }}
            transition={{duration:0.5}}
            className='badge-cmp app__flex'
          >
            <h1>Front End React Developer 👋</h1>
            <p>I'm Jeison Argueta and I'm eager to launch my career in programming. Based in Morristown, NJ. </p>
            <div className='badge__links'>
              <span>

                <a aria-label='linkedin' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/jeison-argueta/'>
                  <span className='icon-wrapper'>  
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                  
                </a>
                <a aria-label='github' rel='noreferrer' target='_blank' href='https://github.com/jda152'>
                  <span className='icon-wrapper'>
                    <i class='fa-brands fa-github'></i>
                  </span>
                 
                </a>

              </span>

              
            </div>
          </motion.div>
          <img src={images.J_header} className='app__header-img' alt='profile_bg'/>
        </div>
      </motion.div>
    </div>
  );
});

export default Header;
