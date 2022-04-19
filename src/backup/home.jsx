/** @format */

import React from 'react';
import Moveform from '../components/moveform';
import Wow from '../components/wow';
import Wocas from '../components/wocas';
import Providersbigcities from '../components/providersbigcities';

class Home extends React.Component {
  render() {
    return (
      <div className='p-5'>
        <Moveform />
        <Wow />
        <Wocas />
        <Providersbigcities />
      </div>
    );
  }
}

export default Home;
