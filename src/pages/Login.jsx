import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  function getUsers() {
    return JSON.parse(localStorage.getItem("activeFitUsers")) || [];
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    const users = getUsers();

    const userFound = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!userFound) {
      setMessage({
        text: "Correo o contraseña incorrectos.",
        type: "error",
      });
      return;
    }

    localStorage.setItem("activeFitSession", JSON.stringify(userFound));
    window.dispatchEvent(new Event("activeFitSessionChange"));

    setMessage({
      text: "Inicio de sesión correcto. Redirigiendo...",
      type: "success",
    });

    setTimeout(() => {
      navigate("/perfil");
    }, 1200);
  }

  return (
    <main className="page-top">
      <section className="auth-section">
        <div className="auth-card reveal">
          <p className="eyebrow">ACCESO ACTIVE FIT</p>
          <h1>Iniciar sesión</h1>

          <p className="auth-text">
            Ingresa a tu cuenta para consultar tu perfil de miembro Active Fit.
          </p>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>

          {message.text && (
            <p className={`auth-message ${message.type}`}>{message.text}</p>
          )}

          <p className="auth-change">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;