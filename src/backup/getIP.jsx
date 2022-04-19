/** @format */

import React from 'react';
import http from '../services/httpService';

class Clientinfo extends React.Component {
  // set the state
  state = { clientinfo: [] };

  // update state with data from API
  async componentDidMount() {
    const { data: result } = await http.get('https://geolocation-db.com/json/');
    this.setState({ clientinfo: result });
  }

  //return results
  render() {
    return (
      <div>
        <ul>
          <li>ip adres: {this.state.clientinfo.IPv4}</li>
          <li>postal: {this.state.clientinfo.postal},</li>
          <li>stad: {this.state.clientinfo.city},</li>
          <li>state: {this.state.clientinfo.state},</li>
          <li>country: {this.state.clientinfo.country_name}</li>
          <li>country code: {this.state.clientinfo.country_code}</li>
          <li>latitude:{this.state.clientinfo.latitude}</li>
          <li>longitude:{this.state.clientinfo.longitude}</li>
        </ul>
      </div>
    );
  }
}

export default Clientinfo;
