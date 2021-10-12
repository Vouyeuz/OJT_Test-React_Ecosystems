export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const userLoginSuccess = (text) => ({
  type: USER_LOGIN_SUCCESS,
  payload: text,
});

export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const userLoginFail = (text) => ({
  type: USER_LOGIN_FAIL,
  payload: text,
});

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = (text) => ({
  type: USER_LOGOUT,
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
