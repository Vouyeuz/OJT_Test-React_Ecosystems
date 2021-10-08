export const USER_LOGIN = "USER_LOGIN";
export const userLogin = text => ({
    type: USER_LOGIN,
    payload: text
});

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = text => ({
    type: USER_LOGOUT,
    payload: text
});