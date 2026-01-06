// src/pages/admin/DashboardPage.jsx
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import '../../styles/DashboardPage.css'


export default function DashboardPage() {
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('overview')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('imtp_token')
        const userRaw = localStorage.getItem('imtp_user')
        const user = userRaw ? JSON.parse(userRaw) : null

        const isAdmin =
            user?.role === 'admin' ||
            user?.role_slug === 'admin' ||
            user?.is_admin === true ||
            (Array.isArray(user?.roles) && user.roles.some(r => r?.slug === 'admin' || r?.name === 'admin'))

        if (!token || !user || !isAdmin) {
            localStorage.removeItem('imtp_token')
            localStorage.removeItem('imtp_user')
            navigate('/admin')
            return
        }

        // (Opcional pero recomendado) verificar token contra el backend
        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
        fetch(`${API_URL}/api/me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(async (res) => {
                if (!res.ok) throw new Error('unauthorized')
                const me = await res.json().catch(() => null)

                const meIsAdmin =
                    me?.role === 'admin' ||
                    me?.role_slug === 'admin' ||
                    me?.is_admin === true ||
                    (Array.isArray(me?.roles) && me.roles.some(r => r?.slug === 'admin' || r?.name === 'admin'))

                if (!meIsAdmin) throw new Error('not_admin')
            })
            .catch(() => {
                localStorage.removeItem('imtp_token')
                localStorage.removeItem('imtp_user')
                navigate('/admin')
            })
    }, [navigate])


    const handleLogout = async () => {
        const token = localStorage.getItem('imtp_token')
        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

        try {
            if (token) {
                await fetch(`${API_URL}/api/auth/logout`, {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${token}` }
                })
            }
        } catch (_) {
            // no pasa nada si falla
        } finally {
            localStorage.removeItem('imtp_token')
            localStorage.removeItem('imtp_user')
            navigate('/admin')
        }
    }


  const stats = {
    leadsHoy: 3,
    leadsPendientes: 12,
    serviciosActivos: 8,
    conversionMes: 24
  }

  const recentLeads = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      celular: '+57 300 111 2233',
      familia: 'Web',
      asunto: 'Desarrollo de sitio web corporativo',
      mensaje: 'Necesito una página web para mi empresa...',
      estado: 'nuevo',
      fecha: '2025-01-05T10:30:00'
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria@ejemplo.com',
      celular: '+57 310 222 3344',
      familia: 'Software',
      asunto: 'Sistema de inventarios',
      mensaje: 'Requiero un software para gestionar inventario...',
      estado: 'contactado',
      fecha: '2025-01-05T09:15:00'
    },
    {
      id: 3,
      nombre: 'Carlos Rodríguez',
      email: 'carlos@ejemplo.com',
      celular: '+57 320 333 4455',
      familia: 'Automatización',
      asunto: 'Automatización de procesos',
      mensaje: 'Quiero automatizar mis reportes mensuales...',
      estado: 'nuevo',
      fecha: '2025-01-04T16:45:00'
    }
  ]

  return (
    <div className="dashboard-container">
      <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <img 
            src={isDark ? "/assets/images/logo-color.png" : "/assets/images/logo.png"} 
            alt="IMTP Studios"
            className="sidebar-logo"
          />
          {!sidebarCollapsed && <span className="sidebar-title">Admin Panel</span>}
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            {!sidebarCollapsed && <span>Resumen</span>}
          </button>

          <button
            className={`nav-item ${activeSection === 'leads' ? 'active' : ''}`}
            onClick={() => setActiveSection('leads')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {!sidebarCollapsed && <span>Leads</span>}
          </button>

          <button
            className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
            onClick={() => setActiveSection('services')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            {!sidebarCollapsed && <span>Servicios</span>}
          </button>

          <button
            className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={() => setActiveSection('portfolio')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            {!sidebarCollapsed && <span>Portafolio</span>}
          </button>

          <button
            className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveSection('settings')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m-7-7h6m6 0h6"/>
            </svg>
            {!sidebarCollapsed && <span>Configuración</span>}
          </button>

          <button
            className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveSection('profile')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            {!sidebarCollapsed && <span>Mi Perfil</span>}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            {!sidebarCollapsed && <span>Cerrar Sesión</span>}
          </button>
        </div>

        <button 
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points={sidebarCollapsed ? "9 18 15 12 9 6" : "15 18 9 12 15 6"}/>
          </svg>
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <div className="header-title">
            <h1>
              {activeSection === 'overview' && 'Resumen General'}
              {activeSection === 'leads' && 'Gestión de Leads'}
              {activeSection === 'services' && 'Gestión de Servicios'}
              {activeSection === 'portfolio' && 'Gestión de Portafolio'}
              {activeSection === 'settings' && 'Configuración'}
              {activeSection === 'profile' && 'Mi Perfil'}
            </h1>
            <p>Bienvenido al panel de administración</p>
          </div>

          <div className="header-actions">
            {/* Toggle de Tema */}
            <button 
              className="header-btn theme-toggle-btn" 
              onClick={toggleTheme}
              title={isDark ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            <button className="header-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>

            <div className="header-user">
              <div className="user-avatar">A</div>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          {activeSection === 'overview' && <OverviewSection stats={stats} recentLeads={recentLeads} />}
          {activeSection === 'leads' && <LeadsSection leads={recentLeads} />}
          {activeSection === 'services' && <ServicesSection />}
          {activeSection === 'portfolio' && <PortfolioSection />}
          {activeSection === 'settings' && <SettingsSection />}
          {activeSection === 'profile' && <ProfileSection />}
        </div>
      </main>

      {mobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}

// ===== OVERVIEW SECTION =====
function OverviewSection({ stats, recentLeads }) {
  return (
    <div className="overview-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <polyline points="17 11 19 13 23 9"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{stats.leadsHoy}</h3>
            <p>Leads Hoy</p>
            <span className="stat-trend positive">+12%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{stats.leadsPendientes}</h3>
            <p>Pendientes</p>
            <span className="stat-trend">Sin cambios</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{stats.serviciosActivos}</h3>
            <p>Servicios Activos</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{stats.conversionMes}</h3>
            <p>Conversiones (mes)</p>
            <span className="stat-trend positive">+8%</span>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <h2>Últimos Leads</h2>
          <button className="btn-link">Ver todos →</button>
        </div>
        <div className="leads-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Familia</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map(lead => (
                <tr key={lead.id}>
                  <td><strong>{lead.nombre}</strong></td>
                  <td>{lead.email}</td>
                  <td><span className="badge">{lead.familia}</span></td>
                  <td><span className={`status ${lead.estado}`}>{lead.estado}</span></td>
                  <td>{new Date(lead.fecha).toLocaleDateString()}</td>
                  <td>
                    <button className="btn-icon" title="Ver detalles">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ===== LEADS SECTION =====
function LeadsSection({ leads }) {
  const [filter, setFilter] = useState('todos')
  const [selectedLeads, setSelectedLeads] = useState([])
  
  const handleExport = () => {
    const csv = [
      ['Nombre', 'Email', 'Celular', 'Familia', 'Asunto', 'Estado', 'Fecha'].join(','),
      ...leads.map(lead => [
        lead.nombre,
        lead.email,
        lead.celular,
        lead.familia,
        lead.asunto,
        lead.estado,
        new Date(lead.fecha).toLocaleDateString()
      ].join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }
  
  return (
    <div className="leads-section">
      <div className="section-actions">
        <div className="filter-tabs">
          <button className={filter === 'todos' ? 'active' : ''} onClick={() => setFilter('todos')}>
            Todos ({leads.length})
          </button>
          <button className={filter === 'nuevos' ? 'active' : ''} onClick={() => setFilter('nuevos')}>
            Nuevos
          </button>
          <button className={filter === 'contactados' ? 'active' : ''} onClick={() => setFilter('contactados')}>
            Contactados
          </button>
        </div>
        <button className="btn-primary" onClick={handleExport}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Exportar
        </button>
      </div>

      <div className="dashboard-card">
        <div className="leads-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Email</th>
                <th>WhatsApp</th>
                <th>Familia</th>
                <th>Asunto</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id}>
                  <td><input type="checkbox" /></td>
                  <td><strong>{lead.nombre}</strong></td>
                  <td>{lead.email}</td>
                  <td>{lead.celular}</td>
                  <td><span className="badge">{lead.familia}</span></td>
                  <td className="truncate">{lead.asunto}</td>
                  <td><span className={`status ${lead.estado}`}>{lead.estado}</span></td>
                  <td>{new Date(lead.fecha).toLocaleDateString()}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Ver detalles">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <button className="btn-icon" title="Editar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                      </button>
                      <button className="btn-icon danger" title="Eliminar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ===== SERVICES SECTION =====
function ServicesSection() {
  return (
    <div className="services-section">
      <div className="section-actions">
        <div className="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Buscar servicios..." />
        </div>
        <button className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Nuevo Servicio
        </button>
      </div>

      <div className="services-grid">
        {['Web', 'Software', 'Automatización', 'Marketing'].map((servicio, i) => (
          <div key={i} className="service-card">
            <div className="service-header">
              <h3>{servicio}</h3>
              <div className="service-actions">
                <button className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1"/>
                    <circle cx="12" cy="5" r="1"/>
                    <circle cx="12" cy="19" r="1"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="service-description">
              Desarrollo de páginas web y presencia digital profesional
            </p>
            <div className="service-meta">
              <span className="badge success">Activo</span>
              <span className="service-count">3 niveles</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ===== PORTFOLIO SECTION =====
function PortfolioSection() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      nombre: 'Jabones Rocío',
      categoria: 'web',
      imagen: '/portafolio/portada-jabonesrocio.png',
      destacado: true,
      año: '2025'
    },
    {
      id: 2,
      nombre: 'Sistema de Gestión',
      categoria: 'software',
      imagen: '/portafolio/inventarios.png',
      destacado: false,
      año: '2025'
    }
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  const handleAddProject = () => {
    setEditingProject(null)
    setShowModal(true)
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setShowModal(true)
  }

  const handleDeleteProject = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este proyecto?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  return (
    <div className="portfolio-section">
      <div className="section-actions">
        <div className="portfolio-stats">
          <div className="stat-badge">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Proyectos Activos</span>
          </div>
          <div className="stat-badge">
            <span className="stat-number">{projects.filter(p => p.destacado).length}</span>
            <span className="stat-label">Destacados</span>
          </div>
        </div>
        <button className="btn-primary" onClick={handleAddProject}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Agregar Proyecto
        </button>
      </div>

      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-card-image">
              <img src={project.imagen} alt={project.nombre} />
              {project.destacado && <span className="portfolio-badge">Destacado</span>}
            </div>
            <div className="portfolio-card-content">
              <h3>{project.nombre}</h3>
              <div className="portfolio-card-meta">
                <span className="badge">{project.categoria}</span>
                <span className="year">{project.año}</span>
              </div>
              <div className="portfolio-card-actions">
                <button className="btn-icon" onClick={() => handleEditProject(project)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button className="btn-icon danger" onClick={() => handleDeleteProject(project.id)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ProjectModal 
          project={editingProject}
          onClose={() => setShowModal(false)}
          onSave={(project) => {
            if (editingProject) {
              setProjects(projects.map(p => p.id === project.id ? project : p))
            } else {
              setProjects([...projects, { ...project, id: Date.now() }])
            }
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}

// ===== PROJECT MODAL =====
function ProjectModal({ project, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombre: project?.nombre || '',
    cliente: project?.cliente || '',
    categoria: project?.categoria || 'web',
    categoriaLabel: project?.categoriaLabel || '',
    año: project?.año || new Date().getFullYear().toString(),
    duracion: project?.duracion || '',
    descripcionCorta: project?.descripcionCorta || '',
    problema: project?.problema || '',
    solucion: project?.solucion || '',
    destacado: project?.destacado || false,
    linkExterno: project?.linkExterno || '',
    urlPreview: project?.urlPreview || '',
    tecnologias: project?.tecnologias || [],
    resultados: project?.resultados || [],
    testimonio: project?.testimonio || { texto: '', autor: '', cargo: '' }
  })

  const [newTech, setNewTech] = useState('')
  const [newResult, setNewResult] = useState('')
  const [imagenPreview, setImagenPreview] = useState(project?.imagen || '')
  const [imagenDetallePreview, setImagenDetallePreview] = useState(project?.imagenDetalle || '')

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === 'portada') {
          setImagenPreview(reader.result)
        } else {
          setImagenDetallePreview(reader.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const addTech = () => {
    if (newTech.trim()) {
      setFormData({ ...formData, tecnologias: [...formData.tecnologias, newTech.trim()] })
      setNewTech('')
    }
  }

  const removeTech = (index) => {
    setFormData({ 
      ...formData, 
      tecnologias: formData.tecnologias.filter((_, i) => i !== index) 
    })
  }

  const addResult = () => {
    if (newResult.trim()) {
      setFormData({ ...formData, resultados: [...formData.resultados, newResult.trim()] })
      setNewResult('')
    }
  }

  const removeResult = (index) => {
    setFormData({ 
      ...formData, 
      resultados: formData.resultados.filter((_, i) => i !== index) 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...formData,
      id: project?.id,
      imagen: imagenPreview,
      imagenDetalle: imagenDetallePreview
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h2>
          <button className="modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre del Proyecto *</label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Cliente *</label>
              <input
                type="text"
                value={formData.cliente}
                onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Categoría *</label>
              <select
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                required
              >
                <option value="web">Web</option>
                <option value="software">Software</option>
                <option value="automatizacion">Automatización</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <div className="form-group">
              <label>Etiqueta de Categoría</label>
              <input
                type="text"
                value={formData.categoriaLabel}
                onChange={(e) => setFormData({ ...formData, categoriaLabel: e.target.value })}
                placeholder="Ej: Plataforma E-commerce"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Año *</label>
              <input
                type="text"
                value={formData.año}
                onChange={(e) => setFormData({ ...formData, año: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Duración</label>
              <input
                type="text"
                value={formData.duracion}
                onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
                placeholder="Ej: 5 semanas"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Descripción Corta *</label>
            <textarea
              value={formData.descripcionCorta}
              onChange={(e) => setFormData({ ...formData, descripcionCorta: e.target.value })}
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.destacado}
                onChange={(e) => setFormData({ ...formData, destacado: e.target.checked })}
              />
              Proyecto Destacado
            </label>
          </div>

          {/* Imágenes */}
          <div className="form-section">
            <h3>Imágenes</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Imagen Portada</label>
                <div className="image-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'portada')}
                    id="imagen-portada"
                  />
                  <label htmlFor="imagen-portada" className="upload-label">
                    {imagenPreview ? (
                      <img src={imagenPreview} alt="Preview" />
                    ) : (
                      <div className="upload-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span>Subir Portada</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Imagen Detalle</label>
                <div className="image-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'detalle')}
                    id="imagen-detalle"
                  />
                  <label htmlFor="imagen-detalle" className="upload-label">
                    {imagenDetallePreview ? (
                      <img src={imagenDetallePreview} alt="Preview" />
                    ) : (
                      <div className="upload-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span>Subir Detalle</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Problema y Solución */}
          <div className="form-section">
            <h3>Problema y Solución</h3>
            <div className="form-group">
              <label>Problema</label>
              <textarea
                value={formData.problema}
                onChange={(e) => setFormData({ ...formData, problema: e.target.value })}
                rows={3}
              />
            </div>
            <div className="form-group">
              <label>Solución</label>
              <textarea
                value={formData.solucion}
                onChange={(e) => setFormData({ ...formData, solucion: e.target.value })}
                rows={3}
              />
            </div>
          </div>

          {/* Tecnologías */}
          <div className="form-section">
            <h3>Tecnologías</h3>
            <div className="array-input">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                placeholder="Agregar tecnología"
              />
              <button type="button" onClick={addTech} className="btn-add">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>
            <div className="tags-list">
              {formData.tecnologias.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                  <button type="button" onClick={() => removeTech(i)}>×</button>
                </span>
              ))}
            </div>
          </div>

          {/* Resultados */}
          <div className="form-section">
            <h3>Resultados</h3>
            <div className="array-input">
              <input
                type="text"
                value={newResult}
                onChange={(e) => setNewResult(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addResult())}
                placeholder="Agregar resultado"
              />
              <button type="button" onClick={addResult} className="btn-add">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>
            <div className="results-list">
              {formData.resultados.map((result, i) => (
                <div key={i} className="result-item">
                  <span>{result}</span>
                  <button type="button" onClick={() => removeResult(i)}>×</button>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonio */}
          <div className="form-section">
            <h3>Testimonio (Opcional)</h3>
            <div className="form-group">
              <label>Texto</label>
              <textarea
                value={formData.testimonio.texto}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  testimonio: { ...formData.testimonio, texto: e.target.value }
                })}
                rows={3}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Autor</label>
                <input
                  type="text"
                  value={formData.testimonio.autor}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    testimonio: { ...formData.testimonio, autor: e.target.value }
                  })}
                />
              </div>
              <div className="form-group">
                <label>Cargo</label>
                <input
                  type="text"
                  value={formData.testimonio.cargo}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    testimonio: { ...formData.testimonio, cargo: e.target.value }
                  })}
                />
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div className="form-section">
            <h3>Enlaces</h3>
            <div className="form-group">
              <label>Link Externo</label>
              <input
                type="url"
                value={formData.linkExterno}
                onChange={(e) => setFormData({ ...formData, linkExterno: e.target.value })}
                placeholder="https://ejemplo.com"
              />
            </div>
            <div className="form-group">
              <label>URL Preview (iframe)</label>
              <input
                type="url"
                value={formData.urlPreview}
                onChange={(e) => setFormData({ ...formData, urlPreview: e.target.value })}
                placeholder="https://ejemplo.com"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              {project ? 'Guardar Cambios' : 'Crear Proyecto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ===== SETTINGS SECTION =====
function SettingsSection() {
  return (
    <div className="settings-section">
      <div className="dashboard-card">
        <h2>Configuración General</h2>
        <div className="settings-group">
          <div className="setting-item">
            <div>
              <h4>Notificaciones por Email</h4>
              <p>Recibir notificación cuando llegue un nuevo lead</p>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div>
              <h4>WhatsApp Automático</h4>
              <p>Enviar mensaje automático al recibir un lead</p>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Información de Contacto</h2>
        <form className="settings-form">
          <div className="form-group">
            <label>Email de Contacto</label>
            <input type="email" defaultValue="contacto@imtpstudios.com" />
          </div>
          <div className="form-group">
            <label>WhatsApp</label>
            <input type="tel" defaultValue="+57 320 7262477" />
          </div>
          <div className="form-group">
            <label>Horario de Atención</label>
            <input type="text" defaultValue="Lun - Vie: 8:00 - 18:00" />
          </div>
          <button type="submit" className="btn-primary">Guardar Cambios</button>
        </form>
      </div>
    </div>
  )
}

// ===== PROFILE SECTION =====
function ProfileSection() {
  const [formData, setFormData] = useState({
    nombre: 'Administrador',
    email: 'admin@imtpstudios.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [showPasswords, setShowPasswords] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    alert('Perfil actualizado correctamente (Demo)')
  }

  return (
    <div className="profile-section">
      <div className="dashboard-card">
        <h2>Información Personal</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn-primary">Guardar Cambios</button>
        </form>
      </div>

      <div className="dashboard-card">
        <h2>Cambiar Contraseña</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Contraseña Actual</label>
            <div className="password-input">
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Nueva Contraseña</label>
            <div className="password-input">
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Confirmar Nueva Contraseña</label>
            <div className="password-input">
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={showPasswords}
                onChange={(e) => setShowPasswords(e.target.checked)}
              />
              Mostrar contraseñas
            </label>
          </div>
          <button type="submit" className="btn-primary">Cambiar Contraseña</button>
        </form>
      </div>
    </div>
  )
}
