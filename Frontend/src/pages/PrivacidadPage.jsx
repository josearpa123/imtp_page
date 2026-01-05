import { Link } from 'react-router-dom'
import '../styles/LegalPages.css'

export default function PrivacidadPage() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* Breadcrumb */}
        <div className="legal-breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <span>Política de Privacidad</span>
        </div>

        {/* Header */}
        <header className="legal-header">
          <h1>Política de Privacidad</h1>
          <p className="legal-updated">Última actualización: Enero 5, 2026</p>
        </header>

        {/* Content */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introducción</h2>
            <p>
              En IMTP Studios, valoramos y respetamos tu privacidad. Esta Política de Privacidad
              describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal
              cuando utilizas nuestro sitio web y servicios.
            </p>
            <p>
              Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Información que Recopilamos</h2>
            <p>Recopilamos diferentes tipos de información para brindarte nuestros servicios:</p>
            
            <h3>2.1 Información que nos proporcionas directamente</h3>
            <ul>
              <li><strong>Datos de contacto:</strong> Nombre, correo electrónico, número de teléfono</li>
              <li><strong>Información de proyectos:</strong> Detalles sobre el servicio que solicitas</li>
              <li><strong>Información de comunicación:</strong> Mensajes que nos envías a través de formularios o WhatsApp</li>
            </ul>

            <h3>2.2 Información recopilada automáticamente</h3>
            <ul>
              <li><strong>Datos de navegación:</strong> Páginas visitadas, tiempo de permanencia, dispositivo usado</li>
              <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo</li>
              <li><strong>Cookies:</strong> Preferencias del usuario (ej. modo claro/oscuro)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Cómo Usamos tu Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Responder a tus consultas y solicitudes de cotización</li>
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Enviar comunicaciones relacionadas con proyectos contratados</li>
              <li>Analizar el uso del sitio web para mejorar la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
              <li>Prevenir fraudes y garantizar la seguridad del sitio</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Compartir Información</h2>
            <p>No vendemos ni alquilamos tu información personal a terceros. Podemos compartir tu información solo en estos casos:</p>
            <ul>
              <li><strong>Proveedores de servicios:</strong> Herramientas de email, hosting, análisis (ej. Google Analytics)</li>
              <li><strong>Requisitos legales:</strong> Cuando la ley lo requiera o para proteger nuestros derechos</li>
              <li><strong>Transferencia de negocio:</strong> En caso de fusión, adquisición o venta de activos</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Protección de tu Información</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
              tu información personal contra acceso no autorizado, alteración, divulgación o destrucción:
            </p>
            <ul>
              <li>Encriptación de datos sensibles (SSL/TLS)</li>
              <li>Control de acceso restringido a información personal</li>
              <li>Copias de seguridad regulares</li>
              <li>Actualización constante de medidas de seguridad</li>
            </ul>
            <p>
              Sin embargo, ningún método de transmisión por internet es 100% seguro. No podemos
              garantizar la seguridad absoluta de tu información.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Tus Derechos</h2>
            <p>De acuerdo con las leyes de protección de datos colombianas, tienes derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> Conocer qué información personal tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información personal</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos en ciertos casos</li>
              <li><strong>Revocación:</strong> Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctanos en:{' '}
              <a href="mailto:info@imtpstudios.com">info@imtpstudios.com</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio:
            </p>
            <ul>
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
              <li><strong>Cookies de preferencias:</strong> Recordar tus configuraciones (ej. tema oscuro/claro)</li>
              <li><strong>Cookies analíticas:</strong> Entender cómo los usuarios interactúan con el sitio</li>
            </ul>
            <p>
              Puedes controlar y eliminar cookies a través de la configuración de tu navegador.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Retención de Datos</h2>
            <p>
              Conservamos tu información personal solo durante el tiempo necesario para cumplir
              con los propósitos descritos en esta política o según lo requiera la ley:
            </p>
            <ul>
              <li>Datos de contacto de cotizaciones: 2 años desde el último contacto</li>
              <li>Información de proyectos: Durante la duración del proyecto + 5 años (obligaciones fiscales)</li>
              <li>Datos de navegación: 12 meses</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Enlaces a Sitios Externos</h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables
              de las prácticas de privacidad de estos sitios. Te recomendamos revisar sus políticas
              de privacidad antes de proporcionar información personal.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Menores de Edad</h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos
              conscientemente información personal de menores. Si descubrimos que hemos recopilado
              información de un menor, la eliminaremos de inmediato.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Cambios en esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios
              en nuestras prácticas o por razones legales. La fecha de "Última actualización" al
              inicio de esta política indica cuándo fue modificada por última vez.
            </p>
            <p>
              Te notificaremos sobre cambios significativos publicando la nueva política en esta
              página y, cuando sea apropiado, por correo electrónico.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contacto</h2>
            <p>Si tienes preguntas o inquietudes sobre esta Política de Privacidad, contáctanos:</p>
            <ul className="legal-contact">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@imtpstudios.com">info@imtpstudios.com</a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/573207262477">+57 320 726 2477</a>
              </li>
              <li>
                <strong>Dirección:</strong> Cali, Colombia
              </li>
            </ul>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="legal-footer-cta">
          <p>¿Tienes dudas sobre cómo manejamos tu información?</p>
          <Link to="/contacto" className="legal-cta-btn">
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  )
}