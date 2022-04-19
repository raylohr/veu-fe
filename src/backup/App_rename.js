/** @format */

import React, { Component } from 'react';

//services
import http from './services/httpService';
import config from './config.json';

//modules
import CustomerBody from './components/customerBody';

//libraries & css
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    items: [],
  };

  // update state with data from API
  async componentDidMount() {
    const { data: items } = await http.get(config.apiEndpoint);
    this.setState({ items });
  }


  handleAdd = async () => {
    // get changes via form
    const obj = {
      name: 'name',
      zip: '999XX',
      email: 'name@customer.com',
    };

    //write changes to API
    const { data: item } = await http.post(config.apiEndpoint, obj);

    //update state
    const items = [item, ...this.state.items];
    this.setState({ items });
  };


  handleUpdate = async (item) => {
    // get changes via form
    item.name = 'updated name';

    //write changes to API
    await http.put(config.apiEndpoint + item.id + '/', item);

    //update state
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    this.setState({ items });
  };


  handleDelete = async (item) => {
    // save state before delete
    const originalItems = this.state.items;

    // update state
    const items = this.state.items.filter((c) => c.id !== item.id);
    this.setState({ items });

    // try write changes to API & revert to previous state on exception
    try {
      await http.delete(config.apiEndpoint + item.id);
    } catch (ex) {
      this.setState({ items: originalItems });
      if (ex.request && ex.response.status === 404)
        toast.error('this item has already been deleted');
      else {
        toast.error('an unexpected error occured');
      }
    }
  };


  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className='btn btn-primary' onClick={this.handleAdd}>
          Add
        </button>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Zip</th>
              <th>eMail</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.zip}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className='btn btn-info btn-sm'
                    onClick={() => this.handleUpdate(item)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => this.handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
