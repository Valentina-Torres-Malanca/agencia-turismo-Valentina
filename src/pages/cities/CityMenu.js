import React from 'react';


const CityMenu = ({ cities, onSelectCity }) => {
  return (
    <div className="ContactColor city-menu-container">
      <h2 className="tituloContact">Elija su destino</h2>
      <div className="city-buttons">
        {cities.map((city) => (
          <button key={city} onClick={() => onSelectCity(city)}>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityMenu;
