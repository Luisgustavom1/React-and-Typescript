import { ListHeaderStyle } from "pages/list/styled";
import styled from "styled-components";

export const AddCompanyStyle1 = styled.div`
  width: 80%;
  height: 400px;

  margin: 0 auto;

  background-color: white;
  span{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;

    padding-left: 80px;
    
    margin-top: 40px;
    input{
      border-bottom: 1px solid #E0E0E0;

      padding: 5px 0;

      font-size: 16px;

      width: 220px;
    }

    div{
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    div:nth-child(3){
      input{
        width: 440px;
      }
    }
  }
  
  button {
    background: #363642;

    color: white;

    font-size: 14px;
    font-weight: 500;
    
    padding: 10px 25px;

    margin: 20px 0 0 80px;

    border-radius: 4px;

    &:hover{
      filter: brightness(1.1)
    }
  }
`

export const SelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 220px;

  position: relative;
  top: -7px;
  label {
    font-size: 12px;
    color: #9E9E9E;
  }
  
  select{
    border: none;
    outline: none;
    border-bottom: 1px solid #E0E0E0;

    padding: 5px 0; 

    font-size: 16px;

    margin-top: 5px;
  }
`

export const NewHeader = styled(ListHeaderStyle)`
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 25px
  }
`