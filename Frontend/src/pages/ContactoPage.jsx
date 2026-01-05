// src/pages/ContactoPage.jsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import "../styles/ContactoPage.css";

const CONTACTO_INFO = {
  email: "info@imtpstudios.com",
  whatsapp: "573001112233", // <-- inventado (sin +). Cambia por el real.
  horario: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 13:00",
};

const FAMILIAS_SOLUCION = [
  "Páginas Web y Presencia Digital",
  "Sistemas y Software a Medida",
  "Automatización y Soluciones Internas",
  "Diseño y Marketing Digital",
  "Soluciones Académicas y Universitarias",
];

function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 250);
          return 100;
        }
        return Math.min(100, prev + Math.random() * 22 + 12);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="contacto-page-loader" aria-label="Cargando">
      <div className="loader-content">
        <div className="loader-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
        <h2>Cargando contacto…</h2>
        <div
          className="loader-bar"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="loader-progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

function buildWhatsAppMessage(data) {
  const lines = [
    "*Nuevo contacto — IMTP Studios*",
    "",
    `*Nombre:* ${data.nombre}`,
    `*Email:* ${data.email}`,
    `*WhatsApp:* ${data.celular}`,
    `*Familia:* ${data.familia}`,
    `*Asunto:* ${data.asunto}`,
    "",
    `*Mensaje:*`,
    data.mensaje,
  ];

  return encodeURIComponent(lines.join("\n"));
}

/* ================================================================
   CUSTOM SELECT (sin librerías)
   - teclado: ↑ ↓ Enter Esc Home End
   - cierre al click afuera
   ================================================================ */
function CustomSelect({
  id,
  name,
  value,
  options,
  placeholder = "Selecciona…",
  onChange,
  onFocus,
  onBlur,
  icon,
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(() => Math.max(0, options.indexOf(value)));
  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const idx = options.indexOf(value);
    if (idx >= 0) setHighlight(idx);
  }, [value, options]);

  useEffect(() => {
    const onDocDown = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector(`[data-idx="${highlight}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [open, highlight]);

  const selectValue = (idx) => {
    const v = options[idx];
    if (!v) return;
    onChange?.(v);
    setOpen(false);
    btnRef.current?.focus();
  };

  const openWithFocus = () => {
    setOpen(true);
    const idx = options.indexOf(value);
    setHighlight(idx >= 0 ? idx : 0);
  };

  const onButtonKeyDown = (e) => {
    const max = options.length - 1;

    if (!open && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
      e.preventDefault();
      openWithFocus();
      return;
    }

    if (!open) return;

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(max, h + 1));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(0, h - 1));
      return;
    }

    if (e.key === "Home") {
      e.preventDefault();
      setHighlight(0);
      return;
    }

    if (e.key === "End") {
      e.preventDefault();
      setHighlight(max);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      selectValue(highlight);
      return;
    }

    if (e.key.length === 1 && /[a-zA-ZáéíóúñÁÉÍÓÚÑ0-9]/.test(e.key)) {
      const ch = e.key.toLowerCase();
      const start = (highlight + 1) % options.length;
      const doubled = options.concat(options);
      const found = doubled
        .slice(start, start + options.length)
        .findIndex((opt) => opt.toLowerCase().startsWith(ch));
      if (found !== -1) setHighlight((start + found) % options.length);
    }
  };

  const onOptionMouseEnter = (idx) => setHighlight(idx);

  const onOptionMouseDown = (e) => {
    e.preventDefault(); // evita blur antes del click
  };

  const activeId = `${id}-opt-${highlight}`;

  return (
    <div className="cs-root" ref={rootRef}>
      {/* hidden input para que el form tenga name/value */}
      <input type="hidden" name={name} value={value || ""} />

      <button
        type="button"
        id={id}
        ref={btnRef}
        className={`cs-btn ${open ? "open" : ""}`}
        onClick={() => (open ? setOpen(false) : openWithFocus())}
        onKeyDown={onButtonKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-activedescendant={open ? activeId : undefined}
      >
        {icon ? <span className="cs-leading" aria-hidden="true">{icon}</span> : null}

        <span className={`cs-value ${value ? "" : "placeholder"}`}>
          {value || placeholder}
        </span>

        <span className="cs-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="cs-popover" role="presentation">
          <ul
            id={`${id}-list`}
            ref={listRef}
            className="cs-list"
            role="listbox"
            aria-labelledby={id}
          >
            {options.map((opt, idx) => {
              const selected = opt === value;
              const isActive = idx === highlight;
              return (
                <li
                  key={opt}
                  id={`${id}-opt-${idx}`}
                  data-idx={idx}
                  className={`cs-option ${selected ? "selected" : ""} ${isActive ? "active" : ""}`}
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => onOptionMouseEnter(idx)}
                  onMouseDown={onOptionMouseDown}
                  onClick={() => selectValue(idx)}
                >
                  <span className="cs-option-text">{opt}</span>
                  {selected ? (
                    <span className="cs-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    familia: FAMILIAS_SOLUCION[0],
    asunto: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const waLink = useMemo(() => {
    const text = buildWhatsAppMessage(formData);
    return `https://wa.me/${CONTACTO_INFO.whatsapp}?text=${text}`;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!CONTACTO_INFO.whatsapp) return;

    setEnviando(true);

    setTimeout(() => {
      window.open(waLink, "_blank", "noopener,noreferrer");
      setEnviando(false);
      setFormData({
        nombre: "",
        email: "",
        celular: "",
        familia: FAMILIAS_SOLUCION[0],
        asunto: "",
        mensaje: "",
      });
    }, 350);
  };

  const focusClass = (field, hasValue) =>
    focusedField === field || hasValue ? "focused" : "";

  return (
    <div className="contacto-form-card">
      <div className="form-card-header">
        <div className="form-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <div>
          <h2>Cuéntanos tu caso</h2>
          <p>Te respondemos por WhatsApp con una ruta clara (sin vueltas).</p>
        </div>
      </div>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className={`form-group ${focusClass("nombre", formData.nombre)}`}>
            <label htmlFor="nombre">Nombre</label>
            <div className="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                onFocus={() => setFocusedField("nombre")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
          </div>

          <div className={`form-group ${focusClass("email", formData.email)}`}>
            <label htmlFor="email">Correo</label>
            <div className="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
          </div>

          <div className={`form-group ${focusClass("celular", formData.celular)}`}>
            <label htmlFor="celular">WhatsApp</label>
            <div className="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <input
                type="tel"
                id="celular"
                name="celular"
                placeholder="+57 300 000 0000"
                value={formData.celular}
                onChange={handleChange}
                onFocus={() => setFocusedField("celular")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
          </div>

          {/* ✅ CustomSelect (reemplaza el select nativo) */}
          <div className={`form-group ${focusClass("familia", formData.familia)}`}>
            <label htmlFor="familia">Familia de solución</label>

            <CustomSelect
              id="familia"
              name="familia"
              value={formData.familia}
              options={FAMILIAS_SOLUCION}
              placeholder="Selecciona una familia"
              onChange={(val) => setFormData((prev) => ({ ...prev, familia: val }))}
              onFocus={() => setFocusedField("familia")}
              onBlur={() => setFocusedField(null)}
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 7h-9" />
                  <path d="M20 12h-9" />
                  <path d="M20 17h-9" />
                  <path d="M7 7h.01" />
                  <path d="M7 12h.01" />
                  <path d="M7 17h.01" />
                </svg>
              }
            />
          </div>

          <div className={`form-group form-group-full ${focusClass("asunto", formData.asunto)}`}>
            <label htmlFor="asunto">Asunto</label>
            <div className="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="Ej: Quiero una ..."
                value={formData.asunto}
                onChange={handleChange}
                onFocus={() => setFocusedField("asunto")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
          </div>

          <div className={`form-group form-group-full ${focusClass("mensaje", formData.mensaje)}`}>
            <label htmlFor="mensaje">Mensaje</label>
            <div className="textarea-wrapper">
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Describe tu situación."
                rows={6}
                value={formData.mensaje}
                onChange={handleChange}
                onFocus={() => setFocusedField("mensaje")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-enviar" disabled={enviando}>
          {enviando ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Enviar por WhatsApp
            </>
          )}
        </button>

        <p className="form-footnote">
          Al enviar, se abrirá WhatsApp con el mensaje listo. No guardamos datos aquí todavía.
        </p>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contacto-info-card">
      <div className="info-header">
        <h3>Contacto directo</h3>
        <p>Si prefieres, escríbenos sin formulario.</p>
      </div>

      <div className="contacto-info-list">
        <a href={`mailto:${CONTACTO_INFO.email}`} className="info-item-card">
          <div className="info-icon email-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="info-text">
            <span className="info-label">Email</span>
            <span className="info-value">{CONTACTO_INFO.email}</span>
          </div>
        </a>

        <a
          href={`https://wa.me/${CONTACTO_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="info-item-card whatsapp-card"
        >
          <div className="info-icon whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div className="info-text">
            <span className="info-label">WhatsApp</span>
            <span className="info-value">Escribir ahora</span>
          </div>
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <div className="info-item-card no-link">
          <div className="info-icon schedule-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="info-text">
            <span className="info-label">Horario</span>
            <span className="info-value">{CONTACTO_INFO.horario}</span>
          </div>
        </div>
      </div>

      <div className="info-note">
        <p>
          Si tu caso es urgente, marca el asunto con <b>URGENTE</b> y pon la fecha límite.
        </p>
      </div>
    </div>
  );
}

export default function ContactoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => setIsVisible(true), 80);
  };

  return (
    <div className="contacto-page">
      {isLoading && <PageLoader onComplete={handleLoadComplete} />}

      <main className={`contacto-main ${isLoading ? "loading" : ""} ${isVisible ? "visible" : ""}`}>
        <section className="contacto-hero">
          <div className="hero-content">
            <h1 className="animate-item" style={{ "--delay": "0.08s" }}>
              Contacto
            </h1>
            <p className="animate-item" style={{ "--delay": "0.16s" }}>
              Si tienes un proyecto o un problema real que resolver, este es el punto de entrada.
            </p>
          </div>
        </section>

        <section className="contacto-content">
          <div className="contacto-grid">
            <div className="animate-item" style={{ "--delay": "0.22s" }}>
              <ContactForm />
            </div>
            <div className="animate-item" style={{ "--delay": "0.30s" }}>
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
