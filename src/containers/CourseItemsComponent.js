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
    

    return (
      <CourseItemCanvas>
        <CourseArea>
          <CourseName>{`${this.props.name}`}</CourseName>
          <CourseStatus completion={this.props.isCompleted}>{this.props.isCompleted}</CourseStatus>
        </CourseArea>
      </CourseItemCanvas>
    );
  }
}

export default CourseItemsComponent;
