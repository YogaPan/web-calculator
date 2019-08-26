import React from 'react'
import styled from 'styled-components'
import CalcButton from './components/CalcButton'
import Display from './components/Display'

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

const App = () => (
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

export default App
