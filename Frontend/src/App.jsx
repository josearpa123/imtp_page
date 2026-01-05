import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './hooks/useTheme.jsx'


// Pages
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import PortafolioPage from './pages/PortafolioPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import CotizarPage from './pages/CotizarPage'

// Servicios
import WebPage from './pages/servicios/WebPage'
import SoftwarePage from './pages/servicios/SoftwarePage'
import AutomatizacionPage from './pages/servicios/AutomatizacionPage'
import MarketingPage from './pages/servicios/MarketingPage'
import AcademicoPage from './pages/servicios/AcademicoPage'

// Admin
import LoginPage from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'

function App() {
  return (
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
      </Route>

      {/* Admin sin Layout público */}
      <Route path="/admin" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App