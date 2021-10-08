import { USER_LOGIN, USER_LOGOUT } from "./actions";

// const usersInitialState = {
//     login = {
//         username = [],
//         password = []
//     },
//     namaLengkap = [],
//     tanggalLahir = [],
//     umur = [],
//     courses = [
//         {
//             namaCourse = [],
//             isCompleted: false

//         }
//     ]
// };

export const users = (state = [], action) => {
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