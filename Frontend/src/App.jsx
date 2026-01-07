// src/App.jsx
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Pages
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import PortafolioPage from './pages/PortafolioPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import CotizarPage from './pages/CotizarPage'
import PrivacidadPage from './pages/PrivacidadPage'
import TerminosPage from './pages/TerminosPage'

// Servicios
import WebPage from './pages/servicios/WebPage'
import SoftwarePage from './pages/servicios/SoftwarePage'
import AutomatizacionPage from './pages/servicios/AutomatizacionPage'
import MarketingPage from './pages/servicios/MarketingPage'
import AcademicoPage from './pages/servicios/AcademicoPage'

// Admin
import LoginPage from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'

// ✅ Scroll reset en cada cambio de ruta (soluciona que te quedes abajo)
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Rutas públicas con Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/servicios/web" element={<WebPage />} />
          <Route path="/servicios/software" element={<SoftwarePage />} />
          <Route path="/servicios/automatizacion" element={<AutomatizacionPage />} />
          <Route path="/servicios/marketing" element={<MarketingPage />} />
          <Route path="/servicios/academico" element={<AcademicoPage />} />
          <Route path="/portafolio" element={<PortafolioPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/cotizar" element={<CotizarPage />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/terminos" element={<TerminosPage />} />
        </Route>

        {/* Admin sin Layout público */}
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App
