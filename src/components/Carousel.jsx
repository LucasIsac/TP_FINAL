import './Carousel.css';

function Carousel() {
  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/slide.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="img/Buenos Aires.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="img/Destinos.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    // <div
    //   id="carouselExampleControls"
    //   classNameName="carousel slide"
    //   data-bs-ride="carousel"
    //   // style={{ width: "80%", height: "400px", margin: "auto" }}
    // >
    //   <div classNameName="carousel-inner h-100">
    //     <div classNameName="carousel-item active" data-bs-interval="3000">
    //       <img src="img/panda.jpg" classNameName="d-block w-100 h-10" alt="slide1 " />
    //     </div>
    //     <div classNameName="carousel-item" data-bs-interval="3000">
    //       <img src="img/Buenos Aires.jpg" classNameName="d-block w-100 h-100" alt="slide2" />
    //     </div>
    //     <div classNameName="carousel-item" data-bs-interval="3000">
    //       <img src="img/Destinos.jpg" classNameName="d-block w-100 h-100"  alt="slide3" />
    //     </div>
    //   </div>
    //   <button
    //     classNameName="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="prev"
    //   >
    //     <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span classNameName="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     classNameName="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="next"
    //   >
    //     <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span classNameName="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}

export default Carousel;

