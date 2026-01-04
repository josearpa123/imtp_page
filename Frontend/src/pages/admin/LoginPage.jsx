import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminPages.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("imtp_admin", "true");
    navigate("/admin/dashboard");
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (formData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    localStorage.setItem("imtp_admin", "true");
    navigate("/admin/dashboard");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      remember: false
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="login-page-wrapper">
      <div className="auth-container">
        {/* Panel lateral izquierdo */}
        <div className="auth-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-icon">🚀</div>
            <h2>
              {isLogin 
                ? "Bienvenido de vuelta" 
                : "Únete a nosotros"}
            </h2>
            <p>
              {isLogin
                ? "Ingresa tus credenciales para acceder al panel de administración"
                : "Crea tu cuenta y comienza a gestionar tu plataforma"}
            </p>
            <ul className="feature-list">
              <li>Panel de control completo</li>
              <li>Análisis en tiempo real</li>
              <li>Seguridad garantizada</li>
              <li>Soporte 24/7</li>
            </ul>
          </div>
        </div>

        {/* Panel del formulario */}
        <div className="auth-form-panel">
          <div className="form-content" key={isLogin ? 'login' : 'register'}>
            <div className="form-header">
              <h1>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h1>
              <p>
                {isLogin 
                  ? "Ingresa tus datos para continuar"
                  : "Completa el formulario para registrarte"}
              </p>
            </div>

            {isLogin ? (
              <form onSubmit={handleSubmitLogin} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📧</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Tu contraseña"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>

                <div className="form-footer">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                    />
                    Recordarme
                  </label>
                  <button type="button" className="forgot-link">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <button type="submit" className="submit-btn">
                  Iniciar Sesión
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmitRegister} className="auth-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📧</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Mínimo 6 caracteres"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={6}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Repite tu contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength={6}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Crear Cuenta
                </button>
              </form>
            )}

            <div className="form-toggle">
              <p>
                {isLogin 
                  ? "¿No tienes una cuenta?" 
                  : "¿Ya tienes una cuenta?"}
              </p>
              <button type="button" className="toggle-btn" onClick={toggleForm}>
                {isLogin ? "Regístrate aquí" : "Inicia Sesión"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}