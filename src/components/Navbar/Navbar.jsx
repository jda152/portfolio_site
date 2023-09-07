import React, { useState } from 'react';
import './Navbar.scss';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = ({ refs }) => {
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setToggle(false);
    }
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1>jda</h1>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a onClick={() => scrollToSection(refs[item])}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a onClick={() => scrollToSection(refs[item])}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
