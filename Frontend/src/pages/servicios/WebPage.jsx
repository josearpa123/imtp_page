// src/pages/servicios/WebPage.jsx
import { Link } from "react-router-dom";
import "../../styles/WebPage.css";

function WebPage() {
  const niveles = [
    {
      id: 'esencial',
      nivel: 'Nivel Esencial',
      titulo: 'Presencia Digital Básica',
      descripcion: 'Para negocios que necesitan existir en internet. Landing page profesional, responsive y optimizada.',
      desde: '$800.000',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      caracteristicas: [
        'Landing page de 1-3 secciones',
        'Diseño responsive (móvil, tablet, desktop)',
        'Formulario de contacto funcional',
        'Integración con WhatsApp',
        'Optimización SEO básica',
        'Hosting primer año incluido'
      ],
      ideal: 'Emprendedores, profesionales independientes, negocios locales'
    },
    {
      id: 'profesional',
      nivel: 'Nivel Profesional',
      titulo: 'Sitio Web Completo',
      descripcion: 'Para empresas que necesitan transmitir solidez. Múltiples páginas, blog opcional y administración de contenido.',
      desde: '$2.500.000',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      caracteristicas: [
        'Sitio de 5-10 páginas',
        'Panel de administración (CMS)',
        'Blog integrado',
        'Galería de portafolio',
        'SEO avanzado + Analytics',
        'Certificado SSL + Dominio',
        'Soporte técnico 6 meses'
      ],
      ideal: 'PyMEs, empresas de servicios, consultoras',
      destacado: true
    },
    {
      id: 'avanzado',
      nivel: 'Nivel Avanzado',
      titulo: 'Plataforma Web',
      descripcion: 'Para proyectos que requieren funcionalidades específicas. E-commerce, integraciones, sistemas de reservas.',
      desde: '$5.000.000',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      caracteristicas: [
        'Desarrollo a medida',
        'E-commerce con pasarelas de pago',
        'Sistema de reservas/citas',
        'Integraciones con APIs externas',
        'Panel administrativo personalizado',
        'Escalabilidad y rendimiento',
        'Soporte técnico 12 meses'
      ],
      ideal: 'E-commerce, startups, proyectos con lógica de negocio'
    }
  ];

  const proceso = [
    {
      numero: '01',
      titulo: 'Briefing',
      descripcion: 'Entendemos tu negocio, público objetivo y objetivos del sitio.'
    },
    {
      numero: '02',
      titulo: 'Diseño',
      descripcion: 'Wireframes y diseño visual. Aprobación antes de desarrollar.'
    },
    {
      numero: '03',
      titulo: 'Desarrollo',
      descripcion: 'Construcción del sitio con entregas parciales para revisión.'
    },
    {
      numero: '04',
      titulo: 'Lanzamiento',
      descripcion: 'Pruebas, optimización y puesta en producción.'
    }
  ];

  return (
    <div className="web-page">
      {/* Hero */}
      <section className="web-hero">
        <div className="container">
          <Link to="/servicios" className="web-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>
          
          <div className="web-hero-content">
            <span className="web-hero-label">Páginas Web</span>
            <h1 className="web-hero-title">
              Tu negocio visible
              <span className="web-hero-accent"> 24/7</span>
            </h1>
            <p className="web-hero-text">
              Diseñamos y desarrollamos sitios web que convierten visitantes en clientes. 
              Rápidos, modernos y optimizados para posicionar en Google.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="web-stats">
        <div className="container">
          <div className="web-stats-grid">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">&lt;3s</span>
              <span className="stat-label">Tiempo de carga</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">SEO</span>
              <span className="stat-label">Optimizado</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">SSL</span>
              <span className="stat-label">Seguridad incluida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section className="web-niveles">
        <div className="container">
          <div className="web-niveles-header">
            <h2>Elige tu nivel de solución</h2>
            <p>Cada proyecto es diferente. Estos son puntos de partida, no paquetes cerrados.</p>
          </div>

          <div className="web-niveles-grid">
            {niveles.map((nivel) => (
              <article 
                key={nivel.id} 
                className={`nivel-card ${nivel.destacado ? 'destacado' : ''}`}
              >
                {nivel.destacado && <span className="nivel-badge">Más popular</span>}
                
                <div className="nivel-visual" style={{ background: nivel.gradient }}>
                  <span className="nivel-label">{nivel.nivel}</span>
                </div>

                <div className="nivel-content">
                  <h3 className="nivel-titulo">{nivel.titulo}</h3>
                  <p className="nivel-desc">{nivel.descripcion}</p>

                  <div className="nivel-precio">
                    <span className="precio-desde">Desde</span>
                    <span className="precio-valor">{nivel.desde}</span>
                    <span className="precio-nota">COP + IVA</span>
                  </div>

                  <ul className="nivel-features">
                    {nivel.caracteristicas.map((feat, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="nivel-ideal">
                    <span className="ideal-label">Ideal para:</span>
                    <span className="ideal-text">{nivel.ideal}</span>
                  </div>

                  <Link to="/contacto" className="nivel-cta">
                    Solicitar cotización
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
      <section className="web-proceso">
        <div className="container">
          <div className="web-proceso-header">
            <h2>Nuestro proceso</h2>
            <p>De la idea al sitio en vivo</p>
          </div>

          <div className="web-proceso-grid">
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
      <section className="web-cta">
        <div className="container">
          <div className="web-cta-content">
            <h2>¿Listo para tener tu sitio web?</h2>
            <p>
              Cuéntanos sobre tu proyecto y te enviamos una propuesta 
              personalizada sin compromiso.
            </p>
            <Link to="/contacto" className="web-cta-btn">
              Solicitar cotización gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebPage;