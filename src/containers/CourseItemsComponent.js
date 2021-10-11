import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { markCourseAsCompleted, removeCourse } from "./react_ecosystem/actions";

const CourseItemCanvas = styled.div`
  background: white;
  border-radius: 8px;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  padding: 1rem;
  box-shadow: 4px 8px grey;
`;

const CourseArea = styled.div`
  width: 40rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "a a a b c"
    ". . . b c";
`;

const CourseName = styled.h4`
  grid-area: a;
  color: black;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
`;

const CourseButton = styled.button`
  grid-area: b;
  margin-left: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  background: ${(props) => (props.completion ? "green" : "yellow")};
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


const CourseItemsComponent = ({course, onClickedCompleted, onClickedRemove}) => {
  const courseStatus = course.isCompleted ? "Completed" : "Learn";
  const courseName = course.courseName;

  return (
    <CourseItemCanvas>
      <CourseArea>
        <CourseName>{`${courseName}`}</CourseName>
        <CourseButton
          onClick={() => {
            onClickedCompleted(courseName);
          }}
          completion={course.isCompleted}
        >{`${courseStatus}`}</CourseButton>
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
  onClickedCompleted: (text) => dispatch(markCourseAsCompleted(text)),
  onClickedRemove: (text) => dispatch(removeCourse(text)),
});

export default connect(null, mapDispatchToProps)(CourseItemsComponent);
