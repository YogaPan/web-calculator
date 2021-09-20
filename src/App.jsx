import React from 'react'
import styled from 'styled-components'
import CalcButton from './components/CalcButton'
import Display from './components/Display'
import useButtonKeydown from './hooks/useButtonKeydown'
import { BUTTON } from './constants/button'
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

const App = () => {
  useButtonKeydown()

  return (
    <AppContainer>
      <Display />
      <CalcButton.Row>
        <CalcButton.Functional value={BUTTON.AC} />
        <CalcButton.Functional value={BUTTON.NEG} />
        <CalcButton.Functional value={BUTTON.PERCENT} />
        <CalcButton.Operation value={BUTTON.DIV} />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="7" />
        <CalcButton value="8" />
        <CalcButton value="9" />
        <CalcButton.Operation value={BUTTON.MUL} />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="4" />
        <CalcButton value="5" />
        <CalcButton value="6" />
        <CalcButton.Operation value={BUTTON.SUB} />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="1" />
        <CalcButton value="2" />
        <CalcButton value="3" />
        <CalcButton.Operation value={BUTTON.ADD} />
      </CalcButton.Row>
      <CalcButton.Row>
        <CalcButton value="0" />
        <CalcButton value={BUTTON.DOT} />
        <CalcButton value={BUTTON.DOT} />
        <CalcButton.Operation value={BUTTON.EQ} />
      </CalcButton.Row>
    </AppContainer>
  )
}

export default App
