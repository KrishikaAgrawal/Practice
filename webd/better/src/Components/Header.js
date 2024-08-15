import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      // className=" bg-[#017848] px-3 py-2 sm:mb-1 sm:ml-1 sm:mr-1 rounded-t-lg sm:rounded-none"
      className=" bg-[#017848] h-20 text-white flex items-center pl-5 fixed z-50  w-full"
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
          <Nav className="flex justify-start pt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold border-b-2 rounded-sm mx-8"
                  : "nav-link hover:border-b-2 hover:rounded-sm mx-8"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold border-b-2 rounded-sm mx-8"
                  : "nav-link hover:border-b-2 hover:rounded-sm mx-8"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Start"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold border-b-2 rounded-sm mx-8"
                  : "nav-link hover:border-b-2 hover:rounded-sm mx-8"
              }
            >
              Start
            </NavLink>

            <NavLink
              to="/MortgageCalculator"
              className={({ isActive }) =>
                isActive
                  ? "nav-link font-bold border-b-2 rounded-sm mx-8"
                  : "nav-link hover:border-b-2 hover:rounded-sm mx-8"
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
