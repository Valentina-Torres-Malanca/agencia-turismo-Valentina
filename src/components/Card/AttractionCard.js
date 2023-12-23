import React from 'react';
import { Link } from 'react-router-dom';
import './AttractionCard.css';

const AttractionCard = ({ attraction }) => {
  const { id, nombre, precio, imagen } = attraction;

  return (
    <div className="attraction-card">
      <img src={imagen} alt={nombre} className="attraction-image" />
      <div className="attraction-details">
        <h3>{nombre}</h3>
        <p>{`Precio: $${precio}`}</p>
        <Link to={`/attractions/${id}`} className="btn btn-primary">
          Ver detalles
        </Link>
        <Link to="/cities" className="btn btn-secondary">
          Atrás
        </Link>
      </div>
    </div>
  );
};

export default AttractionCard;
