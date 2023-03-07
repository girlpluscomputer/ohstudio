'use client'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    width: 60%;
    height: 70vh;
    padding: 40px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
  }
`

export const HeroSection = styled.section`
  display: none;

  span {
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    gap: 10px;
  }
`

export const Tag = styled.span`
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: rgba(232, 229, 228, 0.5);
  border-radius: 100px;
  padding: 8px 12px;
`
export const Layout = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`
