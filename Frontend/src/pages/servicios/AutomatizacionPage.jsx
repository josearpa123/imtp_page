// src/pages/servicios/AutomatizacionPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/AutomatizacionPage.css";

function AutomatizacionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const soluciones = [
    {
      id: "workflows",
      nombre: "Workflows Automáticos",
      tagline: "Tareas que se ejecutan solas",
      descripcion: "Definimos reglas y disparadores. Cuando pasa X, se ejecuta Y automáticamente.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      ejemplos: [
        "Envío automático de facturas",
        "Notificaciones por eventos",
        "Backups programados",
        "Reportes recurrentes"
      ]
    },
    {
      id: "integraciones",
      nombre: "Integraciones",
      tagline: "Sistemas que hablan entre sí",
      descripcion: "Conectamos tu ERP, CRM, e-commerce y herramientas para que los datos fluyan sin fricción.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      ejemplos: [
        "ERP ↔ Tienda online",
        "CRM ↔ WhatsApp",
        "Contabilidad ↔ Bancos",
        "Inventario ↔ Ventas"
      ]
    },
    {
      id: "bots",
      nombre: "Bots & Asistentes",
      tagline: "Atención 24/7 sin humanos",
      descripcion: "Chatbots para atención al cliente, bots internos para consultas y automatización de respuestas.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
      ejemplos: [
        "Bot de WhatsApp Business",
        "Chatbot web 24/7",
        "Asistente de Telegram",
        "Bot de notificaciones"
      ]
    },
    {
      id: "datos",
      nombre: "Procesamiento de Datos",
      tagline: "De datos crudos a decisiones",
      descripcion: "Automatizamos recolección, limpieza y visualización de datos para tomar mejores decisiones.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      ejemplos: [
        "Dashboards en tiempo real",
        "Alertas inteligentes",
        "ETL automatizado",
        "Reportes auto-generados"
      ]
    }
  ];

  const proceso = [
    {
      num: "01",
      titulo: "Diagnóstico",
      desc: "Mapeamos tus procesos actuales e identificamos qué tareas consumen más tiempo."
    },
    {
      num: "02",
      titulo: "Diseño",
      desc: "Proponemos la solución óptima: qué automatizar, con qué herramientas y en qué orden."
    },
    {
      num: "03",
      titulo: "Implementación",
      desc: "Construimos y probamos cada automatización con entregas incrementales."
    },
    {
      num: "04",
      titulo: "Optimización",
      desc: "Monitoreamos resultados y ajustamos para maximizar el impacto."
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20automatización", "_blank");
  };

  return (
    <div className="auto-page">
      {/* ===== HERO ===== */}
      <section className="auto-hero">
        <div className="auto-hero-bg">
          <div className="hero-gradient"></div>
        </div>

        <div className="container">
          <Link to="/servicios" className="auto-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>

          <div className="auto-hero-grid">
            <div className="auto-hero-content">
              <span className="auto-label">Optimiza tus procesos internos</span>
              <h1 className="auto-hero-title">Automatización</h1>
              <p className="auto-hero-desc">
                Eliminamos tareas repetitivas, integramos sistemas y liberamos tiempo 
                para lo que realmente importa en tu operación.
              </p>
              <div className="auto-hero-actions">
                <button onClick={handleWhatsApp} className="auto-btn auto-btn--primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Agendar diagnóstico
                </button>
                <Link to="/contacto" className="auto-btn auto-btn--ghost">
                  Ver más info
                </Link>
              </div>
            </div>

            <div className="auto-hero-visual">
              {/* Workflow Visual */}
              <div className="workflow-visual">
                <div className="workflow-node workflow-node--trigger">
                  <div className="node-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
                <div className="workflow-line"></div>
                <div className="workflow-node workflow-node--action">
                  <div className="node-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="workflow-line"></div>
                <div className="workflow-node workflow-node--result">
                  <div className="node-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                </div>

                {/* Floating integration icons */}
                <div className="integration-icons">
                  <div className="int-icon int-icon--1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                  <div className="int-icon int-icon--2">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm6 6H4v-2h6v2zm10 0h-8v-2h8v2zm0-4H10v-2h10v2z"/>
                    </svg>
                  </div>
                  <div className="int-icon int-icon--3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="auto-beneficios">
        <div className="container">
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <span className="beneficio-num">70%</span>
              <span className="beneficio-label">menos tiempo en tareas manuales</span>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-num">0</span>
              <span className="beneficio-label">errores por entrada manual</span>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-num">24/7</span>
              <span className="beneficio-label">operación sin intervención</span>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-num">∞</span>
              <span className="beneficio-label">escalabilidad sin contratar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUCIONES ===== */}
      <section className="auto-soluciones">
        <div className="container">
          <div className="section-header">
            <span className="auto-label">Soluciones</span>
            <h2 className="section-title">¿Qué podemos automatizar?</h2>
            <p className="section-desc">Cada negocio tiene procesos únicos. Estos son los más comunes.</p>
          </div>

          <div className="soluciones-grid">
            {soluciones.map((sol) => (
              <div key={sol.id} className="solucion-card">
                <div className="solucion-header">
                  <div className="solucion-icon">
                    {sol.icono}
                  </div>
                  <span className="solucion-status">Disponible</span>
                </div>

                <h3 className="solucion-nombre">{sol.nombre}</h3>
                <span className="solucion-tagline">{sol.tagline}</span>
                <p className="solucion-desc">{sol.descripcion}</p>

                <ul className="solucion-ejemplos">
                  {sol.ejemplos.map((ej, idx) => (
                    <li key={idx}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      {ej}
                    </li>
                  ))}
                </ul>

                <div className="solucion-footer">
                  <button onClick={handleWhatsApp} className="solucion-cta">
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
      <section className="auto-proceso">
        <div className="container">
          <div className="section-header">
            <span className="auto-label">Metodología</span>
            <h2 className="section-title">¿Cómo trabajamos?</h2>
            <p className="section-desc">De diagnóstico a implementación en semanas, no meses.</p>
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
      <section className="auto-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              ¿Tienes procesos que te quitan tiempo?
            </h2>
            <p className="cta-desc">
              Agenda un diagnóstico gratuito. Analizamos tu operación y te decimos 
              qué se puede automatizar y cuánto tiempo puedes ahorrar.
            </p>
            <div className="cta-actions">
              <button onClick={handleWhatsApp} className="auto-btn auto-btn--white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar diagnóstico gratis
              </button>
              <Link to="/contacto" className="auto-btn auto-btn--outline-white">
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AutomatizacionPage;