import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RegisterModal from './Registerpage.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>
)
