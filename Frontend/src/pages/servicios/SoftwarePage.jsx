// src/pages/servicios/SoftwarePage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/SoftwarePage.css";

function SoftwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tecnologias = [
    "React", "Node.js", "PostgreSQL", "MongoDB", "AWS",
    "Docker", "Python", "TypeScript", "Next.js", "Tailwind"
  ];

  const features = [
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titulo: "100% Personalizado",
      descripcion: "Cada línea de código se escribe para tu negocio. Sin plantillas, sin limitaciones."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      titulo: "Seguridad empresarial",
      descripcion: "Backups automáticos, encriptación de datos y cumplimiento de normativas colombianas."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      titulo: "Escalable sin límites",
      descripcion: "De 1 usuario a 1,000. De una sede a múltiples sucursales sin cambiar de sistema."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      titulo: "Acceso desde cualquier lugar",
      descripcion: "Cloud o servidor local. Accede desde computador, celular o tablet."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      titulo: "Integraciones nativas",
      descripcion: "DIAN, bancos colombianos, WhatsApp Business, pasarelas de pago y contabilidad."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Soporte 24/7",
      descripcion: "Equipo local en Colombia. Respondemos en español, en tu zona horaria."
    },
  ];

  const industrias = [
    {
      id: "salud",
      nombre: "Sector Salud",
      imagen: "/assets/servicios/soft-salud.jpg",
      tagline: "ERP Farmacéutico Completo",
      descripcion:
        "Sistemas para farmacias, droguerías e IPS. Control de inventario con lotes y vencimientos, dispensación de medicamentos, trazabilidad INVIMA y facturación electrónica DIAN integrada."
    },
    {
      id: "retail",
      nombre: "Retail y Comercio",
      imagen: "/assets/servicios/soft-retail.jpg",
      tagline: "POS + ERP Integrado",
      descripcion:
        "Punto de venta táctil para ferreterías, supermercados, minimarkets y tiendas. Control de inventario en tiempo real, múltiples cajas y reportes de ventas instantáneos."
    },
    {
      id: "distribucion",
      nombre: "Distribución",
      imagen: "/assets/servicios/soft-distribucion.jpg",
      tagline: "Logística y Rutas",
      descripcion:
        "ERP para distribuidoras y mayoristas. Gestión de rutas de entrega, control de bodegas con ubicaciones, picking optimizado y seguimiento GPS de entregas."
    },
    {
      id: "servicios",
      nombre: "Servicios",
      imagen: "/assets/servicios/soft-servicios.jpg",
      tagline: "Agendamiento Online",
      descripcion:
        "Software para barberías, salones de belleza, consultorios médicos y gimnasios. Agenda online 24/7, recordatorios automáticos por WhatsApp y gestión de clientes."
    },
    {
      id: "ecommerce",
      nombre: "E-commerce",
      imagen: "/assets/servicios/soft-ecommerce.jpg",
      tagline: "Tienda Online Completa",
      descripcion:
        "Plataformas de comercio electrónico a medida. Catálogo con WhatsApp, integración con Wompi, Nequi y PSE. Sincronización automática con tu inventario físico."
    },
    {
      id: "industria",
      nombre: "Industria",
      imagen: "/assets/servicios/soft-industria.jpg",
      tagline: "ERP Manufactura",
      descripcion:
        "Control de órdenes de producción, costeo de productos terminados, trazabilidad de materias primas, gestión de calidad ISO y mantenimiento de maquinaria."
    },
  ];

  const testimonios = [
    {
      texto: "Pasamos de Excel a un sistema completo en 2 meses. Las ventas se facturan en segundos y el inventario siempre está al día.",
      autor: "Carlos Méndez",
      cargo: "Gerente, Ferretería El Constructor",
    },
    {
      texto: "El sistema de dispensación nos ayudó a cumplir con todos los requisitos de la Secretaría de Salud sin dolores de cabeza.",
      autor: "Dra. María López",
      cargo: "Directora, Droguería Farmasalud",
    },
    {
      texto: "Ahora mis 3 sedes están conectadas en tiempo real. Puedo ver reportes desde el celular mientras viajo.",
      autor: "Andrés Ramírez",
      cargo: "Propietario, Supermercados Don Andrés",
    },
    {
      texto: "Reducimos el tiempo de cierre mensual de 5 días a 4 horas. Los reportes salen automáticamente.",
      autor: "Jorge Herrera",
      cargo: "Contador, Grupo Industrial HG",
    },
  ];

  const stats = [
    { value: "50+", label: "sistemas implementados" },
    { value: "12", label: "industrias diferentes" },
    { value: "99.9%", label: "uptime garantizado" },
    { value: "24h", label: "tiempo de respuesta" },
  ];

  return (
    <div className="software-page">
      {/* ===== HERO ===== */}
      <section className="erp-hero">
        <div className="erp-hero-content">
          <Link to="/servicios" className="erp-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>

          <h1 className="erp-hero-title">
            <span className="erp-title-accent">Software ERP</span>
            <br />
            hecho a tu medida.
          </h1>

          <p className="erp-hero-desc">
            Analizamos tu operación y construimos el sistema exacto que necesitas.
            Sin licencias genéricas, sin funciones que no usarás, sin límites.
          </p>

          <div className="erp-hero-actions">
            <Link to="/contacto" className="erp-btn erp-btn--accent">
              Solicitar diagnóstico
            </Link>
            <a href="#industrias" className="erp-btn erp-btn--ghost">
              Ver soluciones
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="erp-marquee">
        <div className="erp-marquee-track">
          {[...tecnologias, ...tecnologias].map((tech, idx) => (
            <span key={idx} className="erp-marquee-item">{tech}</span>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="erp-features">
        <div className="container">
          <h2 className="erp-section-title">
            Desarrollo profesional
            <br />
            <span className="erp-title-muted">con estándares de industria</span>
          </h2>

          <div className="erp-features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="erp-feature">
                <div className="erp-feature-icon">{feat.icono}</div>
                <h3 className="erp-feature-title">{feat.titulo}</h3>
                <p className="erp-feature-desc">{feat.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIAS ===== */}
      <section id="industrias" className="erp-industrias-banner">
        <div className="banner-bg">
          <ul className="floating-boxes">
            <li></li><li></li><li></li><li></li><li></li><li></li>
          </ul>
        </div>

        <div className="container">
          <span className="erp-label">Especialización por sector</span>

          <h2 className="erp-section-title erp-section-title--light">
            <span className="erp-title-accent">Elige tu industria.</span>
            <br />
            Nosotros construimos la solución.
          </h2>

          <div className="erp-cards-container">
            {industrias.map((ind) => (
              <div key={ind.id} className="erp-product-card">
                <div className="card-top-bar">
                  <svg className="card-brand-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="card-status">Disponible</span>
                </div>

                <div className="card-img-container">
                  <img
                    src={ind.imagen}
                    alt={ind.nombre}
                    className="card-product-img"
                  />
                </div>

                <div className="card-details">
                  <div className="card-name-fav">
                    <strong className="card-product-name">{ind.nombre}</strong>
                    <button className="card-fav-btn" type="button" aria-label="Favorito">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="card-wrapper">
                    <h5 className="card-tagline">{ind.tagline}</h5>
                    <p className="card-description">{ind.descripcion}</p>

                    {/* CTA ya no se monta: va abajo, izquierda */}
                    <div className="card-purchase">
                      <Link to="/contacto" className="card-add-btn">
                        Cotizar
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="erp-testimonios">
        <div className="container">
          <span className="erp-label">Lo que dicen nuestros clientes</span>
          <h2 className="erp-section-title">
            Resultados reales,
            <br />
            <span className="erp-title-muted">no promesas vacías.</span>
          </h2>
        </div>

        <div className="erp-testimonios-track">
          {testimonios.map((test, idx) => (
            <div key={idx} className="erp-testimonio-card">
              <p className="erp-testimonio-texto">"{test.texto}"</p>
              <div className="erp-testimonio-autor">
                <div className="erp-testimonio-avatar">{test.autor.charAt(0)}</div>
                <div className="erp-testimonio-info">
                  <span className="erp-testimonio-nombre">{test.autor}</span>
                  <span className="erp-testimonio-cargo">{test.cargo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="erp-stats">
        <div className="container">
          <div className="erp-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="erp-stat">
                <span className="erp-stat-value">{stat.value}</span>
                <span className="erp-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="erp-cta">
        <div className="container">
          <div className="erp-cta-content">
            <h2 className="erp-cta-title">
              Construyamos juntos
              <br />
              el sistema de tu negocio
            </h2>
            <Link to="/contacto" className="erp-btn erp-btn--accent">
              Agendar diagnóstico gratuito
            </Link>
          </div>

          <div className="erp-cta-visual">
            <div className="erp-cta-window erp-cta-window--1">
              <div className="window-header">
                <span></span><span></span><span></span>
              </div>
              <div className="window-content">
                <div className="window-chart">
                  <div style={{ height: "50%" }}></div>
                  <div style={{ height: "80%" }}></div>
                  <div style={{ height: "60%" }}></div>
                  <div style={{ height: "90%" }}></div>
                </div>
              </div>
            </div>

            <div className="erp-cta-window erp-cta-window--2">
              <div className="window-header">
                <span></span><span></span><span></span>
              </div>
              <div className="window-content">
                <div className="window-lines">
                  <div></div><div></div><div></div><div></div>
                </div>
              </div>
            </div>

            <div className="erp-cta-window erp-cta-window--3">
              <div className="window-header">
                <span></span><span></span><span></span>
              </div>
              <div className="window-content">
                <div className="window-code">
                  <span className="code-keyword">const</span> sistema = <span className="code-string">"tuyo"</span>;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="erp-footer-cta">
        <div className="container">
          <p>¿Tu industria no está en la lista? Desarrollamos para cualquier sector.</p>
          <Link to="/contacto">
            Contáctanos
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SoftwarePage;
