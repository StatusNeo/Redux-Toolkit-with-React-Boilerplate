import {exampleAction} from './Example.slice';

export const fetchIncrementDetails = (payload) => async (dispatch) => {
    try {
        dispatch(exampleAction.incrementCount())
    } catch (e) {
        console.error(e.response)
    }   
}

export const fetchDecrementDetails = () => async (dispatch) => {
    try {
        dispatch(exampleAction.decrementCount())
    } catch (e) {
        console.error(e.response)
    }   
}