import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { GlobalStoreProvider } from './shared/store/global/GlobalStore';

function App() {
  return (
    <BrowserRouter>
      <GlobalStoreProvider>
        <Router />
      </GlobalStoreProvider>
    </BrowserRouter>
  );
}

export default App;
