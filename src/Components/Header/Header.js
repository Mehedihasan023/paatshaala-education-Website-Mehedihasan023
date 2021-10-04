import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import img from '../../images/1.png'
const Header = () => {
    return (
        <div>
        
        <div className="header">
         <div className="image-container">
          <img src={img} alt="" />
         </div>
          <div className="text">
            <h1>PATHSHALA EDUCATION</h1>
          </div>
        </div>

  <div className="navigation">
  <Container>
  <Navbar bg="dark" variant="light">
  <Container>
    <Nav className="me-auto">
    <Stack direction="horizontal" gap={5}>

        <NavLink
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Home
              </NavLink>
        <NavLink
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                About us
              </NavLink>
        <NavLink
                to="/courses"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Courses
              </NavLink>
        <NavLink
                to="/faq"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                FAQ
              </NavLink>
              </Stack>
        </Nav>
     </Container>
  </Navbar>
  </Container>
           </div>
        </div>
    );
};

export default Header;