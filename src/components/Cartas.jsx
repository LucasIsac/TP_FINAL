import { NavLink } from "react-router-dom";
import "./Carta.css";

const data = [
  {
    id: 1,
    img: "img/hotel.jpg",
    title: "Hoteles",
    location: "La Plata",
    locationLink: "https://maps.app.goo.gl/5CF4brW67XEiSHYz9",
    distance: "a 300 m del centro",
    recommended: true,
    details: "Habitación cuádruple deluxe",
    beds: "3 camas (2 individuales, 1 grande)",
    ratingScore: "9,8",
    ratingText: "Recomendable",
    reviews: "(97 comentarios)",
    price: "$180.219",
    taxes: "Incluye impuestos y cargos",
  },
  {
    id: 2,
    img: "img/apartamento.jpg",
    title: "Apartamentos",
    location: "La Plata",
    locationLink: "https://maps.app.goo.gl/5CF4brW67XEiSHYz9",
    distance: "a 200 m del centro",
    recommended: true,
    details: "Apartamentos de 1 dormitorio",
    beds: "1 dormitorio, 1 sala de estar, 1 baño, 1 cocina",
    ratingScore: "9,6",
    ratingText: "Excelente",
    reviews: "(124 comentarios)",
    price: "$120.000",
    taxes: "Incluye impuestos y cargos",
  },
  {
    id: 3,
    img: "img/monoambiente.jpg",
    title: "Monoambiente",
    location: "La Plata",
    locationLink: "https://maps.app.goo.gl/5CF4brW67XEiSHYz9",
    distance: "a 100 m del centro",
    recommended: true,
    details: "Monoambiente completo",
    beds: "1 dormitorio, 1 baño",
    ratingScore: "9,8",
    ratingText: "Excepcional",
    reviews: "(82 comentarios)",
    price: "$140.219",
    taxes: "Incluye impuestos y cargos",
  },
  {
    id: 4,
    img: "img/cabaña2.jpg",
    title: "Cabañas",
    location: "La Plata",
    locationLink: "https://maps.app.goo.gl/5CF4brW67XEiSHYz9",
    distance: "a 100 m del centro",
    recommended: true,
    details: "Monoambiente completo",
    beds: "1 dormitorio, 1 baño",
    ratingScore: "9,8",
    ratingText: "Excepcional",
    reviews: "(82 comentarios)",
    price: "$140.219",
    taxes: "Incluye impuestos y cargos",
  },
  {
    id: 5,
    img: "img/hostel.jpg",
    title: "Hosteles",
    location: "La Plata",
    locationLink: "https://maps.app.goo.gl/5CF4brW67XEiSHYz9",
    distance: "a 100 m del centro",
    recommended: true,
    details: "Monoambiente completo",
    beds: "1 dormitorio, 1 baño",
    ratingScore: "9,8",
    ratingText: "Excepcional",
    reviews: "(82 comentarios)",
    price: "$140.219",
    taxes: "Incluye impuestos y cargos",
  },
  {
    id: 6,
    img: "img/casa.jpg",
    title: "Casas",
    location: "La Plata",
    locationLink: "https://maps.app.goo.gl/5CF4brW67XEiSHYz9",
    distance: "a 100 m del centro",
    recommended: true,
    details: "Monoambiente completo",
    beds: "1 dormitorio, 1 baño",
    ratingScore: "9,8",
    ratingText: "Excepcional",
    reviews: "(82 comentarios)",
    price: "$140.219",
    taxes: "Incluye impuestos y cargos",
  },
];

const Cartas = () => {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt={item.title} className="card-image" />
          <div className="card-content">
            <h2>{item.title}</h2>
            <div className="card-location">
              <a href={item.locationLink}>{item.location}</a>
              <span> · {item.distance}</span>
            </div>
            {item.recommended && (
              <span className="recommended">Recomendado para tu grupo</span>
            )}
            <p>
              <strong>{item.details}</strong>
            </p>
            <p>{item.beds}</p>
            <div className="card-footer">
              <div className="rating">
                <span className="rating-score">{item.ratingScore}</span>
                <span>{item.ratingText}</span>
                <small>{item.reviews}</small>
              </div>
              <div className="price">
                <span>{item.price}</span>
                <small>{item.taxes}</small>
              </div>
            </div>
            <NavLink to="/Formulario" className="availability-button">
              Ver disponibilidad
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cartas;
