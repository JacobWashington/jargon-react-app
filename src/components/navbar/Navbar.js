import "./Navbar.css";

import { useState } from "react";

import { Navbar as NavB, Nav } from "react-bootstrap";
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

const Navbar = (props) => {
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const clickSearchHandler = (event) => {
    setSearch(true);
  };

  const onKeyDownSearchHandler = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      setSearch(false);
      searchSubmitHandler();
      console.log("Search entered...");
      console.log(`Searching for: ${searchInput}`);
    }
  };

  const searchChangeHandler = (event) => {
    console.log("Change");
    setSearchInput(event.target.value);
  };

  const searchSubmitHandler = () => {
    console.log("Search submitted!");
  };

  return (
    <NavB bg="primary" variant="dark">
      <NavB.Brand href="/" className="logo">
        jargon
      </NavB.Brand>
      <Nav className="mr-auto">
        {props.user ? (
          <>
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/connections">Connections</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                Account
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem className="drop-item" href="/profile">
                  Profile
                </DropdownItem>
                <DropdownItem className="drop-item" onClick={props.logout} href="/">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        ) : (
          <>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">LogIn</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </>
        )}
      </Nav>
    </NavB>
  );
};

export default Navbar;
