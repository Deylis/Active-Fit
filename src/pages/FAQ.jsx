function FAQ() {
  return (
    <main className="page-top">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">PREGUNTAS FRECUENTES</p>
          <h1>TODO LO QUE NECESITAS SABER ANTES DE ENTRENAR</h1>
          <p>
            Resolvemos las dudas más comunes sobre membresías, horarios,
            ubicación y servicios.
          </p>
        </div>
      </section>

      <section className="container services-section reveal">
        <div className="section-title">
          <span>DUDAS COMUNES</span>
          <h2>Preguntas frecuentes</h2>
        </div>

        <div className="faq-list">
          <article className="faq-item">
            <h3>¿Necesito experiencia para inscribirme?</h3>
            <p>
              No. Puedes iniciar desde cero. El gimnasio está pensado para
              principiantes, intermedios y personas avanzadas.
            </p>
          </article>

          <article className="faq-item">
            <h3>¿Puedo pagar solo por un día?</h3>
            <p>Sí. Active Fit cuenta con opción de día por C$100.</p>
          </article>

          <article className="faq-item">
            <h3>¿Tienen entrenamiento personalizado?</h3>
            <p>
              Sí. Puedes consultar por orientación y rutinas adaptadas a tu
              objetivo físico.
            </p>
          </article>

          <article className="faq-item">
            <h3>¿Cuáles son los horarios?</h3>
            <p>
              De lunes a viernes de 5:00 AM a 10:00 PM, sábado de 6:00 AM a
              6:00 PM y domingo de 9:00 AM a 6:00 PM.
            </p>
          </article>

          <article className="faq-item">
            <h3>¿Dónde están ubicados?</h3>
            <p>
              Rotonda 7 Sur, 100 varas al oeste, frente a la Escuela de Idioma,
              Managua.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default FAQ;