// import { CALCULATE } from '../constants'
import { handleActions } from 'redux-actions'
import actions from '../actions'
import calculate from '../utils'

const initialState = {
  total: null,
  next: null,
  operation: null
}

const rootReducer = handleActions(
  {
    [actions.calculate]: (state, { payload: buttonName }) => {
      return calculate(state, buttonName)
    }
  },
  initialState
)

export default rootReducer
