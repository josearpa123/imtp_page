// src/pages/servicios/AcademicoPage.jsx
import { Link } from "react-router-dom";
import "../../styles/AcademicoPage.css";

function AcademicoPage() {
  const servicios = [
    {
      id: 'proyectos',
      icono: '📚',
      titulo: 'Proyectos de Grado',
      descripcion: 'Acompañamiento técnico en desarrollo de tesis y proyectos universitarios.',
      detalles: [
        'Definición de alcance técnico',
        'Arquitectura de software',
        'Revisión de código',
        'Documentación técnica'
      ]
    },
    {
      id: 'asesoria',
      icono: '💡',
      titulo: 'Asesoría Técnica',
      descripcion: 'Consultoría para estudiantes que necesitan orientación en sus proyectos.',
      detalles: [
        'Selección de tecnologías',
        'Resolución de problemas',
        'Mejores prácticas',
        'Code review'
      ]
    },
    {
      id: 'desarrollo',
      icono: '💻',
      titulo: 'Desarrollo de Proyectos',
      descripcion: 'Apoyo en la implementación técnica de proyectos académicos complejos.',
      detalles: [
        'Backend y APIs',
        'Frontend y UI/UX',
        'Bases de datos',
        'Despliegue'
      ]
    },
    {
      id: 'preparacion',
      icono: '🎯',
      titulo: 'Preparación de Sustentaciones',
      descripcion: 'Te ayudamos a preparar y defender tu proyecto ante el jurado.',
      detalles: [
        'Estructura de presentación',
        'Demo del proyecto',
        'Preguntas frecuentes',
        'Ensayo de sustentación'
      ]
    }
  ];

  const proceso = [
    {
      numero: '01',
      titulo: 'Contacto',
      descripcion: 'Cuéntanos sobre tu proyecto y en qué necesitas ayuda.'
    },
    {
      numero: '02',
      titulo: 'Evaluación',
      descripcion: 'Revisamos el alcance y definimos cómo podemos apoyarte.'
    },
    {
      numero: '03',
      titulo: 'Acompañamiento',
      descripcion: 'Sesiones de trabajo según el plan acordado.'
    },
    {
      numero: '04',
      titulo: 'Entrega',
      descripcion: 'Proyecto terminado y listo para sustentar.'
    }
  ];

  return (
    <div className="acad-page">
      {/* Hero */}
      <section className="acad-hero">
        <div className="container">
          <Link to="/servicios" className="acad-back">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Servicios
          </Link>
          
          <div className="acad-hero-content">
            <span className="acad-hero-label">Apoyo Académico</span>
            <h1 className="acad-hero-title">
              Acompañamiento para
              <span className="acad-hero-accent"> estudiantes</span>
            </h1>
            <p className="acad-hero-text">
              Soporte técnico especializado para proyectos universitarios. 
              Desde la idea hasta la sustentación.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="acad-disclaimer">
        <div className="container">
          <div className="disclaimer-box">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="disclaimer-content">
              <strong>Importante:</strong> Ofrecemos acompañamiento técnico y asesoría. 
              El estudiante es responsable del contenido académico y la autoría de su trabajo.
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="acad-servicios">
        <div className="container">
          <div className="acad-servicios-header">
            <h2>¿Cómo podemos ayudarte?</h2>
            <p>Servicios de acompañamiento para tu proyecto universitario</p>
          </div>

          <div className="acad-servicios-grid">
            {servicios.map((srv) => (
              <article key={srv.id} className="acad-card">
                <div className="acad-card-icon">
                  <span>{srv.icono}</span>
                </div>
                
                <div className="acad-card-content">
                  <h3 className="acad-card-titulo">{srv.titulo}</h3>
                  <p className="acad-card-desc">{srv.descripcion}</p>
                  
                  <ul className="acad-card-detalles">
                    {srv.detalles.map((det, idx) => (
                      <li key={idx}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {det}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="acad-proceso">
        <div className="container">
          <div className="acad-proceso-header">
            <h2>¿Cómo funciona?</h2>
            <p>Proceso simple y transparente</p>
          </div>

          <div className="acad-proceso-grid">
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

      {/* FAQ */}
      <section className="acad-faq">
        <div className="container">
          <div className="acad-faq-header">
            <h2>Preguntas frecuentes</h2>
          </div>

          <div className="acad-faq-grid">
            <div className="faq-item">
              <h4>¿Qué tipo de proyectos apoyan?</h4>
              <p>
                Proyectos de grado en ingeniería de sistemas, software, informática 
                y áreas relacionadas. Desarrollo web, aplicaciones móviles, sistemas 
                de información, automatización.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Hacen el proyecto completo?</h4>
              <p>
                No. Ofrecemos acompañamiento técnico. El estudiante debe participar 
                activamente en el desarrollo y es responsable de su trabajo académico.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Cuánto tiempo toma?</h4>
              <p>
                Depende del alcance del proyecto y en qué etapa te encuentres. 
                En la evaluación inicial definimos tiempos realistas.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Cuánto cuesta?</h4>
              <p>
                El costo varía según el tipo de acompañamiento y la complejidad 
                del proyecto. Contáctanos para una cotización sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="acad-cta">
        <div className="container">
          <div className="acad-cta-content">
            <h2>¿Necesitas apoyo con tu proyecto?</h2>
            <p>
              Cuéntanos sobre tu proyecto universitario y te orientamos 
              sobre cómo podemos ayudarte.
            </p>
            <Link to="/contacto" className="acad-cta-btn">
              Solicitar asesoría
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AcademicoPage;