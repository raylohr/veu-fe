/** @format */

import React from 'react';

function Movefrom({ formData, setFormData }) {
  return (
    <div className='form-group'>
      <label htmlFor='zip_from'>Postcode</label>
      <input
        id='zip_from'
        className='form-control'
        type='text'
        name='zip_from'
        placeholder='zip_from'
        value={formData.zip_from}
        onChange={(event) =>
          setFormData({ ...formData, zip_from: event.target.value })
        }
      />
    </div>
  );
}

export default Movefrom;
