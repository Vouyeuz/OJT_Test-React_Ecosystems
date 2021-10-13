import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeUser, userLogout } from "../redux/actions";
import { getAuthUserProfile } from "../redux/selectors";
import { UserAreaComponent, NavBarComponent } from "../components";

const PageHeaderCanvas = styled.div`
  border-radius: 5px 5px 0 0;
  background: linear-gradient(180deg, hsl(180, 70%, 0%), hsl(270, 100%, 18%));
  margin: 0;
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  position: relative;
`;

const PageHeaderContainer = ({
  profiles,
  onClickedLoggedOut,
  onClickedRemove,
}) => {
  return (
    <PageHeaderCanvas>
      {profiles.map((profile) => (
        <UserAreaComponent
          key={Number.toString()}
          profile={profile}
          onClickedLoggedOut={onClickedLoggedOut}
          onClickedRemove={onClickedRemove}
        />
      ))}
      <NavBarComponent />
    </PageHeaderCanvas>
  );
};

const mapStateToProps = (state) => ({
  profiles: getAuthUserProfile(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickedLoggedOut: () => dispatch(userLogout()),
  onClickedRemove: (text) => dispatch(removeUser(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeaderContainer);
