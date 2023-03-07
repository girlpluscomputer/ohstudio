'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 30px 40px;
  }
`
