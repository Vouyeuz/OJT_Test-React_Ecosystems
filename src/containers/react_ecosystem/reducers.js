import {
  CREATE_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./actions";

// const initialState = {
//   username: [],
//   password: [],
//   name: [],
//   birthday: [],
//   age: [],
//   courses: {
//     courseName: [],
//     isCompleted: false,
//   },
// };

export const users = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER: {
      const { text } = payload;
      const newName = { text };
      return state.concat(newName);
    }
    // case CREATE_USER: {
    //   const { text, password, date, number } = payload;
    //   const newUsername = { text };
    //   const newPassword = { password };
    //   const newName = { text };
    //   const newBirthday = { date };
    //   const newAge = { number };
    //   const newCourse = {
    //     courseName: text,
    //     isCompleted: false
    //   };

    //   return {
    //     ...state,
    //     username: state.username.concat(newUsername),
    //     password: state.password.concat(newPassword),
    //     name: state.name.concat(newName),
    //     birthday: state.birthday.concat(newBirthday),
    //     age: state.age.concat(newAge),
    //     courses: state.courses.concat(newCourse)
    //   };
    // }
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAIL:
    case USER_LOGOUT:

    default:
      return state;
  }
};
