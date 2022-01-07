import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from "../../assets/img/logo.png"

const NavBar = ({pageChange}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="text-purple">
        <NavbarBrand href="/">
        {/*eslint-disable-next-line*/}
          <img className="img-fluid" src={Logo} width="50" height="50" className="d-inline-block align-top" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={pageChange} data-page="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="btn btn-outline-primary" href="#" onClick={pageChange} data-page="contact">Message Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;