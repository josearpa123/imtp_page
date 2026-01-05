// src/pages/PortafolioPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PortafolioPage.css';

// ========== DATOS DE PROYECTOS ==========
const proyectosData = [
  {
    id: 'jabones-rocio',
    nombre: 'Jabones Rocío',
    cliente: 'Jabones Rocío',
    categoria: 'web',
    categoriaLabel: 'Plataforma E-commerce',
    imagen: '/portafolio/portada-jabonesrocio.png',
    imagenDetalle: '/portafolio/jabonesrocio.png',
    descripcionCorta: 'Plataforma integral de comercio electrónico para insumos de jabonería artesanal con más de 190 productos.',
    destacado: true,
    año: '2024',
    duracion: '3 meses',
    problema: 'El negocio dependía completamente de catálogos informales en WhatsApp, generando confusión en pedidos, errores en inventario y pérdida de ventas por falta de organización.',
    solucion: 'Desarrollamos una plataforma web completa con catálogo dinámico, carrito inteligente con cálculo de peso, sistema de pedidos automatizado vía WhatsApp, panel administrativo para inventario y gestión de tickets.',
    resultados: [
      'Reducción del 80% en errores de pedidos',
      'Control total del inventario en tiempo real',
      'Aumento del 45% en conversión de ventas',
      'Tiempo de gestión reducido de 15 min a 2 min por pedido'
    ],
    tecnologias: ['React', 'PHP', 'MySQL', 'API REST', 'WhatsApp Business'],
    testimonio: {
      texto: 'Pasamos de perder pedidos por WhatsApp a tener todo organizado. Ahora sé exactamente qué tengo en inventario y los clientes pueden ver todo sin preguntarme.',
      autor: 'Odair Solarte',
      cargo: 'Fundador, Jabones Rocío'
    },
    linkExterno: 'https://jabonesrocio.com.co',
    urlPreview: 'https://jabonesrocio.com.co',
    galeria: []
  },
  {
    id: 'gestion-inventarios',
    nombre: 'Sistema de Gestión de Inventarios',
    cliente: 'Distribuidora Regional',
    categoria: 'software',
    categoriaLabel: 'Software a Medida',
    imagen: '/portafolio/inventarios.png',
    imagenDetalle: '/portafolio/inventarios-detalle.png',
    descripcionCorta: 'Sistema interno para control de inventarios, alertas de stock y reportes automatizados.',
    destacado: false,
    año: '2025',
    duracion: '15 Días',
    problema: 'Control manual de inventarios en Excel generaba inconsistencias, pérdidas por productos vencidos y falta de visibilidad del stock real.',
    solucion: 'Sistema web con dashboard en tiempo real, alertas automáticas de stock bajo, control de lotes y fechas de vencimiento, reportes exportables y auditoría de movimientos.',
    resultados: [
      'Eliminación de pérdidas por productos vencidos',
      'Visibilidad en tiempo real del inventario',
      'Reducción del 60% en tiempo de inventario físico',
      'Trazabilidad completa de movimientos'
    ],
    tecnologias: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    testimonio: null,
    linkExterno: null,
    galeria: []
  }
];

const CATEGORIAS = [
  { id: 'todos', label: 'Todos', icon: null },
  { id: 'web', label: 'Web & E-commerce', icon: 'web' },
  { id: 'software', label: 'Software', icon: 'code' }
];

// ========== LOADER ==========
function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.random() * 30 + 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="portafolio-page-loader">
      <div className="loader-content">
        <div className="loader-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h2>Cargando portafolio…</h2>
        <div className="loader-bar">
          <div className="loader-progress" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
      </div>
    </div>
  );
}

// ========== HERO ==========
function HeroPortafolio({ isVisible }) {
  return (
    <section className={`portafolio-hero ${isVisible ? 'animate-in' : ''}`}>
      <div className="portafolio-hero-bg">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="portafolio-hero-content">
        <span className="portafolio-hero-tag animate-item" style={{ '--delay': '0.1s' }}>
          Casos de Éxito
        </span>
        <h1 className="animate-item" style={{ '--delay': '0.2s' }}>Portafolio</h1>
        <p className="animate-item" style={{ '--delay': '0.3s' }}>
          Proyectos reales con resultados medibles. No vendemos humo —
          mostramos lo que hemos construido y el impacto que generó.
        </p>
      </div>
    </section>
  );
}

// ========== FILTROS ==========
function FiltrosCategoria({ categoriaActiva, onChange, isVisible }) {
  return (
    <div className={`portafolio-filtros ${isVisible ? 'animate-in' : ''}`}>
      <div className="filtros-container">
        {CATEGORIAS.map((cat, index) => (
          <button
            key={cat.id}
            className={`filtro-btn ${categoriaActiva === cat.id ? 'active' : ''} animate-item`}
            style={{ '--delay': `${0.1 + index * 0.05}s` }}
            onClick={() => onChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ========== CARD DE PROYECTO ==========
function ProyectoCard({ proyecto, onVerDetalle, index }) {
  return (
    <article 
      className="proyecto-card animate-item" 
      style={{ '--delay': `${0.15 + index * 0.1}s` }}
      onClick={() => onVerDetalle(proyecto)}
    >
      {proyecto.destacado && <span className="proyecto-badge-destacado">Destacado</span>}
      
      <div className="proyecto-imagen-container">
        <img 
          src={proyecto.imagen} 
          alt={proyecto.nombre}
          onError={(e) => {
            e.target.src = '/portafolio/placeholder.png';
          }}
        />
        <div className="proyecto-imagen-overlay">
          <button className="btn-ver-proyecto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Ver caso de estudio
          </button>
        </div>
      </div>

      <div className="proyecto-info">
        <div className="proyecto-meta">
          <span className="proyecto-categoria">{proyecto.categoriaLabel}</span>
          <span className="proyecto-año">{proyecto.año}</span>
        </div>
        <h3 className="proyecto-titulo">{proyecto.nombre}</h3>
        <p className="proyecto-cliente">Cliente: {proyecto.cliente}</p>
        <p className="proyecto-descripcion">{proyecto.descripcionCorta}</p>
        
        <div className="proyecto-tecnologias">
          {proyecto.tecnologias.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
          {proyecto.tecnologias.length > 3 && (
            <span className="tech-tag tech-more">+{proyecto.tecnologias.length - 3}</span>
          )}
        </div>

        <div className="proyecto-cta">
          <span className="ver-mas-link">
            Ver detalles
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}

// ========== CARD PRÓXIMAMENTE ==========
function ProximamenteCard({ isVisible }) {
  return (
    <div className={`proximamente-card ${isVisible ? 'animate-in' : ''}`}>
      <div className="proximamente-content">
        <div className="proximamente-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <h3>Más proyectos en camino</h3>
        <p>Estamos trabajando en nuevos casos de éxito que pronto compartiremos aquí.</p>
        <Link to="/cotizar" className="proximamente-cta">
          ¿Quieres ser el siguiente?
        </Link>
      </div>
    </div>
  );
}

// ========== GRID DE PROYECTOS ==========
function ProyectosGrid({ proyectos, onVerDetalle, isVisible }) {
  return (
    <section className={`portafolio-proyectos-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="proyectos-container">
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <ProyectoCard 
              key={proyecto.id} 
              proyecto={proyecto} 
              onVerDetalle={onVerDetalle}
              index={index}
            />
          ))}
          <ProximamenteCard isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

// ========== PREVIEW INTERACTIVO ==========
function PreviewSection({ url, nombre, linkExterno }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="preview-section">
      <div className="preview-header">
        <div className="preview-title-row">
          <div className="preview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <div>
            <h3>Vista previa interactiva</h3>
            <p>Explora el proyecto en vivo directamente desde aquí</p>
          </div>
        </div>
        <div className="preview-actions">
          <button 
            className="preview-btn-fullscreen"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            )}
          </button>
          {linkExterno && (
            <a 
              href={linkExterno} 
              target="_blank" 
              rel="noopener noreferrer"
              className="preview-btn-external"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Abrir en nueva pestaña
            </a>
          )}
        </div>
      </div>

      <div className={`preview-container ${isFullscreen ? 'fullscreen' : ''}`}>
        {isFullscreen && (
          <button className="preview-close-fullscreen" onClick={() => setIsFullscreen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
        
        <div className="preview-browser-bar">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="browser-url">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>{url}</span>
          </div>
          <div className="browser-actions">
            <a href={linkExterno || url} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="preview-iframe-wrapper">
          {isLoading && !hasError && (
            <div className="preview-loading">
              <div className="preview-spinner"></div>
              <p>Cargando vista previa...</p>
            </div>
          )}
          
          {hasError ? (
            <div className="preview-error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <h4>No se puede cargar la vista previa</h4>
              <p>El sitio no permite ser embebido por seguridad.</p>
              <a href={linkExterno || url} target="_blank" rel="noopener noreferrer" className="preview-error-link">
                Visitar sitio directamente
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          ) : (
            <iframe
              src={url}
              title={`Vista previa de ${nombre}`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          )}
        </div>
      </div>

      <div className="preview-note">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <span>Esta es una vista previa embebida. Algunas funcionalidades pueden estar limitadas.</span>
      </div>
    </div>
  );
}

// ========== PÁGINA DE DETALLE ==========
function ProyectoDetallePage({ proyecto, onVolver }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('problema');

  const tabs = [
    { id: 'problema', label: 'El Problema' },
    { id: 'solucion', label: 'Nuestra Solución' },
    { id: 'resultados', label: 'Resultados' }
  ];

  return (
    <div className="proyecto-detalle-page">
      {/* Breadcrumb */}
      <div className="detalle-breadcrumb">
        <button onClick={onVolver} className="breadcrumb-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver al portafolio
        </button>
        <div className="breadcrumb-path">
          <Link to="/">Inicio</Link>
          <span className="separator">/</span>
          <span onClick={onVolver}>Portafolio</span>
          <span className="separator">/</span>
          <span className="current">{proyecto.nombre}</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="detalle-content">
        <div className="detalle-grid">
          {/* Columna izquierda - Imagen */}
          <div className="detalle-imagen-section">
            <div className={`detalle-imagen-container ${imageLoaded ? 'loaded' : ''}`}>
              {!imageLoaded && (
                <div className="image-skeleton">
                  <div className="skeleton-shimmer"></div>
                </div>
              )}
              <img 
                src={proyecto.imagenDetalle || proyecto.imagen} 
                alt={proyecto.nombre}
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              />
              {proyecto.destacado && <span className="detalle-badge">Proyecto Destacado</span>}
            </div>
            
            {/* Info rápida */}
            <div className="detalle-quick-info">
              <div className="quick-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <div>
                  <span className="info-label">Duración</span>
                  <span className="info-value">{proyecto.duracion}</span>
                </div>
              </div>
              <div className="quick-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <span className="info-label">Año</span>
                  <span className="info-value">{proyecto.año}</span>
                </div>
              </div>
              <div className="quick-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <div>
                  <span className="info-label">Cliente</span>
                  <span className="info-value">{proyecto.cliente}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Info */}
          <div className="detalle-info-section">
            <span className="detalle-categoria">{proyecto.categoriaLabel}</span>
            <h1 className="detalle-titulo">{proyecto.nombre}</h1>
            <p className="detalle-descripcion">{proyecto.descripcionCorta}</p>

            {/* Tecnologías */}
            <div className="detalle-tecnologias">
              <h4>Stack tecnológico</h4>
              <div className="tecnologias-grid">
                {proyecto.tecnologias.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="detalle-tabs">
              <div className="tabs-header">
                {tabs.map(tab => (
                  <button 
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="tabs-content">
                {activeTab === 'problema' && (
                  <div className="tab-content">
                    <div className="problema-box">
                      <div className="problema-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="8" x2="12" y2="12"/>
                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                      </div>
                      <p>{proyecto.problema}</p>
                    </div>
                  </div>
                )}
                {activeTab === 'solucion' && (
                  <div className="tab-content">
                    <div className="solucion-box">
                      <div className="solucion-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 11l3 3L22 4"/>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                        </svg>
                      </div>
                      <p>{proyecto.solucion}</p>
                    </div>
                  </div>
                )}
                {activeTab === 'resultados' && (
                  <div className="tab-content">
                    <ul className="resultados-lista">
                      {proyecto.resultados.map((resultado, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {resultado}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonio */}
            {proyecto.testimonio && (
              <div className="detalle-testimonio">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <blockquote>
                  <p>"{proyecto.testimonio.texto}"</p>
                  <footer>
                    <strong>{proyecto.testimonio.autor}</strong>
                    <span>{proyecto.testimonio.cargo}</span>
                  </footer>
                </blockquote>
              </div>
            )}

            {/* CTA */}
            <div className="detalle-cta">
              <Link to="/cotizar" className="btn-cotizar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                ¿Necesitas algo similar?
              </Link>
              <Link to="/contacto" className="btn-contacto-secundario">
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </div>

        {/* Preview interactivo del sitio */}
        {proyecto.urlPreview && (
          <PreviewSection url={proyecto.urlPreview} nombre={proyecto.nombre} linkExterno={proyecto.linkExterno} />
        )}

        {/* Sección de proyectos relacionados - Opcional */}
        <div className="detalle-relacionados">
          <h3>También te puede interesar</h3>
          <div className="relacionados-grid">
            {proyectosData
              .filter(p => p.id !== proyecto.id && p.categoria === proyecto.categoria)
              .slice(0, 2)
              .map(p => (
                <div key={p.id} className="relacionado-mini-card" onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  <img src={p.imagen} alt={p.nombre} />
                  <div className="relacionado-info">
                    <span className="relacionado-categoria">{p.categoriaLabel}</span>
                    <h4>{p.nombre}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== COMPONENTE PRINCIPAL ==========
export default function PortafolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    filtros: false,
    proyectos: false
  });

  const proyectosFiltrados = useMemo(() => {
    if (categoriaActiva === 'todos') return proyectosData;
    return proyectosData.filter(p => p.categoria === categoriaActiva);
  }, [categoriaActiva]);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => setSectionsVisible(prev => ({ ...prev, hero: true })), 100);
    setTimeout(() => setSectionsVisible(prev => ({ ...prev, filtros: true })), 300);
    setTimeout(() => setSectionsVisible(prev => ({ ...prev, proyectos: true })), 500);
  };

  const handleVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVolverLista = () => {
    setProyectoSeleccionado(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portafolio-page">
      {isLoading && <PageLoader onComplete={handleLoadComplete} />}
      
      <main className={isLoading ? 'loading' : ''}>
        {!proyectoSeleccionado ? (
          <>
            <HeroPortafolio isVisible={sectionsVisible.hero} />
            <FiltrosCategoria 
              categoriaActiva={categoriaActiva}
              onChange={setCategoriaActiva}
              isVisible={sectionsVisible.filtros}
            />
            <ProyectosGrid 
              proyectos={proyectosFiltrados} 
              onVerDetalle={handleVerDetalle}
              isVisible={sectionsVisible.proyectos}
            />
          </>
        ) : (
          <ProyectoDetallePage 
            proyecto={proyectoSeleccionado}
            onVolver={handleVolverLista}
          />
        )}
      </main>
    </div>
  );
}