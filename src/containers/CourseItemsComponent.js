import React, { Component } from "react";
import styled from "styled-components";

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
    "a a a a c"
    "b b b . c";
`;

const CourseName = styled.h4`
  grid-area: a;
  color: black;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
`;

const CourseProgress = styled.div`
  grid-area: b;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: hsl(120, 10%, 80%);
  text-align: center;
  line-height: 30px;
  color: black;
  font-weight: 700;
`;

const CourseProgressBar = styled(CourseProgress)`
//   width: 70%;
  width: ${props => props.progress}%;
  border-radius: 5px;
  background-color: hsl(120, 90%, 50%);

`;

const CourseStatus = styled.div`
  grid-area: c;
  font-weight: 700;
  font-size: 1rem;;
  background: ${(props) => (props.completion ? "green" : "yellow")};
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export class CourseItemsComponent extends Component {
  render() {
    let completionStatus = this.props.isCompleted
      ? "Completed"
      : "Learn More";

    return (
      <CourseItemCanvas>
        <CourseArea>
          <CourseName>{`${this.props.name}`}</CourseName>
          <CourseProgress>
            <CourseProgressBar progress={this.props.progress}>{`${this.props.progress}%`}</CourseProgressBar>
          </CourseProgress>
          <CourseStatus completion={this.props.isCompleted}>{completionStatus}</CourseStatus>
        </CourseArea>
      </CourseItemCanvas>
    );
  }
}

export default CourseItemsComponent;
