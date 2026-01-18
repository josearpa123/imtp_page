// src/pages/servicios/AcademicoPage.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/AcademicoPage.css";

/* ================================================================
   PAGE LOADER
   ================================================================ */
function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return Math.min(100, prev + Math.random() * 25 + 10);
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="acad-loader">
      <div className="acad-loader-content">
        <div className="acad-loader-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <div className="acad-loader-bar">
          <div className="acad-loader-progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   FAQ ACCORDION
   ================================================================ */
function FAQItem({ pregunta, respuesta, isOpen, onClick }) {
  const contentRef = useRef(null);
  
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button type="button" className="faq-header" onClick={onClick}>
        <span>{pregunta}</span>
        <div className="faq-icon">
          <span></span>
          <span></span>
        </div>
      </button>
      <div 
        className="faq-body" 
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px" }}
      >
        <p>{respuesta}</p>
      </div>
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
function AcademicoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => setIsVisible(true), 50);
  };

  const servicios = [
    {
      id: "tesis",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      titulo: "Tesis y Proyectos de Grado",
      descripcion: "Desarrollo completo o parcial de tu proyecto final. Desde la propuesta hasta la sustentación.",
    },
    {
      id: "trabajos",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
      titulo: "Trabajos y Ensayos",
      descripcion: "Documentos académicos, ensayos argumentativos, informes de laboratorio, artículos científicos.",
    },
    {
      id: "talleres",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
      titulo: "Talleres y Programación",
      descripcion: "Ejercicios de código, algoritmos, bases de datos, desarrollo web, apps móviles y más.",
    },
    {
      id: "presentaciones",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      titulo: "Presentaciones",
      descripcion: "Diapositivas profesionales, infografías, material visual para exposiciones y sustentaciones.",
    },
    {
      id: "matematicas",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6" />
        </svg>
      ),
      titulo: "Matemáticas y Ciencias",
      descripcion: "Cálculo, álgebra, estadística, física, química. Ejercicios resueltos paso a paso.",
    },
    {
      id: "asesoria",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      titulo: "Asesoría y Tutorías",
      descripcion: "Sesiones personalizadas para resolver dudas, preparar exámenes o entender temas complejos.",
    },
  ];

  const universidades = [
    "Universidad del Valle",
    "Javeriana Cali",
    "ICESI",
    "Universidad Libre",
    "Autónoma de Occidente",
    "San Buenaventura",
    "Universidad Santiago de Cali",
    "Unicatólica",
    "UNAD",
    "Areandina",
    "Politécnico Grancolombiano",
    "Y muchas más...",
  ];

  const carreras = [
    { nombre: "Ingenierías", items: ["Sistemas", "Industrial", "Civil", "Mecánica", "Electrónica"] },
    { nombre: "Ciencias Económicas", items: ["Administración", "Contaduría", "Economía", "Negocios"] },
    { nombre: "Ciencias de la Salud", items: ["Medicina", "Enfermería", "Odontología", "Fisioterapia"] },
    { nombre: "Ciencias Sociales", items: ["Derecho", "Psicología", "Comunicación", "Trabajo Social"] },
    { nombre: "Ciencias Exactas", items: ["Matemáticas", "Física", "Química", "Biología"] },
    { nombre: "Otras Áreas", items: ["Diseño", "Arquitectura", "Educación", "Artes"] },
  ];

  const proceso = [
    {
      numero: "01",
      titulo: "Cuéntanos qué necesitas",
      descripcion: "Describe tu trabajo, fecha de entrega y requisitos específicos.",
    },
    {
      numero: "02",
      titulo: "Recibe tu cotización",
      descripcion: "Te enviamos precio y tiempo estimado en menos de 2 horas.",
    },
    {
      numero: "03",
      titulo: "Confirma y empezamos",
      descripcion: "Con el 50% de anticipo iniciamos tu proyecto de inmediato.",
    },
    {
      numero: "04",
      titulo: "Entrega garantizada",
      descripcion: "Recibes tu trabajo listo, con revisiones incluidas si es necesario.",
    },
  ];

  const faqs = [
    {
      pregunta: "¿Qué tipo de trabajos realizan?",
      respuesta: "Realizamos todo tipo de trabajos académicos: tesis, proyectos de grado, ensayos, talleres, presentaciones, ejercicios de programación, problemas de matemáticas, informes de laboratorio, artículos científicos y más. Si es académico, podemos ayudarte.",
    },
    {
      pregunta: "¿Trabajan con cualquier universidad y carrera?",
      respuesta: "Sí. Tenemos experiencia con universidades de todo Colombia y Latinoamérica. Trabajamos con todas las carreras: ingenierías, ciencias económicas, salud, derecho, humanidades, ciencias exactas y más. Sin importar tu universidad o programa, podemos apoyarte.",
    },
    {
      pregunta: "¿Cuánto cuesta y cómo pago?",
      respuesta: "El precio depende del tipo de trabajo, extensión, complejidad y urgencia. Enviamos cotización gratuita en menos de 2 horas. Aceptamos transferencias bancarias, Nequi, Daviplata y otros medios. Trabajamos con 50% de anticipo.",
    },
    {
      pregunta: "¿En cuánto tiempo entregan?",
      respuesta: "Depende del trabajo. Podemos entregar desde el mismo día hasta varias semanas según la complejidad. Manejamos trabajos urgentes con recargo. Siempre cumplimos con la fecha acordada.",
    },
    {
      pregunta: "¿El trabajo es original y de calidad?",
      respuesta: "Absolutamente. Cada trabajo es único y personalizado. Usamos fuentes académicas verificables, citamos correctamente según las normas requeridas (APA, IEEE, etc.) y garantizamos originalidad. Incluimos revisiones si necesitas ajustes.",
    },
    {
      pregunta: "¿Es confidencial?",
      respuesta: "100% confidencial. No compartimos información de nuestros clientes ni los trabajos realizados. Tu privacidad está garantizada.",
    },
  ];

  const stats = [
    { valor: "500+", label: "Trabajos entregados" },
    { valor: "98%", label: "Clientes satisfechos" },
    { valor: "50+", label: "Universidades" },
    { valor: "24h", label: "Respuesta rápida" },
  ];

  const whatsappLink = "https://wa.me/573001234567?text=Hola,%20necesito%20ayuda%20con%20un%20trabajo%20académico";

  return (
    <div className="acad-page">
      {isLoading && <PageLoader onComplete={handleLoadComplete} />}

      <main className={`acad-main ${isLoading ? "loading" : ""} ${isVisible ? "visible" : ""}`}>
        
        {/* Hero */}
        <section className="acad-hero">
          <div className="acad-hero-bg"></div>
          <div className="container">
            <Link to="/servicios" className="acad-back anim" style={{ "--d": "0s" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Volver</span>
            </Link>

            <div className="acad-hero-grid">
              <div className="acad-hero-content">
                <div className="acad-badge anim" style={{ "--d": "0.05s" }}>
                  <span className="acad-badge-dot"></span>
                  Disponibles ahora
                </div>
                
                <h1 className="acad-hero-title anim" style={{ "--d": "0.1s" }}>
                  Soluciones académicas para{" "}
                  <span className="acad-gradient-text">cualquier carrera</span>
                </h1>
                
                <p className="acad-hero-text anim" style={{ "--d": "0.15s" }}>
                  Tesis, trabajos, talleres, presentaciones y más. Todas las universidades, 
                  todas las materias, todas las carreras. Entrega rápida y garantizada.
                </p>

                <div className="acad-hero-ctas anim" style={{ "--d": "0.2s" }}>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="acad-btn-whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cotizar por WhatsApp
                  </a>
                  <a href="#servicios" className="acad-btn-outline">
                    Ver servicios
                  </a>
                </div>

                <div className="acad-hero-trust anim" style={{ "--d": "0.25s" }}>
                  <div className="trust-avatars">
                    <div className="trust-avatar">J</div>
                    <div className="trust-avatar">M</div>
                    <div className="trust-avatar">C</div>
                    <div className="trust-avatar">+</div>
                  </div>
                  <p><strong>+500 estudiantes</strong> ya confiaron en nosotros</p>
                </div>
              </div>

              <div className="acad-hero-visual anim" style={{ "--d": "0.15s" }}>
                <div className="acad-hero-card">
                  <div className="hero-card-header">
                    <span className="hero-card-icon">📚</span>
                    <div>
                      <strong>Tu próximo trabajo</strong>
                      <span>Entrega garantizada</span>
                    </div>
                  </div>
                  <div className="hero-card-stats">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="hero-stat">
                        <span className="hero-stat-value">{stat.valor}</span>
                        <span className="hero-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universidades Marquee */}
        <section className="acad-marquee">
          <div className="marquee-track">
            <div className="marquee-content">
              {[...universidades, ...universidades].map((uni, idx) => (
                <span key={idx} className="marquee-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  {uni}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="acad-servicios">
          <div className="container">
            <div className="acad-section-header anim" style={{ "--d": "0.1s" }}>
              <span className="section-tag">Servicios</span>
              <h2>Todo lo que necesitas para tu universidad</h2>
              <p>No importa la materia, la carrera o la complejidad. Tenemos la solución.</p>
            </div>

            <div className="acad-servicios-grid">
              {servicios.map((srv, idx) => (
                <article key={srv.id} className="srv-card anim" style={{ "--d": `${0.1 + idx * 0.05}s` }}>
                  <div className="srv-card-icon">{srv.icono}</div>
                  <h3>{srv.titulo}</h3>
                  <p>{srv.descripcion}</p>
                </article>
              ))}
            </div>

            <div className="acad-servicios-cta anim" style={{ "--d": "0.4s" }}>
              <p>¿No ves lo que necesitas?</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Cuéntanos y te ayudamos
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Carreras Grid */}
        <section className="acad-carreras">
          <div className="container">
            <div className="acad-section-header anim" style={{ "--d": "0.1s" }}>
              <span className="section-tag">Cobertura</span>
              <h2>Todas las carreras, todas las materias</h2>
              <p>Experiencia en múltiples áreas del conocimiento</p>
            </div>

            <div className="carreras-grid">
              {carreras.map((cat, idx) => (
                <div key={idx} className="carrera-card anim" style={{ "--d": `${0.1 + idx * 0.05}s` }}>
                  <h4>{cat.nombre}</h4>
                  <ul>
                    {cat.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="acad-proceso">
          <div className="container">
            <div className="acad-section-header anim" style={{ "--d": "0.1s" }}>
              <span className="section-tag">Proceso</span>
              <h2>Así de fácil funciona</h2>
              <p>De tu solicitud a tu trabajo listo en 4 simples pasos</p>
            </div>

            <div className="proceso-grid">
              {proceso.map((paso, idx) => (
                <div key={idx} className="proceso-step anim" style={{ "--d": `${0.15 + idx * 0.08}s` }}>
                  <div className="paso-number">{paso.numero}</div>
                  <div className="paso-content">
                    <h4>{paso.titulo}</h4>
                    <p>{paso.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="acad-faq">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-left anim" style={{ "--d": "0.1s" }}>
                <span className="section-tag">Preguntas</span>
                <h2>Resolvemos tus dudas</h2>
                <p>Todo lo que necesitas saber antes de comenzar.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="faq-contact">
                  ¿Más preguntas? Escríbenos
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="faq-right anim" style={{ "--d": "0.15s" }}>
                {faqs.map((faq, idx) => (
                  <FAQItem
                    key={idx}
                    pregunta={faq.pregunta}
                    respuesta={faq.respuesta}
                    isOpen={openFAQ === idx}
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="acad-cta-final">
          <div className="container">
            <div className="cta-box anim" style={{ "--d": "0.1s" }}>
              <div className="cta-content">
                <h2>¿Listo para resolver tu trabajo?</h2>
                <p>
                  Escríbenos ahora, cuéntanos qué necesitas y recibe tu cotización 
                  en menos de 2 horas. Sin compromiso.
                </p>
                <div className="cta-buttons">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Escribir por WhatsApp
                  </a>
                  <Link to="/contacto" className="cta-email">
                    O envía un correo
                  </Link>
                </div>
              </div>
              <div className="cta-decoration">
                <div className="cta-circle"></div>
                <div className="cta-circle"></div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default AcademicoPage;