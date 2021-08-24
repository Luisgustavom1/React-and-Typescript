import AppContext from 'context'
import { MouseEvent, useContext } from 'react'
import { Companys } from '../core/companys'

export function UseDelete(companys: Companys[], e: MouseEvent<HTMLParagraphElement>){
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