/** @format */

import React from 'react';

function Services({ formData, setFormData }) {
  return (
    <div>
      <div>
        <label htmlFor='moving'>verhuizing</label>
        <input
          id='moving'
          name='moving'
          type='checkbox'
          placeholder='verhuizing'
          value={formData.moving}
          onChange={(event) =>
            setFormData({ ...formData, moving: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor='packaging'>Inpakken</label>
        <input
          id='packaging'
          name='packaging'
          type='checkbox'
          placeholder='packaging'
          value={formData.packaging}
          onChange={(event) =>
            setFormData({ ...formData, packaging: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor='handyman'>Handyman / Klusman</label>
        <input
          id='handyman'
          name='handyman'
          type='checkbox'
          placeholder='handyman'
          value={formData.handyman}
          onChange={(event) =>
            setFormData({ ...formData, handyman: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor='storage'>Tijdelijke opslag</label>
        <input
          id='storage'
          name='storage'
          type='checkbox'
          placeholder='storage'
          value={formData.storage}
          onChange={(event) =>
            setFormData({ ...formData, storage: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor='elevator'>Verhuislift</label>
        <input
          id='elevator'
          name='elevator'
          type='checkbox'
          placeholder='elevator'
          value={formData.elevator}
          onChange={(event) =>
            setFormData({ ...formData, elevator: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor='requests'>Overige wensen</label>
        <input
          id='requests'
          name='requests'
          type='text'
          placeholder='requests'
          value={formData.requests}
          onChange={(event) =>
            setFormData({ ...formData, requests: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Services;
