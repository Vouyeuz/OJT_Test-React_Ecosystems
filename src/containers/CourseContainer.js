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
  state = {
    courses: [
      {
        id: 1,
        courseName: "Build Modern Project with React",
        isCompleted: false,
      },
      {
        id: 2,
        courseName: "React Testing and Debugging",
        isCompleted: false,
      },
      {
        id: 3,
        courseName: "Javascript Pattern",
        isCompleted: false,
      },
      {
        id: 4,
        courseName: "Learning Javascript Debugging",
        isCompleted: false,
      },
      {
        id: 5,
        courseName: "Complete Git Guide Understand",
        isCompleted: false,
      },
      { id: 6, courseName: "Learn Redux", isCompleted: false },
      {
        id: 7,
        courseName: "Learn Redux-Thunx",
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

    const completedCourses = this.state.courses.filter(completed => completed.isCompleted === true);
    const incompleteCourses = this.state.courses.filter(incomplete => incomplete.isCompleted === false);
    console.log(completedCourses)
    console.log(incompleteCourses)

    return (
      <CourseCanvas>
        <MyCoursesTitle>My Courses List</MyCoursesTitle>
        <IncompleteCourses isCompleted={this.state.isCompleted}>
          Courses In Progress:
        </IncompleteCourses>
        {incompleteCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            name={course.courseName}
            isCompleted={course.isCompleted}
          />
        ))}

        <CompletedCourses isCompleted={this.state.isCompleted}>
          Completed Courses:
        </CompletedCourses>

        {completedCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            name={course.courseName}
            isCompleted={course.isCompleted}
          />
        ))}
      </CourseCanvas>
    );
  }
}

export default CourseContainer;
