import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  img {
    border-radius: 12px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`
