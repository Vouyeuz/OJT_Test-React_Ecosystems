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



export class CourseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          isCompleted: false,
        },
        {
          id: 9,
          courseName: "Learning Webpack",
          isCompleted: false,
        },
        {
          id: 10,
          courseName: "ESLint - Checking for Syntax and Logic Errors",
          isCompleted: false,
        },
        {
          id: 11,
          courseName: "Learn JIRA Software (2019)",
          isCompleted: false,
        },
      ],
    };
    // kok ndak bisa pass function ya pake bind?
    // this.onClickedCompleted = this.onClickedCompleted.bind(this);
    // this.onClickedRemove = this.onClickedRemove.bind(this);
  }
  render() {
    const incompleteCourses = this.state.courses.filter(
      (incomplete) => incomplete.isCompleted === false
    );
    // const completedCourses = this.state.courses.filter(
    //   (completed) => completed.isCompleted === true
    // );

    return (
      <CourseCanvas>
        <MyCoursesTitle>Library of Secret Courses</MyCoursesTitle>
        <IncompleteCourses isCompleted={this.state.isCompleted}>
          Courses Available:
        </IncompleteCourses>
        {incompleteCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            course={course}
            // courseName={course.courseName}
            // isCompleted={course.isCompleted}
            //   onClickedCompleted={this.onClickedCompleted}
            //   onClickedRemove={this.onClickedRemove}
          />
        ))}

       

        {/* {completedCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            course={course}
            courseName={course.courseName}
            isCompleted={course.isCompleted}
            onClickedRemove={this.onClickedRemove}
          />
        ))} */}
      </CourseCanvas>
    );
  }
}


export default CourseContainer;
