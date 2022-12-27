import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        </Container>
      </Navbar>       
    )
};

export default Header;