import React from "react";
import {BACKEND_URL} from "../../constants";
import SuccessMessage from "../../Common/components/SuccessMessage";
import ErrorMessage from "../../Common/components/ErrorMessage";

const initialState = { user: null, error: null}

const authActions = {
    setUser: "setUser",
    setError: "setError",
    logout: "logout",
    update: "update"
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
        case authActions.update:
            let newState = {...state};
            newState.user[action.payload[0]] = action.payload[1];
            return newState;
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

    fetch(BACKEND_URL + "/get_user", {
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

export const updateAttribute = (key, value) => ({
    type: authActions.update,
    payload: [key, value]
});


export const update = (attribute_index, state, setError, setSuccess) => async (dispatch, getState) => {
    const form_keys = ['new_password', 'nick', 'country', 'birthdate'];
    const attribute_names = ['password', 'nick', 'country', 'birthdate'];
    let user = getState().authReducer.user
    let formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    for (let i = 0; i <= form_keys.length; i++) {
        if (i === attribute_index) {
            formData.append(form_keys[i], state[attribute_names[i]]);
        }
        else {
            formData.append(form_keys[i], user[attribute_names[i]]);
        }
    }

    fetch(BACKEND_URL + "/update_user", {
        body: formData,
        method: "POST",
    }).then(response => response.json()).then(json => {
        if (json.success) {
            let newUser = {...user};
            newUser[form_keys[attribute_index]] = state[attribute_names[attribute_index]];
            dispatch(setUser(newUser));
            setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
            setError(<div />);
        } else {
            setError(<ErrorMessage>Invalid input!</ErrorMessage>);
            setSuccess(<div />);
        }
    });
};




export const selectUser = state => state.authReducer.user;
export const selectError = state => state.authReducer.error;
