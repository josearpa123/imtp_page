// src/pages/servicios/MarketingPage.jsx
import { Link } from "react-router-dom";
import "../../styles/MarketingPage.css";

function MarketingPage() {
  const servicios = [
    {
      id: 'branding',
      icono: '🎨',
      titulo: 'Identidad Visual',
      descripcion: 'Diseño de marca completo que transmite profesionalismo y diferenciación.',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      incluye: [
        'Logo y variaciones',
        'Paleta de colores',
        'Tipografía',
        'Manual de marca'
      ]
    },
    {
      id: 'social',
      titulo: 'Social Media',
      icono: '📱',
      descripcion: 'Gestión estratégica de redes sociales con contenido que conecta con tu audiencia.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      incluye: [
        'Estrategia de contenido',
        'Diseño de posts',
        'Calendario editorial',
        'Métricas mensuales'
      ]
    },
    {
      id: 'contenido',
      titulo: 'Marketing de Contenido',
      icono: '✍️',
      descripcion: 'Contenido que posiciona tu marca como referente y atrae clientes potenciales.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      incluye: [
        'Artículos de blog',
        'Email marketing',
        'Casos de éxito',
        'Guías descargables'
      ]
    },
    {
      id: 'publicidad',
      titulo: 'Publicidad Digital',
      icono: '📈',
      descripcion: 'Campañas pagadas optimizadas para maximizar conversiones y ROI.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      incluye: [
        'Google Ads',
        'Meta Ads (Facebook/Instagram)',
        'LinkedIn Ads',
        'Reportes de rendimiento'
      ]
    }
  ];

  const proceso = [
    {
      numero: '01',
      titulo: 'Análisis',
      descripcion: 'Estudiamos tu marca, competencia y audiencia objetivo.'
    },
    {
      numero: '02',
      titulo: 'Estrategia',
      descripcion: 'Definimos objetivos, canales y mensajes clave.'
    },
    {
      numero: '03',
      titulo: 'Ejecución',
      descripcion: 'Implementamos las acciones con seguimiento continuo.'
    },
    {
      numero: '04',
      titulo: 'Optimización',
      descripcion: 'Analizamos resultados y ajustamos para mejorar.'
    }
  ];

  return (
    <div className="mkt-page">
      {/* Hero */}
      <section className="mkt-hero">
        <div className="container">
          <Link to="/servicios" className="mkt-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>
          
          <div className="mkt-hero-content">
            <span className="mkt-hero-label">Marketing Digital</span>
            <h1 className="mkt-hero-title">
              Estrategia y diseño que
              <span className="mkt-hero-accent"> conecta</span>
            </h1>
            <p className="mkt-hero-text">
              Identidad visual coherente y estrategias de contenido alineadas 
              con tus objetivos de negocio. Marketing con propósito.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mkt-stats">
        <div className="container">
          <div className="mkt-stats-grid">
            <div className="stat-item">
              <span className="stat-number">🎯</span>
              <span className="stat-label">Estrategia primero</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">📊</span>
              <span className="stat-label">Data-driven</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">🎨</span>
              <span className="stat-label">Diseño premium</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">🔄</span>
              <span className="stat-label">Mejora continua</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mkt-servicios">
        <div className="container">
          <div className="mkt-servicios-header">
            <h2>Nuestros servicios</h2>
            <p>Soluciones de marketing integradas para potenciar tu marca</p>
          </div>

          <div className="mkt-servicios-grid">
            {servicios.map((srv) => (
              <article key={srv.id} className="servicio-card">
                <div className="servicio-visual" style={{ background: srv.gradient }}>
                  <span className="servicio-icono">{srv.icono}</span>
                </div>
                
                <div className="servicio-content">
                  <h3 className="servicio-titulo">{srv.titulo}</h3>
                  <p className="servicio-desc">{srv.descripcion}</p>
                  
                  <div className="servicio-incluye">
                    <span className="incluye-label">Incluye:</span>
                    <ul>
                      {srv.incluye.map((item, idx) => (
                        <li key={idx}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contacto" className="servicio-cta">
                    Solicitar información
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="mkt-proceso">
        <div className="container">
          <div className="mkt-proceso-header">
            <h2>Nuestro enfoque</h2>
            <p>Marketing estratégico, no táctico</p>
          </div>

          <div className="mkt-proceso-grid">
            {proceso.map((paso, idx) => (
              <div key={idx} className="proceso-item">
                <span className="proceso-numero">{paso.numero}</span>
                <h3 className="proceso-titulo">{paso.titulo}</h3>
                <p className="proceso-desc">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-cta">
        <div className="container">
          <div className="mkt-cta-content">
            <h2>¿Listo para potenciar tu marca?</h2>
            <p>
              Agenda una consulta y descubre cómo podemos ayudarte a 
              conectar mejor con tu audiencia.
            </p>
            <Link to="/contacto" className="mkt-cta-btn">
              Agendar consulta gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MarketingPage;