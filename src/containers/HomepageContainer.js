import React from "react";
import styled from "styled-components";

const HomepageCanvas = styled.div`
  border-radius: 0 0 5px 5px;
  min-height: 82.5vh;
  background: hsl(240, 70%, 30%, 0.25);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "a a c"
    "b b c"
    "b b c"
    "b b ."
    "b b .";
`;

const WelcomeMessageContainer = styled.div`
  grid-area: a;
  background: hsl(240, 70%, 70%, 0.1);
  margin: 3px;
  margin-top: -15px;
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
`;

const CoursesLibrary = styled(MyCourse)`
  grid-area: c;
  background: hsl(240, 70%, 30%, 0.1);
`;

const HomepageContainer = ({courses}) => {
  return (
    <HomepageCanvas>
      <WelcomeMessageContainer>
        <WelcomeMessageHeader>Selamat datang, username. </WelcomeMessageHeader>
        <WelcomeMessageBody>
          Kamu sudah menyelesaikan 2 courses. Ayo terus semangat pelajari
          courses lainnya.
        </WelcomeMessageBody>
      </WelcomeMessageContainer>
      <MyCourse>{/*courses.map(course => <CourseContainer key={course.id} course={course} />)*/}</MyCourse>
      <CoursesLibrary>courseslib</CoursesLibrary>
    </HomepageCanvas>
  );
};

export default HomepageContainer;
