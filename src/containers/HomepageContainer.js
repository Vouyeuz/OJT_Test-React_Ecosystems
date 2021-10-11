import React from "react";
import styled from "styled-components";
import CoursesLibraryComponent from "../components/CoursesLibraryComponent";
import CourseContainer from "./CourseContainer";

const HomepageCanvas = styled.div`
  border-radius: 0 0 5px 5px;
  min-height: 82.5vh;
  background: hsl(240, 70%, 30%, 0.25);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    "a a c"
    "b b b"
    "b b b"
    "b b b"
    "b b b"
    "b b b"
    "b b b"
    "b b b";
`;

const WelcomeMessageContainer = styled.div`
  grid-area: a;
  background: hsl(240, 70%, 70%, 0.1);
  margin: 3px;
  padding-left: 10px;
`;

const WelcomeMessageHeader = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: -10px;
`;

const WelcomeMessageBody = styled(WelcomeMessageHeader)`
  font-size: 1rem;
  font-weight: 400;
`;

const MyCourse = styled.div`
  grid-area: b;
  background: hsl(240, 70%, 30%, 0.1);
  margin: 3px;
  width: 100%;
`;

const CoursesLibrary = styled(MyCourse)`
  grid-area: c;
  background: hsl(240, 70%, 30%, 0.);
`;

const HomepageContainer = () => {
  return (
    <HomepageCanvas>
      <WelcomeMessageContainer>
        <WelcomeMessageHeader>Selamat datang, username. </WelcomeMessageHeader>
        <WelcomeMessageBody>
          Kamu sudah menyelesaikan 2 courses. Ayo terus semangat pelajari
          courses lainnya.
        </WelcomeMessageBody>
      </WelcomeMessageContainer>
      <MyCourse><CourseContainer /></MyCourse>
      <CoursesLibrary><CoursesLibraryComponent /></CoursesLibrary>
    </HomepageCanvas>
  );
};

export default HomepageContainer;
