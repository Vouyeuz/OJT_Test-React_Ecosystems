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
const AgeDetail = styled(NameDetail)`
  grid-area: d;
`;
const MyCourseDetail = styled(NameDetail)`
  grid-area: e;
`;

const ProfileDetailContainer = ({ name }) => {
  return (
    <div>
      <NameDetail>{`Nama Lengkap: ${name.text}`}</NameDetail>
      {/* <UsernameDetail>{`Username: ${username}`}</UsernameDetail>
      <BirthdayDetail>{`Tanggal Lahir: ${birthday}`}</BirthdayDetail>
      <AgeDetail>{`Umur: ${age}`}</AgeDetail>
      <MyCourseDetail>{`Course Diambil: `}</MyCourseDetail> */}
    </div>
  );
};

export default ProfileDetailContainer;
