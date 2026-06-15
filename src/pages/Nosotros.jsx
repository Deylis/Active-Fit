import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <main className="page-top">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">QUIÉNES SOMOS</p>
          <h1>ACTIVE FIT ES MÁS QUE UN GYM</h1>
          <p>
            Somos una comunidad enfocada en disciplina, fuerza, constancia y
            transformación física.
          </p>
        </div>
      </section>

      <section className="container story-section reveal">
        <div className="section-title">
          <span>NUESTRA ESENCIA</span>
          <h2>Donde nacen las transformaciones reales</h2>
        </div>

        <div className="story-grid">
          <article className="glass-card">
            <h3>Historia</h3>
            <p>
              Active Fit nace como un espacio para personas que desean mejorar
              su condición física, ganar confianza y construir una vida más
              saludable mediante el entrenamiento constante.
            </p>
          </article>

          <article className="glass-card">
            <h3>Misión</h3>
            <p>
              Motivar a cada persona a superar sus límites físicos y mentales,
              ofreciendo un ambiente de entrenamiento moderno, fuerte y enfocado
              en resultados visibles.
            </p>
          </article>

          <article className="glass-card">
            <h3>Visión</h3>
            <p>
              Ser un gimnasio referente en Managua por su ambiente motivador,
              atención cercana, disciplina deportiva y compromiso con la
              evolución de cada miembro.
            </p>
          </article>
        </div>
      </section>

      <section className="values-section container reveal">
        <div className="section-title">
          <span>VALORES</span>
          <h2>Lo que representa Active Fit</h2>
        </div>

        <div className="values-grid">
          <article className="value-box">
            <span>01</span>
            <h3>Disciplina</h3>
            <p>La constancia siempre supera la motivación temporal.</p>
          </article>

          <article className="value-box">
            <span>02</span>
            <h3>Respeto</h3>
            <p>
              Cada persona tiene su propio proceso y merece un ambiente de
              apoyo.
            </p>
          </article>

          <article className="value-box">
            <span>03</span>
            <h3>Intensidad</h3>
            <p>Entrenar con intención es lo que marca la diferencia.</p>
          </article>

          <article className="value-box">
            <span>04</span>
            <h3>Evolución</h3>
            <p>Siempre existe un siguiente nivel por conquistar.</p>
          </article>
        </div>
      </section>

      <section className="container cta-section reveal">
        <div className="cta-card">
          <h2>Entrena con propósito</h2>
          <p>
            Forma parte de una comunidad que trabaja por ser más fuerte cada día.
          </p>
          <Link to="/membresias" className="btn btn-primary">
            Ver membresías
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;