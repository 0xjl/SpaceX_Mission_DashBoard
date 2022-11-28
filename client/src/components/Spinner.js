import React from 'react';
import Loader from '../img/loader.gif';

function Spinner() {
  return (
    <div className='spinner'>
      <img src={Loader} alt='Spinning dots representing a loading screen'></img>
    </div>
  );
}

export default Spinner;
