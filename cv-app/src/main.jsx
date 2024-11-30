import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralInfo } from './components/GeneralInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>CV Application</h1>
    <GeneralInfo />
  </StrictMode>
)
