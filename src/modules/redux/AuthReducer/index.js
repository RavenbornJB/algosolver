import ACCOUNTS from "../../Auth/scripts/auth";
import ErrorMessage from "../../Common/components/ErrorMessage";
import React from "react";

const initialState = { user: null, error: null}

async function getAccounts() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return ACCOUNTS;
}


const authActions = {
    setUser: "setUser",
    setError: "setError",
    logout: "logout"
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authActions.setUser:
            return {
                error: null,
                user: action.payload
            };
        case authActions.setError:
            return {
                ...state,
                error: action.payload
            };
        case authActions.logout:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}


export const setUser = (user) => ({
    type: authActions.setUser,
    payload: user
});

export const setError = (errorText) => ({
    type: authActions.setError,
    payload: errorText
});

export const logout = () => ({
    type: authActions.logout,
});

export const register = (email, user) => async (dispatch, getState) => {
    const accounts = await getAccounts();
    if (accounts.has(email)) {
        dispatch(setError("Wrong email or password"))
    }
}


export const login = (email, password, history) => async (dispatch, getState) => {
        const accounts = await getAccounts();
        if (!accounts.has(email) || ACCOUNTS.get(email).password !== password ) {
            dispatch(setError("Wrong email or password"))
        }
        else {
            dispatch(setUser(accounts.get(email)));
            history.replace("/problemlist");
        }
}



export const selectUser = state => state.authReducer.user;
export const selectError = state => state.authReducer.error;
