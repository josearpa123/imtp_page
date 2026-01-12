// src/pages/servicios/AutomatizacionPage.jsx
import { Link } from "react-router-dom";
import "../../styles/AutomatizacionPage.css";

function AutomatizacionPage() {
  const soluciones = [
    {
      id: 'procesos',
      icono: '⚡',
      titulo: 'Automatización de Procesos',
      descripcion: 'Eliminamos tareas manuales repetitivas. Workflows automáticos que ahorran horas de trabajo.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      ejemplos: [
        'Generación automática de reportes',
        'Envío programado de correos',
        'Procesamiento de datos recurrentes',
        'Sincronización entre sistemas'
      ]
    },
    {
      id: 'integraciones',
      icono: '🔗',
      titulo: 'Integraciones de Sistemas',
      descripcion: 'Conectamos tus herramientas para que trabajen juntas. Sin copiar y pegar datos manualmente.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      ejemplos: [
        'ERP ↔ E-commerce',
        'CRM ↔ Email Marketing',
        'Contabilidad ↔ Facturación',
        'WhatsApp ↔ CRM'
      ]
    },
    {
      id: 'bots',
      icono: '🤖',
      titulo: 'Bots y Asistentes',
      descripcion: 'Chatbots para atención al cliente y bots internos para tareas operativas.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      ejemplos: [
        'Chatbot de WhatsApp Business',
        'Bot de atención en sitio web',
        'Asistentes de Telegram/Discord',
        'Bots de notificaciones internas'
      ]
    },
    {
      id: 'datos',
      icono: '📊',
      titulo: 'Procesamiento de Datos',
      descripcion: 'Automatizamos la recolección, limpieza y análisis de datos para mejores decisiones.',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      ejemplos: [
        'ETL automatizado',
        'Dashboards en tiempo real',
        'Alertas inteligentes',
        'Reportes automáticos'
      ]
    }
  ];

  const proceso = [
    {
      numero: '01',
      titulo: 'Diagnóstico',
      descripcion: 'Mapeamos tus procesos actuales e identificamos cuellos de botella.'
    },
    {
      numero: '02',
      titulo: 'Diseño',
      descripcion: 'Proponemos la solución óptima: qué automatizar y con qué herramientas.'
    },
    {
      numero: '03',
      titulo: 'Implementación',
      descripcion: 'Construimos y probamos las automatizaciones con entregas progresivas.'
    },
    {
      numero: '04',
      titulo: 'Optimización',
      descripcion: 'Monitoreamos, ajustamos y mejoramos continuamente según resultados.'
    }
  ];

  return (
    <div className="auto-page">
      {/* Hero */}
      <section className="auto-hero">
        <div className="container">
          <Link to="/servicios" className="auto-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>
          
          <div className="auto-hero-content">
            <span className="auto-hero-label">Automatización</span>
            <h1 className="auto-hero-title">
              Tu equipo enfocado en
              <span className="auto-hero-accent"> lo que importa</span>
            </h1>
            <p className="auto-hero-text">
              Automatizamos tareas repetitivas, conectamos tus sistemas y liberamos 
              tiempo para que tu equipo se enfoque en generar valor real.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="auto-stats">
        <div className="container">
          <div className="auto-stats-grid">
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Reducción de tiempo</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Errores humanos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Operación continua</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Escalabilidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section className="auto-soluciones">
        <div className="container">
          <div className="auto-soluciones-header">
            <h2>¿Qué podemos automatizar?</h2>
            <p>Cada negocio tiene procesos únicos. Estos son los más comunes.</p>
          </div>

          <div className="auto-soluciones-grid">
            {soluciones.map((sol) => (
              <article key={sol.id} className="solucion-card">
                <div className="solucion-visual" style={{ background: sol.gradient }}>
                  <span className="solucion-icono">{sol.icono}</span>
                </div>
                
                <div className="solucion-content">
                  <h3 className="solucion-titulo">{sol.titulo}</h3>
                  <p className="solucion-desc">{sol.descripcion}</p>
                  
                  <div className="solucion-ejemplos">
                    <span className="ejemplos-label">Ejemplos:</span>
                    <ul>
                      {sol.ejemplos.map((ej, idx) => (
                        <li key={idx}>{ej}</li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contacto" className="solucion-cta">
                    Consultar
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
      <section className="auto-proceso">
        <div className="container">
          <div className="auto-proceso-header">
            <h2>¿Cómo funciona?</h2>
            <p>Un proceso claro de diagnóstico a implementación</p>
          </div>

          <div className="auto-proceso-grid">
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
      <section className="auto-cta">
        <div className="container">
          <div className="auto-cta-content">
            <h2>¿Tienes procesos que te quitan tiempo?</h2>
            <p>
              Agenda una consulta gratuita. Analizamos tu operación y te decimos 
              qué se puede automatizar y cuánto tiempo puedes ahorrar.
            </p>
            <Link to="/contacto" className="auto-cta-btn">
              Agendar diagnóstico gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AutomatizacionPage;