import React, { useState } from 'react';
import Nav from '../../components/Nav/nav';

import './cities.css';

export default function Cities({ onSelectAttraction }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setSelectedAttraction(null);
  };

  const handleAttractionClick = (attraction) => {
    setSelectedAttraction(attraction);
    onSelectAttraction(attraction);
  };

  const handleArrowClick = () => {
    setSelectedCity(null);
    setSelectedAttraction(null);
  };

  const baseUrl = 'http://localhost:4000/imagen/';
  const imageUrl = baseUrl + 'nombre_del_archivo.jpg';
  const citiesData = {

    Barcelona: [
      { id: 1, nombre: 'Sagrada Familia', precio: 30, imagen: 'sagrada-familia.jpg', descripcion: 'Basílica icónica en Barcelona.' },
      { id: 2, nombre: 'Casa Batlló', precio: 25, imagen: 'casa_batllo.jpg', descripcion: 'Edificio modernista en el corazón de Barcelona.' },
      { id: 3, nombre: 'El palau de Musica Catalana', precio: 15, imagen: 'palau_de_musica.jpg', descripcion: 'Auditorio declarado Patrimonio de la Humanidad.' },
      { id: 4, nombre: 'Park Guell', precio: 20, imagen: 'park_guell.jpg', descripcion: 'Parque público con elementos arquitectónicos diseñados por Gaudí.' },
    ],
    Roma: [
      { id: 1, nombre: 'Coliseo', precio: 35, imagen: 'coliseo.jpg', descripcion: 'Anfiteatro romano en el centro de Roma.' },
      { id: 2, nombre: 'Foro Romano', precio: 20, imagen: 'foro_romano.jpg', descripcion: 'Ruinas de la antigua Roma.' },
      { id: 3, nombre: 'Fontana di Trevi', precio: 15, imagen: 'fontana_di_trevi.jpg', descripcion: 'Fuente monumental en el centro histórico de Roma.' },
      { id: 4, nombre: 'Vaticano', precio: 25, imagen: 'vaticano.jpg', descripcion: 'Ciudad-estado independiente y sede de la Iglesia Católica.' },
    ],
    Paris: [
      { id: 1, nombre: 'Notre Dame', precio: 25, imagen: 'notre_dame.jpg', descripcion: 'Catedral gótica en la Île de la Cité de París.' },
      { id: 2, nombre: 'Arco de Triunfo', precio: 20, imagen: 'arco_de_triunfo.jpg', descripcion: 'Monumento en honor a quienes lucharon en la Rev. Francesa.' },
      { id: 3, nombre: 'Torre Eiffel', precio: 30, imagen: 'torre_eiffel.jpg', descripcion: 'Torre de hierro ubicada en el Campo de Marte de París.' },
      { id: 4, nombre: 'Versalles', precio: 40, imagen: 'versalles.jpg', descripcion: 'Palacio real situado en la ciudad de Versalles.' },
      { id: 5, nombre: 'Louvre', precio: 35, imagen: 'louvre.jpg', descripcion: 'Museo de arte histórico y antigüedades en París.' },
    ],
    Florencia: [
      { id: 1, nombre: 'La Academia', precio: 30, imagen: 'la_academia.jpg', descripcion: 'Galería de arte en Florencia que alberga la escultura "David" de Miguel Ángel.' },
      { id: 2, nombre: 'Galería Uffizi', precio: 25, imagen: 'uffizi.jpg', descripcion: 'Galería de arte en Florencia con una de las colecciones más importantes del mundo.' },
      { id: 3, nombre: 'Duomo', precio: 20, imagen: 'duomo.jpg', descripcion: 'Catedral de Florencia, conocida por su cúpula.' },
    ],
  };

  return (
    <>
      <Nav itemMenu="Cities" />
      <main className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <section className="CitiesColor w-75 m-5 p-5 contact-container">
          <h2 className="tituloContact d-flex flex-column align-items-center">
            {selectedCity ? (
              <>
                <span>Elige tu destino</span>
                <i
                  className="bi bi-arrow-up-circle arrow-icon"
                  onClick={handleArrowClick}
                  role="button"
                  aria-label="Deselect city and show all cities"
                ></i>
              </>
            ) : (
              'Elige tu destino'
            )}
          </h2>
          <div className="row g-3">
            {Object.keys(citiesData).map((city) => (
              <div className={`col-md-3 ${selectedCity && selectedCity !== city ? 'hidden' : ''}`} key={city}>
                <button
                  type="button"
                  className={`btn colorBotonCiudad btn-city ${selectedCity === city ? 'selected' : ''}`}
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </button>
              </div>
            ))}
          </div>

          {selectedCity && (
            <div className="attractions-container">
              <h3 className="attractions-title">Atracciones en {selectedCity}</h3>
              <div className="row g-3">
                {citiesData[selectedCity].map((attraction) => (
                  <div className="col-md-3" key={attraction.id}>
                    <div
                      className={`attraction-card ${selectedAttraction === attraction.id ? 'selected' : ''}`}
                      onClick={() => handleAttractionClick(attraction.id)}
                    >
                      <img src={imageUrl} alt={attraction.nombre} className="attraction-image" />
                      <h4 className="attraction-name">{attraction.nombre}</h4>
                      <p className={`attraction-description ${selectedAttraction === attraction.id ? 'expanded' : ''}`}>
                        {attraction.descripcion}
                      </p>
                      <p className="attraction-price">${attraction.precio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}