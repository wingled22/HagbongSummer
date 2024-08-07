import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import OtherPage from "./OtherPage.jsx"
import Clients from './Clients.jsx'
import AppRoutes from './AppRoutes.jsx'
import SideBar from './SideBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <SideBar/>
      <AppRoutes/>
    </Router>
  </React.StrictMode>,
)
