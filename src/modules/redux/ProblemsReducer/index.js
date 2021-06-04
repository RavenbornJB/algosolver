import React from "react";

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

    fetch("http://127.0.0.1:5000/get_problems", {
        method: "GET",
    }).then(response => response.json()).then(json => {
        console.log(json)
        if (json.success) {
            dispatch(setProblemState(json.problems))
        }
    });
}




export const selectProblemTable = state => state.problemReducer.table;

