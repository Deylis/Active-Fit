import { Link } from "react-router-dom";
import { useState } from "react";

function Contacto() {
  const whatsappNumber = "50583848361";
  const activeFitEmail = "info@activefit.com.ni";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Completa los campos obligatorios.");
      return;
    }

    const emailSubject = `Mensaje desde Active Fit: ${formData.subject}`;

    const emailBody = `Hola Active Fit,

Mi nombre es ${formData.name}.

Correo de contacto: ${formData.email}
Teléfono: ${formData.phone || "No ingresado"}

Mensaje:
${formData.message}

Saludos.`;

    const mailtoUrl = `mailto:${activeFitEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="page-top">
      <section className="inner-hero">
        <div className="container contact-hero-center">
          <h1>CONTÁCTANOS</h1>
          <p>
            Visítanos, escríbenos por WhatsApp o envíanos un mensaje a nuestro
            correo electrónico.
          </p>
        </div>
      </section>

      <section className="contact-info-section container reveal">
        <div className="contact-cards">
          <article className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Ubicación</h3>
            <p>Rotonda 7 Sur</p>
            <p>100 varas al oeste</p>
            <p>Frente a la Escuela de Idioma</p>

            <Link
              to="/como-llegar"
              className="btn btn-secondary contact-location-btn"
            >
              Cómo llegar
            </Link>
          </article>

          <article className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>WhatsApp</h3>
            <p>+505 8384-8361</p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola Active Fit, quiero más información sobre el gimnasio."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Escribir por WhatsApp
            </a>
          </article>

          <article className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>{activeFitEmail}</p>

            <a href={`mailto:${activeFitEmail}`} className="btn btn-secondary">
              Enviar correo
            </a>
          </article>
        </div>
      </section>

      <section className="container contact-section reveal">
        <div className="contact-box glass-card">
          <div className="section-title">
            <span>ESCRÍBENOS</span>
            <h2>Mensaje por correo</h2>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto del mensaje"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                rows="6"
                placeholder="Escribe tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar mensaje por correo
            </button>
          </form>
        </div>

        <div className="contact-info">
          <article className="glass-card">
            <h3>Horario</h3>
            <p>Lunes a viernes: 5:00 AM - 9:00 PM</p>
            <p>Sábado: 6:00 AM - 6:00 PM</p>
            <p>Domingo: Cerrado</p>
          </article>

          <article className="glass-card">
            <h3>Ubicación</h3>
            <p>
              Rotonda 7 Sur, 100 varas al oeste, frente a la Escuela de Idioma.
            </p>

            <Link to="/como-llegar" className="btn btn-secondary">
              Ver cómo llegar
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Contacto;