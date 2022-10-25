import React from 'react';
import Loader from '../img/loader.gif';

function Spinner() {
  return (
    <div>
      <img
        height='100px'
        src={Loader}
        alt='Spinning dots representing a loading screen'
      ></img>
    </div>
  );
}

export default Spinner;
