import React from "react";
import styled from "styled-components";

const NameDetail = styled.div`
  grid-area: a;
  background: hsl(240, 70%, 30%, 0.5);
  padding: 1rem;
  box-shadow: 0 4px grey;
  font-weight: 700;
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

const ProfileDetailComponent = ({ profile }) => {

  const birthdate = new Date(profile.birthday).toUTCString();
  let currentDate = new Date().toUTCString();
  const age = Math.floor((new Date(currentDate) - new Date(birthdate)) / 86400000 / 365);

  return (
    <div>
      <NameDetail>{`Fullname: ${profile.name}`}</NameDetail>
      <UsernameDetail>{`Username: ${profile.username}`}</UsernameDetail>
      <BirthdayDetail>{`Birth of date: ${profile.birthday}`}</BirthdayDetail>
      <AgeDetail>{`Age: ${age} years old`}</AgeDetail>
      <PhoneDetail>{`Mobile: ${profile.phone}`}</PhoneDetail>
    </div>
  );
};


export default ProfileDetailComponent;
