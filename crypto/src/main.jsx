import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CoinContext from './content/CoinContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <CoinContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CoinContext>

   </StrictMode>, 
)
