import { handleActions } from 'redux-actions'
import { BUTTON } from '../constants/button'
import { div100, isNumber, operate, reverse } from '../utils'
import actions from './actions'

export const initialState = {
  total: null,
  next: null,
  operation: null
}

const rootReducer = handleActions(
  {
    [actions.calculate]: (state, { payload: button }) => {
      if (button === BUTTON.AC) return initialState
      if (button === '0' && state.next === '0') return { ...state }

      if (isNumber(button)) {
        let total = state.total
        let next = button
        const operation = state.operation

        if (state.next && state.next !== '0') next = state.next + button
        if (!state.operation) total = null

        return { total, next, operation }
      }

      if (button === BUTTON.DOT) {
        const getNext = () => {
          if (!state.next) return '0.'
          if (state.next.includes('.')) return state.next
          return `${state.next}.`
        }
        return { ...state, next: getNext() }
      }

      if (button === BUTTON.NEG) {
        let total = state.total
        let next = state.next
        const operation = state.operation

        if (state.next) return { total, next: reverse(state.next), operation }
        if (state.total) total = reverse(state.total)
        return { total, next, operation }
      }

      if (button === BUTTON.PERCENT) {
        if (state.operation && state.next) {
          const result = operate(state.total, state.next, state.operation)
          return {
            total: div100(result),
            next: null,
            operation: null
          }
        }

        if (state.next) {
          return {
            total: state.total,
            next: div100(state.next),
            operation: state.operation
          }
        }

        return { ...state }
      }

      if (button === BUTTON.EQ) {
        if (state.next && state.operation) {
          return {
            total: operate(state.total, state.next, state.operation),
            next: null,
            operation: null
          }
        }
        return { ...state }
      }

      // Process operation button cases from here.
      if (state.operation) {
        return {
          total: operate(state.total, state.next, state.operation),
          next: null,
          operation: button
        }
      }

      if (!state.next) return { ...state, operation: button }

      return {
        total: state.next,
        next: null,
        operation: button
      }
    }
  },
  initialState
)

export default rootReducer
