// src/pages/servicios/WebPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/WebPage.css";

function WebPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tecnologias = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js",
    "Tailwind", "WordPress", "Figma", "SEO", "Analytics"
  ];

  const features = [
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      titulo: "100% Responsive",
      descripcion: "Tu sitio se ve perfecto en móvil, tablet y desktop. Sin compromisos."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      titulo: "Velocidad extrema",
      descripcion: "Carga en menos de 3 segundos. Cada segundo cuenta para no perder clientes."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      titulo: "SEO optimizado",
      descripcion: "Estructura técnica que Google ama. Aparece cuando te buscan."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      titulo: "SSL incluido",
      descripcion: "Certificado de seguridad HTTPS. Confianza para tus visitantes."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      titulo: "WhatsApp integrado",
      descripcion: "Botón de contacto directo. Convierte visitantes en conversaciones."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      titulo: "Analytics incluido",
      descripcion: "Sabe quién visita tu sitio, desde dónde y qué busca. Datos reales."
    },
  ];

  const tiposWeb = [
    {
      id: "landing",
      nombre: "Landing Page",
      tagline: "Una página, un objetivo",
      descripcion: "Página única diseñada para convertir. Ideal para campañas, lanzamientos o captar leads.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      caracteristicas: [
        "Diseño de alto impacto",
        "Optimizada para conversión",
        "Formulario de contacto",
        "WhatsApp directo"
      ],
      ideal: "Campañas, lanzamientos, leads"
    },
    {
      id: "corporativa",
      nombre: "Web Corporativa",
      tagline: "Tu empresa en internet",
      descripcion: "Sitio multipágina profesional. Muestra servicios, equipo y genera confianza.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      caracteristicas: [
        "Múltiples secciones",
        "Página de servicios",
        "Blog integrado",
        "SEO optimizado"
      ],
      ideal: "PyMEs, consultoras, servicios",
      destacado: true
    },
    {
      id: "ecommerce",
      nombre: "E-commerce",
      tagline: "Vende online 24/7",
      descripcion: "Tienda online con catálogo, carrito y pasarelas de pago colombianas.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      caracteristicas: [
        "Catálogo de productos",
        "Carrito de compras",
        "Pasarelas de pago",
        "Gestión de inventario"
      ],
      ideal: "Tiendas, marcas, emprendedores"
    },
    {
      id: "sistema",
      nombre: "Sistema Web",
      tagline: "Software en la nube",
      descripcion: "Aplicación web a medida. CRMs, reservas, dashboards desde cualquier lugar.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      caracteristicas: [
        "Desarrollo a medida",
        "Base de datos",
        "Usuarios y roles",
        "Reportes y dashboards"
      ],
      ideal: "Empresas con procesos específicos"
    },
  ];

  const testimonios = [
    {
      texto: "Nuestra landing convierte un 40% más desde que trabajamos con IMTP. El diseño transmite exactamente lo que somos.",
      autor: "Laura Gómez",
      cargo: "CEO, Estudio Creativo Luna",
    },
    {
      texto: "De no existir en Google a aparecer en la primera página en 3 meses. El SEO técnico que implementaron funciona.",
      autor: "Roberto Sánchez",
      cargo: "Director, Clínica Dental Sonríe",
    },
    {
      texto: "Mi tienda online procesa pedidos sin problemas. La integración con inventario fue clave para escalar.",
      autor: "Camila Restrepo",
      cargo: "Fundadora, Accesorios Camila",
    },
    {
      texto: "El sistema de reservas redujo las llamadas un 70%. Ahora los clientes agendan solos.",
      autor: "Dr. Martín Ochoa",
      cargo: "Director, Centro Médico Integral",
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20páginas%20web", "_blank");
  };

  return (
    <div className="web-page">
      {/* ===== HERO ===== */}
      <section className="web-hero">
        <div className="web-hero-content">
          <Link to="/servicios" className="web-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>

          <h1 className="web-hero-title">
            <span className="web-title-accent">Páginas Web</span>
            <br />
            que convierten.
          </h1>

          <p className="web-hero-desc">
            Diseñamos y desarrollamos sitios web que transforman visitantes en clientes.
            Rápidos, modernos y optimizados para posicionar en Google.
          </p>

          <div className="web-hero-actions">
            <button onClick={handleWhatsApp} className="web-btn web-btn--accent web-btn--animated">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </button>
            <Link to="/portafolio" className="web-btn web-btn--ghost">
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="web-marquee">
        <div className="web-marquee-track">
          {[...tecnologias, ...tecnologias].map((tech, idx) => (
            <span key={idx} className="web-marquee-item">{tech}</span>
          ))}
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <section className="web-features">
        <div className="container">
          <h2 className="web-section-title">
            No solo se ve bien.
            <br />
            <span className="web-title-muted">Funciona y convierte.</span>
          </h2>

          <div className="web-features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="web-feature">
                <div className="web-feature-icon">
                  {feat.icono}
                </div>
                <h3 className="web-feature-title">{feat.titulo}</h3>
                <p className="web-feature-desc">{feat.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIPOS DE WEB - APPLE STORE STYLE ===== */}
      <section className="web-tipos-banner">
        <div className="banner-bg">
          <ul className="floating-boxes">
            <li></li><li></li><li></li><li></li><li></li><li></li>
          </ul>
        </div>

        <div className="container">
          <span className="web-label">Tipos de sitio web</span>

          <h2 className="web-section-title web-section-title--light">
            <span className="web-title-accent">¿Qué necesitas?</span>
            <br />
            Nosotros lo construimos.
          </h2>

          <div className="web-cards-container">
            {tiposWeb.map((tipo) => (
              <div key={tipo.id} className={`web-product-card ${tipo.destacado ? 'destacado' : ''}`}>
                {tipo.destacado && <span className="card-badge">Más solicitado</span>}
                
                <div className="card-header">
                  <div className="card-icon">
                    {tipo.icono}
                  </div>
                  <span className="card-status">Disponible</span>
                </div>

                <h3 className="card-title">{tipo.nombre}</h3>
                <span className="card-tagline">{tipo.tagline}</span>
                <p className="card-description">{tipo.descripcion}</p>

                <ul className="card-features">
                  {tipo.caracteristicas.map((feat, idx) => (
                    <li key={idx}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="card-footer">
                  <span className="card-ideal">{tipo.ideal}</span>
                  <button onClick={handleWhatsApp} className="card-cta">
                    Cotizar
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

      {/* ===== TESTIMONIOS ===== */}
      <section className="web-testimonios">
        <div className="container">
          <span className="web-label">Lo que dicen nuestros clientes</span>
          <h2 className="web-section-title">
            Resultados reales,
            <br />
            <span className="web-title-muted">no promesas vacías.</span>
          </h2>
        </div>

        <div className="web-testimonios-track">
          {testimonios.map((test, idx) => (
            <div key={idx} className="web-testimonio-card">
              <p className="web-testimonio-texto">"{test.texto}"</p>
              <div className="web-testimonio-autor">
                <div className="web-testimonio-avatar">{test.autor.charAt(0)}</div>
                <div className="web-testimonio-info">
                  <span className="web-testimonio-nombre">{test.autor}</span>
                  <span className="web-testimonio-cargo">{test.cargo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <section className="web-porque">
        <div className="container">
          <div className="web-porque-grid">
            <div className="porque-item">
              <div className="porque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3>Código propio</h3>
              <p>Sin plantillas genéricas. Tu sitio es único, desarrollado desde cero.</p>
            </div>
            <div className="porque-item">
              <div className="porque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Entrega rápida</h3>
              <p>Proyectos web en 2-4 semanas. Sin demoras innecesarias.</p>
            </div>
            <div className="porque-item">
              <div className="porque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3>Soporte local</h3>
              <p>Equipo en Colombia. Respondemos en español, en tu zona horaria.</p>
            </div>
            <div className="porque-item">
              <div className="porque-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3>Precios justos</h3>
              <p>Cotización transparente. Sin costos ocultos ni sorpresas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="web-cta">
        <div className="container">
          <div className="web-cta-content">
            <h2 className="web-cta-title">
              Tu negocio merece
              <br />
              estar en internet
            </h2>
            <p className="web-cta-desc">
              Cuéntanos tu idea y te asesoramos sin compromiso
            </p>
            <div className="web-cta-actions">
              <button onClick={handleWhatsApp} className="web-btn web-btn--accent web-btn--animated web-btn--large">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribir por WhatsApp
              </button>
              <Link to="/contacto" className="web-btn web-btn--outline web-btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Formulario de contacto
              </Link>
            </div>
          </div>

          <div className="web-cta-visual">
            <div className="web-cta-window web-cta-window--1">
              <div className="window-header">
                <span></span><span></span><span></span>
              </div>
              <div className="window-content">
                <div className="window-browser">
                  <div className="browser-bar"></div>
                  <div className="browser-page">
                    <div className="page-nav"></div>
                    <div className="page-hero"></div>
                    <div className="page-grid">
                      <div></div><div></div><div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="web-cta-window web-cta-window--2">
              <div className="window-header">
                <span></span><span></span><span></span>
              </div>
              <div className="window-content">
                <div className="window-metrics">
                  <div className="metric-bar" style={{ width: "90%" }}></div>
                  <div className="metric-bar" style={{ width: "75%" }}></div>
                  <div className="metric-bar" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>

            <div className="web-cta-window web-cta-window--3">
              <div className="window-header">
                <span></span><span></span><span></span>
              </div>
              <div className="window-content">
                <div className="window-code">
                  <span className="code-tag">&lt;website&gt;</span>
                  <span className="code-string">"tuyo"</span>
                  <span className="code-tag">&lt;/website&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="web-footer-cta">
        <div className="container">
          <p>¿No estás seguro qué tipo de web necesitas?</p>
          <button onClick={handleWhatsApp} className="web-footer-link">
            Te asesoramos gratis
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default WebPage;