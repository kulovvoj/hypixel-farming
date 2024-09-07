import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './localization/i18n.ts'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.css'

document.documentElement.setAttribute('data-bs-theme', 'dark')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
