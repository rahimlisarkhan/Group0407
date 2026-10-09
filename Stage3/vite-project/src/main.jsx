import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import MyApp from './App.jsx';

const divRoot = document.getElementById('root');

const hazirElement = createRoot(divRoot);

hazirElement.render(<MyApp />);
