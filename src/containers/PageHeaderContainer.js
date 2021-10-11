import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserAreaComponent from "../components/UserAreaComponent";
import { userLogout } from "./react_ecosystem/actions";
import { getAuthUserProfile } from "./react_ecosystem/selectors";

const PageHeaderCanvas = styled.div`
  border-radius: 5px 5px 0 0;
  background: linear-gradient(180deg, hsl(180, 70%, 0%), hsl(270, 100%, 18%));
  margin: 0;
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  position: relative;
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

const PageHeaderContainer = ({ userProfiles, onClickedLoggedOut }) => {
  return (
    <PageHeaderCanvas>
      {userProfiles.map((profiles) => (
        <UserAreaComponent
          key={Number.toString()}
          profiles={profiles}
          onClickedLoggedOut={onClickedLoggedOut}
        />
      ))}
      <NavArea>
        <Link to="/homepage">
          <NavItem>Homepage</NavItem>
        </Link>
        <Link to="/profile">
          <NavItem>Profile</NavItem>
        </Link>
        <Link to="/course">
          <NavItem>Courses</NavItem>
        </Link>
      </NavArea>
    </PageHeaderCanvas>
  );
};

const mapStateToProps = (state) => ({
  userProfiles: getAuthUserProfile(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickedLoggedOut: () => dispatch(userLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeaderContainer);
