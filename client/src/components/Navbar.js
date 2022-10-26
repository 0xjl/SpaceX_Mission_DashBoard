import React from 'react';
import logo from '../img/logo.svg';

function navBar() {
  return (
    <div className='nav'>
      <img src={logo} alt='logo' />
      <h2>Mission Log Dashboard</h2>
    </div>
  );
}

export default navBar;
