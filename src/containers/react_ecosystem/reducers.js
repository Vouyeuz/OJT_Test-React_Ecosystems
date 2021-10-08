import {
  CREATE_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./actions";

const usersInitialState = {
  username: [],
  password: [],
  name: [],
  birthday: [],
  age: [],
  courses: {
    courseName: [],
    isCompleted: false,
  },
};

export const users = (state = usersInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER: {
      const { text, password, date, number } = payload;
      const newUsername = {};
      const newPassword = {};

      const newName = {};

      const newBirthday = {};

      const newAge = {};
      return {
        ...state,
        username: state.username.concat(newUsername),
        password: state.password.concat(newPassword),
        name: state.username.concat(newName),
        birthday: state.username.concat(newBirthday),
        age: state.age.concat(newAge),
      };
    }
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAIL:
    case USER_LOGOUT:

    default:
      return state;
  }
};
