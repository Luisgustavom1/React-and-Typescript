import styled from "styled-components";

export const AsideStyle = styled.aside`
  background: #1B1D29;

  height: 100vh;
  
  img{
    width: 24px;
    height: 24px;
  }
`

export const IconOne = styled.section`
  height: 64px;

  display: grid;
  grid-template-columns: 4px auto;
  grid-template-areas: 'aside main';

  background: #2E2E3A;

  div {
    grid-area: main;

    display: grid;
    place-items: center;
  }
  aside {
    grid-area: aside;
    background: #45B491;
  }
`

export const IconContainer = styled.div`
  height: 64px;
  width: 100%;

  display: grid;
  place-items: center;
`