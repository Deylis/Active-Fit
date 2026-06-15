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
            objetivos. También contamos con descuentos especiales para miembros
            seleccionados.
          </p>
        </div>
      </section>

      <section className="container discount-section reveal">
        <div className="discount-banner">
          <div className="discount-header">
            <span>DESCUENTOS ESPECIALES</span>
            <h2>Entrena más, paga menos</h2>
            <p>
              En Active Fit apoyamos a estudiantes, veteranos y adultos mayores
              con descuentos especiales para que puedan mantenerse activos,
              fuertes y constantes.
            </p>
          </div>

          <div className="discount-grid">
            <article className="discount-card">
              <div className="discount-number">20%</div>
              <h3>Descuento para estudiantes</h3>
              <p>
                Presentando carnet estudiantil vigente, aplica descuento en
                planes seleccionados.
              </p>
            </article>

            <article className="discount-card">
              <div className="discount-number">40%</div>
              <h3>Veteranos y adultos mayores</h3>
              <p>
                Beneficio especial para veteranos y adultos mayores que desean
                entrenar con acompañamiento y seguridad.
              </p>
            </article>
          </div>

          <p className="discount-note">
            Consulta disponibilidad y condiciones directamente en recepción o en
            nuestro formulario de contacto.
          </p>
        </div>
      </section>

      <section className="container pricing-section pricing-section-full reveal">
        <div className="pricing-grid pricing-grid-full">
          <article className="price-card featured">
            <span className="tag">Más popular</span>
            <h3>Mensualidad</h3>
            <p className="price">
              30 <small>dólares</small>
            </p>
            <ul>
              <li>Acceso completo al gimnasio.</li>
              <li>Ideal para progreso constante.</li>
              <li>Mejor relación tiempo e inversión.</li>
            </ul>
            <Link to="/contacto" className="btn btn-primary">
              Solicitar
            </Link>
          </article>

          <article className="price-card">
            <h3>Quincena</h3>
            <p className="price">
              20 <small>dólares</small>
            </p>
            <ul>
              <li>Acceso continuo por 15 días.</li>
              <li>Perfecta para probar tu disciplina.</li>
              <li>Plan flexible para iniciar.</li>
            </ul>
            <Link to="/contacto" className="btn btn-secondary">
              Elegir
            </Link>
          </article>

          <article className="price-card">
            <h3>Semana</h3>
            <p className="price">
              12 <small>dólares</small>
            </p>
            <ul>
              <li>Ideal para visitantes.</li>
              <li>Útil para una prueba intensiva.</li>
              <li>Entrena varios días seguidos.</li>
            </ul>
            <Link to="/contacto" className="btn btn-secondary">
              Elegir
            </Link>
          </article>

          <article className="price-card">
            <h3>Día</h3>
            <p className="price">
              100 <small>córdobas</small>
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