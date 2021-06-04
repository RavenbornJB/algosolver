import React from "react";

const initialState = { user: null, error: null}

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


export const login = (email, password, history) => async (dispatch, getState) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch("http://127.0.0.1:5000/get_user", {
        body: formData,
        method: "POST",
    }).then(response => response.json()).then(json => {
        console.log(json)
        if (json.success) {
            let birthdate = new Date(Date.parse(json.user.birthdate))
            json.user.birthdate = birthdate.getDate() + "-"+(birthdate.getMonth()+1) + "-" +birthdate.getFullYear()
            dispatch(setUser(json.user))
            history.push("/problemlist");
        }
        else {
            dispatch(setError("Wrong email or password"))
        }
    });

}


export const selectUser = state => state.authReducer.user;
export const selectError = state => state.authReducer.error;
