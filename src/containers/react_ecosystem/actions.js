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
  payload: text,
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = ({text, password, date, number}) => ({
    type: CREATE_USER,
    payload: {text, password, date, number}
});

// export const CREATE_USER = "CREATE_USER";
// export const createUser = (text) => ({
//   type: CREATE_USER,
//   payload: { text },
// });
