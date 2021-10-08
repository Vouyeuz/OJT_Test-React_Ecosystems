import { USER_LOGIN, USER_LOGOUT } from "./actions";

const initialState = {
    username = [],
    password = [],
    namaLengkap = [],
    tanggalLahir = [],
    umur = [],
    course = [
        {
            namaCourse = [],
            isCompleted: false

        }
    ]
};

export const users = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN: {

        }
        case USER_LOGOUT: {

        }
    
        default:
            return state;
    }
}