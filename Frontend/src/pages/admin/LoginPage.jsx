import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import '../../styles/AdminPages.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const { isDark } = useTheme()
  const [step, setStep] = useState('email') // 'email' o 'password'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStep('password')
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (!password) return
    
    setIsLoading(true)
    
    // Simular autenticación
    setTimeout(() => {
      localStorage.setItem('imtp_admin', 'true')
      navigate('/admin/dashboard')
    }, 800)
  }

  const handleBack = () => {
    setStep('email')
    setPassword('')
  }

  return (
    <div className="auth-page-simple">
      {/* Background */}
      <div className="auth-bg-simple" />

      {/* Card */}
      <div className="auth-card-simple">
        {/* Botón de regreso expandible */}
        <Link to="/" className="auth-back-btn-circle">
          <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span className="back-text">Regresar</span>
        </Link>

        {/* Logo */}
        <div className="auth-logo-simple">
          <img 
            src={isDark ? "/assets/images/logo-color.png" : "/assets/images/logo.png"} 
            alt="IMTP Studios"
          />
        </div>

        {/* Título */}
        <div className="auth-header-simple">
          <h1>Iniciar sesión</h1>
          <p>Inicia sesión o crea una cuenta</p>
        </div>

        {/* Formulario Email */}
        {step === 'email' && (
          <form onSubmit={handleEmailSubmit} className="auth-form-simple">
            <div className="auth-field-simple">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <button type="submit" className="auth-btn-simple">
              Continuar
            </button>
          </form>
        )}

        {/* Formulario Password */}
        {step === 'password' && (
          <form onSubmit={handlePasswordSubmit} className="auth-form-simple">
            <div className="auth-field-simple">
              <div className="auth-email-display">
                <span>{email}</span>
                <button type="button" onClick={handleBack} className="auth-change-btn">
                  Cambiar
                </button>
              </div>
            </div>

            <div className="auth-field-simple">
              <div className="auth-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                />
                <button
                  type="button"
                  className="auth-password-toggle-simple"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-btn-simple" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="auth-spinner" />
                  Ingresando...
                </>
              ) : (
                'Continuar'
              )}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="auth-footer-simple">
          <p>Solo para administradores de IMTP Studios</p>
          <div className="auth-footer-links">
            <Link to="/privacidad">Política de privacidad</Link>
            <span className="auth-footer-separator">·</span>
            <Link to="/terminos">Términos del servicio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}