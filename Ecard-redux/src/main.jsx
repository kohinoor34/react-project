import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Store} from './redux/store/Store.jsx'
import {Provider} from 'react-redux'

import './index.css'

createRoot(document.getElementById('root')).render(
 
  <Provider store={Store}>
    <App />
  </Provider>,
)
