import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      className=" bg-gray-200 px-3 py-2 sm:mb-1 sm:ml-1 sm:mr-1 rounded-t-lg sm:rounded-none"
    >
      <Container className=" flex ">
        <Navbar.Brand>
          {/* Logo container */}
          <Link to="/Home/Home" className="text-2xl font-extrabold">
            Better
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation buttons */}
          <Nav className="ml-80 flex justify-between gap-44 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold underline underline-offset-1"
                  : "nav-link hover:underline hover:underline-offset-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold underline underline-offset-1"
                  : "nav-link hover:underline hover:underline-offset-1"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/MortgageCalculator"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold underline underline-offset-1"
                  : "nav-link hover:underline hover:underline-offset-1"
              }
            >
              Mortgage Calculator
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
