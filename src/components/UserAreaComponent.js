import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserAreaCanvas = styled.div`
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

const ButtonAreaCanvas = styled.div`
  display: flex;
`;

const LogoutButton = styled.button`
  background: hsl(240, 30%, 88%);
  border-radius: 5px;
  font-weight: 700;
  width: 100%;
  height: 1.8rem;
  border: 3px solid;
  border-color: hsl(240, 30%, 10%, 0.3);
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
`;

const DeleteButton = styled(LogoutButton)`
  margin-left: 1.3rem;
`;

const UserAreaComponent = ({ profile, onClickedLoggedOut, onClickedRemove }) => {
  return (
    <div>
      <UserAreaCanvas>
        <Username>{`Welcome, ${profile.username}`}</Username>
        <ButtonAreaCanvas>
          <Link to="/">
            <LogoutButton onClick={() => onClickedLoggedOut(profile)}>
              Log out
            </LogoutButton>
          </Link>
          <Link to="/">
            <DeleteButton onClick={() => onClickedRemove(profile)}>
              Delete
            </DeleteButton>
          </Link>
        </ButtonAreaCanvas>
      </UserAreaCanvas>
    </div>
  );
};

export default UserAreaComponent;
