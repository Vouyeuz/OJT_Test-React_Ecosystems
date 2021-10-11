import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CoursesLibraryCanvas = styled.div`
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
`;

const CourseLibItems = styled.h5`
    margin: 0;
    margin-bottom: .8rem;

`;

const CoursesPageLink = styled.div`
    margin-top: 1.5rem;
`;

export class CoursesLibraryComponent extends Component {
  render() {
    return (
      <CoursesLibraryCanvas>
        <CourseLibItems>Build Modern Project with React.</CourseLibItems>
        <CourseLibItems>React Testing and Debugging.</CourseLibItems>
        <CourseLibItems>Javascript Pattern.</CourseLibItems>
        <CoursesPageLink>
            <Link to="/course">
              <small>Show more...</small>
            </Link>
        </CoursesPageLink>
      </CoursesLibraryCanvas>
    );
  }
}

export default CoursesLibraryComponent;
