import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userLogout } from "./react_ecosystem/actions";
import { getAuthUserProfile } from "./react_ecosystem/selectors";

const PageHeaderCanvas = styled.div`
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    180deg,
    hsl(180, 70%, 0%),
    hsl(270, 100%, 18%)
  );
  margin: 0;
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  position: relative;
`;

const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;
  left: 3%;
  top: 2%;
`;

const Username = styled.h3`
  color: white;
`;

const LogoutButton = styled.button`
  background: hsl(240, 30%, 88%);
  border-radius: 5px;
  font-weight: 700;
  width: 100%;
  height: 1.8rem;
  border: 3px solid;
  margin-top: -1rem;
  border-color: hsl(240, 30%, 10%, 0.3);
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
`;

const NavArea = styled.div`
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

const PageHeaderContainer = ({profiles, onClickedLoggedOut}) => {
  return (
    <PageHeaderCanvas>
      <UserArea>
        <Username>{`username`}</Username>
        <Link to="/">
          <LogoutButton
            onClick={() => onClickedLoggedOut()}  
          >Log out</LogoutButton>
        </Link>
      </UserArea>
      <NavArea>
        <Link to="/homepage"><NavItem>Homepage</NavItem></Link>
        <Link to="/profile"><NavItem>Profile</NavItem></Link>
        <Link to="/course"><NavItem>Courses</NavItem></Link>
      </NavArea>
    </PageHeaderCanvas>
  );
};

const mapStateToProps = state => ({
  // profiles: getAuthUserProfile(state)
});

const mapDispatchToProps = dispatch => ({
  onClickedLoggedOut: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeaderContainer);
