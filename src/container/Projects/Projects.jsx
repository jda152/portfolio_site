import React, { forwardRef } from 'react';
import './Project.scss';
import { images } from '../../constants';

const Projects= forwardRef((props, ref) => { 
  return (
    <div ref={ref}  className='projects__container app__flex'>
      <div className='projects__content'>
        <h2>Projects</h2>
        <p>Some stuff i've worked on 🚀</p>
        {/* this will be the code i'll come back to to add more projects to the gridview */}
          <div className='projects__grid'> 
          {/* the actual grid with that will have styling applied */}
            <div className='grid__prj1'>
            {/* the thumbnail of the grid that shows proj preview */}
              <div  className='grid__prj1__img'>
                <a target='_blank' href='https://chatgpt-front-end-project.vercel.app/'
                rel='noreferrer'>
                <img src={images.prj1} alt="website"/>

                </a> 
              </div>
              <div className='grid__prj1__text'>
                <h2>Chat GPT project</h2>
                <p> 
                This project revolved 
                around taking an existing design and skillfully
                shaping it into a user-friendly platform dedicated 
                to explaining the numerous benefits of artificial 
                intelligence and the impressive abilities of ChatGPT.
                </p>

                <div className='grid__prj1__stack'>
                  <p>React</p>
                  <p>CSS</p>
                </div>

                <div className='grid__prj1__links'>
                  {/* need to fix the github link to this first project */}
                  <a target="_blank" href="https://github.com/jda152/personal-projects" rel="noreferrer">Code <i class="fa-brands fa-github"></i>
           
                  </a>
                  <a target="_blank" href="https://jdaportfolio.fun/" rel="noreferrer">
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square link-icon">

                    </i>
                  </a>
                </div>

              </div> 
             
            </div>
          </div>

      </div>
    </div>
  )
});



export default Projects