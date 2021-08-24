import { MouseEvent, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from 'context';
import { UseDelete } from 'hooks/useCompany';
import { Companys } from 'core/companys';

import { ListHeaderStyle, ListStyle, ListTableStyle, TrStyle } from './styled';

export default function List(): JSX.Element{
  const history = useHistory()

  const { companys, setCompanyEdit } = useContext(AppContext)

  function deleteCompany(event: MouseEvent<HTMLParagraphElement>){
    const { allTheCompanys } = UseDelete(companys, event)
    
    localStorage.setItem('AllTheCompanys', JSON.stringify(allTheCompanys))   
  };

  function editCompany(event: MouseEvent<HTMLParagraphElement>){
    const { allTheCompanys } = UseDelete(companys, event)

    const companyWillEdit = allTheCompanys.filter((company: Companys) => company.cpf === event.currentTarget.id)
    
    setCompanyEdit(companyWillEdit[0])

    history.push('/add')
  }

  return(
    <ListStyle>
      <div>
        <ListHeaderStyle>
          <Link to='/'>
            <i className="fas fa-chevron-left"/>
          </Link>
          <h1>Empresas</h1>
        </ListHeaderStyle>
        <ListTableStyle>
            <thead>
              <tr>
                <th>Identificação</th>
                <th>Cidade/UF</th>
                <th>CPF</th>
                <th>Data de Abertura</th>
              </tr>
            </thead>
            <tbody>
              {
                companys.map((company: Companys, i: number) => {
                  return <TrStyle i={i} key={company.cpf}>
                          <td>{company.nome}</td>
                          <td>{company.cidade}</td>
                          <td>{company.cpf}</td>
                          <td>{company.date}</td>
                          <td>
                            <p id={company.cpf} onClick={(e) => editCompany(e)}>Editar</p>
                            <p id={company.cpf} onClick={(e) => deleteCompany(e)}>Excluir</p>
                          </td>
                        </TrStyle>
                })
              }
            </tbody>
          </ListTableStyle>
      </div>
    </ListStyle>
  )
}
