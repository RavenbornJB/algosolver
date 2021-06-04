import React from "react";

const initialState = { table: []}

export const PROBLEMS =  [
    { id: 1, name: 'Sum two numbers', solved_by: 21, rank: 4, description: "g", tests: [] },
    { id: 2, name: 'Multiply two numbers', solved_by: 19, rank: 22, description: "f", tests: [] },
    { id: 3, name: 'Happy primes', solved_by: 16, rank: 9, description: "e", tests: [] },
    { id: 4, name: 'To Go Or Not To Go?', solved_by: 25, rank: 15, description: "d", tests: [] },
    { id: 5, name: 'Where is my cake?', solved_by: 12, rank: 45, description: "c", tests: [] },
    { id: 6, name: 'Jack and Jane', solved_by: 31, rank: 2, description: "b", tests: [] },
    { id: 7, name: 'Funny mushrooms', solved_by: 9, rank: 30, description: "a", tests: [] },
    { id: 8, name: 'Funny mushrooms', solved_by: 9, rank: 30, description: "a", tests: [] }
    ]

export async function getProblems() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return PROBLEMS;
}


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
    const table = await getProblems();
    console.log("fetchinggggggg")
    dispatch(setProblemState(table));
}




export const selectProblemTable = state => state.problemReducer.table;

