import mathImage from "../../../assets/img/2084541.png"

export const Inicio = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Columna de texto */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Bienvenido al Mundo de las Matemáticas
            </h1>
            <p className="lead">
              Aprende y explora conceptos como ecuaciones diferenciales,
              integrales, derivadas, e interpolaciones. ¡Tu camino al
              conocimiento empieza aquí!
            </p>
          </div>

          {/* Columna de imagen */}
          <div className="col-md-6 text-center">
            <img
              src={mathImage}
              className="img-fluid"
              alt="Imagen de matemáticas"
            />
          </div>
        </div>
      </div>

      <main>
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Diapositiva 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              className="active"
              aria-current="true"
              aria-label="Diapositiva 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              className=""
              aria-label="Diapositiva 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Ejemplo de título.</h1>
                  <p className="opacity-75">
                    Algunos contenidos de marcador de posición representativos
                    para la primera diapositiva del carrusel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Regístrate hoy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Otro ejemplo de titular.</h1>
                  <p>
                    Algunos contenidos de marcador de posición representativos
                    para la segunda diapositiva del carrusel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Más información
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Uno más por si acaso.</h1>
                  <p>
                    Algunos contenidos de marcador de posición representativos
                    para la tercera diapositiva de este carrusel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Explorar la galería
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Marcador de posición"
                preserveAspectRatio="xMidYMid slice"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal">Título</h2>
              <p>
                Contenido representativo de marcador de posición para las tres
                columnas de texto debajo del carrusel. Esta es la primera
                columna.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  Ver detalles »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Marcador de posición"
                preserveAspectRatio="xMidYMid slice"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal">Título</h2>
              <p>
                Otro contenido representativo interesante. Esta vez, pasamos a
                la segunda columna.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  Ver detalles »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Marcador de posición"
                preserveAspectRatio="xMidYMid slice"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal">Título</h2>
              <p>
                Y por último esta, la tercera columna de contenido de marcador
                de posición representativo.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  Ver detalles »
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Primer título del featurette.{" "}
                <span className="text-body-secondary">
                  Te va a dejar boquiabierto.
                </span>
              </h2>
              <p className="lead">
                Un excelente contenido provisional para el primer featurette.
                Imaginen una prosa emocionante.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Marcador de posición: 500x500"
                preserveAspectRatio="xMidYMid slice"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Sí, es así de bueno.{" "}
                <span className="text-body-secondary">
                  Compruébalo tú mismo.
                </span>
              </h2>
              <p className="lead">
                ¿Otro featurette? ¡Claro! Más contenido provisional para que te
                hagas una idea de cómo funcionaría este diseño con contenido
                real.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Marcador de posición: 500x500"
                preserveAspectRatio="xMidYMid slice"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Y por último, este.{" "}
                <span className="text-body-secondary">Jaque mate.</span>
              </h2>
              <p className="lead">
                Y sí, este es el último bloque de contenido representativo de
                marcador de posición. Nuevamente, no está pensado para ser
                leído, simplemente está aquí para darles una mejor idea de cómo
                se vería con contenido real. Su contenido.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Marcador de posición: 500x500"
                preserveAspectRatio="xMidYMid slice"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>

        <footer className="container">
          <p className="float-end">
            <a href="#">Volver arriba</a>
          </p>
          <p>© 2017–2025 Company, Inc.</p>
        </footer>
      </main>
    </section>
  )
}
