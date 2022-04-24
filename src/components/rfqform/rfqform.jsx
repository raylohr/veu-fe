/** @format */

import React, { useState } from 'react';
import Services from './p1_services';
import Movefrom from './p2_movefrom';
import Moveto from './p3_moveto';
import Contactinformation from './p4_contactinformation';
import Summary from './p5_summary';
import Confirmation from './p6_confirmation';

import http from '../../services/httpService';
import config from '../../config/config.json';

function RFQform() {
  const [page, setPage] = useState(0);

  const FormTitles = [
    '1. Waarmee kunnen we je helpen?',
    '2. Waar woon je nu?',
    '3. Waar verhuis je naartoe?',
    '4. Contact informatie',
    '5. Samenvatting',
    '6. Bevestiging',
  ];

  const [formData, setFormData] = useState({
    packaging: false,
    moving: true,
    elevator: false,
    handyman: false,
    storage: false,
    requests: 'geen bijzonderheden',

    zip_from: '2492KG',
    street_from: 'Kamilleveld',
    hno_from: '',
    city_from: 'Den Haag',
    objecttype_from: '1',
    zip_to: '2251AV',
    street_to: 'Roucooppark',
    hno_to: '',
    city_to: 'Voorschoten',
    objecttype_to: '1',
    date_from: '2022-06-01',
    date_to: '2022-07-01',
    name_given: 'Raymond',
    name_family: 'Loehr',
    email: 'raymond@lohr.nl',
    phone: '06-12.345.678',
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Services formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Movefrom formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Moveto formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return (
        <Contactinformation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 4) {
      return <Summary formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Confirmation formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className='form'>
      <div className='form-container'>
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <form>
          <div>{PageDisplay()}</div>
        </form>
        <div className='formfooter'>
          <button
            disabled={page === 0 || page === FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Vorige
          </button>
          <button
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              if (page === FormTitles.length - 2) {
                const result = http.post(
                  process.env.REACT_APP_API_URL + config.apiRfq,
                  formData
                );
                if (!result) {
                  alert('error: form not submitted');
                }

                setPage((currPage) => currPage + 1);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 2 ? 'Verzenden' : 'Volgende'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RFQform;
