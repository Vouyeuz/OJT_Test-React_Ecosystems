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
  padding: 1rem;
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
`;

const InputArea = styled.input`
  width: 90%;
  height: 2rem;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
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
  box-shadow: 2px 4px hsl(240, 30%, 20%, 0.3);
`;

const SignUpContainer = ({ onClickedCreate }) => {
  const [inputName, setInputName] = useState("");
  const [inputBirthday, setInputBirthday] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  //   const [inputCourses, setInputCourses] = useState("");

  console.log(inputBirthday);

  return (
    <SignUpCanvas>
      <SignUpForm>
        <SignUpText>Register</SignUpText>
        <p>Please fill in this form to create an account.</p>

        <InputLabel>
          <b>Fullname</b>
        </InputLabel>
        <InputArea
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          placeholder="Enter your fullname."
          required
        />
        <InputLabel>
          <b>Date of Birth:</b>
        </InputLabel>
        <InputArea
          value={inputBirthday}
          onChange={(e) => setInputBirthday(e.target.value)}
          type="date"
        />
        <InputLabel>
          <b>Age</b>
        </InputLabel>
        <InputArea
          value={inputAge}
          onChange={(e) => setInputAge(e.target.value)}
          type="number"
          placeholder="Enter your age."
          required
        />
        {/* <InputLabel>
          <b>Courses</b>
        </InputLabel>
        <InputArea
          value={inputCourses}
          onChange={(e) => setInputCourses(e.target.value)}
          type="submit"
          placeholder="Enter your age."
          required
        /> */}

        <InputLabel>
          <b>Username</b>
        </InputLabel>
        <InputArea
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          type="text"
          placeholder="Enter username."
          required
        />

        <InputLabel>
          <b>Password</b>
        </InputLabel>
        <InputArea
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          required
        />

        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>

        <SignUpButton
          onClick={() => {
            onClickedCreate(
              inputName,
              inputBirthday,
              inputAge,
              inputUsername,
              inputPassword
            );
            setInputName("");
            setInputBirthday("");
            setInputAge("");
            setInputUsername("");
            setInputPassword("");
          }}
          href="/homepage"
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

// no need access to State, just create, no rendering
// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  onClickedCreate: (text, password, date, number) =>
    dispatch(createUser(text, password, date, number)),
});

export default connect(null, mapDispatchToProps)(SignUpContainer);
