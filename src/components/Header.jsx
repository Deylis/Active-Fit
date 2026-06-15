import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BackgroundMusic from "./BackgroundMusic";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkSession = () => {
    const session = localStorage.getItem("activeFitSession");
    setIsLoggedIn(!!session);
  };

  useEffect(() => {
    checkSession();

    window.addEventListener("storage", checkSession);
    window.addEventListener("activeFitSessionChange", checkSession);

    return () => {
      window.removeEventListener("storage", checkSession);
      window.removeEventListener("activeFitSessionChange", checkSession);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <div className="brand-zone">
          <Link to="/" className="brand" onClick={closeMenu}>
            <img src="/img/Logo-active-fit.jpeg" alt="Logo Active Fit" />
            <span>ACTIVE FIT</span>
          </Link>

          <BackgroundMusic />
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links nav-activision ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Inicio
            </NavLink>
          </li>

          <li
            className="nav-dropdown"
            onMouseEnter={() => setOpenDropdown("gimnasio")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="nav-drop-btn"
              type="button"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setOpenDropdown(
                    openDropdown === "gimnasio" ? null : "gimnasio"
                  );
                }
              }}
            >
              Gimnasio <span>▼</span>
            </button>

            {openDropdown === "gimnasio" && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-menu-text">
                    <p className="eyebrow">ACTIVE FIT</p>
                    <h3>Conoce nuestro gimnasio</h3>
                    <p>
                      Explora nuestra historia, ubicación, contacto y preguntas
                      frecuentes antes de visitarnos.
                    </p>
                  </div>

                  <div className="mega-menu-links">
                    <NavLink to="/nosotros" onClick={closeMenu}>
                      Nosotros
                    </NavLink>

                    <NavLink to="/como-llegar" onClick={closeMenu}>
                      Cómo llegar
                    </NavLink>

                    <NavLink to="/contacto" onClick={closeMenu}>
                      Contacto
                    </NavLink>

                    <NavLink to="/faq" onClick={closeMenu}>
                      Preguntas frecuentes
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            className="nav-dropdown"
            onMouseEnter={() => setOpenDropdown("entrenamiento")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="nav-drop-btn"
              type="button"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setOpenDropdown(
                    openDropdown === "entrenamiento"
                      ? null
                      : "entrenamiento"
                  );
                }
              }}
            >
              Entrenamiento <span>▼</span>
            </button>

            {openDropdown === "entrenamiento" && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-menu-text">
                    <p className="eyebrow">ENTRENA CON PROPÓSITO</p>
                    <h3>Fuerza, disciplina y progreso</h3>
                    <p>
                      Revisa nuestros servicios, horarios y entrenadores para
                      planificar mejor tu rutina.
                    </p>
                  </div>

                  <div className="mega-menu-links">
                    <NavLink to="/servicios" onClick={closeMenu}>
                      Servicios
                    </NavLink>

                    <NavLink to="/horarios" onClick={closeMenu}>
                      Horarios
                    </NavLink>

                    <NavLink to="/entrenadores" onClick={closeMenu}>
                      Entrenadores
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/membresias"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Membresías
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <NavLink
                to="/perfil"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-profile active-auth-link" : "nav-profile"
                }
              >
                Perfil
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-login active-auth-link" : "nav-login"
                  }
                >
                  Iniciar sesión
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/registro"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-register active-auth-link" : "nav-register"
                  }
                >
                  Registrarse
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;