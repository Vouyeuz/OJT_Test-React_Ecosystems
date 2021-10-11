import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CoursesLibraryComponent from "../components/CoursesLibraryComponent";
import WelcomeMessageComponent from "../components/WelcomeMessageComponent";
import CourseContainer from "./CourseContainer";
import { getAuthUserProfile } from "./react_ecosystem/selectors";

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

const MyCourse = styled.div`
  grid-area: b;
  background: hsl(240, 70%, 30%, 0.1);
  margin: 3px;
  width: 100%;
`;

const CoursesLibrary = styled(MyCourse)`
  grid-area: c;
  background: hsl(240, 70%, 30%, 0);
`;

const HomepageContainer = ({ userProfiles }) => {
  return (
    <HomepageCanvas>
      <WelcomeMessageContainer>
        {userProfiles.map((profiles) => (
          <WelcomeMessageComponent key={Number.toString()} profiles={profiles}/> 
        ))}
      </WelcomeMessageContainer>
      <MyCourse>
        <CourseContainer />
      </MyCourse>
      <CoursesLibrary>
        <CoursesLibraryComponent />
      </CoursesLibrary>
    </HomepageCanvas>
  );
};

const mapStateToProps = (state) => ({
  userProfiles: getAuthUserProfile(state),
});

export default connect(mapStateToProps)(HomepageContainer);
