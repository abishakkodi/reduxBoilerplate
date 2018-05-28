import { INCREMENT_COUNTER , DECREMENT_COUNTER } from './types';

export const incrementCount = () => dispatch => {
   dispatch({
    type: INCREMENT_COUNTER,
    payload: null
   })
}


export const decrementCount = () => dispatch => {
   dispatch({
    type: DECREMENT_COUNTER,
    payload: null
   })
}