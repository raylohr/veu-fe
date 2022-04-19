/** @format */

//switch form elements

import React from 'react';

const Switch = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-check form-switch mt-3'>
      <label className='form-check-label'>{label}</label>

      <input
        {...rest}
        id={name}
        name={name}
        className='form-check-input'
        type='checkbox'
      />

      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Switch;
