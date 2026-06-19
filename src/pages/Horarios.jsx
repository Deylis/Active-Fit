import { Link } from "react-router-dom";

function Horarios() {
  return (
    <main className="page-top">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">HORARIOS ACTIVE FIT</p>
          <h1>ENTRENA EN EL MOMENTO QUE MEJOR SE ADAPTE A TI</h1>
          <p>
            Organiza tu rutina según nuestros horarios de atención y turnos
            recomendados.
          </p>
        </div>
      </section>

      <section className="container schedule-section reveal">
        <div className="section-title">
          <span>HORARIO GENERAL</span>
          <h2>Atención semanal</h2>
        </div>

        <div className="schedule-grid">
          <article className="schedule-card featured">
            <h3>Lunes a Viernes</h3>
            <p className="schedule-time">5:00 AM - 10:00 PM</p>
            <p>
              Horario ideal para entrenar antes o después de tus actividades
              diarias.
            </p>
          </article>

          <article className="schedule-card">
            <h3>Sábado</h3>
            <p className="schedule-time">6:00 AM - 6:00 PM</p>
            <p>Perfecto para entrenamientos fuertes de fin de semana.</p>
          </article>

          <article className="schedule-card">
            <h3>Domingo</h3>
            <p className="schedule-time">9:00 AM - 6:00 PM</p>
            <p>
              Ideal para entrenar con más calma, cerrar la semana con energía y
              mantener la constancia.
            </p>
          </article>
        </div>
      </section>

      <section className="container classes-section reveal">
        <div className="section-title">
          <span>TURNOS RECOMENDADOS</span>
          <h2>Distribución por día</h2>
        </div>

        <div className="table-card">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Día</th>
                <th>Mañana</th>
                <th>Tarde</th>
                <th>Noche</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Lunes</td>
                <td>Pesas</td>
                <td>Entrenamiento libre</td>
                <td>Rutina de fuerza</td>
              </tr>

              <tr>
                <td>Martes</td>
                <td>Funcional</td>
                <td>Entrenamiento libre</td>
                <td>Hipertrofia</td>
              </tr>

              <tr>
                <td>Miércoles</td>
                <td>Pesas</td>
                <td>Entrenamiento libre</td>
                <td>Rutina guiada</td>
              </tr>

              <tr>
                <td>Jueves</td>
                <td>Funcional</td>
                <td>Entrenamiento libre</td>
                <td>Hipertrofia</td>
              </tr>

              <tr>
                <td>Viernes</td>
                <td>Pesas</td>
                <td>Entrenamiento libre</td>
                <td>Full body</td>
              </tr>

              <tr>
                <td>Sábado</td>
                <td>Entrenamiento libre</td>
                <td>Rutina general</td>
                <td>No disponible</td>
              </tr>

              <tr>
                <td>Domingo</td>
                <td>Entrenamiento libre</td>
                <td>Rutina general</td>
                <td>No disponible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container schedule-note reveal">
        <div className="glass-card">
          <div>
            <h3>Recomendación</h3>
            <p>
              Para mejores resultados, se recomienda entrenar de 3 a 5 veces por
              semana, combinando fuerza, descanso y buena alimentación.
            </p>
          </div>

          <Link to="/membresias" className="btn btn-primary">
            Ver membresías
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Horarios;