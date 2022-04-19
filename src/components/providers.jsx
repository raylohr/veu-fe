/** @format */

// providers.jsx
// display a table with all providers

/** @format */

import React, { Component } from 'react';
import { getProviders } from '../services/providerService';

class Providers extends Component {
  state = {
    providers: [],
  };

  async componentDidMount() {
    const { data: providers } = await getProviders();
    console.log('providers', providers);
    this.setState({ providers });
  }

  render() {
    let count = this.state.providers.length
    if (count === 0) return <p>geen aanbieders beschikbaar</p>;

    return (
      <div className='p-4'>
        <p>je hebt keuze uit { count } aanbieders</p>
        <table className='table'>
          <thead>
            <tr>
              <th>bedrijfsnaam</th>
              <th>postcode</th>
              <th>stad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.providers.map((provider) => (
              <tr key={provider._id}>
                <td>{provider.name}</td>
                <td>{provider.zip}</td>
                <td>{provider.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Providers;
