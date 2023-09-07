import React, { forwardRef } from 'react';
import './Footer.scss';


const Footer = forwardRef((props, ref) => { 
  return (
    <div className='footer__container'>
      <div className='footer__content'>
        <h3>Designed by Jeison, fueled by espresso</h3>
      </div>
    </div>
  )
});

export default Footer