export const Franquicias = () => {
  return (
    <>
      <section id="franquicias" className="py-5 bg-light">
        <div className="container">
          <h2 className="display-4 text-center mb-4">¡Conviértete en Franquiciado de Nuestra Marca!</h2>
          <p className="lead text-center mb-5">
            En nuestro restaurante, no solo creamos platos excepcionales, sino también oportunidades de negocio. Si estás buscando una inversión sólida en el mundo gastronómico, nuestra franquicia te ofrece un modelo de negocio probado, con soporte integral y un alto potencial de crecimiento.
          </p>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="h4">¿Por Qué Elegir Nuestra Franquicia?</h3>
              <p>
                Unirte a nuestra red de franquicias significa formar parte de una marca consolidada que ha demostrado su éxito a través de años de experiencia en el sector gastronómico. Ofrecemos un modelo que combina tradición y creatividad, una receta de éxito que se ha ganado la preferencia de nuestros clientes.
              </p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle"></i> Modelo de negocio probado con éxito comprobado</li>
                <li><i className="bi bi-check-circle"></i> Soporte completo desde la selección del local hasta la apertura</li>
                <li><i className="bi bi-check-circle"></i> Capacitación inicial y formación continua para garantizar la calidad</li>
                <li><i className="bi bi-check-circle"></i> Acceso a recetas exclusivas y técnicas culinarias innovadoras</li>
                <li><i className="bi bi-check-circle"></i> Planes de marketing y estrategias de ventas efectivas</li>
                <li><i className="bi bi-check-circle"></i> Soporte constante para asegurar el éxito y crecimiento del negocio</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src="cheft.png"
                alt="Franquicia"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <h3 className="h4 text-center">Ventajas de Ser Nuestro Franquiciado</h3>
              <p className="text-center">
                Ser franquiciado de nuestra marca te permitirá contar con una serie de ventajas competitivas que asegurarán el éxito de tu negocio. Te brindamos todo lo necesario para que puedas operar con la misma calidad y eficiencia que caracteriza a nuestra marca.
              </p>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="feature-box text-center">
                    <i className="bi bi-briefcase-check fs-1 mb-3"></i>
                    <h4>Modelo de Negocio Sólido</h4>
                    <p>Con una estructura eficiente y escalable que ha demostrado ser exitosa en múltiples ubicaciones.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-box text-center">
                    <i className="bi bi-person-check fs-1 mb-3"></i>
                    <h4>Capacitación Continua</h4>
                    <p>Recibirás formación y actualizaciones constantes para asegurar la operación óptima de tu restaurante.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-box text-center">
                    <i className="bi bi-bar-chart-line fs-1 mb-3"></i>
                    <h4>Estrategias de Marketing Efectivas</h4>
                    <p>Te proporcionamos campañas publicitarias y herramientas para atraer clientes y mantenerlos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <h3 className="h4">¿Cómo Convertirse en Franquiciado?</h3>
              <p>
                El proceso de franquicia es sencillo y está diseñado para asegurar una integración exitosa a nuestra red. Aquí te mostramos los pasos básicos:
              </p>
              <ol className="list-unstyled">
                <li><i className="bi bi-check-circle"></i> Solicita más información a través de nuestro formulario de contacto.</li>
                <li><i className="bi bi-check-circle"></i> Programamos una reunión para discutir las condiciones y tu ubicación potencial.</li>
                <li><i className="bi bi-check-circle"></i> Aprobación de la ubicación y firma del contrato de franquicia.</li>
                <li><i className="bi bi-check-circle"></i> Capacitación inicial y apertura de tu restaurante.</li>
                <li><i className="bi bi-check-circle"></i> Continuo apoyo en la gestión de tu negocio y seguimiento de resultados.</li>
              </ol>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <h3 className="h4">¡Únete a Nosotros Hoy Mismo!</h3>
              <p>
                Si estás listo para formar parte de una marca gastronómica en crecimiento, no dudes en contactarnos. Estamos aquí para apoyarte en cada paso del camino y ayudarte a abrir las puertas de tu propio restaurante.
              </p>
              <a href="/contacto" className="btn btn-primary">Contáctanos Ahora</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

