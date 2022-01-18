import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  /* Aqui aplicamos el enrutador de react router dom */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
