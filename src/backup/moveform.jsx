import React from 'react';

// import modules
import Joi from 'joi-browser';
import Form from './common/form';
import http from '../services/httpService';
import config from '../services/config.json';
import { getObjecttypes } from '../services/objectServices';

class Moveform extends Form {
  //define form fields in the data model
  state = {
    data: {
      moving: true,
      packaging: false,
      elevator: false,
      handyman: false,
      storage: false,
      requests: '',

      zip_from: '',
      hno_from: '',
      street_from: '',
      city_from: '',
      objecttype_from: '',

      zip_to: '',
      hno_to: '',
      street_to: '',
      city_to: '',
      objecttype_to: '',

      email: '',
      phone: '',
    },
    objecttypes: [],
    errors: {},
  };

  // field definition in form
  schema = {
    moving: Joi.boolean().default(true),
    packaging: Joi.boolean(),
    elevator: Joi.boolean(),
    handyman: Joi.boolean(),
    storage: Joi.boolean(),
    requests: Joi.string().allow(''),

    zip_from: Joi.string().allow(''),
    hno_from: Joi.string().allow(''),
    street_from: Joi.string().allow(''),
    city_from: Joi.string().allow(''),
    objecttype_from: Joi.string().required().default('2'),

    zip_to: Joi.string().allow(''),
    hno_to: Joi.string().allow(''),
    street_to: Joi.string().allow(''),
    city_to: Joi.string().allow(''),
    objecttype_to: Joi.string().allow(''),

    date_from: Joi.date().allow(''),
    date_to: Joi.date().allow(''),

    name_given: Joi.string().allow(''),
    name_family: Joi.string().allow(''),
    email: Joi.string().allow(''),
    phone: Joi.string().allow(''),
  };

  async populateObjecttypes() {
    const { data: objecttypes } = await getObjecttypes();
    this.setState({ objecttypes });
  }

  async componentDidMount() {
    await this.populateObjecttypes();
  }

  doSubmit = async () => {
    // get input from form
    const ip = { client_ip: '192.148.0.1' };
    const forminput = this.state.data;
    const obj = { ...ip, ...forminput };

    //write changes to API
    const result = await http.post(config.apiEndpoint + '/movecart/', obj);
    console.log('Movecart POST result: ', result);

    // push user to landing page
    if (result) return console.log('SUBMIT result: ', result);
  };

  // render form
  render() {
    return (
      <div className='p-5'>
        <div className='m-1'>
          <h4>Verhuis met een betrouwbaar verhuisbedrijf</h4>
          Vergelijk tot wel 6 offertes van verhuisbedrijven en bespaar!
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='mt-5'>
            <h5>Waarmee kunnen we je helpen?</h5>
            {this.renderSwitch(
              'moving',
              'verhuizing: inladen, vervoeren, uitladen'
            )}
            {this.renderSwitch('packaging', 'inpakservice')}
            {this.renderSwitch('elevator', 'verhuislift huren')}
            {this.renderSwitch('handyman', 'handyman voor (de)montage')}
            {this.renderSwitch('storage', 'tijdelijke opslag van huisraad')}
            {this.renderInput('requests', 'andere wensen')}
          </div>

          <div className='mt-5'>
            <h5>Oude adres</h5>
            {this.renderInput('zip_from', 'Postcode')}
            {this.renderInput('hno_from', 'Huisnummer')}
            {this.renderInput('street_from', 'Straatnaam')}
            {this.renderInput('city_from', 'Plaats')}
            {this.renderSelect(
              'objecttype_from',
              'Type object',
              this.state.objecttypes
            )}
          </div>

          <div className='mt-5'>
            <h5>Nieuwe adres</h5>
            {this.renderInput('zip_to', 'Postcode')}
            {this.renderInput('hno_to', 'Huisnummer')}
            {this.renderInput('street_to', 'Straatnaam')}
            {this.renderInput('city_to', 'Plaats')}
            {this.renderSelect(
              'objecttype_to',
              'Type object',
              this.state.objecttypes
            )}
          </div>

          <div className='mt-5'>
            <h5>Verhuisdatum</h5>
            {this.renderInput('date_from', 'Datum vanaf (dd/mm/jjjj)')}
            {this.renderInput('date_to', 'Datum tot (dd/mm/jjjj)')}
          </div>

          <div className='mt-5'>
            <h5>Contact Informatie</h5>
            {this.renderInput('name_given', 'voornaam')}
            {this.renderInput('name_family', 'achternaam')}
            {this.renderInput('email', 'email')}
            {this.renderInput('phone', 'telefoonnummer')}
          </div>

          {this.renderButton('Opslaan')}
        </form>
      </div>
    );
  }
}

export default Moveform;
