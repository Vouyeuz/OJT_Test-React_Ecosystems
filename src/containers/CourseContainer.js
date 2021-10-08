import React from "react";
import styled from "styled-components";

const CourseCanvas = styled.div`
  border-radius: 0 0 5px 5px;
  min-height: 82.5vh;
  background: hsl(240, 70%, 30%, 0.25);
`;

const CourseContainer = ({courses = []}) => {
  return <CourseCanvas>Course</CourseCanvas>;
};

export default CourseContainer;
