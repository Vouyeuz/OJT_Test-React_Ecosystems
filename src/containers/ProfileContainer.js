import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "a a a"
    "b b b"
    "c c c"
    "d d d"
    "e e e";
`;

const NamaLengkap = styled.div`
  grid-area: a;
  background: hsl(240, 70%, 30%, 0.5);
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 1px 4px grey;
`;
const Username = styled(NamaLengkap)`
  grid-area: b;
`;
const TanggalLahir = styled(NamaLengkap)`
  grid-area: c;
`;
const Umur = styled(NamaLengkap)`
  grid-area: d;
`;
const MyCourse = styled(NamaLengkap)`
  grid-area: e;
`;

const ProfileContainer = ({ username, name, birthday, age }) => {
  return (
    <ProfileCanvas>
      <ProfileForm>
        <NamaLengkap>{`Nama Lengkap: ${name.text}`}</NamaLengkap>
        <Username>{`Username: ${username.text}`}</Username>
        <TanggalLahir>{`Tanggal Lahir: ${birthday.date}`}</TanggalLahir>
        <Umur>{`Umur: ${age.number}`}</Umur>
        <MyCourse>{`Course Diambil: `}</MyCourse>
      </ProfileForm>
    </ProfileCanvas>
  );
};

const mapStateToProps = (state) => ({
  username: getUsername(state),
  name: getName(state),
  birthday: getBirthday(state),
  age: getAge(state),
  // courses: getCourses(state),
});

export default connect(mapStateToProps)(ProfileContainer);
