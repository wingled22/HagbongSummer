import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import Clients from './Clients'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Sidebar from './SideBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidebar/>
      <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
