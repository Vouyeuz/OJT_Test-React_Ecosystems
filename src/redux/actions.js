export const USER_LOGIN = "USER_LOGIN";
export const userLogin = (text) => ({
  type: USER_LOGIN,
  payload: { text },
});

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const REMOVE_USER = "REMOVE_USER";
export const removeUser = (text) => ({
  type: REMOVE_USER,
  payload: { text },
});

export const CREATE_USER = "CREATE_USER";
export const createUser = (text) => ({
  type: CREATE_USER,
  payload: { text },
});

export const MARK_COURSE_AS_COMPLETED = "MARK_COURSE_AS_COMPLETED";
export const markCourseAsCompleted = (text) => ({
  type: MARK_COURSE_AS_COMPLETED,
  payload: { text },
});

export const REMOVE_COURSE = "REMOVE_COURSE";
export const removeCourse = (text) => ({
  type: REMOVE_COURSE,
  payload: { text },
});
