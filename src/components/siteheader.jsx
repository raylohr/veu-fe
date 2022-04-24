/** @format */

import React from 'react';

// import css components
import { Navbar, Nav, Container } from 'react-bootstrap';

class Siteheader extends React.Component {
  render() {
    return (
      <div className='container-fluid bg-secondary'>
        <Navbar>
          <Container>
            <Nav className='me-auto'>
              <Nav.Link className='text-light' href='/'>
                Home
              </Nav.Link>
              <Nav.Link className='text-light' href='providers'>
                Alle Verhuizers
              </Nav.Link>
              <Nav.Link className='text-light' href='voordeligverhuizen'>
                Voordelig Verhuizen
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Siteheader;
