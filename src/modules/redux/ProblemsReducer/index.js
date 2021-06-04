import React from "react";
import {BACKEND_URL} from "../../constants";

const initialState = { table: []}


const problemsActions = {
    setProblemsState: "setProblemsState"
}

export default function problemReducer(state = initialState, action) {
    switch (action.type) {
        case problemsActions.setProblemsState:
            return {
                ...state,
                table: action.payload
            }
        default:
            return state;
    }
}

export const setProblemState = (table) => ({
    type: problemsActions.setProblemsState,
    payload: table
})



export const fetchTable = () => async (dispatch, getState) => {

    fetch(BACKEND_URL + "/get_problems", {
        method: "GET",
    }).then(response => response.json()).then(json => {
        console.log(json)
        if (json.success) {
            dispatch(setProblemState(json.problems))
        }
    });
}




export const selectProblemTable = state => state.problemReducer.table;

