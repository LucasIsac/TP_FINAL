import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/Carousel.css";

import SearchBar from "../components/SearchBar";
import ServiciosCarta from "../components/ServiciosCarta";
import Carousel from "../components/Carousel";
import Cartas from "../components/Cartas";

const HomePage = () => {
  return (
    <div>
      <main className="mt-5 pt-5">
        <section
          className="d-flex flex-column justify-content-center align-items-center pt-5 text-center w-50 m-auto"
          id="intro"
        >
          <h1 className="p-3 fs-2 border-top border-3">
            Explora, Elige y Reserva Fácilmente en{" "}
            <span className="text-primary">Estrella Azul</span>, todo en un solo
            lugar
          </h1>
          <p className="p-3 fs-4">
            En <span className="text-primary">Estrella Azul</span> te ayudamos a
            encontrar y reservar la habitación ideal, adaptada a tus gustos y
            necesidades. Con una experiencia fácil y rápida, explora opciones de
            hospedaje únicas y reserva en unos pocos clics. ¡Descubre tu próxima
            estancia perfecta con nosotros!
          </p>
        </section>

        <SearchBar />

        <Carousel />

        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col">
              <ServiciosCarta
                imagen="img/transporte.jfif"
                alt="servicio1"
                titulo="Servicio de transporte"
                texto="Nos encargamos de buscarte y llevarte hasta tu hotel"
              />
            </div>
            <div className="col">
              <ServiciosCarta
                imagen="img/alquiler.jpg"
                alt="servicio2"
                titulo="Alquiler de autos"
                texto="Ofrecemos una amplia variedad de autos para alquilar durante tu estadía."
              />
            </div>
            <div className="col">
              <ServiciosCarta
                imagen="img/actividades.jpeg"
                alt="servicio3"
                titulo="Actividades recreativas"
                texto="Descubre las mejores actividades y lugares turísticos para visitar."
              />
            </div>
          </div>
        </div>

        <Cartas />
      </main>
    </div>
  );
};

export default HomePage;
