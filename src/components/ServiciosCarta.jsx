
function Servicios({imagen, alt, titulo, texto}) {
  return (
   
      <div className="row w-75 mx-auto" id="servicios-fila-1">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
          <img src={imagen} alt={alt} width="180" height="160" />
          <div>
            <h3 className="fs-5 mt-4 px-4 pb-1">{titulo}</h3>
            <p className="px-4">{texto}</p>
          </div>
        </div>
      </div>
  );
}

export default Servicios;
