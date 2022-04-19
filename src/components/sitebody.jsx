/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import components
import Providers from './providers';
import RFQForm from './rfqform';
import RFQFormSubmit from './rfqformsubmit';
import Voordeligverhuizen from './voordeligverhuizen';

class Sitebody extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<RFQForm />} />
          <Route path='voordeligverhuizen' element={<Voordeligverhuizen />} />
          <Route path='rfqformsubmit' element={<RFQFormSubmit />} />
          <Route path='providers' element={<Providers />} />
        </Routes>
      </div>
    );
  }
}

export default Sitebody;
