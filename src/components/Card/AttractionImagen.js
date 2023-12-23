import React from 'react';
import { Link } from 'react-router-dom';



const AttractionCard = ({ attraction }) => {
    const { id, nombre, precio, imagen } = attraction;
  
    return (
      <div className="attraction-card">
        {/* Asegúrate de que la propiedad image sea correcta y tenga la ruta a la imagen */}
        <img src={imagen} alt={nombre} className="attraction-image" />
        <div className="attraction-details">
          <h3>{nombre}</h3>
          <p>{`Precio: $${precio}`}</p>
          {/* Agrega cualquier otra información que desees mostrar */}
          <Link to={`/attractions/${id}`} className="btn btn-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    );
  };
  
  export default AttractionCard;