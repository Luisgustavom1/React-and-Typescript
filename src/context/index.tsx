import { createContext, ReactNode, useState } from "react";

type Companys = {
  CPF: number;
  nome: string;
  email: string;
  date: Date;
}

interface Company {
  companys: Companys[]
  setCompanys: (value: Companys[]) => void
}

const AppContext = createContext<Company | undefined>(void 0)

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