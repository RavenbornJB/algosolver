import { configureStore } from '@reduxjs/toolkit'

const initialState = { user: null}



function loginReducer(state = initialState, action) {

    if (action.type === 'login') {
        return {
            user: action.user
        };
    }

    if (action.type === 'logout') {
        return {
            ...state,
            user: null
        };
    }
    return state;
}

const LoginStore = configureStore({reducer: loginReducer});


export const login = (user) => {
    return {
        type: 'login',
        user: user
    };
}


export const logout = () => {
    return {
        type: 'logout'
    };
}


export const selectUser = state => state.user;


export default LoginStore;
