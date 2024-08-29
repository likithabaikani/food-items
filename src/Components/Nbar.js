import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Nbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-warning border border-dark">
      <Container>
        <Navbar.Brand><img style={{height:"60px"}}
        
          src={require("../assests/logo.png")

          }
          class="img-fluid rounded-top rounded-bottom"
          alt=""
        />
        </Navbar.Brand>
       <Nav.Link>
       New Order & Customer and <br/> Support:080-35038296 
       </Nav.Link>

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> 
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
             <Button variant="outline-success">Search</Button>
            </Form>
            </Container>
    </Navbar>
    <Navbar expand="lg" className="bg-warning border border-dark">
      <Container>
        <Navbar.Brand href="#home">Shop by depeartment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">My Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    </div>
  )
}




        
        
      
   