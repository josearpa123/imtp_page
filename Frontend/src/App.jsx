import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Pages
import HomePage from './pages/HomePage'
import SolucionesPage from './pages/SolucionesPage'
import PortafolioPage from './pages/PortafolioPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import CotizarPage from './pages/CotizarPage'

// Soluciones
import WebPage from './pages/soluciones/WebPage'
import SoftwarePage from './pages/soluciones/SoftwarePage'
import AutomatizacionPage from './pages/soluciones/AutomatizacionPage'
import MarketingPage from './pages/soluciones/MarketingPage'
import AcademicoPage from './pages/soluciones/AcademicoPage'

// Admin
import LoginPage from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'

function App() {
  return (
    <Routes>
      {/* Rutas públicas con Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/soluciones/web" element={<WebPage />} />
        <Route path="/soluciones/software" element={<SoftwarePage />} />
        <Route path="/soluciones/automatizacion" element={<AutomatizacionPage />} />
        <Route path="/soluciones/marketing" element={<MarketingPage />} />
        <Route path="/soluciones/academico" element={<AcademicoPage />} />
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