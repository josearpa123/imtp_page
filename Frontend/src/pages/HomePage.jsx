import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
import LogoLoop from '../components/LogoLoop'
import ProfileCard from '../components/ProfileCard'

// ✅ NUEVO: CardSwap
import CardSwap, { Card } from '../components/CardSwap/CardSwap'

const BASE = import.meta.env.BASE_URL

const LOGOS = [
  { src: `${BASE}logos/react.svg`, alt: 'React' },
  { src: `${BASE}logos/nodejs.svg`, alt: 'Node.js' },
  { src: `${BASE}logos/postgresql.svg`, alt: 'PostgreSQL' },
  { src: `${BASE}logos/docker.svg`, alt: 'Docker' },
  { src: `${BASE}logos/api.svg`, alt: 'API REST' },
  { src: `${BASE}logos/ux.svg`, alt: 'UI / UX' },
  { src: `${BASE}logos/seo.svg`, alt: 'SEO' },
  { src: `${BASE}logos/automation.svg`, alt: 'Automatización' },
  { src: `${BASE}logos/cloud.svg`, alt: 'Cloud / Deploy' }
]

const familias = [
  {
    id: 'web',
    title: 'Páginas Web y Presencia Digital',
    problema: 'No tienes presencia online o la que tienes no genera resultados.',
    paraQuien: 'Negocios que necesitan visibilidad profesional.',
    impacto: 'Clientes te encuentran, entienden tu valor y contactan.',
    path: '/soluciones/web',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    )
  },
  {
    id: 'software',
    title: 'Sistemas y Software a Medida',
    problema: 'Procesos manuales, datos dispersos, operación ineficiente.',
    paraQuien: 'Empresas que necesitan control sobre su operación.',
    impacto: 'Automatización real, datos centralizados, escalabilidad.',
    path: '/soluciones/software',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 9l3 3-3 3M13 15h3" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    )
  },
  {
    id: 'automatizacion',
    title: 'Automatización y Soluciones Internas',
    problema: 'Tareas repetitivas, sistemas que no se hablan, errores humanos.',
    paraQuien: 'Equipos que pierden tiempo en trabajo que debería ser automático.',
    impacto: 'Flujos integrados, menos errores, más capacidad operativa.',
    path: '/soluciones/automatizacion',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    id: 'marketing',
    title: 'Diseño y Marketing Digital',
    problema: 'Identidad inconsistente, presencia digital sin estrategia.',
    paraQuien: 'Negocios con producto sólido pero comunicación débil.',
    impacto: 'Marca coherente, contenido que convierte, campañas medibles.',
    path: '/soluciones/marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 5-6" />
      </svg>
    )
  }
]

const metodologia = [
  { num: '01', titulo: 'Diagnóstico', desc: 'Entendemos tu negocio, identificamos problemas reales y definimos qué resolver primero.' },
  { num: '02', titulo: 'Diseño de Solución', desc: 'Proponemos una solución técnica ajustada a tu contexto, sin sobredimensionar ni improvisar.' },
  { num: '03', titulo: 'Desarrollo', desc: 'Construimos con código limpio, entregas incrementales y comunicación constante.' },
  { num: '04', titulo: 'Optimización', desc: 'Iteramos según resultados reales. La solución crece contigo, no se abandona.' }
]

const perfilCliente = [
  {
    tipo: 'ideal',
    titulo: 'Trabajamos bien con',
    items: [
      'Negocios que ya facturan y necesitan escalar operaciones',
      'Startups con producto validado que necesitan construir tecnología sólida',
      'Empresas con procesos rotos que quieren orden y automatización',
      'Equipos que valoran la comunicación clara y entregas reales'
    ]
  },
  {
    tipo: 'no-ideal',
    titulo: 'No somos la mejor opción si',
    items: [
      'Buscas el precio más bajo del mercado',
      'Necesitas algo "para ayer" sin diagnóstico',
      'Quieres una página "bonita" sin pensar en resultados',
      'No tienes claridad sobre qué problema resolver'
    ]
  }
]

const capacidades = [
  { label: 'Sistemas web', desc: 'Plataformas, dashboards, portales internos' },
  { label: 'E-commerce', desc: 'Tiendas con integración de pagos y logística' },
  { label: 'Automatización', desc: 'Flujos, integraciones, bots, reportes' },
  { label: 'Software interno', desc: 'ERPs ligeros, CRMs, gestión operativa' },
  { label: 'Sitios corporativos', desc: 'Landing pages, sitios institucionales' },
  { label: 'Identidad digital', desc: 'Branding, diseño UI/UX, contenido' }
]

const teamMembers = [
  {
    name: 'Jose Arias',
    title: 'Backend Developer',
    handle: 'josearias',
    avatarUrl: '/profiles/jose-arias.png',
    glowColor: 'rgba(139, 92, 246, 0.6)',
    gradientFrom: '#7c3aed',
    gradientTo: '#1e1b4b'
  },
  {
    name: 'Frank Palma',
    title: 'Frontend Developer',
    handle: 'frankpalma',
    avatarUrl: '/profiles/frank-palma.png',
    glowColor: 'rgba(59, 130, 246, 0.6)',
    gradientFrom: '#3b82f6',
    gradientTo: '#0f172a'
  }
]

function HomePage() {
  const handleContactClick = () => {
    window.location.href = '/contacto'
  }

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">IMTP Studios</p>
            <h1 className="hero-title">
              Construimos la tecnología que tu negocio necesita para
              <span className="hero-accent"> crecer sin fricciones</span>
            </h1>
            <p className="hero-subtitle">
              No vendemos servicios genéricos. Diagnosticamos tu problema,
              diseñamos una solución a medida y la construimos con código
              que puedes mantener y escalar.
            </p>
            <div className="hero-ctas">
              <Link to="/cotizar" className="btn-primary">
                Cuéntanos tu proyecto
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/soluciones" className="btn-secondary">
                Ver cómo trabajamos
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">Soluciones que funcionan</span>
            </div>
          </div>
        </div>
      </section>

      {/* LogoLoop */}
      <section className="logoloop-section">
        <div className="container">
          <div className="logoloop-card">
            <div className="logoloop-header">
              <span className="logoloop-tag">Tecnologías y enfoque</span>
              <h2 className="logoloop-title">Construimos con stack moderno, sin improvisar.</h2>
              <p className="logoloop-subtitle">
                Esto no es para "sonar pro". Es para que tu sistema sea mantenible, rápido y escalable.
              </p>
            </div>

            <div className="logoloop-wrap">
              <LogoLoop
                logos={LOGOS}
                speed={120}
                direction="left"
                width="100%"
                logoHeight={84}
                gap={64}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="transparent"
                scaleOnHover={false}
                ariaLabel="Tecnologías y capacidades"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipo - Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header team-header">
            <span className="section-tag">Quiénes somos</span>
            <h2 className="section-title">
              Potenciar marcas mediante<br />
              <span className="text-gradient">tecnología real.</span>
            </h2>
          </div>

          <div className="team-grid">
            {teamMembers.map((m) => (
              <ProfileCard
                key={m.handle}
                name={m.name}
                title={m.title}
                handle={m.handle}
                status="Disponible"
                contactText="Contactar"
                avatarUrl={m.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowColor={m.glowColor}
                behindGlowSize="55%"
                innerGradient={`linear-gradient(145deg, ${m.gradientFrom}55 0%, ${m.gradientTo}55 100%)`}
                onContactClick={() => handleContactClick(m.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-card">
            <span className="contact-cta-tag">
              <span className="tag-dot"></span>
              ¿LISTO PARA DARLE FORMA A TU PROYECTO?
            </span>
            <h2 className="contact-cta-title">
              Tu idea, nuestro diseño... y algo<br />genial sucede.
            </h2>
            <a href="mailto:info@imtpstudios.com" className="contact-cta-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 10l-5 5 5 5" />
                <path d="M20 4v7a4 4 0 0 1-4 4H4" />
              </svg>
              info@imtpstudios.com
            </a>
          </div>
        </div>
      </section>

      {/* ✅ NUEVO BLOQUE (debajo del correo): Diseño + Ingeniería + CardSwap */}
      <section className="proof-section">
        <div className="container">
          <div className="proof-card">
            <div className="proof-left">
              <span className="proof-tag">DISEÑO + INGENIERÍA</span>

              <h2 className="proof-title">
                No se ve “bonito”.<br />
                <span className="proof-muted">Se siente sólido.</span>
              </h2>

              <p className="proof-subtitle">
                La experiencia importa: interfaces limpias, decisiones claras y desarrollo
                con base técnica real. Esto es lo que te entregamos cuando construimos contigo.
              </p>

              <div className="proof-pills">
                <span className="proof-pill">Confiabilidad</span>
                <span className="proof-pill">Código mantenible</span>
                <span className="proof-pill">UI/UX con intención</span>
                <span className="proof-pill">Performance</span>
              </div>
            </div>

            <div className="proof-right" aria-hidden="true">
              <div style={{ height: '420px', position: 'relative' }}>
                <CardSwap
                  width={560}
                  height={420}
                  cardDistance={38}
                  verticalDistance={30}
                  delay={5200}
                  pauseOnHover={true}
                  easing="elastic"
                >
                  {/* 1) Confiabilidad */}
                  <Card className="swapCard" style={{ '--swap-progress': '84%' }}>

                    <div className="swapHeader">
                      <div className="swapHeaderLeft">
                        <div className="swapIcon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
                            <path d="M9 12l2 2 4-5" />
                          </svg>
                        </div>

                        <span className="swapChip">
                          <span className="swapDot"></span>
                          Confiabilidad
                        </span>
                      </div>

                      <div className="swapMeta">
                      </div>
                    </div>

                    <h3 className="swapTitle">Tu sistema no puede fallar</h3>
                    <p className="swapDesc">
                      Diseño con control de errores, validaciones, trazabilidad y estructura técnica limpia.
                    </p>

                    <ul className="swapList">
                      <li><span className="swapCheck">✓</span>Flujos consistentes y predecibles</li>
                      <li><span className="swapCheck">✓</span>Métricas y logs para diagnóstico real</li>
                      <li><span className="swapCheck">✓</span>Menos “parches”, más estabilidad</li>
                    </ul>

                    <div className="swapStats">
                      <div className="swapStat">
                        <div className="swapStatNum">99.9%</div>
                        <div className="swapStatLabel">Uptime</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">-38%</div>
                        <div className="swapStatLabel">Incidentes</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">&lt;200ms</div>
                        <div className="swapStatLabel">Respuesta</div>
                      </div>
                    </div>

                    <div className="swapProgressWrap">
                      <div className="swapProgressTop">
                        <span>Madurez</span>
                        <span>84%</span>
                      </div>
                      <div className="swapBar">
                        <div className="swapBarFill"></div>
                      </div>
                    </div>

                    <div className="swapFooter">
                      <div className="swapTech">
                        <span className="swapTechTag">Validación</span>
                        <span className="swapTechTag">Observabilidad</span>
                        <span className="swapTechTag">Arquitectura</span>
                      </div>

                      <button className="swapBtn" type="button">
                        Ver ejemplo →
                      </button>
                    </div>
                  </Card>

                  {/* 2) Programación */}
                  <Card className="swapCard" style={{ '--swap-progress': '78%' }}>

                    <div className="swapHeader">
                      <div className="swapHeaderLeft">
                        <div className="swapIcon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M8 9l3 3-3 3" />
                            <path d="M13 15h3" />
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                          </svg>
                        </div>

                        <span className="swapChip">
                          <span className="swapDot"></span>
                          Programación
                        </span>
                      </div>

                      <div className="swapMeta">
                      </div>
                    </div>

                    <h3 className="swapTitle">Código mantenible, sin deuda tóxica</h3>
                    <p className="swapDesc">
                      Componentes reutilizables, estructura clara y decisiones técnicas justificadas desde el inicio.
                    </p>

                    <ul className="swapList">
                      <li><span className="swapCheck">✓</span>Arquitectura modular y escalable</li>
                      <li><span className="swapCheck">✓</span>Buenas prácticas y consistencia</li>
                      <li><span className="swapCheck">✓</span>Integración lista para backend</li>
                    </ul>

                    <div className="swapStats">
                      <div className="swapStat">
                        <div className="swapStatNum">+4x</div>
                        <div className="swapStatLabel">Escala</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">-30%</div>
                        <div className="swapStatLabel">Retrabajo</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">CI/CD</div>
                        <div className="swapStatLabel">Listo</div>
                      </div>
                    </div>

                    <div className="swapProgressWrap">
                      <div className="swapProgressTop">
                        <span>Madurez</span>
                        <span>78%</span>
                      </div>
                      <div className="swapBar">
                        <div className="swapBarFill"></div>
                      </div>
                    </div>

                    <div className="swapFooter">
                      <div className="swapTech">
                        <span className="swapTechTag">React</span>
                        <span className="swapTechTag">API REST</span>
                        <span className="swapTechTag">Deploy</span>
                      </div>

                      <button className="swapBtn" type="button">
                        Ver ejemplo →
                      </button>
                    </div>
                  </Card>

                  {/* 3) UI/UX */}
                  <Card className="swapCard" style={{ '--swap-progress': '73%' }}>

                    <div className="swapHeader">
                      <div className="swapHeaderLeft">
                        <div className="swapIcon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 6h16" />
                            <path d="M4 12h10" />
                            <path d="M4 18h16" />
                            <path d="M18 10l2 2-4 4-2 0 0-2 4-4z" />
                          </svg>
                        </div>

                        <span className="swapChip">
                          <span className="swapDot"></span>
                          UI/UX
                        </span>
                      </div>

                      <div className="swapMeta">
                      </div>
                    </div>

                    <h3 className="swapTitle">Interfaz que guía, no que confunde</h3>
                    <p className="swapDesc">
                      Jerarquía visual, microdecisiones y flows pensados para que el usuario llegue a la acción.
                    </p>

                    <ul className="swapList">
                      <li><span className="swapCheck">✓</span>Diseño coherente y profesional</li>
                      <li><span className="swapCheck">✓</span>Componentes y patrones consistentes</li>
                      <li><span className="swapCheck">✓</span>Accesibilidad y legibilidad</li>
                    </ul>

                    <div className="swapStats">
                      <div className="swapStat">
                        <div className="swapStatNum">+22%</div>
                        <div className="swapStatLabel">Conversión</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">-18%</div>
                        <div className="swapStatLabel">Fricción</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">AA</div>
                        <div className="swapStatLabel">Accesible</div>
                      </div>
                    </div>

                    <div className="swapProgressWrap">
                      <div className="swapProgressTop">
                        <span>Madurez</span>
                        <span>73%</span>
                      </div>
                      <div className="swapBar">
                        <div className="swapBarFill"></div>
                      </div>
                    </div>

                    <div className="swapFooter">
                      <div className="swapTech">
                        <span className="swapTechTag">UI System</span>
                        <span className="swapTechTag">UX Flow</span>
                        <span className="swapTechTag">Micro</span>
                      </div>

                      <button className="swapBtn" type="button">
                        Ver ejemplo →
                      </button>
                    </div>
                  </Card>

                  {/* 4) Performance */}
                  <Card className="swapCard" style={{ '--swap-progress': '69%' }}>

                    <div className="swapHeader">
                      <div className="swapHeaderLeft">
                        <div className="swapIcon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 3a9 9 0 1 0 9 9" />
                            <path d="M12 3v9l6 3" />
                            <path d="M20 4l-4 4" />
                          </svg>
                        </div>

                        <span className="swapChip">
                          <span className="swapDot"></span>
                          Performance
                        </span>
                      </div>

                      <div className="swapMeta">
                      </div>
                    </div>

                    <h3 className="swapTitle">Velocidad que se siente</h3>
                    <p className="swapDesc">
                      Cargas rápidas, layouts estables y decisiones para que el sitio responda sin “lag”.
                    </p>

                    <ul className="swapList">
                      <li><span className="swapCheck">✓</span>Optimización de assets y carga</li>
                      <li><span className="swapCheck">✓</span>Menos bloqueos, más fluidez</li>
                      <li><span className="swapCheck">✓</span>Buen rendimiento móvil</li>
                    </ul>

                    <div className="swapStats">
                      <div className="swapStat">
                        <div className="swapStatNum">90+</div>
                        <div className="swapStatLabel">Lighthouse</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">-35%</div>
                        <div className="swapStatLabel">Carga</div>
                      </div>
                      <div className="swapStat">
                        <div className="swapStatNum">CLS</div>
                        <div className="swapStatLabel">Estable</div>
                      </div>
                    </div>

                    <div className="swapProgressWrap">
                      <div className="swapProgressTop">
                        <span>Madurez</span>
                        <span>69%</span>
                      </div>
                      <div className="swapBar">
                        <div className="swapBarFill"></div>
                      </div>
                    </div>

                    <div className="swapFooter">
                      <div className="swapTech">
                        <span className="swapTechTag">Optimización</span>
                        <span className="swapTechTag">Core Web Vitals</span>
                        <span className="swapTechTag">Mobile</span>
                      </div>

                      <button className="swapBtn" type="button">
                        Ver ejemplo →
                      </button>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos - Familias de Solución */}
      <section className="familias-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Qué resolvemos</span>
            <h2 className="section-title">
              No pienses en servicios.<br />
              <span className="text-muted">Piensa en qué problema tienes.</span>
            </h2>
          </div>

          <div className="familias-grid">
            {familias.map(familia => (
              <Link key={familia.id} to={familia.path} className="familia-card">
                <div className="familia-icon">{familia.icon}</div>
                <h3 className="familia-title">{familia.title}</h3>
                <div className="familia-content">
                  <p className="familia-problema">
                    <strong>Problema:</strong> {familia.problema}
                  </p>
                  <p className="familia-para">
                    <strong>Para:</strong> {familia.paraQuien}
                  </p>
                  <p className="familia-impacto">
                    <strong>Impacto:</strong> {familia.impacto}
                  </p>
                </div>
                <span className="familia-link">
                  Explorar solución
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos - Metodología */}
      <section className="metodologia-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Cómo trabajamos</span>
            <h2 className="section-title">
              Proceso claro, sin sorpresas.<br />
              <span className="text-muted">Cada paso tiene un propósito.</span>
            </h2>
          </div>

          <div className="metodologia-grid">
            {metodologia.map((paso, index) => (
              <div key={paso.num} className="metodologia-card">
                <span className="metodologia-num">{paso.num}</span>
                <h3 className="metodologia-titulo">{paso.titulo}</h3>
                <p className="metodologia-desc">{paso.desc}</p>
                {index < metodologia.length - 1 && (
                  <div className="metodologia-connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <p className="metodologia-nota">
            Este proceso no es burocracia. Es lo que nos permite entregar
            soluciones que funcionan y evitar proyectos que nunca terminan.
          </p>
        </div>
      </section>

      {/* Para quién es */}
      <section className="perfil-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Para quién trabajamos</span>
            <h2 className="section-title">
              No somos para todos.<br />
              <span className="text-muted">Y eso está bien.</span>
            </h2>
          </div>

          <div className="perfil-grid">
            {perfilCliente.map(perfil => (
              <div key={perfil.tipo} className={`perfil-card perfil-${perfil.tipo}`}>
                <h3 className="perfil-titulo">{perfil.titulo}</h3>
                <ul className="perfil-lista">
                  {perfil.items.map((item, i) => (
                    <li key={i}>
                      <span className="perfil-check">{perfil.tipo === 'ideal' ? '✔' : '✕'}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="capacidades-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Qué hemos construido</span>
            <h2 className="section-title">
              Tipos de proyectos que ejecutamos.<br />
              <span className="text-muted">Sin humo, sin métricas inventadas.</span>
            </h2>
          </div>

          <div className="capacidades-grid">
            {capacidades.map((cap, i) => (
              <div key={i} className="capacidad-item">
                <h4 className="capacidad-label">{cap.label}</h4>
                <p className="capacidad-desc">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="capacidades-cta">
            <Link to="/portafolio" className="btn-text">
              Ver proyectos realizados →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-eyebrow">¿Tienes un proyecto en mente?</span>
            <h2 className="cta-title">Cuéntanos qué necesitas resolver.</h2>
            <p className="cta-text">
              No hay compromiso. Analizamos tu caso, te decimos si podemos
              ayudarte y qué implicaría. Sin humo, sin presión.
            </p>
            <div className="cta-actions">
              <Link to="/cotizar" className="btn-primary btn-lg">
                Solicitar diagnóstico
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="cta-nota">Respondemos en menos de 24 horas hábiles.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
