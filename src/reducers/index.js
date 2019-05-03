import { combineReducers } from 'redux'
import { counterActions } from './counter.reducer'

export default combineReducers({
  counter : counterActions
})
