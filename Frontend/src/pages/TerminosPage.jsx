import { Link } from 'react-router-dom'
import '../styles/LegalPages.css'

export default function TerminosPage() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* Breadcrumb */}
        <div className="legal-breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <span>Términos de Servicio</span>
        </div>

        {/* Header */}
        <header className="legal-header">
          <h1>Términos de Servicio</h1>
          <p className="legal-updated">Última actualización: Enero 5, 2026</p>
        </header>

        {/* Content */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Bienvenido a IMTP Studios. Al acceder y utilizar este sitio web y nuestros servicios,
              aceptas estar legalmente vinculado por estos Términos de Servicio. Si no estás de
              acuerdo con alguno de estos términos, no utilices nuestros servicios.
            </p>
            <p>
              Estos términos se aplican a todos los usuarios, visitantes y clientes del sitio web.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Descripción de Servicios</h2>
            <p>IMTP Studios ofrece los siguientes servicios tecnológicos:</p>
            <ul>
              <li><strong>Desarrollo Web:</strong> Diseño y desarrollo de sitios web y plataformas digitales</li>
              <li><strong>Software a Medida:</strong> Desarrollo de sistemas y aplicaciones personalizadas</li>
              <li><strong>Automatización:</strong> Soluciones de automatización de procesos empresariales</li>
              <li><strong>Marketing Digital:</strong> Estrategias y diseño de contenido digital</li>
            </ul>
            <p>
              Cada proyecto se define mediante un contrato específico o propuesta comercial que
              detalla alcance, plazos y costos.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Uso del Sitio Web</h2>
            <h3>3.1 Uso Permitido</h3>
            <p>Te comprometes a usar el sitio únicamente para:</p>
            <ul>
              <li>Explorar nuestros servicios y portafolio</li>
              <li>Solicitar cotizaciones o información</li>
              <li>Contactarnos para consultas legítimas de negocios</li>
            </ul>

            <h3>3.2 Uso Prohibido</h3>
            <p>Está estrictamente prohibido:</p>
            <ul>
              <li>Intentar acceder a áreas restringidas del sitio</li>
              <li>Copiar, reproducir o distribuir contenido sin autorización</li>
              <li>Realizar ingeniería inversa del código del sitio</li>
              <li>Utilizar el sitio para actividades ilegales o fraudulentas</li>
              <li>Sobrecargar o interferir con el funcionamiento del sitio</li>
              <li>Recopilar información de otros usuarios sin consentimiento</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Proceso de Contratación</h2>
            <h3>4.1 Cotizaciones</h3>
            <p>
              Las cotizaciones proporcionadas son válidas por 30 días desde su emisión y están
              sujetas a cambios basados en modificaciones en el alcance del proyecto.
            </p>

            <h3>4.2 Contrato de Servicios</h3>
            <p>
              Todo proyecto contratado se formaliza mediante un contrato o propuesta aceptada que
              establece:
            </p>
            <ul>
              <li>Alcance detallado del proyecto</li>
              <li>Plazos de entrega por fase</li>
              <li>Costos y forma de pago</li>
              <li>Responsabilidades de ambas partes</li>
              <li>Condiciones de modificación o cancelación</li>
            </ul>

            <h3>4.3 Pagos</h3>
            <p>Condiciones generales de pago:</p>
            <ul>
              <li><strong>Anticipo:</strong> Generalmente 50% al iniciar el proyecto</li>
              <li><strong>Pago final:</strong> 50% al completar y aprobar el proyecto</li>
              <li><strong>Proyectos por fases:</strong> Pagos parciales según entregables definidos</li>
              <li><strong>Formas de pago:</strong> Transferencia bancaria, Nequi, plataformas digitales</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Propiedad Intelectual</h2>
            <h3>5.1 Propiedad del Sitio Web</h3>
            <p>
              Todo el contenido de este sitio (código, diseño, textos, imágenes, logos) es propiedad
              de IMTP Studios y está protegido por leyes de propiedad intelectual colombianas e
              internacionales.
            </p>

            <h3>5.2 Proyectos de Clientes</h3>
            <p>
              Para proyectos contratados, la propiedad intelectual se transfiere al cliente según
              lo especificado en el contrato, típicamente:
            </p>
            <ul>
              <li><strong>Código personalizado:</strong> El cliente adquiere los derechos una vez completado el pago total</li>
              <li><strong>Código de terceros:</strong> Sujeto a las licencias de las bibliotecas/frameworks utilizados</li>
              <li><strong>Diseños y contenido:</strong> Propiedad del cliente al finalizar el proyecto</li>
            </ul>

            <h3>5.3 Portafolio</h3>
            <p>
              Nos reservamos el derecho de incluir proyectos completados en nuestro portafolio
              público, salvo acuerdo de confidencialidad específico.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Garantías y Soporte</h2>
            <h3>6.1 Garantía de Funcionalidad</h3>
            <p>
              Garantizamos que los entregables funcionarán según lo especificado en el contrato
              durante un período de garantía (típicamente 30-60 días post-entrega).
            </p>

            <h3>6.2 Exclusiones de Garantía</h3>
            <p>La garantía no cubre:</p>
            <ul>
              <li>Problemas causados por modificaciones no autorizadas</li>
              <li>Incompatibilidades con software de terceros</li>
              <li>Cambios en APIs o servicios externos</li>
              <li>Uso indebido o negligente de la solución</li>
            </ul>

            <h3>6.3 Soporte Post-Entrega</h3>
            <p>
              El soporte post-entrega se define en cada contrato. Servicios de mantenimiento
              continuo o soporte extendido se contratan por separado.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Limitación de Responsabilidad</h2>
            <p>
              IMTP Studios no será responsable por daños indirectos, incidentales, especiales o
              consecuentes derivados del uso de nuestros servicios, incluyendo:
            </p>
            <ul>
              <li>Pérdida de beneficios o ingresos</li>
              <li>Pérdida de datos o información</li>
              <li>Interrupción del negocio</li>
              <li>Daños a la reputación</li>
            </ul>
            <p>
              Nuestra responsabilidad máxima se limita al monto total pagado por el cliente por
              el servicio específico en cuestión.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Confidencialidad</h2>
            <p>
              Nos comprometemos a mantener confidencial toda la información sensible del cliente
              compartida durante el proyecto. Ambas partes deben firmar un Acuerdo de
              Confidencialidad (NDA) cuando sea requerido.
            </p>
            <p>No aplica a información que:</p>
            <ul>
              <li>Sea de dominio público</li>
              <li>Haya sido legalmente obtenida de terceros</li>
              <li>Deba divulgarse por requerimiento legal</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Modificaciones y Cancelaciones</h2>
            <h3>9.1 Modificaciones al Proyecto</h3>
            <p>
              Cambios en el alcance del proyecto durante su ejecución pueden resultar en ajustes
              de costo y tiempo de entrega. Se formalizarán mediante adendas al contrato original.
            </p>

            <h3>9.2 Cancelación por el Cliente</h3>
            <ul>
              <li>El anticipo no es reembolsable</li>
              <li>Se cobrará el trabajo realizado hasta la fecha de cancelación</li>
              <li>Los entregables parciales quedan en propiedad de IMTP Studios</li>
            </ul>

            <h3>9.3 Cancelación por IMTP Studios</h3>
            <p>Podemos cancelar un proyecto si:</p>
            <ul>
              <li>El cliente incumple con pagos acordados</li>
              <li>El cliente no proporciona información/recursos necesarios</li>
              <li>Se detecta uso fraudulento o ilegal de nuestros servicios</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Fuerza Mayor</h2>
            <p>
              No seremos responsables por incumplimientos causados por circunstancias fuera de
              nuestro control razonable, incluyendo: desastres naturales, pandemias, guerras,
              disturbios, fallas en servicios de internet/hosting de terceros, o actos
              gubernamentales.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Resolución de Disputas</h2>
            <p>
              Cualquier disputa relacionada con estos términos o nuestros servicios se resolverá
              mediante:
            </p>
            <ol>
              <li><strong>Negociación directa:</strong> Intentaremos resolver amigablemente en primera instancia</li>
              <li><strong>Mediación:</strong> Si la negociación falla, recurriremos a mediación</li>
              <li><strong>Arbitraje/Tribunal:</strong> Como último recurso, según las leyes de Colombia</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>12. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa
              legal se resolverá en los tribunales de Cali, Valle del Cauca, Colombia.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los
              cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
            <p>
              El uso continuado de nuestros servicios después de cambios constituye aceptación de
              los nuevos términos.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Divisibilidad</h2>
            <p>
              Si alguna disposición de estos términos se considera inválida o inaplicable, las
              disposiciones restantes continuarán en pleno vigor y efecto.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Contacto</h2>
            <p>Para preguntas sobre estos Términos de Servicio, contáctanos:</p>
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
          <p>¿Listo para empezar tu proyecto?</p>
          <Link to="/cotizar" className="legal-cta-btn">
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </div>
  )
}