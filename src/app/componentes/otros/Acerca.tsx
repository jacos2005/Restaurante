export const Acerca = () => {
  return (
    <>
      <section id="acerca" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="display-4 mb-4">¿Quiénes Somos?</h2>
          <p className="lead mb-5">
            En nuestro restaurante, nos enorgullece ofrecer experiencias únicas, fusionando sabores auténticos con un servicio excepcional. Cada plato que servimos cuenta una historia, y cada cliente es parte de nuestra familia.
          </p>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="restaurante.jpg" 
                alt="Acerca de nosotros"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="h4">Nuestra Misión</h3>
              <p>
                Nuestra misión es brindar una experiencia culinaria inigualable, donde la calidad, la tradición y el sabor se encuentran en cada plato. Trabajamos con pasión para ofrecer un ambiente cálido y cómodo para todos nuestros comensales.
              </p>
              <h3 className="h4 mt-4">Nuestros Valores</h3>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle"></i> Compromiso con la calidad</li>
                <li><i className="bi bi-check-circle"></i> Pasión por la cocina</li>
                <li><i className="bi bi-check-circle"></i> Respeto por la tradición culinaria</li>
                <li><i className="bi bi-check-circle"></i> Atención personalizada</li>
              </ul>
            </div>
          </div>

          {/* Información de los chefs */}
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="testimonial">
                <h5>- Juan Acosta, Chef Principal y Propietario.</h5>
                <p>Juan Acosta es el corazón y la mente creativa detrás de nuestro restaurante. Como chef principal y propietario, cree firmemente que la cocina es una forma de arte que permite contar historias a través de los sabores y la presentación. Su enfoque innovador y pasión por la cocina lo han convertido en un referente en el ámbito gastronómico.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
               
                <h5>- María Venegas, Sous Chef.</h5>
                <p>María Venegas, nuestra sous chef, tiene una visión única de la cocina: cada plato es una obra de arte. Su habilidad para fusionar ingredientes y su creatividad sin límites le han permitido destacarse, creando platos llenos de sabor y pasión. Con un enfoque meticuloso, María es clave en la creación de recetas que cuentan una historia en cada bocado.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
        
                <h5>- Jhon Acosta, Supervisor de Cocina.</h5>
                <p>Jhon Acosta, como supervisor de cocina, lidera con la filosofía de que la comida es una herramienta para conectar a las personas. Su enfoque en la armonía de los sabores y la técnica culinaria asegura que cada plato sea una experiencia memorable. Jhon cree que la cocina tiene el poder de comunicar emociones y recuerdos a través de sus sabores.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
