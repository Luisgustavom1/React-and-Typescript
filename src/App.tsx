import Aside from './components/aside';
import Header from './components/header';
import { Container, GlobalStyle } from './styles/global'
import Routes from './routes';
import { AppProvider } from 'context';

function App() {
  return (
    <AppProvider>
      <GlobalStyle/>
      <Container>
        <Header/>
        <Aside/>
        <main>
          <Routes/>
        </main>
      </Container>
    </AppProvider>
  );
}

export default App;
