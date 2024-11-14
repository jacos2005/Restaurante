export const Inicio = () => {
  return (
    <>
      {/* Sección Hero */}
      <header className="hero bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-3">Bienvenido a Tu Futuro</h1>
          <p className="lead">Transformamos ideas en soluciones digitales innovadoras.</p>
          <a href="#acerca" className="btn btn-light btn-lg">Conoce Más</a>
        </div>
      </header>

      {/* Sección Acerca de */}
      <section id="acerca" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4">¿Quiénes Somos?</h2>
              <p className="lead">
                En nuestra empresa, nos dedicamos a crear experiencias únicas mediante el uso de tecnologías de vanguardia. Nuestro equipo está comprometido con el éxito de cada cliente.
              </p>
              <a href="#contacto" className="btn btn-primary">Contáctanos</a>
            </div>
            <div className="col-lg-6">
              <img
                src="public/Untitled.jpg"
                alt="Acerca de nosotros"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4">Nuestros Servicios</h2>
          <p className="lead">Te ayudamos a llevar tu proyecto al siguiente nivel</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Servicio 1" />
                <div className="card-body">
                  <h5 className="card-title">Desarrollo Web</h5>
                  <p className="card-text">Creamos sitios web responsivos y atractivos para tu negocio.</p>
                  <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Servicio 2" />
                <div className="card-body">
                  <h5 className="card-title">Aplicaciones Móviles</h5>
                  <p className="card-text">Desarrollamos aplicaciones móviles a medida para tus necesidades.</p>
                  <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Servicio 3" />
                <div className="card-body">
                  <h5 className="card-title">Consultoría Digital</h5>
                  <p className="card-text">Asesoramos sobre la mejor estrategia digital para tu empresa.</p>
                  <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section id="testimonios" className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="display-4">Lo que Dicen Nuestros Clientes</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <p className="lead">"Gracias a su equipo, nuestro sitio web se transformó por completo. ¡Estamos encantados con el resultado!"</p>
                <h5>- Juan Pérez, CEO de Empresa XYZ</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p className="lead">"Excelente servicio de desarrollo de aplicaciones. Nos ayudaron a crear una app que ha sido todo un éxito."</p>
                <h5>- María López, Directora de Innovación</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p className="lead">"La consultoría digital de esta empresa nos permitió mejorar nuestra estrategia de marketing online de manera increíble."</p>
                <h5>- Carlos Gómez, Director Comercial</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-5">
        <div className="container text-center">
          <h2 className="display-4">Contáctanos</h2>
          <p className="lead">¿Tienes alguna pregunta? ¡Nos encantaría hablar contigo!</p>
          <a href="mailto:contacto@mipagina.com" className="btn btn-danger btn-lg">Enviar un Correo</a>
        </div>
      </section>
    </>
  );
};

