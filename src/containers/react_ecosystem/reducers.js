import {
  CREATE_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./actions";

const initialState = {
  username: [],
  password: [],
  name: [],
  birthday: [],
  phone: [],
  courses: {
    courseName: [],
    isCompleted: false,
  },
};

export const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER: {
      const { text, password, date, number } = payload;

      const newUsername = { text };
      const newPassword = { password };
      const newName = { text };
      const newBirthday = { date };
      const newPhone = { number };
      

      return {
        ...state,
        username: state.username.concat(newUsername),
        password: state.password.concat(newPassword),
        name: state.name.concat(newName),
        birthday: state.birthday.concat(newBirthday),
        phone: state.phone.concat(newPhone)
      };
    }
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAIL:
    case USER_LOGOUT:

    default:
      return state;
  }
};
