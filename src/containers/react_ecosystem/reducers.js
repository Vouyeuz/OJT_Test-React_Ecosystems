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
//   phone: [],
//   courses: {
//     courseName: [],
//     isCompleted: false,
//   },
// };

const initialState = {
  authUsers: [
    // ndak perlu dideklarasi dari initialState, biar CREATE_USER pertama itu jadi object index ke[0]. Jadi cukup defined struktur profile user di switch statement. alhamdulillah
    // {
    // isLoggedIn: false,
    // profile: []
    // }
  ]
};

export const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER: {
      const {
        text: { username, password, name, birthday, phone },
      } = payload;

      const newUser = {
        isLoggedIn: true,
        profile: {
          username: username,
          password: password,
          name: name,
          birthday: birthday,
          phone: phone
        }
      };

      return state.authUsers.concat(newUser);
    }
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAIL:
    case USER_LOGOUT:

    default:
      return state;
  }
};
