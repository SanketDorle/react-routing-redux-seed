import { commonConstants } from '../constants';

export const connectAction = {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
};


// export const increment = () => {
function increment() {
    return dispatch => {
        dispatch({
            type: commonConstants.INCREMENT_REQUESTED
        })

        dispatch({
            type: commonConstants.INCREMENT
        })
    }
}

function incrementAsync() {
    return dispatch => {
        dispatch({
            type: commonConstants.INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: commonConstants.INCREMENT
            })
        }, 3000)
    }
}

function decrement() {
    return dispatch => {
        dispatch({
            type: commonConstants.DECREMENT_REQUESTED
        })

        dispatch({
            type: commonConstants.DECREMENT
        })
    }
}

function decrementAsync() {
    return dispatch => {
        dispatch({
            type: commonConstants.DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: commonConstants.DECREMENT
            })
        }, 3000)
    }
}