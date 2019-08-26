import Big from 'big.js'

export const isNumber = item => /[0-9]+/.test(item)
export const reverse = origin => -1 * parseFloat(origin).toString()
export const div100 = num => Big(num).div(Big('100')).toString()

export const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || '0')
  const two = Big(
    numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0')
  )

  switch (operation) {
    case '+':
      return one.plus(two).toString()
    case '-':
      return one.minus(two).toString()
    case 'x':
      return one.times(two).toString()
    case '÷': {
      if (two === '0') {
        alert('Divide by 0 error')
        return '0'
      }

      return one.div(two).toString()
    }
    default:
      throw Error(`Unknown operation '${operation}'`)
  }
}
