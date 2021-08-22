import styled from "styled-components";

export const ContentStyle = styled.div`
  width: 100%;
  height: 100%;

  padding: 41px 0 0 44px;


  section{
    display: flex;
    align-items: center;
    gap: 26px;

    margin-top: 22px;
    img{
      width: 71px;
    }

    a{
      width: 22%;
      min-width: 130px;
      height: 160px;

      background: #FFFFFF;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      color: #343E47;

      font-size: 16px;
      font-weight: 500;
    }
  }
`