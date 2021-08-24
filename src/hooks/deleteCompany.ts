import { MouseEvent, useContext } from 'react'

import AppContext from 'context'
import { Companys } from '../core/companys'

export default function deleteCompany(companys: Companys[], e: MouseEvent<HTMLParagraphElement>){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setCompanys } = useContext(AppContext)

  const allTheCompanys = [...companys]

  const index = allTheCompanys.indexOf(companys.filter((company: Companys) => 
  company.cpf === e.currentTarget.id
  )[0])
  
  allTheCompanys.splice(index, 1)

  setCompanys(allTheCompanys)  
    
  return{
    allTheCompanys
  }
}