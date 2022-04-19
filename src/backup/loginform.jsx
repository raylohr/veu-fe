/** @format */

import React from 'react';

// import modules
import Joi from 'joi-browser';
import Form from '../components/common/form';

class LoginForm extends Form {
  //define form fields in the data model
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  };

  // field definition in form
  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().required().min(6).label('Password'),
    name: Joi.string().required().min(6).label('Name'),
  };

  // action on form submit
  doSubmit = () => {
    // call the server
    console.log('Submitted');
  };

  // render form
  render() {
    return (
      <div className='p-5'>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
