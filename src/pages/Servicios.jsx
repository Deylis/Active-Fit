import { Link } from "react-router-dom";

function Servicios() {
  return (
    <main className="page-top">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">SERVICIOS ACTIVE FIT</p>
          <h1>TODO LO QUE NECESITAS PARA TRANSFORMAR TU CUERPO</h1>
          <p>
            Entrena con intensidad, disciplina y acompañamiento en un ambiente
            diseñado para mejorar tu rendimiento.
          </p>
        </div>
      </section>

      <section className="container services-section reveal">
        <div className="section-title">
          <span>NUESTROS SERVICIOS</span>
          <h2>Áreas de entrenamiento</h2>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-icon">🏋️</div>
            <h3>Área de pesas</h3>
            <p>
              Espacio equipado para rutinas de fuerza, volumen muscular,
              tonificación y acondicionamiento físico.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">💪</div>
            <h3>Rutinas personalizadas</h3>
            <p>
              Planes adaptados a tus objetivos, nivel actual, disponibilidad de
              tiempo y progreso físico.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">🥗</div>
            <h3>Orientación física</h3>
            <p>
              Recomendaciones básicas para mejorar hábitos de entrenamiento,
              descanso y alimentación.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">👥</div>
            <h3>Ambiente motivador</h3>
            <p>
              Una comunidad enfocada en respeto, disciplina, apoyo y superación
              constante.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Entrenamiento libre</h3>
            <p>
              Acceso a las instalaciones para que puedas entrenar a tu ritmo
              siguiendo tu propia rutina.
            </p>
          </article>
        </div>
      </section>

      <section className="container cta-section reveal">
        <div className="cta-card">
          <h2>Empieza tu proceso</h2>
          <p>Elige una membresía y comienza a trabajar por tu mejor versión.</p>
          <Link to="/membresias" className="btn btn-primary">
            Ver planes
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Servicios;