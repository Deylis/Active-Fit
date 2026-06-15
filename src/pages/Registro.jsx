import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Registro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    password: "",
  });

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  function getUsers() {
    return JSON.parse(localStorage.getItem("activeFitUsers")) || [];
  }

  function saveUsers(users) {
    localStorage.setItem("activeFitUsers", JSON.stringify(users));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleRegister(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const plan = formData.plan;
    const password = formData.password.trim();

    if (!name || !email || !phone || !plan || !password) {
      setMessage({
        text: "Completa todos los campos.",
        type: "error",
      });
      return;
    }

    const users = getUsers();

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage({
        text: "Este correo ya está registrado.",
        type: "error",
      });
      return;
    }

    const newUser = {
      name,
      email,
      phone,
      plan,
      password,
      createdAt: new Date().toLocaleDateString("es-NI"),
    };

    users.push(newUser);
    saveUsers(users);

    localStorage.setItem("activeFitSession", JSON.stringify(newUser));
    window.dispatchEvent(new Event("activeFitSessionChange"));

    setMessage({
      text: "Cuenta creada correctamente. Redirigiendo...",
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
          <p className="eyebrow">NUEVO MIEMBRO</p>
          <h1>Crear cuenta</h1>

          <p className="auth-text">
            Regístrate como miembro de Active Fit para simular tu acceso al
            sistema.
          </p>

          <form className="auth-form" onSubmit={handleRegister}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una membresía</option>
                <option value="Mensualidad">Mensualidad - 30 dólares</option>
                <option value="Quincena">Quincena - 20 dólares</option>
                <option value="Semana">Semana - 12 dólares</option>
                <option value="Día">Día - 100 córdobas</option>
              </select>
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
              Crear cuenta
            </button>
          </form>

          {message.text && (
            <p className={`auth-message ${message.type}`}>{message.text}</p>
          )}

          <p className="auth-change">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Registro;