import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const heroImages = [
  "/img/hero-active-1.jpeg",
  "/img/hero-active-2.jpeg",
  "/img/hero-active-3.jpeg",
];

function Home() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="hero hero-slider particles">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Entrenamiento Active Fit ${index + 1}`}
              className={`hero-slide-img hero-img-${index + 1} ${
                index === currentHeroImage ? "active" : ""
              }`}
            />
          ))}
        </div>

        <div className="container hero-content">
          <p className="eyebrow">ACTIVE FIT GYM</p>
          <h1>DISCIPLINA, FUERZA Y EVOLUCIÓN FÍSICA</h1>
          <p>
            Entrena en un ambiente diseñado para mejorar tu fuerza, condición
            física, disciplina y confianza personal.
          </p>

          <div className="hero-buttons">
            <Link to="/membresias" className="btn btn-primary">
              Ver membresías
            </Link>

            <Link to="/como-llegar" className="btn btn-secondary">
              Cómo llegar
            </Link>
          </div>
        </div>
      </section>

      <section className="container stats-section reveal">
        <article className="stat-card">
          <h3>+3</h3>
          <p>Planes disponibles</p>
        </article>

        <article className="stat-card">
          <h3>6</h3>
          <p>Días de atención</p>
        </article>

        <article className="stat-card">
          <h3>100%</h3>
          <p>Actitud fitness</p>
        </article>

        <article className="stat-card">
          <h3>5AM</h3>
          <p>Inicio de atención</p>
        </article>
      </section>

      <section className="container about-preview reveal">
        <div className="section-title">
          <span>BIENVENIDO</span>
          <h2>Tu proceso empieza aquí</h2>
        </div>

        <div className="about-grid">
          <article className="glass-card">
            <h3>Entrenamiento</h3>
            <p>
              Espacios para desarrollar fuerza, resistencia, condición física y
              hábitos saludables.
            </p>
          </article>

          <article className="glass-card">
            <h3>Disciplina</h3>
            <p>
              Una comunidad enfocada en constancia, respeto, superación y
              progreso personal.
            </p>
          </article>

          <article className="glass-card">
            <h3>Resultados</h3>
            <p>
              Rutinas, horarios y planes pensados para ayudarte a avanzar según
              tu objetivo.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-banner reveal">
        <div className="container cta-content">
          <h2>
            NO ESPERES MÁS <span>PARA EMPEZAR</span>
          </h2>

          <Link to="/contacto" className="btn btn-primary">
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;