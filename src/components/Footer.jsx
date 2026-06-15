import { Link } from "react-router-dom";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>Active Fit</h3>
          <p>Disciplina, fuerza y evolución física.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/membresias">Membresías</Link>
          <Link to="/horarios">Horarios</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <p>Encuentra promociones, rutinas y novedades de Active Fit.</p>

          <div className="social-buttons">
            <a
              href="https://www.tiktok.com/@activefit.nic"
              target="_blank"
              rel="noreferrer"
              className="social-btn tiktok"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.facebook.com/61577790540737/posts/active-fit-no-cierra-sus-puertaseste-primero-de-mayo-vamos-con-nuestro-horario-n/122179256864926351/"
              target="_blank"
              rel="noreferrer"
              className="social-btn facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/activefit.nic/"
              target="_blank"
              rel="noreferrer"
              className="social-btn instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;