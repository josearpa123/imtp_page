// src/pages/servicios/ServiciosPage.jsx
import { Link } from "react-router-dom";
import ContactKeypad from "../../components/ContactKeypad";
import "../../styles/ServiciosPage.css";

function ServiciosPage() {
  const servicios = [
    {
      id: "software",
      titulo: "Software ERP",
      subtitulo: "Sistemas empresariales a medida",
      descripcion:
        "Desarrollamos sistemas ERP especializados por industria. Farmacias, retail, distribuidoras y más. Cada solución se adapta a tus procesos reales.",
      imagen: "/assets/servicios/software-erp.jpg",
      link: "/servicios/software",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      preview: "erp",
    },
    {
      id: "web",
      titulo: "Páginas Web",
      subtitulo: "Presencia digital profesional",
      descripcion:
        "Sitios web que convierten visitantes en clientes. Diseño moderno, SEO optimizado y arquitectura escalable para tu negocio.",
      imagen: "/assets/servicios/paginas-web.jpg",
      link: "/servicios/web",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      preview: "web",
    },
    {
      id: "automatizacion",
      titulo: "Automatización",
      subtitulo: "Optimiza tus procesos internos",
      descripcion:
        "Eliminamos tareas repetitivas, integramos sistemas y liberamos tiempo para lo que realmente importa en tu operación.",
      imagen: "/assets/servicios/automatizacion.jpg",
      link: "/servicios/automatizacion",
      gradient: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
      preview: "auto",
    },
    {
      id: "marketing",
      titulo: "Marketing Digital",
      subtitulo: "Estrategia y diseño que conecta",
      descripcion:
        "Identidad visual coherente y estrategias de contenido alineadas con tus objetivos de negocio.",
      imagen: "/assets/servicios/marketing.jpg",
      link: "/servicios/marketing",
      gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
      preview: "marketing",
    },
  ];

  const renderPreview = (type) => {
    switch (type) {
      case "erp":
        return (
          <div className="preview-float">
            <div className="float-card float-main">
              <div className="float-header">
                <div className="float-dot"></div>
                <div className="float-title-bar"></div>
              </div>
              <div className="float-chart">
                <div className="chart-bar" style={{ height: "60%" }}></div>
                <div className="chart-bar" style={{ height: "80%" }}></div>
                <div className="chart-bar" style={{ height: "45%" }}></div>
                <div className="chart-bar" style={{ height: "90%" }}></div>
                <div className="chart-bar" style={{ height: "70%" }}></div>
              </div>
            </div>
            <div className="float-card float-stats">
              <div className="stat-number">$24.5k</div>
              <div className="stat-label"></div>
              <div className="stat-trend up">↑ 12%</div>
            </div>
          </div>
        );

      case "web":
        return (
          <div className="preview-float">
            <div className="float-browser">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">
                  <span className="url-icon">🔒</span>
                  <span className="url-text">tuempresa.com</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="browser-nav"></div>
                <div className="browser-hero"></div>
                <div className="browser-grid">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "auto":
        return (
          <div className="preview-float preview-flow">
            <div className="flow-node node-trigger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="flow-connector">
              <div className="connector-line"></div>
              <div className="connector-dot"></div>
            </div>
            <div className="flow-node node-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="flow-connector">
              <div className="connector-line"></div>
              <div className="connector-dot"></div>
            </div>
            <div className="flow-node node-end">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>
        );

      case "marketing":
        return (
          <div className="preview-float preview-social">
            <div className="social-card social-main">
              <div className="social-img"></div>
              <div className="social-engagement">
                <div className="eng-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>2.4k</span>
                </div>
                <div className="eng-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>186</span>
                </div>
              </div>
            </div>

            <div className="social-card social-stats">
              <div className="stats-row">
                <span className="stats-label">Alcance</span>
                <span className="stats-value">45.2k</span>
              </div>
              <div className="stats-bar">
                <div className="stats-fill" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="servicios-page">
      {/* Hero con Video de Fondo */}
      <section className="srv-hero">
        <div className="srv-hero-video-container">
          <video className="srv-hero-video" autoPlay loop muted playsInline>
            <source src="/assets/servicios/vide_servicios.mp4" type="video/mp4" />
          </video>
          <div className="srv-hero-video-overlay"></div>
        </div>

        <div className="container">
          <div className="srv-hero-content">
            <span className="srv-hero-label">Soluciones Tecnológicas</span>
            <h1 className="srv-hero-title">
              Construimos lo que tu negocio
              <span className="srv-hero-accent"> realmente necesita</span>
            </h1>
            <p className="srv-hero-text">
              No vendemos servicios genéricos. Diagnosticamos, analizamos y desarrollamos la
              solución exacta que impulsa tu crecimiento.
            </p>
            <div className="srv-hero-cta">
              <Link to="/contacto" className="srv-hero-btn">
                Comenzar proyecto
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="srv-hero-scroll">
          <span>Explorar servicios</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="srv-showcase">
        <div className="srv-showcase-grid">
          {servicios.map((servicio) => (
            <Link key={servicio.id} to={servicio.link} className="srv-card">
              <div className="srv-card-bg">
                <div className="srv-card-image" style={{ backgroundImage: `url(${servicio.imagen})` }} />
                <div className="srv-card-gradient" style={{ background: servicio.gradient }} />
                <div className="srv-card-overlay" />
              </div>

              <div className="srv-card-content">
                <div className="srv-card-header">
                  <span className="srv-card-label">{servicio.subtitulo}</span>
                  <h2 className="srv-card-title">{servicio.titulo}</h2>
                </div>

                <p className="srv-card-desc">{servicio.descripcion}</p>

                <div className="srv-card-footer">
                  <span className="srv-card-link">
                    Explorar
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="srv-card-preview">{renderPreview(servicio.preview)}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sección Académica */}
      <section className="srv-academico">
        <div className="container">
          <div className="srv-academico-inner">
            <div className="srv-academico-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                />
              </svg>
            </div>

            <div className="srv-academico-content">
              <h3>Apoyo Académico Universitario</h3>
              <p>
                Acompañamiento técnico para estudiantes. Proyectos de grado, revisión de código,
                arquitectura de sistemas y mejores prácticas.
              </p>
            </div>

            <Link to="/servicios/academico" className="srv-academico-link">
              Consultar
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Contacto NUEVO (Keypad) */}
      <ContactKeypad />
    </div>
  );
}

export default ServiciosPage;
