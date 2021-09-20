import React, { useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import actions from '../actions'

function CalcButton({ className, value }) {
  const dispatch = useDispatch()
  const handleClick = useCallback(
    () => dispatch(actions.calculate(value)),
    [dispatch, value]
  )

  return (
    <button className={className} type="button" onClick={handleClick}>
      {value}
    </button>
  )
}

CalcButton.propTypes = {
  value: PropTypes.string.isRequired
}

const StyledCalcButton = styled(CalcButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  border-radius: 37.5px;
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

StyledCalcButton.Operation = styled(StyledCalcButton)`
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

StyledCalcButton.Zero = styled(StyledCalcButton)`
  width: 170px;
  justify-content: flex-start;
  padding-left: 30px;
`

StyledCalcButton.Row = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

export default StyledCalcButton
