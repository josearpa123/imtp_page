import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/Header.css'

const solucionesLinks = [
  { path: '/soluciones/web', label: 'Páginas Web y Presencia Digital' },
  { path: '/soluciones/software', label: 'Sistemas y Software a Medida' },
  { path: '/soluciones/automatizacion', label: 'Automatización y Soluciones Internas' },
  { path: '/soluciones/marketing', label: 'Diseño y Marketing Digital' },
  { path: '/soluciones/academico', label: 'Soluciones Académicas' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMobile = () => setMobileOpen(!mobileOpen)
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobile}>
          <span className="logo-text">IMTP</span>
          <span className="logo-accent">Studios</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Inicio
          </NavLink>

          <div 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink 
              to="/soluciones" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Soluciones
              <svg className="chevron" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </NavLink>

            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {solucionesLinks.map(link => (
                <Link key={link.path} to={link.path} className="dropdown-item">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/portafolio" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Portafolio
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Contacto
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Search */}
          <div className="search-container">
            <button 
              className="icon-button" 
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <div className={`search-dropdown ${searchOpen ? 'show' : ''}`}>
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="search-input"
              />
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="social-icons">
            <a href="https://instagram.com/imtpstudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/imtpstudios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* User Login */}
          <Link to="/admin" className="user-button" aria-label="Iniciar sesión">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </Link>

          {/* CTA Button */}
          <Link to="/cotizar" className="cta-button">
            Cotizar
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={toggleMobile}
            aria-label="Menú"
          >
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${mobileOpen ? 'mobile-open' : ''}`}>
        <NavLink to="/" onClick={closeMobile}>Inicio</NavLink>
        <NavLink to="/soluciones" onClick={closeMobile}>Soluciones</NavLink>
        {solucionesLinks.map(link => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            onClick={closeMobile}
            className="mobile-sublink"
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/portafolio" onClick={closeMobile}>Portafolio</NavLink>
        <NavLink to="/nosotros" onClick={closeMobile}>Nosotros</NavLink>
        <NavLink to="/contacto" onClick={closeMobile}>Contacto</NavLink>
        
        <div className="mobile-social">
          <a href="https://instagram.com/imtpstudios" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/imtpstudios" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        
        <Link to="/cotizar" onClick={closeMobile} className="mobile-cta">
          Cotizar Proyecto
        </Link>
      </nav>
    </header>
  )
}

export default Header