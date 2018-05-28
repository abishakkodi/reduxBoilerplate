import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/types';

const initialState = {
  counterValue: 0,
  incrementCount: 0,
  decrementCount: 0
};

export default function(state = initialState, action) {
  let newVal = state.counterValue;
  let incCount = state.incrementCount;
  let decCount = state.decrementCount;

  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counterValue: newVal + 1,
        incrementCount: incCount + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counterValue: newVal - 1,
        decrementCount: decCount + 1
      };
    default:
      return state;
  }
}