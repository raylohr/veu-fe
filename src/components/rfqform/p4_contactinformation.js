/** @format */

import React from 'react';

function Contactinformation({ formData, setFormData }) {
  return (
    <div className='move-to-container'>
      <input
        type='text'
        placeholder='to_straat'
        value={formData.to_straat}
        onChange={(event) =>
          setFormData({ ...formData, to_straat: event.target.value })
        }
      />
      <input
        type='text'
        placeholder='to_plaats'
        value={formData.to_plaats}
        onChange={(event) =>
          setFormData({ ...formData, to_plaats: event.target.value })
        }
      />
      <input
        type='text'
        placeholder='to_postcode'
        value={formData.to_postcode}
        onChange={(event) =>
          setFormData({ ...formData, to_postcode: event.target.value })
        }
      />
    </div>
  );
}

export default Contactinformation;
