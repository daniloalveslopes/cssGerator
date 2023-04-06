import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css"
import { Home } from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
)

