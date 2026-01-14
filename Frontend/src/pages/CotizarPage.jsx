// src/pages/CotizarPage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CotizarPage.css";

function CotizarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    servicio: "",
    presupuesto: "",
    tiempo: "",
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    descripcion: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicios = [
    {
      id: "web",
      nombre: "Páginas Web",
      desc: "Landing pages, sitios corporativos, e-commerce",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      color: "#10b981"
    },
    {
      id: "software",
      nombre: "Software a Medida",
      desc: "Sistemas, ERPs, aplicaciones empresariales",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      color: "#8b5cf6"
    },
    {
      id: "automatizacion",
      nombre: "Automatización",
      desc: "Workflows, integraciones, bots",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: "#f59e0b"
    },
    {
      id: "marketing",
      nombre: "Marketing Digital",
      desc: "Branding, social media, publicidad",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      color: "#ec4899"
    },
    {
      id: "otro",
      nombre: "Otro / No estoy seguro",
      desc: "Cuéntanos tu necesidad",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
      color: "#6b7280"
    }
  ];

  const presupuestos = [
    { id: "1-3", label: "$1M - $3M COP", desc: "Proyectos básicos" },
    { id: "3-7", label: "$3M - $7M COP", desc: "Proyectos medianos" },
    { id: "7-15", label: "$7M - $15M COP", desc: "Proyectos avanzados" },
    { id: "15+", label: "$15M+ COP", desc: "Proyectos enterprise" },
    { id: "flexible", label: "Flexible", desc: "Depende de la propuesta" }
  ];

  const tiempos = [
    { id: "urgente", label: "Lo antes posible", desc: "1-2 semanas" },
    { id: "normal", label: "Tiempo normal", desc: "1-2 meses" },
    { id: "flexible", label: "Sin prisa", desc: "Cuando esté listo" },
    { id: "planificando", label: "Solo estoy planificando", desc: "Aún no definido" }
  ];

  const handleServiceSelect = (id) => {
    setFormData({ ...formData, servicio: id });
  };

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.servicio !== "";
      case 2: return formData.presupuesto !== "" && formData.tiempo !== "";
      case 3: return formData.nombre !== "" && formData.email !== "";
      default: return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Enviar a WhatsApp
    const mensaje = `
*Nueva Cotización - IMTP Studios*

📋 *Servicio:* ${servicios.find(s => s.id === formData.servicio)?.nombre}
💰 *Presupuesto:* ${presupuestos.find(p => p.id === formData.presupuesto)?.label}
⏱ *Tiempo:* ${tiempos.find(t => t.id === formData.tiempo)?.label}

👤 *Contacto:*
• Nombre: ${formData.nombre}
• Empresa: ${formData.empresa || 'No especificada'}
• Email: ${formData.email}
• Teléfono: ${formData.telefono || 'No especificado'}

📝 *Descripción:*
${formData.descripcion || 'Sin descripción adicional'}
    `.trim();

    const whatsappUrl = `https://wa.me/573207262477?text=${encodeURIComponent(mensaje)}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Abrir WhatsApp después de mostrar confirmación
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  const getProgressWidth = () => {
    return `${(step / 4) * 100}%`;
  };

  if (isSubmitted) {
    return (
      <div className="cotizar-page">
        <div className="cotizar-success">
          <div className="success-content">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1>¡Solicitud enviada!</h1>
            <p>
              Gracias por tu interés. Te redirigimos a WhatsApp para confirmar 
              tu solicitud y comenzar la conversación.
            </p>
            <div className="success-actions">
              <Link to="/" className="cot-btn cot-btn--ghost">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cotizar-page">
      <div className="cotizar-container">
        {/* Sidebar */}
        <aside className="cotizar-sidebar">
          <div className="sidebar-content">
            <Link to="/" className="sidebar-logo">
              <span>IMTP</span>
              <span>Studios</span>
            </Link>
            
            <div className="sidebar-info">
              <h2>Solicita tu cotización</h2>
              <p>
                Completa el formulario y recibe una propuesta personalizada 
                en menos de 24 horas.
              </p>
            </div>

            <div className="sidebar-steps">
              <div className={`step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                <div className="step-number">
                  {step > 1 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : '1'}
                </div>
                <div className="step-info">
                  <span className="step-title">Tipo de proyecto</span>
                  <span className="step-desc">¿Qué necesitas?</span>
                </div>
              </div>

              <div className={`step-indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                <div className="step-number">
                  {step > 2 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : '2'}
                </div>
                <div className="step-info">
                  <span className="step-title">Alcance</span>
                  <span className="step-desc">Presupuesto y tiempo</span>
                </div>
              </div>

              <div className={`step-indicator ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
                <div className="step-number">
                  {step > 3 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : '3'}
                </div>
                <div className="step-info">
                  <span className="step-title">Contacto</span>
                  <span className="step-desc">Tu información</span>
                </div>
              </div>

              <div className={`step-indicator ${step >= 4 ? 'active' : ''}`}>
                <div className="step-number">4</div>
                <div className="step-info">
                  <span className="step-title">Confirmar</span>
                  <span className="step-desc">Revisa y envía</span>
                </div>
              </div>
            </div>

            <div className="sidebar-contact">
              <p>¿Prefieres hablar directamente?</p>
              <a href="https://wa.me/573207262477" target="_blank" rel="noopener noreferrer" className="sidebar-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp directo
              </a>
            </div>
          </div>
        </aside>

        {/* Main Form */}
        <main className="cotizar-main">
          <div className="form-header">
            <Link to="/" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </Link>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: getProgressWidth() }}></div>
            </div>
            <span className="step-counter">Paso {step} de 4</span>
          </div>

          <div className="form-content">
            {/* Step 1: Servicio */}
            {step === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <h1>¿Qué tipo de proyecto necesitas?</h1>
                  <p>Selecciona la categoría que mejor describe tu necesidad.</p>
                </div>

                <div className="service-grid">
                  {servicios.map((servicio) => (
                    <button
                      key={servicio.id}
                      type="button"
                      className={`service-card ${formData.servicio === servicio.id ? 'selected' : ''}`}
                      onClick={() => handleServiceSelect(servicio.id)}
                      style={{ '--service-color': servicio.color }}
                    >
                      <div className="service-icon">
                        {servicio.icono}
                      </div>
                      <div className="service-info">
                        <span className="service-name">{servicio.nombre}</span>
                        <span className="service-desc">{servicio.desc}</span>
                      </div>
                      <div className="service-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Presupuesto y Tiempo */}
            {step === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <h1>¿Cuál es tu presupuesto y tiempo?</h1>
                  <p>Esto nos ayuda a dimensionar la propuesta adecuada.</p>
                </div>

                <div className="options-section">
                  <h3>Presupuesto aproximado</h3>
                  <div className="options-grid">
                    {presupuestos.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        className={`option-card ${formData.presupuesto === p.id ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('presupuesto', p.id)}
                      >
                        <span className="option-label">{p.label}</span>
                        <span className="option-desc">{p.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="options-section">
                  <h3>¿Para cuándo lo necesitas?</h3>
                  <div className="options-grid options-grid--2">
                    {tiempos.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={`option-card ${formData.tiempo === t.id ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('tiempo', t.id)}
                      >
                        <span className="option-label">{t.label}</span>
                        <span className="option-desc">{t.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contacto */}
            {step === 3 && (
              <div className="form-step">
                <div className="step-header">
                  <h1>¿Cómo te contactamos?</h1>
                  <p>Tus datos están seguros. Solo los usamos para enviarte la propuesta.</p>
                </div>

                <div className="form-fields">
                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="nombre">Nombre completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="empresa">Empresa (opcional)</label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="email">Correo electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="telefono">Teléfono / WhatsApp (opcional)</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>

                  <div className="field-group field-group--full">
                    <label htmlFor="descripcion">Cuéntanos más sobre tu proyecto (opcional)</label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      placeholder="¿Qué problema quieres resolver? ¿Tienes algún referente? Cualquier detalle nos ayuda..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Resumen */}
            {step === 4 && (
              <div className="form-step">
                <div className="step-header">
                  <h1>Revisa tu solicitud</h1>
                  <p>Confirma que todo esté correcto antes de enviar.</p>
                </div>

                <div className="summary-card">
                  <div className="summary-section">
                    <h4>Tipo de proyecto</h4>
                    <div className="summary-value">
                      <span className="summary-icon" style={{ color: servicios.find(s => s.id === formData.servicio)?.color }}>
                        {servicios.find(s => s.id === formData.servicio)?.icono}
                      </span>
                      <span>{servicios.find(s => s.id === formData.servicio)?.nombre}</span>
                    </div>
                  </div>

                  <div className="summary-row">
                    <div className="summary-section">
                      <h4>Presupuesto</h4>
                      <p>{presupuestos.find(p => p.id === formData.presupuesto)?.label}</p>
                    </div>
                    <div className="summary-section">
                      <h4>Tiempo</h4>
                      <p>{tiempos.find(t => t.id === formData.tiempo)?.label}</p>
                    </div>
                  </div>

                  <div className="summary-section">
                    <h4>Contacto</h4>
                    <div className="summary-contact">
                      <p><strong>{formData.nombre}</strong></p>
                      {formData.empresa && <p>{formData.empresa}</p>}
                      <p>{formData.email}</p>
                      {formData.telefono && <p>{formData.telefono}</p>}
                    </div>
                  </div>

                  {formData.descripcion && (
                    <div className="summary-section">
                      <h4>Descripción</h4>
                      <p className="summary-desc">{formData.descripcion}</p>
                    </div>
                  )}
                </div>

                <div className="submit-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Al enviar, serás redirigido a WhatsApp para confirmar tu solicitud.</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="form-nav">
            {step > 1 && (
              <button type="button" className="cot-btn cot-btn--ghost" onClick={prevStep}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Anterior
              </button>
            )}
            
            <div className="nav-spacer"></div>

            {step < 4 ? (
              <button 
                type="button" 
                className="cot-btn cot-btn--primary" 
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Siguiente
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ) : (
              <button 
                type="button" 
                className="cot-btn cot-btn--primary cot-btn--submit" 
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enviar y abrir WhatsApp
                  </>
                )}
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CotizarPage;