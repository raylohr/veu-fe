/** @format */

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../services/httpService'
import config from '../services/config.json'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RFQForm() {
  let navigate = useNavigate();

  const [moveInfo, setMoveInfo] = useState({
    packaging:false,
    moving:true,
    elevator:false,
    handyman:false,
    storage:false,
    requests:'geen bijzonderheden',
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
    date_from:'2022-06-01',
    date_to:'2022-07-01',
    name_given:'Raymond',
    name_family:'Loehr',
    email:'raymond@lohr.nl',
    phone:'06-12.345.678',
  });

  const handleChange = (event) => {
    setMoveInfo({ ...moveInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevent default submit action
    event.preventDefault();

    // add ip to userform
    const ip = { client_ip: '192.148.0.1' };
    const obj = { ...ip, ...moveInfo };

    //write obj to database
    const result = http.post(config.apiEndpointRFQ, obj);
    //console.log('Movecart POST result: ', result);
   
    // vavigate to landingpage
    navigate('/rfqformsubmit', { data: ['a','b','c'], } );

  };

  return (
    <div className='form-container p-5'>
      <h1>Altijd de beste prijs voor je verhuizing</h1>
      Vergelijk tot wel 6 offertes van verhuisbedrijven en bespaar!
      
      <form className='mt-5' onSubmit={handleSubmit}>

      <Container>
        <Row>
          <Col sm>
            <h3>Wat heb je nodig?</h3>

            <div>
              <label className='mt-3'>Inpakservice</label>
              <input
                type='checkbox'
                name='packaging'
                placeholder='packaging'
                value={moveInfo.packaging}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>Verhuistransport</label>
              <input
                type='checkbox'
                name='move'
                placeholder='move'
                value={moveInfo.move}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>Handyman</label>
              <input
                type='checkbox'
                name='handyman'
                placeholder='handyman'
                value={moveInfo.handyman}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>Tijdelijke opslag</label>
              <input
                type='checkbox'
                name='storage'
                placeholder='storage'
                value={moveInfo.storage}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>Overige wensen</label>
              <input
                type='text'
                name='requests'
                placeholder='requests'
                value={moveInfo.requests}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>Datum van</label>
              <input
                type='date'
                name='date_from'
                placeholder='date_from'
                value={moveInfo.date_from}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>Datum tot</label>
              <input
                type='date'
                name='date_to'
                placeholder='date_to'
                value={moveInfo.date_to}
                onChange={handleChange}
              />
            </div>


          </Col>

          <Col sm>
            <h3>Oude adres</h3>   
            <div>
              <label className='mt-3'>Postcode</label>
              <br />
              <input
                type='text'
                name='zip_from'
                placeholder='zip_from'
                value={moveInfo.zip_from}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>huisnummer</label>
              <br/>
              <input
                type='text'
                name='hno_from'
                placeholder='hno_from'
                value={moveInfo.hno_from}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>street_from</label>
              <br />
              <input
                type='text'
                name='street_from'
                placeholder='street from'
                value={moveInfo.street_from}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>city_from</label>
              <br />
              <input
                type='text'
                name='city_from'
                placeholder='city from'
                value={moveInfo.city_from}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>Type woning</label>
              <br />
              <input
                type='text'
                name='objecttype_from'
                placeholder='objecttype_from'
                value={moveInfo.objecttype_from}
                onChange={handleChange}
              />
            </div>



          </Col>
          
          <Col sm>
            <h3>Nieuwe adres</h3> 
            <div>
              <label className='mt-3'>Postcode</label>
              <br />
              <input
                type='text'
                name='zip_to'
                placeholder='zip_to'
                value={moveInfo.zip_to}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>huisnummer</label>
              <br/>
              <input
                type='text'
                name='hno_to'
                placeholder='hno_to'
                value={moveInfo.hno_to}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>street_to</label>
              <br />
              <input
                type='text'
                name='street_to'
                placeholder='street to'
                value={moveInfo.street_to}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>city_to</label>
              <br />
              <input
                type='text'
                name='city_from'
                placeholder='city to'
                value={moveInfo.city_to}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='mt-3'>Type woning</label>
              <br />
              <input
                type='text'
                name='objecttype_to'
                placeholder='objecttype_to'
                value={moveInfo.objecttype_to}
                onChange={handleChange}
              />
            </div>
  
          </Col>
          
          <Col sm>
            <h3>Contact Informatie</h3>
            <div>
              <label className='mt-3'>name_given</label>
              <br />
              <input
                type='text'
                name='name_given'
                placeholder='name_given'
                value={moveInfo.name_given}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>name_family</label>
              <br />
              <input
                type='text'
                name='name_family'
                placeholder='name_fammily'
                value={moveInfo.name_family}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>email</label>
              <br />
              <input
                type='email'
                name='email'
                placeholder='email'
                value={moveInfo.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='mt-3'>telefoon</label>
              <br />
              <input
                type='text'
                name='phone'
                placeholder='phone'
                value={moveInfo.phone}
                onChange={handleChange}
              />
            </div>

  
  
          </Col>

        </Row>

        <Row>
          <div>
            <button className='mt-3'>Submit</button>
          </div>
        </Row>

      </Container>
        
      </form>
    </div>
  );
}
