import { SyntheticEvent } from "react"
import { Link } from "react-router-dom"
import { AddCompanyStyle1, NewHeader, SelectStyle } from "./style"

export default function AddCompany(){

  function handleClick(e: HTMLFormElement){
    // e.preventDefault()
    
    const data = new FormData(e)
    
    console.log(e.target);
    

    console.log('oi');
    
  }

  return(
    <>
      <AddCompanyStyle1>
        <NewHeader>
          <article>
            <Link to='/'>
              <i className="fas fa-chevron-left"/>
            </Link>
            <h1>
              Cadastrar Empresa
            </h1>
          </article>
        </NewHeader>
        <form onSubmit={(e) => handleClick(e)}>
          <span>
            <SelectStyle>
              <label htmlFor='documentSelect'>Tipo de Documento</label>
              <select name="documentSelect" id="documentSelect">
                <option value="CPF">CPF</option>
                <option value="RG">RG</option>
                <option value="CNH">CNH</option>
              </select>
            </SelectStyle>
            <div>
              <input type='number' placeholder='Document' id='document' name='document'/>
            </div>
            <div>
              <input type='text' placeholder='Nome completo/Razão social'/>
            </div>
          </span>
          <span>
            <div>
              <input type='text' placeholder='E-mail'/>
            </div>
            <div>
              <input type='date'/>
            </div>
          </span>
          <button type='submit'>Salvar</button>
        </form>
      </AddCompanyStyle1>
    </>
  )
}