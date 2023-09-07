import React, { forwardRef } from 'react';
import './Contact.scss';

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='contact__container'>
      <div className='contact__content'>
        <div className='content__title'>
          <h2>Contact</h2>
          <p>Let's stay in touch! ✏️</p>
        </div>

        <div className='contact__icons'>
          <div className='contact__icon-box'>
            <span>
              <i className="fa-solid fa-map-pin"></i>
            </span>
            <div className='contact__info'>
              <h3>Location</h3>
              <p>Morristown, NJ</p>
            </div>
          </div>

          <div className='contact__icon-box'>
            <span>
              <i className="fa-solid fa-square-envelope"></i>
            </span>
            <div className='contact__info'>
              <h3>E-Mail</h3>
              <a href='mailto:jda99.work@gmail.com'>jda99.work@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
