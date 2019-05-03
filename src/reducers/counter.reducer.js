
import { commonConstants } from '../constants';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

function counterActions (state = initialState, action) {
  switch (action.type) {
    case commonConstants.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case commonConstants.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case commonConstants.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case commonConstants.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export {
  counterActions
};
