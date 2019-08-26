import { handleActions } from 'redux-actions'
import actions from '../actions'
import { div100, isNumber, operate, reverse } from '../utils'

const initialState = {
  total: null,
  next: null,
  operation: null
}

const rootReducer = handleActions(
  {
    [actions.calculate]: (state, { payload: buttonName }) => {
      if (buttonName === 'AC') return initialState
      if (buttonName === '0' && state.next === '0') return { ...state }

      if (isNumber(buttonName)) {
        let total = state.total
        let next = buttonName
        const operation = state.operation

        if (state.next && state.next !== '0') next = state.next + buttonName
        if (!state.operation) total = null

        return { total, next, operation }
      }

      if (buttonName === '.') {
        const getNext = () => {
          if (!state.next) return '0.'
          if (state.next.includes('.')) return state.next
          return `${state.next}.`
        }
        return { ...state, next: getNext() }
      }

      if (buttonName === '+/-') {
        let total = state.total
        let next = state.next
        const operation = state.operation

        if (state.next) return { total, next: reverse(state.next), operation }
        if (state.total) total = reverse(state.total)
        return { total, next, operation }
      }

      if (buttonName === '%') {
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

      if (buttonName === '=') {
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
          operation: buttonName
        }
      }

      if (!state.next) return { ...state, operation: buttonName }

      return {
        total: state.next,
        next: null,
        operation: buttonName
      }
    }
  },
  initialState
)

export default rootReducer
