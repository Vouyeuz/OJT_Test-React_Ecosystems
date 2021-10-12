import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CoursesLibraryComponent from "../components/CoursesLibraryComponent";
import DashboardCompletedCoursesComponent from "../components/DashboardCompletedCoursesComponent";
import WelcomeMessageComponent from "../components/WelcomeMessageComponent";
import {
  getAuthUserCourses,
  getAuthUserProfile,
} from "./react_ecosystem/selectors";

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

const MyCourses = styled.div`
  grid-area: b;
  background: hsl(240, 70%, 30%, 0.1);
  margin: 3px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyCoursesTitle = styled.h1`
  color: green;
`;

const CoursesLibrary = styled.div`
  grid-area: c;
  background: hsl(240, 70%, 30%, 0);
`;

const HomepageContainer = ({ profiles, courses }) => {
  return (
    <HomepageCanvas>
      <WelcomeMessageContainer>
        {profiles.map((profile) => (
          <WelcomeMessageComponent key={profile.username} profile={profile} coursesCount={courses.map(course => course)} />
        ))}
      </WelcomeMessageContainer>

      <MyCourses>
        <MyCoursesTitle>Completed Courses:</MyCoursesTitle>
        {courses.map((course) => (
          <DashboardCompletedCoursesComponent
            key={course.text}
            course={course}
          />
        ))}
      </MyCourses>
      <CoursesLibrary>
        <CoursesLibraryComponent />
      </CoursesLibrary>
    </HomepageCanvas>
  );
};
const mapStateToProps = (state) => ({
  profiles: getAuthUserProfile(state),
  courses: getAuthUserCourses(state),
});

export default connect(mapStateToProps)(HomepageContainer);
