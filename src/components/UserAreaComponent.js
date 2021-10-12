import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const UserAreaComponent = ({ profile, onClickedLoggedOut }) => {
  return (
    <div>
      <UserArea>
        <Username>{`Welcome, ${profile.username}`}</Username>
        <Link to="/">
          <LogoutButton onClick={() => onClickedLoggedOut(profile)}>
            Log out
          </LogoutButton>
        </Link>
      </UserArea>
    </div>
  );
};

export default UserAreaComponent;
