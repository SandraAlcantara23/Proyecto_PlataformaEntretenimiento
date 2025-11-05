import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './styles/fullbleed.css'
import './styles/layout-fluid.css'
import './styles/uv-theme.css'
import App from './App.jsx'
import PlayerPage from './pages/PlayerPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ver/:id" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
