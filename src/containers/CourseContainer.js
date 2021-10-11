import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CourseItemsComponent from "./CourseItemsComponent";
import { markCourseAsCompleted, removeCourse } from "./react_ecosystem/actions";

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
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          id: 1,
          courseName: "Build Modern Project with React",
          isCompleted: true,
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
      ],
    };
    // this.onClickedCompleted = this.onClickedCompleted.bind(this);
    // this.onClickedRemove = this.onClickedRemove.bind(this);
  }
  render() {
    const incompleteCourses = this.state.courses.filter(
      (incomplete) => incomplete.isCompleted === false
    );
    const completedCourses = this.state.courses.filter(
      (completed) => completed.isCompleted === true
    );
    console.log(completedCourses);
    console.log(incompleteCourses);

    return (
      <CourseCanvas>
        <MyCoursesTitle>My Courses List</MyCoursesTitle>
        <IncompleteCourses isCompleted={this.state.isCompleted}>
          Courses In Progress:
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

        <CompletedCourses isCompleted={this.state.isCompleted}>
          Completed Courses:
        </CompletedCourses>

        {completedCourses.map((course) => (
          <CourseItemsComponent
            key={course.id}
            course={course}
            // courseName={course.courseName}
            // isCompleted={course.isCompleted}
            // onClickedRemove={this.onClickedRemove}
          />
        ))}
      </CourseCanvas>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // onClickedCompleted: (text) => dispatch(markCourseAsCompleted(text)),
  // onClickedRemove: (text) => dispatch(removeCourse(text)),
});

export default connect(null, mapDispatchToProps)(CourseContainer);
