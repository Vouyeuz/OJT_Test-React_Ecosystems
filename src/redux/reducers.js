import {
  CREATE_USER,
  USER_LOGIN,
  USER_LOGOUT,
  REMOVE_USER,
  MARK_COURSE_AS_COMPLETED,
  REMOVE_COURSE,
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

const initialState = { profiles: [], courses: [] };
// authUsers: [
// ndak perlu dideklarasi dari initialState, biar CREATE_USER pertama itu jadi object index ke[0]. Jadi cukup defined struktur profile user di switch statement. alhamdulillah
// {
// isLoggedIn: false,
// profile: []
// }
// ],
export const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER: {
      const {
        text: { username, password, name, birthday, phone },
      } = payload;
      const newUser = {
        username: username,
        password: password,
        name: name,
        birthday: birthday,
        phone: phone,
      };
      return {
        ...state,
        profiles: state.profiles.concat(newUser),
      };
    }
    case USER_LOGIN: {
      const {
        text: { username, password },
      } = payload;
      if (
        {
          ...state,
          profiles: state.profiles.some((profile) => {
            profile.username === username && profile.password === password;
          }),
        }
      ) {
        return state;
      }
    }
    case USER_LOGOUT: {
      return state;
    }
    case REMOVE_USER: {
      const { text } = payload;
      return {
        ...state,
        profiles: state.profiles.splice(0, text),
      };
    }
    case MARK_COURSE_AS_COMPLETED: {
      const { text } = payload;
      // sama saja kayak buat data baru di state, soalnya awalnya cuma ada di local state, bukan di Redux-store.
      const completedCourse = {
        text,
        isCompleted: true,
      };
      return {
        ...state,
        courses: state.courses.concat(completedCourse),
      };
    }
    case REMOVE_COURSE: {
      const { text } = payload;
      return {
        ...state,
        courses: state.courses.filter((course) => {
          return course.text !== text;
        }),
      };
    }

    default:
      return state;
  }
};
