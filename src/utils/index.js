import Big from 'big.js'

const isNumber = item => /[0-9]+/.test(item)

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || '0')
  // If dividing or multiplying, then 1 maintains current value in cases of null
  const two = Big(
    numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0')
  )

  if (operation === '+') {
    return one.plus(two).toString()
  }
  if (operation === '-') {
    return one.minus(two).toString()
  }
  if (operation === 'x') {
    return one.times(two).toString()
  }
  if (operation === '÷') {
    if (two === '0') {
      alert('Divide by 0 error')
      return '0'
    }

    return one.div(two).toString()
  }
  throw Error(`Unknown operation '${operation}'`)
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {
        total: obj.total,
        next: obj.next,
        operation: obj.operation
      }
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return {
          total: obj.total,
          next: obj.next + buttonName,
          operation: obj.operation
        }
      }
      return {
        total: obj.total,
        next: buttonName,
        operation: obj.operation
      }
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      const next = obj.next === '0' ? buttonName : obj.next + buttonName
      return {
        next,
        total: null,
        operation: obj.operation
      }
    }
    return {
      next: buttonName,
      total: null,
      operation: obj.operation
    }
  }

  if (buttonName === '%') {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation)
      return {
        total: Big(result)
          .div(Big('100'))
          .toString(),
        next: null,
        operation: null
      }
    }
    if (obj.next) {
      return {
        total: obj.total,
        next: Big(obj.next)
          .div(Big('100'))
          .toString(),
        operation: obj.operation
      }
    }
    return {
      total: obj.total,
      next: obj.next,
      operation: obj.operation
    }
  }

  if (buttonName === '.') {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes('.')) {
        return {
          total: obj.total,
          next: obj.next,
          operation: obj.operation
        }
      }
      return {
        total: obj.total,
        next: `${obj.next}.`,
        operation: obj.operation
      }
    }
    return {
      total: obj.total,
      next: '0.',
      operation: obj.operation
    }
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      }
    }

    // '=' with no operation, nothing to do
    return {
      total: obj.total,
      next: obj.next,
      operation: obj.operation
    }
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {
        total: obj.total,
        next: (-1 * parseFloat(obj.next)).toString(),
        operation: obj.operation
      }
    }
    if (obj.total) {
      return {
        total: (-1 * parseFloat(obj.total)).toString(),
        next: obj.next,
        operation: obj.operation
      }
    }
    return {
      total: obj.total,
      next: obj.next,
      operation: obj.operation
    }
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    }
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return {
      total: obj.total,
      next: obj.next,
      operation: buttonName
    }
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName
  }
}
