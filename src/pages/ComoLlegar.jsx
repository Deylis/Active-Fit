import { Link } from "react-router-dom";

function ComoLlegar() {
  const gymInfo = {
    name: "Active Fit",
    city: "Managua, Nicaragua",
    address: "Rotonda 7 Sur, 100 varas al oeste, frente a la Escuela de Idioma.",
    reference:
      "Cerca de la Rotonda 7 Sur, tomando como referencia la Escuela de Idioma.",
    mapQuery:
      "Rotonda 7 Sur 100 varas al oeste frente a la Escuela de Idioma Managua Nicaragua",
    visualMap: "/img/ubicacion-active-fit.jpeg",
  };

  const googleMapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    gymInfo.mapQuery
  )}`;

  const googleMapsRoute = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    gymInfo.mapQuery
  )}`;

  const googleMapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    gymInfo.mapQuery
  )}&z=16&output=embed`;

  return (
    <main className="page-top">
      <section className="inner-hero location-hero">
        <div className="container">
          <p className="eyebrow">UBICACIÓN {gymInfo.name.toUpperCase()}</p>
          <h1>ENCUÉNTRANOS FÁCILMENTE</h1>
          <p>
            Estamos ubicados en una zona accesible de {gymInfo.city}, cerca de
            la Rotonda 7 Sur.
          </p>
        </div>
      </section>

      <section className="container location-main-section reveal">
        <div className="location-main-grid">
          <article className="location-info-panel">
            <p className="eyebrow">CÓMO LLEGAR</p>
            <h2>Dirección del gimnasio</h2>

            <div className="location-detail-list">
              <div className="location-detail-item">
                <span className="location-detail-icon">📍</span>
                <div>
                  <h3>Dirección exacta</h3>
                  <p>{gymInfo.address}</p>
                  <small>{gymInfo.city}</small>
                </div>
              </div>

              <div className="location-detail-item">
                <span className="location-detail-icon">🧭</span>
                <div>
                  <h3>Referencia</h3>
                  <p>{gymInfo.reference}</p>
                  <small>
                    Puedes usar Google Maps para guiarte antes de visitarnos.
                  </small>
                </div>
              </div>

              <div className="location-detail-item">
                <span className="location-detail-icon">🏋️</span>
                <div>
                  <h3>Punto de llegada</h3>
                  <p>
                    Al llegar a la zona, busca el local de {gymInfo.name} y
                    confirma la referencia visual del mapa.
                  </p>
                  <small>Te esperamos para empezar tu entrenamiento.</small>
                </div>
              </div>
            </div>

            <div className="location-actions location-actions-main">
              <a
                href={googleMapsRoute}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Abrir ruta
              </a>

              <a
                href={googleMapsSearch}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Ver en Maps
              </a>
            </div>
          </article>

          <article className="location-visual-panel">
            <div className="visual-map-card visual-map-card-main">
              <img
                src={gymInfo.visualMap}
                alt={`Ubicación visual ${gymInfo.name}`}
              />
            </div>

            <div className="location-mini-card">
              <span>Referencia visual</span>
              <p>
                Usa esta imagen como apoyo para reconocer mejor la ubicación.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="container map-section reveal">
        <div className="section-title">
          <span>MAPA INTERACTIVO</span>
          <h2>Ubicación en Google Maps</h2>
          <p>
            Puedes mover el mapa, acercarte o abrir la ruta directamente desde
            Google Maps.
          </p>
        </div>

        <div className="map-card map-card-modern">
          <iframe
            src={googleMapsEmbed}
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Ubicación ${gymInfo.name}`}
          ></iframe>

          <div className="map-actions">
            <a
              href={googleMapsRoute}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Cómo llegar
            </a>

            <a
              href={googleMapsSearch}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="container location-steps-section reveal">
        <div className="section-title">
          <span>GUÍA RÁPIDA</span>
          <h2>Antes de visitarnos</h2>
        </div>

        <div className="location-steps-grid">
          <article className="location-step-card">
            <span>01</span>
            <h3>Abre la ruta</h3>
            <p>
              Toca el botón de Google Maps para calcular el camino desde tu
              ubicación actual.
            </p>
          </article>

          <article className="location-step-card">
            <span>02</span>
            <h3>Ubica la referencia</h3>
            <p>
              Toma como punto principal la Rotonda 7 Sur y la Escuela de Idioma.
            </p>
          </article>

          <article className="location-step-card">
            <span>03</span>
            <h3>Llega a entrenar</h3>
            <p>
              Visítanos y empieza tu rutina con disciplina, fuerza y constancia.
            </p>
          </article>
        </div>
      </section>

      <section className="container cta-section reveal">
        <div className="cta-card">
          <h2>Te esperamos en {gymInfo.name}</h2>
          <p>
            Visítanos y empieza tu entrenamiento con disciplina, fuerza y
            constancia.
          </p>

          <Link to="/membresias" className="btn btn-primary">
            Ver membresías
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ComoLlegar;