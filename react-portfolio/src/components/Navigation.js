import React from 'react'; 
import {Navbar, NavDropdown, Form, Button, FormControl, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Navigation(){
return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Winsor's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about"><Nav.Link>About Me</Nav.Link></LinkContainer>
      <LinkContainer to="/resume"><Nav.Link>Resume</Nav.Link></LinkContainer>
      <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
      <LinkContainer to="/about"><Nav.Link>Portfolio</Nav.Link></LinkContainer>

      
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

}

export default Navigation;