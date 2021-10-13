import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavAreaCanvas = styled.div`
  position: absolute;
  top: -10%;
  left: 63%;
  display: flex;
  justify-content: space-evenly;
`;

const NavItem = styled.p`
  text-decoratioan: none;
  color: white;
  padding: 1rem;
`;

const NavBarComponent = () => {
  return (
    <NavAreaCanvas>
      <Link to="/homepage">
        <NavItem>Homepage</NavItem>
      </Link>
      <Link to="/profile">
        <NavItem>Profile</NavItem>
      </Link>
      <Link to="/course">
        <NavItem>Courses</NavItem>
      </Link>
    </NavAreaCanvas>
  );
};

export default NavBarComponent;
