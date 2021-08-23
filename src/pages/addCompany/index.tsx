import AppContext from "context"
import { FormEvent, useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { AddCompanyStyle1, NewHeader, SelectStyle } from "./style"

interface Errors {
  cpf: string,
  nome: string,
  email: string,
  date: string
}

export default function AddCompany(){
  const [errors, setErrors] = useState<Errors>({
    cpf: '',
    nome: '',
    email: '',
    date: ''
  })
  const { companys, setCompanys } = useContext(AppContext)

  const history = useHistory()

  function handleClick(e: FormEvent<HTMLFormElement>): void{
    e.preventDefault();
    
    const nome = document.querySelector('#nome') as HTMLInputElement;
    const cpf = document.querySelector('#document') as HTMLInputElement;
    const date = document.querySelector('#date') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;

    if(!cpf.value) {
      const erro = {
        nome: errors.nome,
        date: errors.date,
        email: errors.email,
        cpf: 'O documento é obrigatório',
      }      
      setErrors(erro);
      console.log('document');
    };

    if(!nome.value) {
      setErrors({
        cpf: errors.cpf,
        date: errors.date,
        email: errors.email,
        nome: 'O nome é obrigatório',
      });
    };

    if(!email.value) {
      setErrors({
        nome: errors.nome,
        cpf: errors.cpf,
        date: errors.date,
        email: 'O email é obrigatório',
      });
    };

    if(!date.value) {
      setErrors({
        nome: errors.nome,
        cpf: errors.cpf,
        email: errors.email,
        date: 'A data é obrigatório',
      })
      return
    };

    const newCompany = {
      nome: nome.value,
      cpf: cpf.value,
      date: date.value,
      email: email.value
    };

    const companyUpdate = [...companys]
    companyUpdate.push(newCompany)
    
    setCompanys(companyUpdate)

    history.push('/')
  };

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
              {errors.cpf}
            </div>
            <div>
              <input type='text' placeholder='Nome completo/Razão social' id='nome' name='nome'/>
              {errors.nome}
            </div>
          </span>
          <span>
            <div>
              <input type='text' placeholder='E-mail' id='email' name='email'/>
              {errors.email}
            </div>
            <div>
              <input type='date' id='date' name='date'/>
              {errors.date}
            </div>
          </span>
          <button type='submit'>Salvar</button>
        </form>
      </AddCompanyStyle1>
    </>
  )
}