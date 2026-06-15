import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const trainers = [
  {
    name: "Javier López",
    role: "Entrenador personal",
    image: "/img/javier-lopez.jpeg",
    description:
      "Javier es un entrenador fuerte, disciplinado y amigable. Te ayudará a mejorar tu técnica, mantener la constancia y sacar el máximo de tu rendimiento físico en cada entrenamiento.",
  },
  {
    name: "Gabriel Picón",
    role: "Entrenador personal",
    image: "/img/gabriel-picon.jpeg",
    description:
      "Gabriel es exigente, amable y con carácter fuerte. Te motivará a superar tus límites, entrenar con intensidad y trabajar con disciplina para lograr tu mejor versión.",
  },
];

function Entrenadores() {
  const [currentTrainer, setCurrentTrainer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrainer((prev) => (prev + 1) % trainers.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const nextTrainer = () => {
    setCurrentTrainer((prev) => (prev + 1) % trainers.length);
  };

  const prevTrainer = () => {
    setCurrentTrainer((prev) =>
      prev === 0 ? trainers.length - 1 : prev - 1
    );
  };

  const getCardClass = (index) => {
    if (index === currentTrainer) return "trainer-stack-card active";

    if (
      index === currentTrainer - 1 ||
      (currentTrainer === 0 && index === trainers.length - 1)
    ) {
      return "trainer-stack-card previous";
    }

    if (
      index === currentTrainer + 1 ||
      (currentTrainer === trainers.length - 1 && index === 0)
    ) {
      return "trainer-stack-card next";
    }

    return "trainer-stack-card hidden";
  };

  const trainer = trainers[currentTrainer];

  return (
    <main className="page-top">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">ENTRENADORES ACTIVE FIT</p>
          <h1>CONOCE A NUESTROS ENTRENADORES</h1>
          <p>
            En Active Fit contamos con entrenadores comprometidos con tu
            progreso, listos para exigirte, motivarte y ayudarte a dar lo mejor
            de ti.
          </p>
        </div>
      </section>

      <section className="container trainers-section reveal">
        <div className="section-title">
          <span>NUESTRO EQUIPO</span>
          <h2>Fuerza, disciplina y guía profesional</h2>
        </div>

        <div className="trainer-stack-carousel">
          <button
            type="button"
            className="trainer-stack-arrow trainer-stack-arrow-left"
            onClick={prevTrainer}
            aria-label="Entrenador anterior"
          >
            ‹
          </button>

          <div className="trainer-stack-stage">
            {trainers.map((item, index) => (
              <article className={getCardClass(index)} key={item.name}>
                <div className="trainer-stack-image">
                  <img src={item.image} alt={`Entrenador ${item.name}`} />
                </div>

                <div className="trainer-stack-overlay">
                  <p className="eyebrow">ACTIVE FIT COACH</p>
                  <h3>{item.name}</h3>
                  <p className="trainer-role">{item.role}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="trainer-stack-arrow trainer-stack-arrow-right"
            onClick={nextTrainer}
            aria-label="Siguiente entrenador"
          >
            ›
          </button>

          <div className="trainer-stack-info">
            <p className="eyebrow">ENTRENADOR SELECCIONADO</p>
            <h3>{trainer.name}</h3>
            <p className="trainer-role">{trainer.role}</p>
            <p>{trainer.description}</p>

            <Link to="/contacto" className="btn btn-primary">
              Entrenar con {trainer.name.split(" ")[0]}
            </Link>
          </div>

          <div className="trainer-dots">
            {trainers.map((item, index) => (
              <button
                type="button"
                key={item.name}
                className={
                  index === currentTrainer
                    ? "trainer-dot active"
                    : "trainer-dot"
                }
                onClick={() => setCurrentTrainer(index)}
                aria-label={`Ver entrenador ${item.name}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section className="container cta-section reveal">
        <div className="cta-card">
          <h2>Entrena con los mejores</h2>
          <p>
            Recibe orientación, motivación y acompañamiento para avanzar con
            seguridad en tu proceso físico.
          </p>
          <Link to="/contacto" className="btn btn-primary">
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Entrenadores;