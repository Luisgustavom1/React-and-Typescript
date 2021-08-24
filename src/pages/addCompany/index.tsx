import Input from "components/input"
import AppContext from "context"
import { FormEvent, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AddCompanyStyle1, NewHeader, SelectStyle } from "./style"

export default function AddCompany(): JSX.Element{
  const [errors, setErrors] = useState<string[]>([])

  const { companys, setCompanys, companyEdit, setCompanyEdit } = useContext(AppContext)

  function verification(nome: HTMLInputElement, cpf: HTMLInputElement, date: HTMLInputElement, cidade: HTMLInputElement): void{
    if(!nome.value) {
      const erro = [...errors]
      erro.push('Nome é obrigatório') 
      setErrors(erro)
    } 
    if(!cpf.value) {
      const erro = [...errors]
      erro.push('cpf é obrigatório') 
      setErrors(erro)
    }
    if(!date.value) {
      const erro = [...errors]
      erro.push('date é obrigatório') 
      setErrors(erro)
    }
    if(!cidade.value) {
      const erro = [...errors]
      erro.push('cidade é obrigatório') 
      setErrors(erro)
    }
  }

  function handleClick(e: FormEvent<HTMLFormElement>): void{
    e.preventDefault();
    
    const nome = document.querySelector('#nome') as HTMLInputElement;
    const cpf = document.querySelector('#document') as HTMLInputElement;
    const date = document.querySelector('#date') as HTMLInputElement;
    const cidade = document.querySelector('#cidade') as HTMLInputElement;  
    
    verification(nome, cpf, date, cidade) 

    if(errors.length === 0) {
      const newCompany = {
        nome: nome.value,
        cpf: cpf.value,
        date: date.value,
        cidade: cidade.value
      };
  
      const companyUpdate = [...companys]
      companyUpdate.push(newCompany)
      
      localStorage.setItem('AllTheCompanys', JSON.stringify(companyUpdate))
      setCompanys(companyUpdate)
      
      alert('Sucesso')
  
      setCompanyEdit({
        nome: '',
        cpf: '',
        date: '',
        cidade: ''
      })
      
      nome.value = '';
      cpf.value = '';
      date.value = '';
      cidade.value = '';  

    } 
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
              <Input
                identify='document'
                placeHolder='Insira seu documento'
                value={companyEdit.cpf}
              />
            </div>
            <div>
              <Input
                identify='nome'
                placeHolder='Nome completo/Razão social'
                value={companyEdit.nome}
              />
            </div>
          </span>
          <span>
            <div>
              <Input
                identify='cidade'
                placeHolder='Sua Cidade'
                value={companyEdit.cidade}
              />
            </div>
            <div>
              <Input
                identify='date'
                placeHolder='date'
                type='Date'
                value={companyEdit.date}
              />
            </div>
          </span>
          <button type='submit'>Salvar</button>
        </form>
      </AddCompanyStyle1>
    </>
  )
}