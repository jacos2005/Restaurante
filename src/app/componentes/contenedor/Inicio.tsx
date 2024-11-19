export const Inicio = () => {
  return (
    <>
      
      <header className="hero bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-3">Bienvenido al mejor restaurante de la ciudad</h1>
          <p className="lead">Nuestra especialidad siempre sera que el cliente este conforme y comodo.</p>
          <a href="#acerca" className="btn btn-light btn-lg">Conoce Más</a>
        </div>
      </header>

      
      <section id="acerca" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4">¿Quiénes Somos?</h2>
              <p className="lead">
              En nuestro restaurante, creamos experiencias únicas fusionando sabores auténticos con un servicio de excelencia. Nos esforzamos cada día para ser el mejor lugar de la ciudad, donde cada plato cuenta una historia y cada cliente es nuestra prioridad.
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

      
      <section id="servicios" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4">Nuestros mejores platos</h2>
          <p className="lead">Ofrecemos la mejor comida de alta calidad con opciones personalizadas para eventos y experiencias culinarias únicas, adaptadas a tus necesidades.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="450_1000.jpg" className="comida" alt="Servicio 1" />
                <div className="card-body">
                  <h5 className="card-title">Bandeja paisa</h5>
                  <p className="card-text">¡Disfruta nuestra auténtica bandeja paisa! Un festín tradicional con carne asada, chicharrón crujiente, arroz, frijoles, huevo frito, arepa, aguacate y morcilla. Todo preparado con los ingredientes más frescos y el sabor único de la cocina colombiana. ¡Ven y prueba esta deliciosa explosión de sabores!</p>
                  <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="ajiaco.jpg" className="comida" alt="Servicio 2" />
                <div className="card-body">
                  <h5 className="card-title">Ajiaco</h5>
                  <p className="card-text">
                  Ven y disfruta de nuestro delicioso ajiaco, una sopa tradicional colombiana llena de sabor. Con pollo jugoso, tres tipos de papas, mazorca y un toque especial de guasca, acompañada de crema de leche, alcaparras y arroz blanco. ¡Una experiencia auténtica que te hará sentirte como en casa!</p>
                  <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="mote.jpg" className="comida" alt="Servicio 3" />
                <div className="card-body">
                  <h5 className="card-title">Mote de queso</h5>
                  <p className="card-text">¡Prueba nuestro exquisito mote de queso, un plato típico de la costa Caribe colombiana! Hecho con maíz tierno, queso fresco y un caldo cremoso, acompañado de arroz y trozos de carne de cerdo. ¡Una combinación perfecta de sabores que te transportará directo al corazón de Colombia!</p>
                  <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonios" className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="display-4">Nuestos fundadores</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <p className="lead">"La cocina no es solo una mezcla de ingredientes, es una forma de expresar amor, cultura y creatividad en cada plato."</p>
                <h5>- Juan Acosta, Chef principal y propietario.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p className="lead">"Cada plato es una obra de arte que cuenta una historia, y cada ingrediente es una pincelada que da vida a la receta."</p>
                <h5>- María Venegas, Sous Chef.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p className="lead">"La cocina es un lenguaje universal; cada bocado tiene el poder de contar una historia y crear recuerdos"</p>
                <h5>- Jhon Acosta, Supervisor de cocina.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

     
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

