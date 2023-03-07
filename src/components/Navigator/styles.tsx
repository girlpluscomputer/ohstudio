import styled from 'styled-components'

export const Nav = styled.nav`
  width: 280px;
  min-height: 48px;
  height: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  backdrop-filter: blur(16px);
  background-color: rgba(232, 229, 228, 0.5);
  border-radius: 100px;
  position: sticky;

  @media (min-width: 768px) {
    width: 300px;
  }
`

export const NavItem = styled.a<{ active: boolean }>`
  cursor: pointer;
  width: ${({ active }) => (active ? '90%' : '100%')};
  height: ${({ active }) => (active ? '40px' : '48px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ active }) => active && 'white'};

  span {
    margin: 0;
    font-size: 14px;
  }
`
