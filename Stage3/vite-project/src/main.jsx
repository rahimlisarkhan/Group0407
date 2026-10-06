import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp from './App.jsx'

const divRoot = document.getElementById('root');

const hazirElement = createRoot(divRoot);

hazirElement.render(<MyApp />)
