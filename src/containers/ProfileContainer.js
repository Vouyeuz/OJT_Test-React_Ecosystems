import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ProfileDetailContainer from "./ProfileDetailContainer";
import {
  getUsername,
  getName,
  getBirthday,
  getAge,
} from "./react_ecosystem/selectors";

const ProfileCanvas = styled.div`
  border-radius: 0 0 5px 5px;
  min-height: 82.5vh;
  background: hsl(240, 70%, 30%, 0.25);
`;

const ProfileForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "a"
    "b"
    "c"
    "d"
    "e";
`;



const ProfileContainer = ({ names }) => {
  return (
    <ProfileCanvas>
      <ProfileForm>
        {names.map((name) => (
          <ProfileDetailContainer key={name.text} name={name} />
        ))}
      </ProfileForm>
    </ProfileCanvas>
  );
};

const mapStateToProps = (state) => ({
  // username: getUsername(state),
  names: state.users,
  // birthday: getBirthday(state),
  // age: getAge(state),
  // courses: getCourses(state),
});

export default connect(mapStateToProps)(ProfileContainer);
