import React, { Component } from "react";
import styled from "styled-components";
import CourseItemsComponent from "./CourseItemsComponent";

const CourseCanvas = styled.div`
  border-radius: 0 0 5px 5px;
  min-height: 82.5vh;
  background: hsl(240, 70%, 30%, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyCoursesTitle = styled.h1`
  color: hsl(240, 100%, 10%, 0.9);
`;

const IncompleteCourses = styled.h2`
  color: hsl(60, 100%, 35%);
`;

const CompletedCourses = styled(IncompleteCourses)`
  color: hsl(120, 100%, 40%);
`;

export class CourseContainer extends Component {
  static defaultProps = {
    courses: [
      {
        id: 1,
        courseName: "Build Modern Project with React",
        progress: 100,
        isCompleted: true,
      },
      {
        id: 2,
        courseName: "React Testing and Debugging",
        progress: 100,
        isCompleted: true,
      },
      {
        id: 3,
        courseName: "Javascript Pattern",
        progress: 0,
        isCompleted: false,
      },
      {
        id: 4,
        courseName: "Learning Javascript Debugging",
        progress: 22,
        isCompleted: false,
      },
      {
        id: 5,
        courseName: "Complete Git Guide Understand",
        progress: 0,
        isCompleted: false,
      },
      { id: 6, courseName: "Learn Redux", progress: 100, isCompleted: true },
      {
        id: 7,
        courseName: "Learn Redux-Thunx",
        progress: 70,
        isCompleted: false,
      },
      {
        id: 8,
        courseName: "Learn Selectors and Styled-Components",
        progress: 80,
        isCompleted: false,
      },
    ],
  };
  render() {

    const completedCourses = this.props.courses.filter(completed => completed.isCompleted === true);
    const incompleteCourses = this.props.courses.filter(incomplete => incomplete.isCompleted === false);
    
    return (
      <CourseCanvas>
        <MyCoursesTitle>My Courses List</MyCoursesTitle>
        <IncompleteCourses isCompleted={this.props.isCompleted}>
          Courses In Progress:
        </IncompleteCourses>
        {incompleteCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            name={course.courseName}
            progress={course.progress}
            isCompleted={course.isCompleted}
          />
        ))}

        <CompletedCourses isCompleted={this.props.isCompleted}>
          Completed Courses:
        </CompletedCourses>

        {completedCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            name={course.courseName}
            progress={course.progress}
            isCompleted={course.isCompleted}
          />
        ))}
      </CourseCanvas>
    );
  }
}

export default CourseContainer;
