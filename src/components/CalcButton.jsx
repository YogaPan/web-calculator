import styled from 'styled-components'
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import actions from '../actions'

function CalcButton({ className, value }) {
  const dispatch = useDispatch()
  const calculate = useCallback(value => dispatch(actions.calculate(value)), [
    dispatch
  ])

  return (
    <button
      className={className}
      type="button"
      onClick={() => calculate(value)}
    >
      {value}
    </button>
  )
}

CalcButton.propTypes = {
  buttonName: PropTypes.string.isRequired
}

const StyledCalcButton = styled(CalcButton)`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: 10px;
  background: #1c1c1c;
  font-size: 35px;
  color: #fff;
  &:hover {
    color: #000;
    background-color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }
`

StyledCalcButton.Operator = styled(StyledCalcButton)`
  color: #fff;
  background-color: #ff9500;
`

StyledCalcButton.Functional = styled(StyledCalcButton)`
  color: #000;
  background-color: #d4d4d2;
  &:hover {
    color: #fff;
    background-color: #1c1c1c;
  }
`
StyledCalcButton.Row = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

export default StyledCalcButton
