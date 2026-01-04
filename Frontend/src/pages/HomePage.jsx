import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

const familias = [
  {
    id: 'web',
    title: 'Páginas Web y Presencia Digital',
    description: 'Desde landing pages hasta plataformas completas. Tu presencia digital profesional.',
    path: '/soluciones/web',
    icon: '🌐'
  },
  {
    id: 'software',
    title: 'Sistemas y Software a Medida',
    description: 'Soluciones diseñadas específicamente para las necesidades de tu negocio.',
    path: '/soluciones/software',
    icon: '⚙️'
  },
  {
    id: 'automatizacion',
    title: 'Automatización y Soluciones Internas',
    description: 'Optimiza procesos, reduce tareas manuales e integra sistemas existentes.',
    path: '/soluciones/automatizacion',
    icon: '🔄'
  },
  {
    id: 'marketing',
    title: 'Diseño y Marketing Digital',
    description: 'Identidad visual y estrategias digitales alineadas con tus objetivos.',
    path: '/soluciones/marketing',
    icon: '📈'
  }
]

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Soluciones Tecnológicas
              <span className="hero-accent"> Integrales</span>
            </h1>
            <p className="hero-subtitle">
              Desarrollamos sistemas, plataformas y herramientas digitales que 
              impulsan el crecimiento de tu negocio.
            </p>
            <div className="hero-ctas">
              <Link to="/soluciones" className="btn-primary">
                Ver Soluciones
              </Link>
              <Link to="/cotizar" className="btn-secondary">
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Familias de Solución */}
      <section className="soluciones-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Qué problema necesitas resolver?</h2>
            <p className="section-subtitle">
              Organizamos nuestras soluciones por el impacto que generan en tu negocio.
            </p>
          </div>

          <div className="familias-grid">
            {familias.map(familia => (
              <Link 
                key={familia.id} 
                to={familia.path} 
                className="familia-card"
              >
                <span className="familia-icon">{familia.icon}</span>
                <h3 className="familia-title">{familia.title}</h3>
                <p className="familia-desc">{familia.description}</p>
                <span className="familia-link">Explorar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">¿Listo para comenzar?</h2>
            <p className="cta-text">
              Cuéntanos sobre tu proyecto y te ayudamos a encontrar la mejor solución.
            </p>
            <Link to="/contacto" className="cta-button">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage