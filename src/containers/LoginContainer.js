import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userLogin } from "../redux/actions";
import { getAuthUserProfile } from "../redux/selectors";

const LoginCanvas = styled.div`
  background-color: white;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  border: 3px solid hsl(240, 30%, 10%, 0.3);
  border-radius: 8px;
  background-color: hsl(240, 10%, 85%, 0.8);
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 4px 8px hsl(240, 50%, 10%, 0.3);
`;

const LoginText = styled.h1`
  text-align: center;
  margin: 0;
`;

const InputLabel = styled.h4`
  margin-bottom: 0.5rem;
`;

const InputArea = styled.input`
  width: 90%;
  height: 2rem;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
`;

const LoginButton = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 30%;
  height: 2rem;
  border: 3px solid;
  margin-top: 2rem;
  margin-left: 11rem;
  border-color: #a88734 #9c7e31 #846a29;
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
`;

const SignUpArea = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid hsl(240, 30%, 20%, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.button`
  background: #f0c14b;
  font-weight: 700;
  border-radius: 2px;
  width: 100%;
  height: 2rem;
  border: 3px solid;
  margin-top: 1rem;
  margin-right: 50px;
  border-color: #a88734 #9c7e31 #846a29;
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
`;

const LoginContainer = ({ profiles, onClickedAuth }) => {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  const isAuthUser = profiles.some((profile) => {
    console.log(`auth username: ${profile.username}`);
    return profile.username === inputUser;
  });
  console.log(inputUser);
  console.log(isAuthUser);
  const isAuthPass = profiles.some((profile) => {
    console.log(`auth password: ${profile.password}`);
    return profile.password === inputPass;
  });
  console.log(inputPass);
  console.log(isAuthPass);

  return (
    <LoginCanvas>
      <LoginForm type="submit">
        <LoginText>Login</LoginText>
        <label>
          <InputLabel>Username</InputLabel>
          <InputArea
            type="text"
            placeholder="username..."
            required
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />
        </label>
        <label>
          <InputLabel>Password</InputLabel>
          <InputArea
            type="password"
            placeholder="******"
            required
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
          />
        </label>
        <LoginButton
          type="submit"
          onClick={(e) => {
            if (isAuthUser && isAuthPass) {
              e.preventDefault();
              onClickedAuth({ inputUser, inputPass });
              setInputUser("");
              setInputPass("");
            } else {
              alert(`Wrong username or password!`);
              return false;
            }
          }}
        >
          <Link
            to={isAuthUser === true && isAuthPass === true ? "/homepage" : "/"}
            style={{ textDecoration: "none", padding: ".5rem" }}
          >
            Log in
          </Link>
        </LoginButton>
        <SignUpArea>
          <p>Have no account? Register now!</p>
          <Link to="/signup">
            <SignUpButton>Sign Up</SignUpButton>
          </Link>
        </SignUpArea>
      </LoginForm>
    </LoginCanvas>
  );
};

const mapStateToProps = (state) => ({
  profiles: getAuthUserProfile(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickedAuth: (text) => dispatch(userLogin(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);