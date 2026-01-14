// src/pages/servicios/MarketingPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/MarketingPage.css";

function MarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    {
      id: "branding",
      nombre: "Identidad Visual",
      tagline: "Tu marca con personalidad",
      descripcion: "Diseño de marca completo que transmite profesionalismo y te diferencia de la competencia.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      incluye: [
        "Logo y variaciones",
        "Paleta de colores",
        "Tipografía",
        "Manual de marca"
      ]
    },
    {
      id: "social",
      nombre: "Social Media",
      tagline: "Presencia que conecta",
      descripcion: "Gestión estratégica de redes sociales con contenido que genera engagement y conversiones.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      incluye: [
        "Estrategia de contenido",
        "Diseño de posts",
        "Calendario editorial",
        "Métricas mensuales"
      ]
    },
    {
      id: "contenido",
      nombre: "Marketing de Contenido",
      tagline: "Atrae sin perseguir",
      descripcion: "Contenido que posiciona tu marca como referente y atrae clientes potenciales de forma orgánica.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
      incluye: [
        "Artículos de blog",
        "Email marketing",
        "Casos de éxito",
        "Guías descargables"
      ]
    },
    {
      id: "publicidad",
      nombre: "Publicidad Digital",
      tagline: "Inversión que retorna",
      descripcion: "Campañas pagadas optimizadas para maximizar conversiones y retorno de inversión.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      incluye: [
        "Google Ads",
        "Meta Ads",
        "LinkedIn Ads",
        "Reportes de ROI"
      ]
    }
  ];

  const proceso = [
    {
      num: "01",
      titulo: "Análisis",
      desc: "Estudiamos tu marca, competencia y audiencia objetivo para entender el contexto."
    },
    {
      num: "02",
      titulo: "Estrategia",
      desc: "Definimos objetivos claros, canales óptimos y mensajes que resuenan."
    },
    {
      num: "03",
      titulo: "Ejecución",
      desc: "Implementamos las acciones con seguimiento continuo y ajustes en tiempo real."
    },
    {
      num: "04",
      titulo: "Optimización",
      desc: "Analizamos resultados y escalamos lo que funciona."
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20marketing%20digital", "_blank");
  };

  return (
    <div className="mkt-page">
      {/* ===== HERO ===== */}
      <section className="mkt-hero">
        <div className="mkt-hero-bg">
          <div className="hero-gradient"></div>
        </div>

        <div className="container">
          <Link to="/servicios" className="mkt-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>

          <div className="mkt-hero-grid">
            <div className="mkt-hero-content">
              <span className="mkt-label">Estrategia y diseño que conecta</span>
              <h1 className="mkt-hero-title">Marketing Digital</h1>
              <p className="mkt-hero-desc">
                Identidad visual coherente y estrategias de contenido alineadas 
                con tus objetivos de negocio. Marketing con propósito.
              </p>
              <div className="mkt-hero-actions">
                <button onClick={handleWhatsApp} className="mkt-btn mkt-btn--primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar propuesta
                </button>
                <Link to="/portafolio" className="mkt-btn mkt-btn--ghost">
                  Ver trabajos
                </Link>
              </div>
            </div>

            <div className="mkt-hero-visual">
              {/* Social Media Visual */}
              <div className="social-visual">
                <div className="social-card social-card--main">
                  <div className="social-img"></div>
                  <div className="social-stats">
                    <span className="social-stat">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      2.4k
                    </span>
                    <span className="social-stat">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M21 6h-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM7 4h10v2H7V4zm14 16H3V8h18v12z"/>
                      </svg>
                      186
                    </span>
                  </div>
                </div>

                <div className="metric-card metric-card--1">
                  <span className="metric-label">Alcance</span>
                  <span className="metric-value">45.2k</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="metric-card metric-card--2">
                  <span className="metric-up">↑ 12%</span>
                  <span className="metric-text">vs mes anterior</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENFOQUE ===== */}
      <section className="mkt-enfoque">
        <div className="container">
          <div className="enfoque-grid">
            <div className="enfoque-item">
              <div className="enfoque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="enfoque-label">Estrategia primero</span>
            </div>
            <div className="enfoque-item">
              <div className="enfoque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <span className="enfoque-label">Data-driven</span>
            </div>
            <div className="enfoque-item">
              <div className="enfoque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <span className="enfoque-label">Diseño premium</span>
            </div>
            <div className="enfoque-item">
              <div className="enfoque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <span className="enfoque-label">Mejora continua</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="mkt-servicios">
        <div className="container">
          <div className="section-header">
            <span className="mkt-label">Servicios</span>
            <h2 className="section-title">¿Qué hacemos?</h2>
            <p className="section-desc">Soluciones de marketing integradas para potenciar tu marca.</p>
          </div>

          <div className="servicios-grid">
            {servicios.map((srv) => (
              <div key={srv.id} className="servicio-card">
                <div className="servicio-header">
                  <div className="servicio-icon">
                    {srv.icono}
                  </div>
                  <span className="servicio-status">Disponible</span>
                </div>

                <h3 className="servicio-nombre">{srv.nombre}</h3>
                <span className="servicio-tagline">{srv.tagline}</span>
                <p className="servicio-desc">{srv.descripcion}</p>

                <ul className="servicio-incluye">
                  {srv.incluye.map((item, idx) => (
                    <li key={idx}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="servicio-footer">
                  <button onClick={handleWhatsApp} className="servicio-cta">
                    Consultar
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="mkt-proceso">
        <div className="container">
          <div className="section-header">
            <span className="mkt-label">Metodología</span>
            <h2 className="section-title">Nuestro enfoque</h2>
            <p className="section-desc">Marketing estratégico, no táctico.</p>
          </div>

          <div className="proceso-grid">
            {proceso.map((paso, idx) => (
              <div key={idx} className="proceso-step">
                <span className="paso-num">{paso.num}</span>
                <div className="paso-content">
                  <h3 className="paso-titulo">{paso.titulo}</h3>
                  <p className="paso-desc">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mkt-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              ¿Listo para potenciar tu marca?
            </h2>
            <p className="cta-desc">
              Agenda una consulta y descubre cómo podemos ayudarte a 
              conectar mejor con tu audiencia.
            </p>
            <div className="cta-actions">
              <button onClick={handleWhatsApp} className="mkt-btn mkt-btn--white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar consulta gratuita
              </button>
              <Link to="/contacto" className="mkt-btn mkt-btn--outline-white">
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MarketingPage;