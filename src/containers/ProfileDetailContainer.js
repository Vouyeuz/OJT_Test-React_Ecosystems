import React from "react";
import styled from "styled-components";

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
const PhoneDetail = styled(NameDetail)`
  grid-area: d;
`;
const MyCourseDetail = styled(NameDetail)`
  grid-area: e;
`;

const ProfileDetailContainer = ({ profile }) => {
  return (
    <div>
      <NameDetail>{`Nama Lengkap: ${profile.name}`}</NameDetail>
      <UsernameDetail>{`Username: ${profile.username}`}</UsernameDetail>
      <BirthdayDetail>{`Tanggal Lahir: ${profile.birthday}`}</BirthdayDetail>
      <PhoneDetail>{`Nomor HP: ${profile.phone}`}</PhoneDetail>
      <MyCourseDetail>{`Course Diambil: `}</MyCourseDetail>
    </div>
  );
};

export default ProfileDetailContainer;
