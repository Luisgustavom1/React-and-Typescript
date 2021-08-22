import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
  }

  button, input, text-area{
    border: 0;
    outline: 0;
  }

  a, ul, ol{
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-columns: 64px auto;

  grid-template-areas: 'aside header'
                       'aside content';
  
  background-color: #E5E5E5;
  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
  main {
    grid-area: content;
  }
`