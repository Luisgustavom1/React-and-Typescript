import { createContext, ReactNode, useState } from "react";

import { Companys } from '../core/companys'

interface Company {
  companys: Companys[] 
  setCompanys: (value: Companys[]) => void
  companyEdit: Companys
  setCompanyEdit: (value: Companys) => void
}

const AppContext = createContext<Company>({
  companys: [],
  setCompanys: () => {},
  companyEdit: {
    cpf: '',
    nome: '',
    cidade: '',
    date: ''
  },
  setCompanyEdit: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export function AppProvider(props: ProviderProps){
  const { children } = props;
  
  const [companys, setCompanys] = useState<Companys[]>(JSON.parse(localStorage.getItem('AllTheCompanys') || '[]'));

  const [companyEdit, setCompanyEdit] = useState<Companys>({
    cpf: '',
    nome: '',
    cidade: '',
    date: ''
  })

  return(
    <AppContext.Provider value={{companys, setCompanys, companyEdit, setCompanyEdit}}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContext