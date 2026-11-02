import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import './assets/css/LineIcons.2.0.css'; 
import './assets/css/lindy-uikit.css';
import './index.css';

createRoot(document.getElementById('root')!).render(

    <StrictMode>
    <App />
  </StrictMode>
)