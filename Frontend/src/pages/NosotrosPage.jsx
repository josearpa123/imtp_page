// src/pages/NosotrosPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NosotrosPage.css";

function NosotrosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "50+", label: "Proyectos entregados" },
    { value: "98%", label: "Clientes satisfechos" },
    { value: "3+", label: "Años de experiencia" },
    { value: "24h", label: "Tiempo de respuesta" }
  ];

  const equipo = [
    {
      id: "frank",
      nombre: "Frank",
      rol: "Co-Founder & Frontend Lead",
      bio: "Arquitecto de interfaces. Obsesionado con la experiencia de usuario, el rendimiento y los detalles que hacen la diferencia.",
      especialidades: ["React & Next.js", "UI/UX Design", "Performance", "Design Systems"]
    },
    {
      id: "jose",
      nombre: "Jose Arias",
      rol: "Co-Founder & Backend Lead",
      bio: "Ingeniero de sistemas. Especialista en arquitecturas escalables, bases de datos y soluciones empresariales robustas.",
      especialidades: ["Node.js & Python", "PostgreSQL & MongoDB", "AWS & DevOps", "API Design"]
    }
  ];

  const valores = [
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      titulo: "Velocidad",
      descripcion: "Entregamos rápido sin sacrificar calidad. Iteraciones cortas, feedback constante."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      titulo: "Excelencia",
      descripcion: "Código limpio, arquitectura sólida, documentación clara. Construimos para escalar."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
      titulo: "Transparencia",
      descripcion: "Sin letra pequeña. Sabes exactamente qué estamos haciendo y cuánto cuesta."
    },
    {
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      titulo: "Resultados",
      descripcion: "No vendemos horas, vendemos soluciones. Medimos éxito por impacto real."
    }
  ];

  const tecnologias = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Figma"
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/573207262477?text=Hola,%20quiero%20conocer%20más%20sobre%20IMTP%20Studios", "_blank");
  };

  return (
    <div className="nosotros-page">
      {/* ===== HERO ===== */}
      <section className="nos-hero">
        <div className="nos-hero-bg">
          <div className="hero-glow"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="container">
          <div className="nos-hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              Estudio de tecnología en Cali, Colombia
            </div>

            <h1 className="nos-hero-title">
              Construimos software
              <span className="title-gradient"> que funciona.</span>
            </h1>

            <p className="nos-hero-desc">
              No somos una agencia. Somos un estudio técnico que diagnostica problemas 
              reales y construye soluciones a medida. Sin intermediarios, sin plantillas, 
              sin sorpresas.
            </p>

            <div className="nos-hero-actions">
              <button onClick={handleWhatsApp} className="nos-btn nos-btn--primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hablemos de tu proyecto
              </button>
              <Link to="/portafolio" className="nos-btn nos-btn--ghost">
                Ver nuestro trabajo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="nos-hero-stats">
          <div className="container">
            <div className="stats-row">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-block">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-text">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HISTORIA ===== */}
      <section className="nos-historia">
        <div className="container">
          <div className="historia-layout">
            <div className="historia-text">
              <span className="nos-label">Nuestra historia</span>
              <h2 className="nos-title">
                Nacimos para resolver<br />problemas reales.
              </h2>
              <div className="historia-paragraphs">
                <p>
                  IMTP Studios nació de una frustración común: empresas pagando 
                  por soluciones genéricas que no resolvían sus problemas reales.
                </p>
                <p>
                  Decidimos hacer las cosas diferente. Primero escuchamos, después 
                  diagnosticamos, y solo entonces proponemos. No vendemos tecnología 
                  por vender — <strong>vendemos resultados.</strong>
                </p>
                <p>
                  Hoy trabajamos con empresas de todos los tamaños en Colombia, 
                  siempre con el mismo enfoque: entender antes de construir.
                </p>
              </div>
            </div>

            <div className="historia-visual">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="code-filename">imtp.config.js</span>
                </div>
                <div className="code-body">
                  <pre>
                    <code>
<span className="code-keyword">const</span> <span className="code-var">imtp</span> <span className="code-op">=</span> {"{"}{"\n"}
{"  "}<span className="code-prop">enfoque</span>: <span className="code-string">"diagnóstico primero"</span>,{"\n"}
{"  "}<span className="code-prop">equipo</span>: <span className="code-string">"sin intermediarios"</span>,{"\n"}
{"  "}<span className="code-prop">código</span>: <span className="code-string">"limpio y escalable"</span>,{"\n"}
{"  "}<span className="code-prop">soporte</span>: <span className="code-string">"post-entrega"</span>{"\n"}
{"}"};{"\n"}
{"\n"}
<span className="code-keyword">export default</span> imtp;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EQUIPO ===== */}
      <section className="nos-equipo">
        <div className="container">
          <div className="nos-section-header">
            <span className="nos-label">El equipo</span>
            <h2 className="nos-title">Las personas detrás de tu proyecto.</h2>
            <p className="nos-subtitle">
              Sin intermediarios. Hablas directamente con quienes diseñan y desarrollan.
            </p>
          </div>

          <div className="equipo-cards">
            {equipo.map((persona) => (
              <article key={persona.id} className="persona-card">
                <div className="persona-avatar">
                  <span>{persona.nombre.charAt(0)}</span>
                  <div className="avatar-glow"></div>
                </div>
                <div className="persona-content">
                  <h3 className="persona-nombre">{persona.nombre}</h3>
                  <span className="persona-rol">{persona.rol}</span>
                  <p className="persona-bio">{persona.bio}</p>
                  <div className="persona-skills">
                    {persona.especialidades.map((skill, idx) => (
                      <span key={idx} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALORES ===== */}
      <section className="nos-valores">
        <div className="container">
          <div className="nos-section-header">
            <span className="nos-label">Nuestros principios</span>
            <h2 className="nos-title">Cómo trabajamos.</h2>
          </div>

          <div className="valores-cards">
            {valores.map((valor, idx) => (
              <div key={idx} className="valor-item">
                <div className="valor-icon">{valor.icono}</div>
                <h3 className="valor-name">{valor.titulo}</h3>
                <p className="valor-text">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STACK ===== */}
      <section className="nos-stack">
        <div className="container">
          <div className="stack-content">
            <span className="nos-label">Stack tecnológico</span>
            <h2 className="nos-title">Herramientas que dominamos.</h2>
            <div className="stack-tags">
              {tecnologias.map((tech, idx) => (
                <span key={idx} className="stack-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== UBICACIÓN ===== */}
      <section className="nos-ubicacion">
        <div className="container">
          <div className="ubicacion-layout">
            <div className="ubicacion-info">
              <span className="nos-label">Ubicación</span>
              <h2 className="nos-title">Desde Cali, para Colombia.</h2>
              <p className="ubicacion-desc">
                Trabajamos de forma remota con clientes en todo el país. 
                Reuniones virtuales, comunicación clara, resultados reales.
              </p>

              <div className="contacto-list">
                <a href="mailto:info@imtpstudios.com" className="contacto-row">
                  <div className="contacto-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="contacto-type">Email</span>
                    <span className="contacto-data">info@imtpstudios.com</span>
                  </div>
                </a>

                <a href="tel:+573207262477" className="contacto-row">
                  <div className="contacto-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contacto-type">Teléfono</span>
                    <span className="contacto-data">+57 320 726 2477</span>
                  </div>
                </a>

                <div className="contacto-row">
                  <div className="contacto-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contacto-type">Ciudad</span>
                    <span className="contacto-data">Cali, Valle del Cauca</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ubicacion-map">
              <div className="map-visual">
                <div className="map-glow"></div>
                <div className="map-pin">
                  <div className="pin-ripple"></div>
                  <div className="pin-dot"></div>
                </div>
                <div className="map-label">
                  <span className="map-city">Cali</span>
                  <span className="map-country">Colombia 🇨🇴</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="nos-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-glow"></div>
            <div className="cta-inner">
              <h2 className="cta-heading">¿Listo para empezar?</h2>
              <p className="cta-text">
                Cuéntanos sobre tu proyecto. Sin compromiso, sin presión. 
                Solo una conversación para entender cómo podemos ayudarte.
              </p>
              <div className="cta-buttons">
                <button onClick={handleWhatsApp} className="nos-btn nos-btn--white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Conversemos
                </button>
                <Link to="/contacto" className="nos-btn nos-btn--outline-white">
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NosotrosPage;