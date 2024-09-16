import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RutasC from './rutas/RutasC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RutasC/>
  </StrictMode>,
)
