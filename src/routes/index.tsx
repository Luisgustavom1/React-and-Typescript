import InitialPage from "../pages/initial";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "pages/list";
import AddCompany from "pages/addCompany";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={InitialPage}/>
        <Route path='/list' exact component={List}/>
        <Route path='/add' exact component={AddCompany}/>
      </Switch>
    </BrowserRouter>
  )
}