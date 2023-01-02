import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={props} style={{ maxWidth: '15rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
