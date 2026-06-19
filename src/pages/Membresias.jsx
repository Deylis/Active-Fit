import { Link } from "react-router-dom";

function Membresias() {
  return (
    <main className="page-top">
      <section className="inner-hero memberships-hero">
        <div className="container">
          <p className="eyebrow">MEMBRESÍAS ACTIVE FIT</p>
          <h1>PLANES HECHOS PARA TU RITMO</h1>
          <p>
            Elige el plan que mejor se adapte a tu rutina, tu disciplina y tus
            objetivos. Contamos con opciones flexibles en córdobas para que
            puedas entrenar según tu tiempo y necesidad.
          </p>
        </div>
      </section>

      <section className="container discount-section reveal">
        <div className="discount-banner">
          <div className="discount-header">
            <span>PRECIO ESPECIAL</span>
            <h2>Estudiantes y veteranos</h2>
            <p>
              En Active Fit apoyamos a estudiantes y veteranos con una opción
              mensual especial, pensada para que puedan mantenerse activos,
              fuertes y constantes.
            </p>
          </div>

          <div className="discount-grid">
            <article className="discount-card">
              <div className="discount-number">C$930</div>
              <h3>Estudiantes</h3>
              <p>
                Plan mensual especial para estudiantes que desean entrenar de
                forma constante con un precio accesible.
              </p>
            </article>

            <article className="discount-card">
              <div className="discount-number">C$930</div>
              <h3>Veteranos</h3>
              <p>
                Beneficio mensual especial para veteranos que desean mantenerse
                activos, fuertes y saludables.
              </p>
            </article>
          </div>

          <p className="discount-note">
            Consulta disponibilidad y condiciones directamente en recepción o
            por medio de nuestro formulario de contacto.
          </p>
        </div>
      </section>

      <section className="container pricing-section pricing-section-full reveal">
        <div className="pricing-grid pricing-grid-full">
          <article className="price-card featured">
            <span className="tag">Más popular</span>
            <h3>Mensualidad</h3>
            <p className="price">
              C$1100 <small>córdobas</small>
            </p>
            <ul>
              <li>Acceso completo al gimnasio.</li>
              <li>Ideal para progreso constante.</li>
              <li>Mejor relación entre tiempo e inversión.</li>
            </ul>
            <Link to="/contacto" className="btn btn-primary">
              Solicitar
            </Link>
          </article>

          <article className="price-card">
            <h3>Quincena</h3>
            <p className="price">
              C$740 <small>córdobas</small>
            </p>
            <ul>
              <li>Acceso continuo por 15 días.</li>
              <li>Perfecta para mantener una rutina corta.</li>
              <li>Plan flexible para iniciar.</li>
            </ul>
            <Link to="/contacto" className="btn btn-secondary">
              Elegir
            </Link>
          </article>

          <article className="price-card">
            <h3>Semana</h3>
            <p className="price">
              C$440 <small>córdobas</small>
            </p>
            <ul>
              <li>Acceso durante una semana.</li>
              <li>Ideal para visitantes o pruebas.</li>
              <li>Entrena varios días seguidos.</li>
            </ul>
            <Link to="/contacto" className="btn btn-secondary">
              Elegir
            </Link>
          </article>

          <article className="price-card">
            <h3>Día</h3>
            <p className="price">
              C$100 <small>córdobas</small>
            </p>
            <ul>
              <li>Acceso por un día.</li>
              <li>Ideal para entrenos puntuales.</li>
              <li>Sin compromiso mensual.</li>
            </ul>
            <Link to="/contacto" className="btn btn-secondary">
              Elegir
            </Link>
          </article>

        </div>
      </section>

      <section className="container cta-section reveal">
        <div className="cta-card">
          <h2>¿No sabes cuál elegir?</h2>
          <p>
            Contáctanos y te ayudamos a elegir el plan que mejor se adapte a tu
            objetivo.
          </p>
          <Link to="/contacto" className="btn btn-primary">
            Contactar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Membresias;