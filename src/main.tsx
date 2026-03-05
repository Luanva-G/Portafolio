import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App';
import './assets/css/LineIcons.2.0.css'; 
import './assets/css/animate.css';
import './assets/css/glightbox.min.css';
import './assets/css/tiny-slider.css';
import './assets/css/lindy-uikit.css';

createRoot(document.getElementById('root')!).render(

    <StrictMode>
    <App />
  </StrictMode>
)