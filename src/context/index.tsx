import { createContext, ReactNode, useState } from "react";

type Companys = {
  cpf: string;
  nome: string;
  email: string;
  date: string;
}

interface Company {
  companys: Companys[] 
  setCompanys: (value: Companys[]) => void
}

const AppContext = createContext<Company>({
  companys: [],
  setCompanys: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export function AppProvider(props: ProviderProps){
  const { children } = props;
  
  const [companys, setCompanys] = useState<Companys[]>([])

  return(
    <AppContext.Provider value={{companys, setCompanys}}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContext