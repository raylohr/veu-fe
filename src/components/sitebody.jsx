/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import components
import Providers from './providers';
import Voordeligverhuizen from './voordeligverhuizen';
import RFQform from './rfqform/rfqform';

class Sitebody extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<RFQform />} />
          <Route path='providers' element={<Providers />} />
          <Route path='voordeligverhuizen' element={<Voordeligverhuizen />} />
        </Routes>
      </div>
    );
  }
}

export default Sitebody;
