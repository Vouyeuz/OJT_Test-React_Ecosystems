import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createUser } from "./react_ecosystem/actions";

const SignUpCanvas = styled.div`
  background-color: white;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpForm = styled.form`
  border-radius: 5px 5px;
  border: 1px solid grey;
  min-height: 82.5vh;
  background: hsl(240, 70%, 60%, 0.2);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 8px hsl(240, 50%, 10%, 0.3);
`;

const SignUpText = styled.h1`
  text-align: center;
  margin: 0;
`;

const InputLabel = styled.h4`
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;

const InputArea = styled.input`
  width: 90%;
  height: 2rem;
  margin-left: 1rem;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 4px 8px hsl(240, 30%, 20%, 0.3);
`;

const SignUpButton = styled.button`
  background: #f0c14b;
  font-weight: 700;
  border-radius: 5px;
  width: 20%;
  height: 2rem;
  border: 3px solid;
  margin-top: 1rem;
  border-color: #a88734 #9c7e31 #846a29;
  box-shadow: 4px 8px hsl(240, 30%, 20%, 0.3);
`;

const SignUpContainer = ({ onClickedCreate }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignUpCanvas>
      <SignUpForm type="submit">
        <SignUpText>Register</SignUpText>
        <p>Please fill in this form to create an account.</p>

        <InputLabel>
          <b>Fullname</b>
        </InputLabel>
        <InputArea
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your fullname."
          required
        />
        <InputLabel>
          <b>Date of Birth:</b>
        </InputLabel>
        <InputArea
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          type="date"
          required
        />
        <InputLabel>
          <b>Phone</b>
        </InputLabel>
        <InputArea
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Enter your phone."
          required
        />

        <InputLabel>
          <b>Username</b>
        </InputLabel>
        <InputArea
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username."
          required
        />

        <InputLabel>
          <b>Password</b>
        </InputLabel>
        <InputArea
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          required
        />

        <p>
          By creating an account you agree to our
          <a href="#"> Terms & Privacy</a>.
        </p>

        <SignUpButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onClickedCreate({ name, birthday, phone, username, password });
            setName("");
            setBirthday("");
            setPhone("");
            setUsername("");
            setPassword("");
          }}
        >
          Sign Up
        </SignUpButton>

        <p>
          Already have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Sign in
          </Link>
          .
        </p>
      </SignUpForm>
    </SignUpCanvas>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onClickedCreate: (text) => dispatch(createUser(text)),
});

export default connect(null, mapDispatchToProps)(SignUpContainer);
