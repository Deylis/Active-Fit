import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Perfil() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const activeSession = JSON.parse(localStorage.getItem("activeFitSession"));

    if (activeSession) {
      setSession(activeSession);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("activeFitSession");
    window.dispatchEvent(new Event("activeFitSessionChange"));
    setSession(null);
    navigate("/login");
  }

  return (
    <main className="page-top">
      <section className="auth-section">
        <div className="auth-card profile-card reveal">
          <p className="eyebrow">MIEMBRO ACTIVE FIT</p>
          <h1>Mi perfil</h1>

          <div className="profile-content">
            {!session ? (
              <>
                <p className="auth-message error">
                  Debes iniciar sesión para ver tu perfil.
                </p>

                <Link to="/login" className="btn btn-primary">
                  Iniciar sesión
                </Link>
              </>
            ) : (
              <>
                <div className="profile-box">
                  <p>
                    <strong>Nombre:</strong> {session.name}
                  </p>
                  <p>
                    <strong>Correo:</strong> {session.email}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {session.phone}
                  </p>
                  <p>
                    <strong>Membresía:</strong> {session.plan}
                  </p>
                  <p>
                    <strong>Fecha de registro:</strong> {session.createdAt}
                  </p>
                  <p>
                    <strong>Estado:</strong> Activo
                  </p>
                </div>

                <button onClick={handleLogout} className="btn btn-secondary">
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Perfil;