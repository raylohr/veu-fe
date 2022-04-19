/** @format */
import React from 'react';

// import modules
import Siteheader from './components/siteheader';
import Sitebody from './components/sitebody';
import Sitefooter from './components/sitefooter';

// import css
//import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Siteheader />
        <Sitebody />
        <Sitefooter />
      </div>
    );
  }
}

export default App;
