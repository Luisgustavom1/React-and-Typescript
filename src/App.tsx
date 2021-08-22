import Aside from './components/aside';
import Header from './components/header';
import { Container, GlobalStyle } from './styles/global'
import Routes from 'routes';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header/>
        <Aside/>
        <main>
          <Routes/>
        </main>
      </Container>
    </>
  );
}

export default App;
