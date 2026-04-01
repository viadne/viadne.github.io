import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Check if there's a stored redirect path
const redirect = sessionStorage.redirect;
if (redirect) {
  delete sessionStorage.redirect;
  // Navigate to the stored path
  window.history.replaceState(null, null, redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
