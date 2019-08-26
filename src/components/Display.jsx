import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ResultContainer = styled.div`
  font-size: 50px;
  color: #ffffff;
  text-align: right;
`

const Display = () => {
  const { next, total } = useSelector(({ next, total }) => ({ next, total }))

  return (
    <ResultContainer>
      <p className="result">{next || total || '0'}</p>
    </ResultContainer>
  )
}

export default Display
