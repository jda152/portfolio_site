import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { About, Footer, Header, Projects, Contact } from './container';
import { Navbar } from './components';
import './App.scss';
import { useInView } from 'react-intersection-observer'; 

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

    // Use in-view hook to trigger animations
  const [homeInView, homeRefInView] = useInView();
  const [aboutInView, aboutRefInView] = useInView();
  const [projectsInView, projectsRefInView] = useInView();
  const [contactInView, contactRefInView] = useInView();

  return (
    <div className='app'>
      <Navbar  
         refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef
        }} />
      <div className='app__content'>
        <Header ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
