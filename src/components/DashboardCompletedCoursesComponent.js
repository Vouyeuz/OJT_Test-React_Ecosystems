import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeCourse } from "../containers/react_ecosystem/actions";

const CourseItemCanvas = styled.div`
  background: white;
  border-radius: 8px;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  padding: 1rem;
  box-shadow: 4px 8px grey;
  width: 80%;
`;

const CourseArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "a a a . c"
    "b b b . c";
`;

const CourseName = styled.h4`
  grid-area: a;
  color: black;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
`;

const CourseStatus = styled.div`
  grid-area: b;
  margin-left: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  background: green;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RemoveButton = styled.button`
  grid-area: c;
  margin-left: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  background: red;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashboardCompletedCoursesComponent = ({ course, onClickedRemove }) => {
  const courseStatus = course.isCompleted ? "Progress Bar Filled ✓" : null;
  const courseName = course.text;

  return (
    <CourseItemCanvas>
      <CourseArea>
        <CourseName>{`${courseName}`}</CourseName>
        <CourseStatus>{`${courseStatus}`}</CourseStatus>
        <RemoveButton
          onClick={() => {
            onClickedRemove(courseName);
          }}
        >
          Remove
        </RemoveButton>
      </CourseArea>
    </CourseItemCanvas>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onClickedRemove: (text) => dispatch(removeCourse(text)),
});

export default connect(
  null,
  mapDispatchToProps
)(DashboardCompletedCoursesComponent);
