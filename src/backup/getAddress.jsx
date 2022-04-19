/** @format */

import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../services/config.json';

class Provider extends React.Component {
  state = {
    items: [],
    queryparam: { zip: '2251AV', hno:'2' }
  };

  // update state with data from API
  async componentDidMount() {
    const url = (config.apiEndpoint + '/provider/' + '?zip__istartswith=' + (this.state.zip+1));
    console.log(url);
    const { data: items } = await http.get(config.apiEndpoint + '/provider/' + '?zip__istartswith=' + (this.state.zip + 1));
    this.setState({ items });
    console.log(items);
  }

// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`
// const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

  render() {
    return (
      <div>Hello World
        <ul>
          {this.state.items.map((item) => (<li key={item.id}>{ item.name } { item.zip }</li>))}
        </ul>
        

    </div>);
  }
}

export default Provider;
