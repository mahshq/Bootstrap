import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-gray-300 text-white">
      <Container fluid className="mx-auto px-4 py-2 flex justify-between items-center">
        <Navbar.Brand href="#" className="text-2xl font-semibold">CarZzy</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="focus:outline-none text-white md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll" className="md:flex md:space-x-6 hidden">
          <Nav
            className="me-auto my-2 my-lg-0 flex space-x-6"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="hover:text-gray-300 ml-80">Home</Nav.Link>
            <Nav.Link href="#action2" className="hover:text-gray-300">Menu</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown" className="hover:text-gray-300">
              <NavDropdown.Item href="#action3">About</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="hover:bg-gray-600 hover:text-white">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
