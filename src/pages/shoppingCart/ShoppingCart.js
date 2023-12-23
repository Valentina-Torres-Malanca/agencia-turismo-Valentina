import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Nav/nav';
import Home from '../home/home';

import './ShoppingCart.css';

const ShoppingCart = ({ user }) => {
  const location = useLocation();

  const prices = {
    roma: {
      coliseo: { adult: 40, minor: 20 },
      foroRomano: { adult: 30, minor: 15 },
      pantheon: { adult: 25, minor: 12.5 },
      vaticano: { adult: 55, minor: 27.5 },
      fontanaDiTrevi: { adult: 30, minor: 15 },
    },
    florencia: {
      duomo: { adult: 40, minor: 20 },
      uffizi: { adult: 35, minor: 17.5 },
      laAcademia: { adult: 40, minor: 20 },
    },
    barcelona: {
      parkGuell: { adult: 45, minor: 22.5 },
      batllo: { adult: 35, minor: 17.5 },
      palau: { adult: 40, minor: 20 },
      sagradaFamilia: { adult: 50, minor: 25 },
    },
    paris: {
      torreEiffel: { adult: 50, minor: 25 },
      louvre: { adult: 40, minor: 20 },
      versalles: { adult: 35, minor: 18 },
      arcoTriunfo: { adult: 30, minor: 15 },
      notreDame: { adult: 25, minor: 12.5 },
    },
  };

  const attractions = {
    roma: ['coliseo', 'foroRomano', 'pantheon', 'vaticano', 'fontanaDiTrevi'],
    florencia: ['duomo', 'uffizi', 'laAcademia'],
    barcelona: ['parkGuell', 'batllo', 'palau', 'sagradaFamilia'],
    paris: ['torreEiffel', 'louvre', 'versalles', 'arcoTriunfo', 'notreDame'],
  };

  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    trips: [
      {
        city: '',
        attractions: [],
        adults: 1,
        children: 0,
      },
    ],
  });

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleCityChange = (event, index) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedAttraction('');
    setCustomerInfo((prevInfo) => {
      const updatedTrips = [...prevInfo.trips];
      updatedTrips[index].city = city;
      updatedTrips[index].attractions = []; // Clear attractions when city changes
      return {
        ...prevInfo,
        trips: updatedTrips,
      };
    });
  };

  const handleAttractionChange = (event, index) => {
    const attraction = event.target.value;
    setSelectedAttraction(attraction);
    setCustomerInfo((prevInfo) => {
      const updatedTrips = [...prevInfo.trips];
      updatedTrips[index].attractions = [attraction];
      return {
        ...prevInfo,
        trips: updatedTrips,
      };
    });
  };

  const handleAdultsChange = (event, index) => {
    const adults = parseInt(event.target.value, 10) || 0;
    setCustomerInfo((prevInfo) => {
      const updatedTrips = [...prevInfo.trips];
      updatedTrips[index].adults = adults;
      return {
        ...prevInfo,
        trips: updatedTrips,
      };
    });
  };

  const handleChildrenChange = (event, index) => {
    const children = parseInt(event.target.value, 10) || 0;
    setCustomerInfo((prevInfo) => {
      const updatedTrips = [...prevInfo.trips];
      updatedTrips[index].children = children;
      return {
        ...prevInfo,
        trips: updatedTrips,
      };
    });
  };

  const handleRemoveTrip = (index) => {
    setCustomerInfo((prevInfo) => {
      const updatedTrips = [...prevInfo.trips];
      updatedTrips.splice(index, 1);
      return {
        ...prevInfo,
        trips: updatedTrips,
      };
    });
  };


  const calculateTotal = () => {
    let totalAdults = 0;
    let totalChildren = 0;

    customerInfo.trips.forEach((trip) => {
      const { adults, children } = trip;
      const cityPrices = prices[trip.city];
      const attractionPrices = trip.attractions.map((attraction) => cityPrices[attraction]);
      totalAdults += adults * attractionPrices.reduce((acc, price) => acc + price.adult, 0);
      totalChildren += children * attractionPrices.reduce((acc, price) => acc + price.minor, 0);
    });

    return { totalAdults, totalChildren };
  };

  const handleAddTrip = () => {
    setCustomerInfo((prevInfo) => {
      const updatedTrips = [
        ...prevInfo.trips,
        { city: '', attractions: [], adults: 1, children: 0 },
      ];
      return {
        ...prevInfo,
        trips: updatedTrips,
      };
    });
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handlePayment = () => {
    setShowPaymentForm(true);
    // Puedes mostrar un mensaje de éxito o redirigir a una página de confirmación
  };

 

  const { totalAdults, totalChildren } = calculateTotal();

  return (
    <>
      <Nav username={user} />
      <main className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <section className="ContactColor w-75 m-5 p-5 contact-container">
          {location.pathname === '/' && <Home />}
          <h2 className="tituloContact d-flex flex-column align-items-center">Carrito de Compras</h2>
          <form className="formulario row g-3">
            {confirmed ? (
              <div className="col-md-12">
                {showPaymentForm ? (
                  <div>
                    <h4>Completa los detalles de la tarjeta</h4>
                    <div className="mb-3">
                      <label className="form-label">Nombre en la tarjeta</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Número de tarjeta</label>
                      <input type="text" className="form-control" maxLength="16" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Fecha de vencimiento</label>
                      <input type="text" className="form-control" placeholder="MM/YY" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">CVV</label>
                      <input type="text" className="form-control" maxLength="3" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Monto total a pagar</label>
                      <input
                        type="text"
                        className="form-control"
                        value={`$${totalAdults + totalChildren}`}
                        readOnly
                      />
                    </div>
                    <button type="button" className="btn btn-success" onClick={handlePayment}>
                      Pagar
                    </button>
                  </div>
                ) : (
                  <button type="button" className="btn btn-success" onClick={handlePayment}>
                    Pagar
                  </button>
                )}
              </div>
            ) : (
              <>
                {customerInfo.trips.map((trip, index) => (
                  <div key={index} className="row mt-3">
                    <div className="col-md-3">
                      <label className="form-label">Ciudad</label>
                      <select
                        className="form-select"
                        value={trip.city}
                        onChange={(e) => handleCityChange(e, index)}
                      >
                        <option value="" disabled>
                          Selecciona una ciudad
                        </option>
                        <option value="roma">Roma</option>
                        <option value="florencia">Florencia</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="paris">París</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Atracción</label>
                      <select
                        className="form-select"
                        value={trip.attractions[0]}
                        onChange={(e) => handleAttractionChange(e, index)}
                      >
                        {selectedCity &&
                          attractions[selectedCity].map((attraction, i) => (
                            <option key={i} value={attraction}>
                              {attraction}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Adultos</label>
                      <input
                        type="number"
                        className="form-control"
                        value={trip.adults}
                        onChange={(e) => handleAdultsChange(e, index)}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Niños</label>
                      <input
                        type="number"
                        className="form-control"
                        value={trip.children}
                        onChange={(e) => handleChildrenChange(e, index)}
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemoveTrip(index)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
                <div className="col-md-12 mt-3">
                  <button type="button" className="btn btn-success me-2" onClick={handleAddTrip}>
                    Agregar más
                  </button>
                  <button type="button" className="btn btn-success" onClick={handleConfirm}>
                    Confirmar
                  </button>
                </div>
                <div className="col-md-12 mt-3">
                  <span className="total-price">Total adultos: ${totalAdults}</span>
                  <span className="total-price">Total niños: ${totalChildren}</span>
                  <span className="total-price">Total general: ${totalAdults + totalChildren}</span>
                </div>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
};

export default ShoppingCart;
