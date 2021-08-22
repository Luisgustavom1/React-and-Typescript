import styled from "styled-components";

export const ListStyle = styled.main`
  width: 80%;

  margin: 45px auto;
  
  background-color: white;
`

export const ListHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 30px;

  padding-left: 26px;

  height: 64px;

  background: #2E2E3A;
  color: white;

  a{
    color: white;
  }
`

export const ListTableStyle = styled.table`
  margin: 33px 0;
  padding-bottom: 40px;
  width: 100%;

  color: #484E6A;
  thead {
    width: 100%;

    font-size: 14px;
    th {
      padding: 0 0 15px 26px;

      text-align: start;
    }
  }

  tbody {
    width: 100%;

    padding-top: 15px;

    td {
      padding: 10px 0 10px 15px;

      border-bottom: 2px solid #DCDCDC;
    }
    
    td:nth-child(5) {
      text-align: center;
    }
  }
`

interface TrProps {
  i: number
}

export const TrStyle = styled.tr<TrProps>`

  background-color: ${props => props.i % 2 === 0 ? '#F5F5F5' : 'white'};
`