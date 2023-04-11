import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function NavigationBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>My Store</Navbar.Brand>
          <NavLink to="/p" style={({isActive}) =>({textDecoration : isActive ? "none" : "underline",})}>Products</NavLink>
          <NavLink to="/addProduct" style={({isActive}) =>({textDecoration : isActive ? "none" : "underline",})}>Add new Product</NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
