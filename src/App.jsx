import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import actions from './actions'
import CalcButton from './components/CalcButton'
import Display from './components/Display'
import './styles/index.css'

const AppContainer = styled.div`
  text-align: center;
  background-color: #000;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
`

const getButtonNameByKey = key => {
  if (key === 'Escape') return 'AC'
  if (key === '/') return '÷'
  if (['Enter', '='].includes(key)) return '='
  if ('x*'.includes(key)) return 'x'
  if ('+-%.'.includes(key)) return key
  if (/\d/.test(key)) return key
}

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const handleKeyPress = e => {
      const value = getButtonNameByKey(e.key)
      if (value) dispatch(actions.calculate(value))
    }
    window.addEventListener('keydown', handleKeyPress, true)
    return window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <AppContainer>
      <Display />
      <CalcButton.Row>
        <CalcButton.Functional value="AC" />
        <CalcButton.Functional value="+/-" />
        <CalcButton.Functional value="%" />
        <CalcButton.Operator value="÷" />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="7" />
        <CalcButton value="8" />
        <CalcButton value="9" />
        <CalcButton.Operator value="x" />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="4" />
        <CalcButton value="5" />
        <CalcButton value="6" />
        <CalcButton.Operator value="-" />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="1" />
        <CalcButton value="2" />
        <CalcButton value="3" />
        <CalcButton.Operator value="+" />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="0" />
        <CalcButton value="." />
        <CalcButton value="." />
        <CalcButton.Operator value="=" />
      </CalcButton.Row>
    </AppContainer>
  )
}

export default App
