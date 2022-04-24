/** @format */

import React from 'react';

function Summary({ formData, setFormData }) {
  return (
    <div>

      <h2>Services</h2>
      <div>moving: {formData.moving}</div>
      <div>packaging: {formData.packaging}</div>
      <div>handyman: {formData.handyman}</div>
      <div>storage: {formData.storage}</div>
      <div>requests: {formData.requests}</div>

      <h2>Oud Adres</h2>
      <div>
        {formData.street_from}, 
        {formData.hno_from}
      </div>
      <div>
        {formData.zip_from} 
        {formData.city_from}
      </div>
      <div>
        type object: {formData.objecttype_from} 
      </div>


      <h2>Nieuw Adres</h2>
      <div>
        {formData.street_to}, 
        {formData.hno_to}
      </div>
      <div>
        {formData.zip_to} 
        {formData.city_to}
      </div>
      <div>
        type object: {formData.objecttype_to} 
      </div>

      <h2>Contact Informatie</h2>
      <div>
        {formData.name_given}
        {formData.hno_family}
      </div>
      <div>
        {formData.email} 
      </div>
      <div>
        {formData.phone} 
      </div>
      <div>
        {formData.clientip} 
      </div>

    </div>
  );
}

export default Summary;
