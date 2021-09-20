import { BUTTON } from '../constants/button'
import reducer from './reducer'
import actions from './actions'

const { ADD, SUB, MUL, DIV, EQ, DOT, AC, PERCENT, NEG } = BUTTON

const pressButtons = buttons => {
  let state = undefined
  for (const button of buttons)
    state = reducer(state, actions.calculate(button))
  return state
}

function test(buttons, expectedState) {
  it(`buttons ${buttons.join(',')} -> ${JSON.stringify(expectedState)}`, () => {
    const actualState = pressButtons(buttons)
    expect(actualState).toMatchObject(expectedState)
  })
}

describe('integer input', () => {
  test(['8'], { next: '8' })
  test(['8', '7'], { next: '87' })

  test(['0'], { next: '0' })
  test(['0', '0'], { next: '0' })
  test(['0', '8'], { next: '8' })
})

describe('decimal input', () => {
  test(['0', DOT, '4'], { next: '0.4' })
  test([DOT, '4'], { next: '0.4' })
  test(['0', '0', DOT, '4'], { next: '0.4' })
  test(['0', DOT, DOT, '4'], { next: '0.4' })

  test(['0', DOT, '4', '0'], { next: '0.40' })
  test(['0', DOT, '4', '0', '2'], { next: '0.402' })

  test([DOT, '4', SUB, DOT, '2'], {
    total: '0.4',
    next: '0.2',
    operation: SUB
  })
  test([DOT, '5', SUB, DOT, '2', EQ], { total: '0.3' })
})

describe('100 percent', () => {
  test(['3', PERCENT], { next: '0.03' })
  test(['3', PERCENT, MUL, '2', EQ], { total: '0.06' })
  test(['3', PERCENT, MUL, '2'], {
    total: '0.03',
    operation: MUL,
    next: '2'
  })
  test(['3', MUL, '3', PERCENT], { total: '0.09' })
})

describe('switch sign', () => {
  test(['5', NEG], { next: '-5' })
  test(['5', NEG, NEG], { next: '5' })
  test([NEG, '5'], { next: '5' })
  test(['0', NEG], { next: '0' })
})

describe('operation', () => {
  test(['8', ADD, '9'], {
    total: '8',
    next: '9',
    operation: ADD
  })
  test(['8', ADD, '9', EQ], { total: '17' })
  test(['0', '0', ADD, '0', EQ], { total: '0' })
  test(['6', ADD, '6', EQ, '9'], { next: '9' })
  test(['6', ADD, '9', EQ, ADD], {
    total: '15',
    operation: ADD
  })
  test(['6', ADD, '9', EQ, ADD, '6'], {
    total: '15',
    operation: ADD,
    next: '6'
  })
  test(['6', ADD, '9', EQ, ADD, '6', EQ], { total: '21' })
  test(['2', ADD, EQ, '5', EQ], { total: '7' })

  test([ADD], { operation: ADD })
  test([ADD, '4'], {
    next: '4',
    operation: ADD
  })
  test([ADD, '4', ADD], {
    total: '4',
    operation: ADD
  })
  test([ADD, '4', ADD, ADD], {
    total: '4',
    operation: ADD
  })
  test([ADD, '1', ADD, '3'], {
    next: '3',
    total: '1',
    operation: ADD
  })
  test([ADD, '4', '6'], {
    next: '46',
    operation: ADD
  })
  test([ADD, '3', ADD, '8', EQ], { total: '11' })

  test(['5', MUL, '2', EQ], { total: '10' })
  test(['10', DIV, '2', EQ], { total: '5' })
  test(['10', DIV, '6', EQ], { total: '1.666667' })

  test(['2', DIV, DIV], {
    total: '2',
    operation: DIV
  })
  test(['5', MUL, MUL], {
    total: '5',
    operation: MUL
  })
  test(['3', DIV, MUL, ADD, SUB, MUL], {
    total: '3',
    operation: MUL
  })
})

describe('all clear', () => {
  test([AC], {})
  test(['5', ADD, '6', AC], {})
  test(['5', ADD, '6', EQ, AC], {})
  test([ADD, '7', AC], {})
})
