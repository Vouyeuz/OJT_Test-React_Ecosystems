import React from "react";
import styled from "styled-components";
import CourseContainer from "../containers/CourseContainer";

const NameDetail = styled.div`
  grid-area: a;
  background: hsl(240, 70%, 30%, 0.5);
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 1px 4px grey;
`;
const UsernameDetail = styled(NameDetail)`
  grid-area: b;
`;
const BirthdayDetail = styled(NameDetail)`
  grid-area: c;
`;
const AgeDetail = styled(NameDetail)`
  grid-area: e;
`;
const PhoneDetail = styled(NameDetail)`
  grid-area: d;
`;
const MyCourseDetail = styled(NameDetail)`
  grid-area: e;
`;

const ProfileDetailContainer = ({ profiles }) => {
  const profile = profiles.profile;

  const birthdate = new Date(profile.birthday).toUTCString();
  let currentDate = new Date().toUTCString();
  const age = Math.floor((new Date(currentDate) - new Date(birthdate)) / 86400000 / 365);

  return (
    <div>
      <NameDetail>{`Nama Lengkap: ${profile.name}`}</NameDetail>
      <UsernameDetail>{`Username: ${profile.username}`}</UsernameDetail>
      <BirthdayDetail>{`Tanggal Lahir: ${profile.birthday}`}</BirthdayDetail>
      <AgeDetail>{`Usia: ${age} tahun`}</AgeDetail>
      <PhoneDetail>{`Nomor HP: ${profile.phone}`}</PhoneDetail>
      <MyCourseDetail>{`Course Diambil:`}</MyCourseDetail>
      <CourseContainer />
    </div>
  );
};


export default ProfileDetailContainer;
